import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { ReviewsList } from '@/component/review/ReviewsList';
import { FastNewResource } from '@/component/review/FastNewResource';
import { IResource } from '@/domain/entity/resource.interface';
import { wordPressCMS } from '@/services/cms/wp';
import { SearchWithFilter } from '@/component/review/SearchWithFilter';

type TypeOfResource = Pick<IResource<any>, 'type'>['type'];

export default function Review() {
  const [mediaList, setMediaList] = useState<IResource<any>[]>([]);
  const [searchString, setSearchString] = useState<string>('');
  const [typeOfResources, setTypeOfResources] = useState<
    Pick<IResource<any>, 'type'>['type']
  >(['file', 'article', 'media']);

  const throttledSearch = throttle(
    (searchString: string, typeOfResources: TypeOfResource) => {
      wordPressCMS.fetchAll(searchString).then(res => {
        setMediaList(res.filter(item => typeOfResources.includes(item.type)));
        window.console.log(res);
      });
    },
    1000,
  );

  useEffect(
    () => throttledSearch(searchString, typeOfResources),
    [searchString, typeOfResources],
  );

  const getConditionsFromFilter = (
    searchString: string,
    typeOfResources: TypeOfResource[],
  ) => {
    setSearchString(searchString);
    if (typeOfResources.length !== 0) {
      setTypeOfResources(typeOfResources);
    }
  };

  const reset = () => {
    setSearchString('');
    setTypeOfResources(['file', 'article', 'media']);
  };

  return (
    <main>
      <ReviewsList resources={mediaList} />
      {/* <div className="h-12"></div> */}
      {/* <ReviewsListItemCard
        resource={{
          data: { content: '' },
          id: 17,
          title: '1234',
          type: 'article',
        }}
      /> */}
      <div>
        <FastNewResource />
        <SearchWithFilter
          getConditions={getConditionsFromFilter}
          reset={reset}
        />
      </div>
    </main>
  );
}
