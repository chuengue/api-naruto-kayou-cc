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
    userId:string
    cardId:string
}