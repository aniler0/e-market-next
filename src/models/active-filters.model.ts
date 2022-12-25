export interface FilterStateType {
    brands: string[];
    sellers: string[];
    price: PriceModel;
}
export interface PriceModel {
    min?: number;
    max?: number;
}
