import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
// import { ReviewsList } from '@/component/review/ReviewsList';
import { FastNewResource } from '@/component/review/FastNewResource';
import { IResource } from '@/domain/entity/resource.interface';
import { wordPressCMS } from '@/services/cms/wp';
import { SearchWithFilter } from '@/component/review/SearchWithFilter';
import { ReviewsListItemCard } from '@/component/review/ReviewsListItemCard';

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
      {/* <ReviewsList resources={mediaList} /> */}
      <div className="h-24"></div>
      <div className="grid grid-cols-3 gap-4 gap-y-16">
        {mediaList.map(resource => (
          <ReviewsListItemCard key={resource.id} resource={resource} />
        ))}
      </div>
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
