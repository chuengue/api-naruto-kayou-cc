export interface IFilterListCardProps {
    page: number;
    limit: number;
    code?: string;
    box?: string;
    name?: string;
    rarity?: string;
}
export interface IGetWishListProps extends IFilterListCardProps {
    userId: string;
}
export interface IAddItemProps {
    userId: string;
    cardId: string;
}
export interface IremoveItemProps extends IAddItemProps {}

export interface IGetCollectionsProps {
    userId?: string;
    page?: number;
    limit?: number;
}
export interface IDeleteCollectionProps {
    userId?: string;
    collectionId: string;
}
export interface IPublicCollectionsProps {
    title?: string;
    author?: string;
    page?: number;
    limit?: number;
}

export interface IAddItemCollection {
    userId: string;
    cardId: string;
    collectionId: string;
    quantity?: number;
}

export interface IRemoveItemCollection
    extends Omit<IAddItemCollection, 'quantity' | 'userId'> {}

export interface IGetAllCollectionItem extends IFilterListCardProps {
    collectionId: string;
}

export interface IModifyQuantityItemProps {
    collectionId: string;
    cardId: string;
    newQuantity: number;
}
