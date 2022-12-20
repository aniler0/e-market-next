import styled from 'styled-components';

export const HomeWrapper = styled.div``;
export const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 3333;
    background: #fff;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ededed;
`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 1200px;
    padding: 1rem 0;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
export const Brand = styled.h1`
    font-size: 2rem;
    margin-right: 20px;
    font-weight: 400;
    color: #008ecc;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin-right: 0;
    }
`;
export const MainSection = styled.section`
    display: flex;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2em 0;
`;
export const Products = styled.main`
    display: flex;
    flex-wrap: wrap;
`;
export const ProductFilters = styled.aside`
    position: sticky;
    top: 15%;
    height: 100%;
    min-height: 700px;
    background: #fff;
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    border: 1px solid #eee;
`;
