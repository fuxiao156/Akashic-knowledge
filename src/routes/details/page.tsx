import { ItemDetail } from '@/component/review/ItemDetail';

export default function Detail() {
  return (
    <ItemDetail
      resource={{
        data: { content: '' },
        id: 17,
        title: '1234',
        type: 'article',
      }}
    />
  );
  // return <div></div>;
}
