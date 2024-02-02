export interface ICollection {
    id: string;
    userId: string;
    name?: string;
    description?: string;
    isPublicPhoneNumber?: boolean;
    isPublic?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
