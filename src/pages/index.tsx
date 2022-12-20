import { Filter, Product, Searchbar } from '@components';
import * as S from '@styles/home';
import { getProductsData } from '@utils';

export default function Home({ products }: any) {
    return (
        <S.HomeWrapper>
            <S.Header>
                <S.HeaderContainer>
                    <S.Brand>MegaMark</S.Brand>
                    <Searchbar />
                </S.HeaderContainer>
            </S.Header>
            <S.MainSection>
                <S.ProductFilters>
                    <Filter />
                    <Filter />
                    <Filter />
                </S.ProductFilters>
                <S.Products>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </S.Products>
            </S.MainSection>
        </S.HomeWrapper>
    );
}

export async function getServerSideProps() {
    const products = await getProductsData();

    return {
        props: { products },
    };
}
