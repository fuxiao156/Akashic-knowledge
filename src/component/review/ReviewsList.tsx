import { ReviewsListItem } from './ReviewsListItem';
import { IResource } from '@/domain/entity/resource.interface';

export const ReviewsList = (props: { resources: IResource<any>[] }) => {
  const { resources } = props;
  return (
    <div>
      {resources.map(resource => (
        <ReviewsListItem key={resource.id} resource={resource} />
      ))}
    </div>
  );
};
