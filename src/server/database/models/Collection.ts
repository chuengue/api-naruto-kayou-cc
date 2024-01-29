export interface ICollectionModel {
    id: string;
    userId: string;
    name: string;
    description: string;
    isPublic: boolean;
    createdAt?: string;
    updatedAt?: string;
}
