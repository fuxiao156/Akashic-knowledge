import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { ResourceList } from '@/component/resourceList/List';
import { IResource } from '@/domain/entity/resource.interface';
import { wordPressCMS } from '@/services/cms/wp';
import {Select} from "@arco-design/web-react";

export default function Home() {
  const [mediaList, setMediaList] = useState<IResource<any>[]>([]);

  const throttledSearch = throttle((searchString: string) => {
    wordPressCMS.fetchAll(searchString).then(res => setMediaList(res));
  }, 1000);

  useEffect(() => throttledSearch(''), []);

  return (

      <ResourceList resources={mediaList} />

  );
}
