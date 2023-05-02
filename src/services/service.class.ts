import { IResource } from '@/domain/entity/resource.interface';

export abstract class Service<
  Application,
  ContentType extends { type: string },
> {
  protected readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  abstract fetch(id: number): Promise<IResource<ContentType>>;
  abstract fetchAll(search: string): Promise<IResource<ContentType>[]>;
  abstract create(
    resource: IResource<ContentType>,
  ): Promise<IResource<ContentType>>;
  abstract update(
    resource: IResource<ContentType>,
  ): Promise<IResource<ContentType>>;
  abstract delete(id: number): Promise<void>;
}
