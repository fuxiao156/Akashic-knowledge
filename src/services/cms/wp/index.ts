import WP from 'wpapi';
import { Service } from '@/services/service.class';
import { TArticle } from '@/domain/entity/content/article.type';
import { TFile } from '@/domain/entity/content/file.type';
import { TMedia } from '@/domain/entity/content/media.type';
import { IResource } from '@/domain/entity/resource.interface';

class WordPressCMS extends Service<WP, TArticle | TFile | TMedia> {
  constructor() {
    const wp = new WP({ endpoint: `api/?rest_route=/` });
    super(wp);
  }

  async fetchAll(
    searchString = '',
  ): Promise<IResource<TArticle | TFile | TMedia>[]> {
    const posts = (await this.app.posts().search(searchString)).map(
      (post: any): IResource<TArticle> => ({
        type: 'article',
        id: post.id,
        title: post.title.rendered,
        data: {
          content: post.content.rendered,
        },
      }),
    );
    const media = (await this.app.media().search(searchString)).map(
      (media: any): IResource<TMedia | TFile> => {
        if (media.media_type === 'file') {
          const file: IResource<TFile> = {
            type: 'file',
            id: media.id,
            title: media.title.rendered,
            data: {
              url: media.source_url,
            },
          };
          return file;
        }
        return {
          type: 'media',
          id: media.id,
          title: media.title.rendered,
          data: {
            src: media.source_url,
          },
        };
      },
    );

    return [...posts, ...media];
  }

  fetch(_id: number): Promise<IResource<TArticle | TFile | TMedia>> {
    throw new Error('Method not implemented.');
    // this.app.posts().perPage()
  }

  async create(
    _resource: IResource<TArticle | TFile | TMedia>,
  ): Promise<IResource<TArticle | TFile | TMedia>> {
    const post = await this.app.posts().create({
      title: _resource.title,
      type: _resource.type,
    });

    return post;
    // throw new Error('Method not implemented.');
  }

  update(
    _resource: IResource<TArticle | TFile | TMedia>,
  ): Promise<IResource<TArticle | TFile | TMedia>> {
    throw new Error('Method not implemented.');
  }

  delete(_id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export const wordPressCMS = new WordPressCMS();
