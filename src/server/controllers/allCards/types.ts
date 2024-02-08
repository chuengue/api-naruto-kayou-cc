export interface IGetAllCardsQueryProps {
    page?: number;
    limit?: number;
    name?: string;
    code?: string;
    rarity?: string;
    box?: string;
}
export interface IGetByIdCardsParamProps {
    cardId?: string;
}
export interface DeleteCardParamProps {
    cardId: string;
}
