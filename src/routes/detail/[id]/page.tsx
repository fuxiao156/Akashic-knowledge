import {useState, useEffect} from "react";
import {useParams} from "@modern-js/runtime/router"
import {wordPressCMS} from "@/services/cms/wp";
import {IResource} from "@/domain/entity/resource.interface";
import {TFile} from "@/domain/entity/content/file.type";
import {TMedia} from "@/domain/entity/content/media.type";
import {TArticle} from "@/domain/entity/content/article.type";
import {TPost} from  "@/domain/entity/content/post.type"
export default function Management(){
  const [post,setPost] = useState<IResource<any>>();
  const [page,setPage] = useState(10);
  const {id} = useParams();

  // @ts-ignore

  useEffect(()=>{
    // @ts-ignore
    wordPressCMS.fetch(id).then(value => {setPost(value)});
  },[]);
  useEffect(()=>{
    console.log(post);
  },[post]);
  const ResourceTypeLabel = (props: {
    type: IResource<TFile | TMedia | TArticle | TPost>['type'];
  }) => {
    const { type } = props;

    switch (type) {
      case 'file':
        return <span className="bg-green-500 text-white p-1 rounded">文档</span>;
      case 'media':
        return (
          <span className="bg-green-500 text-white p-1 rounded">多媒体</span>
        );
      case 'article':
        return <span className="bg-green-500 text-white p-1 rounded">文章</span>;
      case 'post':
        return <span className="bg-green-500 text-white p-1 rounded">贴文</span>;
      default:
        return <span className="bg-red-500 text-white p-1 rounded">unknown</span>;
    }
  };

  return post?(
    <>
        <div className="w-full p-5 rounded-sm">
          <div className="w-full whitespace-nowrap inline-block">
            <h1 className="text-2xl font-bold m-5 inline-block">
              {post.title.rendered}
            </h1>
            <ResourceTypeLabel type={post.type} />
            <div style={{position:"absolute",right:50,display:"inline-block"}}>待审核</div>
          </div>
          <div className="w-full">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div>
          </div>
          <div className="w-full">

          </div>
        </div>
    </>
  ): <div>文章不存在，请检查id值</div>
}
