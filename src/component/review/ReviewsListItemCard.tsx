import { useState } from 'react';
import { Typography, Drawer } from '@arco-design/web-react';
import { IconFile, IconFilePdf } from '@arco-design/web-react/icon';
import { ItemDetail } from './ItemDetail';
import { TArticle } from '@/domain/entity/content/article.type';
import { TFile } from '@/domain/entity/content/file.type';
import { TMedia } from '@/domain/entity/content/media.type';
import { IResource } from '@/domain/entity/resource.interface';
import {
  isArticleResource,
  isFileResource,
  isMediaResource,
} from '@/utils/resource.guard';

const { Title, Paragraph } = Typography;

const FileItem = (props: { resource: IResource<TFile> }) => {
  const { resource } = props;
  return (
    <div className="w-full max-w-xl px-5 py-4 mx-auto text-gray-800 bg-white rounded-lg shadow-lg hover:-translate-y-6 duration-300">
      <div className="w-full pt-1 mx-auto -mt-16 text-center">
        <IconFile className="relative block mx-auto object-cover rounded-full h-20 w-20 text-sky-600" />
      </div>
      <div className="w-full">
        <div className="mb-6 text-center">
          <p className="text-xl font-medium text-gray-800 dark:text-white">
            {resource.title}
          </p>
        </div>
        <div className="w-full mb-4 dark:bg-white">
          <div className="flex items-center justify-start text-xs text-gray-400 dark:text-black grid gap-4 grid-cols-3">
            <p className="flex flex-col p-2 bg-pink-100 rounded-lg">
              <span className="font-bold text-black dark:text-indigo-500 text-center">
                计算机学院
              </span>
            </p>
            <p className="flex flex-col p-2 bg-pink-100 rounded-lg">
              <span className="font-bold text-black dark:text-indigo-500 text-center">
                软件工程
              </span>
            </p>
            <p className="flex flex-col p-2 bg-pink-100 rounded-lg">
              <span className="font-bold text-black dark:text-indigo-500 text-center">
                编译原理
              </span>
            </p>
          </div>
        </div>
        <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          审查
        </button>
      </div>
    </div>
  );
};

// 暂时用不到
const MediaItem = (props: { resource: IResource<TMedia> }) => {
  const { resource } = props;
  return (
    <div>
      <IconFilePdf />
      <div>
        <Title heading={1}>{resource.title}</Title>
        <Paragraph>文章摘要或标签</Paragraph>
      </div>
    </div>
  );
};

const ArticleItem = (props: { resource: IResource<TArticle> }) => {
  const { resource } = props;
  return (
    <div className="w-full max-w-xl px-5 py-4 mx-auto text-gray-800 bg-white rounded-lg shadow-lg hover:-translate-y-6 duration-300">
      <div className="w-full pt-1 mx-auto -mt-16 text-center">
        <IconFilePdf className="relative block mx-auto object-cover rounded-full h-20 w-20 text-sky-600" />
      </div>
      <div className="w-full">
        <div className="mb-6 text-center">
          <p className="text-xl font-medium text-gray-800 dark:text-white">
            {resource.title}
          </p>
        </div>
        <div className="w-full mb-4 dark:bg-white">
          <div className="flex items-center justify-start text-xs text-gray-400 dark:text-black grid gap-4 grid-cols-3">
            <p className="flex flex-col p-2 bg-pink-100 rounded-lg">
              <span className="font-bold text-black dark:text-indigo-500 text-center">
                计算机学院
              </span>
            </p>
            <p className="flex flex-col p-2 bg-pink-100 rounded-lg">
              <span className="font-bold text-black dark:text-indigo-500 text-center">
                软件工程
              </span>
            </p>
            <p className="flex flex-col p-2 bg-pink-100 rounded-lg">
              <span className="font-bold text-black dark:text-indigo-500 text-center">
                编译原理
              </span>
            </p>
          </div>
        </div>
        <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          审查
        </button>
      </div>
    </div>
  );
};

const ResourceSwitch = (props: {
  resource: IResource<TFile | TMedia | TArticle>;
}) => {
  const { resource } = props;
  if (isArticleResource(resource)) {
    return <ArticleItem resource={resource} />;
  }
  if (isFileResource(resource)) {
    return <FileItem resource={resource} />;
  }
  if (isMediaResource(resource)) {
    return <MediaItem resource={resource} />;
  }
  throw new Error('unknown resource type');
};

export const ReviewsListItemCard = (props: {
  resource: IResource<TFile | TMedia | TArticle>;
}) => {
  const { resource } = props;
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Drawer
        width={332}
        height="100%"
        visible={visible}
        placement="bottom"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <ItemDetail resource={resource} />
      </Drawer>
      <ResourceSwitch resource={resource} />
    </div>
  );
};
