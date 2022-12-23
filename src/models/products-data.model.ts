export interface Brand {
    name: string;
}

export interface Merchant {
    id: number;
    name: string;
    url: string;
    logo: string;
}

export interface TopOffer {
    id: number;
    price: number;
    merchant: Merchant;
}

export interface ProductsDataModel {
    id: number;
    title: string;
    merchantCount: number;
    brand: Brand;
    topOffers: TopOffer[];
    imageUrl: string;
}
export interface RootProductsModel {
    products: ProductsDataModel[];
}
