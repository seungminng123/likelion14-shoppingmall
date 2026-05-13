import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DeleteModal from "../../components/common/modal/DeleteModal";
import { getShopDetail } from "../../api/shop";

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
    display: flex;
    color: #949494;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 15px;
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
const Rating = styled.span`
    color: black;
`


export default function ProducDetail({}){
    const {id} = useParams();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const res = await getShopDetail("clothes",id);

                if (!cancelled) {
                    console.log(res);
                    setProduct(res);
                }
            } catch {
                if (!cancelled) {
                    setProduct(null);
                }
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [id]);

    if (!product) {
    return <div>상품을 불러오는 중입니다.</div>;
}

    return(
        <Container>
            <Imagecontainer>
                <Image src={product.image} alt={product.name} />
            </Imagecontainer>

                <Divider />

            <ProductDetailContainer>
                <Price>{product.price.toLocaleString()}원</Price>
                <Name>{product.name}</Name>
                <ReviewCount>
                    <Rating>★ {product.rating} </Rating>
                    리뷰 {product.reviews}
                </ReviewCount>
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