import { Product } from '@components';
import { ProductsDataModel, RootProductsModel } from '@models/products-data.model';
import { getProductsData } from '@utils';

export default function Home({ products }: RootProductsModel) {
    return (
        <>
            {products.map((product, key) => (
                <Product key={key} {...product} />
            ))}
        </>
    );
}

export async function getServerSideProps() {
    const products = await getProductsData();

    return {
        props: { products },
    };
}
