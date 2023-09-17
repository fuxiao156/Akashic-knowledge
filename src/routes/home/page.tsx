import { Helmet } from '@modern-js/runtime/head';
import { Button } from '@arco-design/web-react';
import './index.css';

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <div className="w-full h-full welcome-view-background">
        <article className="typewriter w-full h-full flex flex-col justify-center items-center p-2 welcome-view-layout">
          <h1 className="welcome-view-title text-center font-bold text-7xl md:text-9xl">
            Hello, World
          </h1>
          <div className="flex gap-5">
            <Button shape="round" className="w-24 h-12 bg-transparent">
              注册
            </Button>
            <Button shape="round" className="w-24 h-12">
              登入
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
