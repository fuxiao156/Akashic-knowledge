import { IResource } from '@/domain/entity/resource.interface';
import { TArticle } from '@/domain/entity/content/article.type';
import { TFile } from '@/domain/entity/content/file.type';
import { TMedia } from '@/domain/entity/content/media.type';

export const isArticleResource = (
  resource: IResource<any>,
): resource is IResource<TArticle> => {
  return resource.type === 'article';
};

export const isFileResource = (
  resource: IResource<any>,
): resource is IResource<TFile> => {
  return resource.type === 'file';
};

export const isMediaResource = (
  resource: IResource<any>,
): resource is IResource<TMedia> => {
  return resource.type === 'media';
};
