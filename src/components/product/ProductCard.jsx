import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const ProductImage = styled.img`
    width : 181px;
    height: 237px;
    align-self: stretch;
    aspect-ratio: 42/55;
`;
const ProductName = styled.div`
    color: #333;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ProductPrice = styled.div`
    color: #000;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: #000;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const Review = styled.div`
    color: #A7A7A7;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

function ProductCard({itemId, imageUrl, name, price, reviewCount}){
    const navigate = useNavigate();

    return (
        <CardContainer onClick={() => navigate(`/item/${itemId}`)}>
            <ProductImage src={imageUrl} alt={name} />
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}원</ProductPrice>
            <Review>{reviewCount}개의 리뷰</Review>
        </CardContainer>
    )
}
export default ProductCard;