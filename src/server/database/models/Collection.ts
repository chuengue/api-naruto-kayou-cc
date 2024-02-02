export interface ICollection {
    id: string;
    userId: string;
    name?: string;
    description?: string;
    showPhoneNumber?: boolean;
    isPublic?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
