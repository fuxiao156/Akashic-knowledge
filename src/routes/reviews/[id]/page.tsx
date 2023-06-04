import { ItemDetail } from '@/component/review/ItemDetail';
import {useParams} from "@modern-js/runtime/router"
export default function Detail() {
  let {id} = useParams();
  if(!id){
    id = "17";
  }
  return (
    <ItemDetail
      resource={{
        data: { content: '' },
        id: parseInt(id),
        title: '1234',
        type: 'article',
      }}
    />
  );
  // return <div></div>;
}
