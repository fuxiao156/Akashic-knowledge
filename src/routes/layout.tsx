import { Outlet } from '@modern-js/runtime/router';
import { Tooltip } from '@arco-design/web-react';
import { IconPlus } from '@arco-design/web-react/icon';
import './index.css';

export default function Layout() {
  return (
    <>
      <div
        className="w-full top-0 p-5 flex items-center gap-5 backdrop-blur-lg shadow-lg"
        style={{ marginBottom: 10 }}
      >
        <div className="text-4xl font-bold">Akashic</div>
        <Tooltip content="上传资源">
          <IconPlus />
        </Tooltip>
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </>
  );
}
