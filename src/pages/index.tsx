import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import MediaList from '@/component/MediaList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [mediaList, setMediaList] = useState<any[]>([]);

  useEffect(()=>{
    fetch('./api/cms/wp/media')
      .then(media => media.json())
      .then(media => setMediaList(media));
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MediaList mediaItems={mediaList} />
    </main>
  )
} 
