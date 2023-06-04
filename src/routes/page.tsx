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
    <main className="min-h-screen pt-32 flex flex-col items-start">
      <div className="w-full top-0 p-5 fixed flex items-center gap-5 backdrop-blur-lg shadow-lg">
        <h1 className="text-4xl font-bold">Akashic</h1>
      </div>
      <ResourceList resources={mediaList} />
    </main>
  );
}
