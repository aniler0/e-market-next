import { ProductsDataModel } from '@models/products-data.model';

import products from '../../json/data.json';

class ExtractFilterPropertiesUtil {
    private static getBrands() {
        let brands: string[] = [];
        products.map((product: ProductsDataModel) => {
            brands.includes(product.brand.name)
                ? null
                : brands.push(product.brand.name);
        });
        return brands;
    }
    private static getSellers() {
        let sellers: string[] = [];
        products.map((product: ProductsDataModel) =>
            product.topOffers.map((offer) => {
                sellers.includes(offer.merchant.name)
                    ? null
                    : sellers.push(offer.merchant.name);
            }),
        );
        return sellers;
    }
    static getFilterProperties() {
        return {
            brands: this.getBrands(),
            sellers: this.getSellers(),
        };
    }
}
export default ExtractFilterPropertiesUtil;
