export interface IGetAllCardsBodyProps {
    name?: string;
    code?: string;
    rarity?: string[];
    box?: string[];
    searchQuery?: string;
}
export interface IGetAllCardsQueryProps {
    page?: number;
    limit?: number;
}
export interface IGetByIdCardsParamProps {
    cardId?: string;
}
export interface DeleteCardParamProps {
    cardId: string;
}
