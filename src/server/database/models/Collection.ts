export interface ICollection {
    id: string;
    userId: string;
    title?: string;
    description?: string;
    isPublicPhoneNumber?: boolean;
    collectionType: number;
    isPublic?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
