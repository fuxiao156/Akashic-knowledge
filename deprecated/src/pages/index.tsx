import { useEffect, useState } from 'react';
import { wordPressCMS } from '@/services/cms/wp';
import { ResourceList } from '@/component/resourceList/List';
import { IResource } from '@/domain/entity/resource.interface';
import { throttle } from "lodash";

export default function Home() {

  const [mediaList, setMediaList] = useState<IResource<any>[]>([]);
  const [searchString, setSearchString] = useState<string>('');

  const throttledSearch = throttle((searchString: string) => {
    wordPressCMS.fetchAll(searchString)
      .then(res => setMediaList(res));
  }, 1000);

  useEffect(()=>throttledSearch(searchString), [searchString]);

  return (
    <main className="min-h-screen pt-32 flex flex-col items-start">
      <div className='w-full top-0 p-5 fixed flex items-center gap-5 backdrop-blur-lg shadow-lg'>
        <h1 className='text-4xl font-bold'>Akashic</h1>
        <input className='w-96 h-10 p-2 border-2 shadow-inner outline-none rounded-lg hover:scale-105 focus:scale-105 focus:bg-slate-100 transition-all' value={searchString} onChange={e => setSearchString(e.target.value)}/>
      </div>
      <ResourceList resources={mediaList} />
    </main>
  )
} 
