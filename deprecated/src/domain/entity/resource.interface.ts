export interface IResource<DataType extends { type: string }> {
    id: number;
    title: string;
    type: DataType['type'];
    data: Omit<DataType, 'type'>;
}