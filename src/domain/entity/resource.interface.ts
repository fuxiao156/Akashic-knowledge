export interface IResource<DataType extends { type: string }> {
  id: number;
  title: any;
  content?: any;
  type: DataType['type'];
  data: Omit<DataType, 'type'>;
}
