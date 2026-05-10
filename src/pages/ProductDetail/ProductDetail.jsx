import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import styled from "styled-components";
import DeleteModal from "../../components/common/modal/DeleteModal";

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
    padding: 80px 130px;
`;
const Image = styled.img`
    width: 459px;
    height: 602px;
    aspect-ratio: 61/80;
`;
const Imagecontainer = styled.div`
    width: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Price = styled.div`
    color: #000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 15px;
`;
const Name = styled.div`
    color: #333;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ReviewCount = styled.div`
    color: #949494;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ProductDetailContainer = styled.div`
    width: 320px;
    padding-top: 80px;
`;
const Divider = styled.div`
    width: 2px;
    height: 830px;
    background-color: #eee;
`;


export default function ProducDetail(){
    const {id} = useParams();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    {/* find() = 배열 메서드, 조건에 맞는 첫 번째 요소를 반환 */}
    const product = products.find((p) => p.id === Number(id)
    );
    {/* Number() 쓰는 이유 = useParams()는 문자열을 반환하므로 숫자로 변환해야 함 */}

    return(
        <Container>
            <Imagecontainer>
                <Image src={product.image} alt={product.name} />
            </Imagecontainer>

                <Divider />

            <ProductDetailContainer>
                <Price>{product.price.toLocaleString()}원</Price>
                <Name>{product.name}</Name>
                <ReviewCount>★ 리뷰 {product.reviewCount}</ReviewCount>
            </ProductDetailContainer>
             {isDeleteModalOpen && (
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onDelete={() => console.log("삭제")}
            />
         )}
        </Container>
    )
}