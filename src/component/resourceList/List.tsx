import { ResourceListItem } from './ListItem';
import { IResource } from '@/domain/entity/resource.interface';

export const ResourceList = (props: { resources: IResource<any>[] }) => {
  const { resources } = props;
  return (
    <div className="ml-10 flex flex-col">
      {resources.map(resource => (
        <ResourceListItem key={resource.id} resource={resource} />
      ))}
    </div>
  );
};
