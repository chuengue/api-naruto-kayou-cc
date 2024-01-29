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
