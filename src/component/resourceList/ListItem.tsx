import { TArticle } from '@/domain/entity/content/article.type';
import { TFile } from '@/domain/entity/content/file.type';
import { TMedia } from '@/domain/entity/content/media.type';
import { IResource } from '@/domain/entity/resource.interface';
import {
  isArticleResource,
  isFileResource,
  isMediaResource,
} from '@/utils/resource.guard';

const FileItem = (props: { resource: IResource<TFile> }) => {
  const { resource } = props;
  return (
    <a href={resource.data.url} download="">
      download
    </a>
  );
};

const MediaItem = (props: { resource: IResource<TMedia> }) => {
  const { resource } = props;
  return (
    <a href={resource.data.src} download="">
      download
    </a>
  );
};

const ArticleItem = (props: { resource: IResource<TArticle> }) => {
  const { resource } = props;
  return (
    // eslint-disable-next-line react/no-danger
    <article dangerouslySetInnerHTML={{ __html: resource.data.content }} />
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

const ResourceTypeLabel = (props: {
  type: IResource<TFile | TMedia | TArticle>['type'];
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
    default:
      return <span className="bg-red-500 text-white p-1 rounded">unknown</span>;
  }
};

export const ResourceListItem = (props: {
  resource: IResource<TFile | TMedia | TArticle>;
}) => {
  const { resource } = props;
  return (
    <div className="p-5 rounded-sm">
      <div className="whitespace-nowrap">
        <h1 className="text-2xl font-bold m-5 inline-block">
          {resource.title}
        </h1>
        <ResourceTypeLabel type={resource.type} />
      </div>
      <div className="p-5">
        <ResourceSwitch resource={resource} />
      </div>
    </div>
  );
};
