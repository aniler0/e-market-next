import { FilterStateType, PriceModel } from '@models/active-filters.model';

class ActiveFiltersUtil {
    static getActiveFilters() {
        return {
            brands: [],
            sellers: [],
            price: {},
        };
    }
    static addActiveFilter(
        option: string,
        value: string | PriceModel,
        activeFilters: FilterStateType,
    ) {
        switch (option) {
            case 'Brands':
                if (!activeFilters.brands.includes(value as string)) {
                    activeFilters.brands.push(value as string);
                } else {
                    activeFilters.brands = activeFilters.brands.filter(
                        (brand) => brand !== value,
                    );
                }
                break;
            case 'Sellers':
                if (!activeFilters.sellers.includes(value as string)) {
                    activeFilters.sellers.push(value as string);
                } else {
                    activeFilters.sellers = activeFilters.sellers.filter(
                        (seller) => seller !== value,
                    );
                }
                break;
            case 'Price':
                activeFilters.price = value as PriceModel;
                break;
            default:
                break;
        }
        return activeFilters;
    }
}

export default ActiveFiltersUtil;
