import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import iconurl from "../../assets/icons/edit_icon.png"
import { getShopDetail, updateShop } from "../../api/shop";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 80px 130px;
`;
const IconContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; // 아이콘과 이미지를 겹치게 하기 위해 position: relative 추가(부모 요소에 상대 위치 설정)
`;
const Icon = styled.img`
    position: absolute; // 자식 요소
    width: 49px;
    height: 55px;
`;
const Image = styled.img`
    width: 459px;
    height: 602px;
`;
const Divider = styled.div`
    width: 2px;
    height: 830px;
    background-color: #eee;
`;
const TextContainer = styled.div`
    width: 305px;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    padding: 27px 33px;
`; 
const Form = styled.form`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 35px;
    padding: 8px 10px;
    border: none;
    border-radius: 10px;
    background: #F2F2F2;
    white-space: nowrap;
    font-size: 13px;
    cursor: pointer;
`;
const ButtonBox = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 14px;
    flex-wrap: wrap;
`;
const Label = styled.label`
    font-size: 13px;
    color: #777;
`;

const Input = styled.input`
    height: 32px;
    padding: 0 10px;
    border: 1px solid #999;
    border-radius: 5px;
`;

export default function ProductEdit(){
    const navigate = useNavigate();
    const {type, id } = useParams();
    const [product, setProduct] = useState(null);

    const [image, setImage] = useState("");
    const [name, setName] = useState(product?.name || "");
    const [rating, setRating] = useState(product?.rating || "");
    const [reviews, setReviews] = useState(product?.reviews || "");
    const [price, setPrice] = useState(product?.price || "");
    const [soldout, setSoldout] = useState(product?.soldout || false);
    const [size, setSize] = useState(product?.size || "");
    const [editType, setEditType] = useState(product?.type || "");
    const [gender, setGender] = useState(product?.gender || "");
    const [color, setColor] = useState(product?.color || "");
    
    const fileInputRef = useRef(null);

    useEffect(() => {
        let cancelled = false;

        (async () => {
            try {
                const res = await getShopDetail(type, id);

                if (!cancelled) {
                    setProduct(res);
                    setImage(res.image || "");
                    setName(res.name || "");
                    setRating(res.rating || "");
                    setReviews(res.reviews || "");
                    setPrice(res.price || "");
                    setSoldout(res.soldout || false);
                    setSize(res.size || "");
                    setEditType(res.type || "");
                    setGender(res.gender || "");
                    setColor(res.color || "");
                }
            } catch (error) {
                console.error(error);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [type, id]);

    function handleImageClick() {
        fileInputRef.current.click();
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
    }

    async function handleSubmit(e){
        e.preventDefault();

        const updatedProduct = {
            id: product.id,
            image: image,
            name: name,
            rating: Number(rating),
            reviews: Number(reviews),
            price: Number(price),
            soldout : soldout,
            size: size,
            type: editType,
            gender: gender,
            color: color,
        };
        try{
            await updateShop(editType, id, updatedProduct);
            alert("상품이 수정되었습니다.");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("상품 수정 실패");
        }
    }
    if (!product) {
        return <div>상품 정보를 불러오는 중입니다.</div>;
    }
    return(
        <Container>
            <IconContainer onClick={handleImageClick}>
                <Icon src={iconurl} alt="edit Icon" />
                <Image src={image} alt={name} />
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                />
            </IconContainer>

                <Divider />

            <TextContainer>
                <h2>상품 정보 수정</h2>
                <Form onSubmit={handleSubmit}>
                    <Label>상품명</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                    <Label>평점</Label>
                    <Input value={rating} onChange={(e) => setRating(e.target.value)} />
                    <Label>리뷰 수</Label> 
                    <Input value={reviews} onChange={(e) => setReviews(e.target.value)} />
                    <Label>가격</Label>
                    <Input value={price} onChange={(e) => setPrice(e.target.value)} />
                    <Label>사이즈</Label>
                    <Input value={size} onChange={(e) => setSize(e.target.value)} />

                    <Label>종류</Label>
                    <ButtonBox>
                        {[ { label: "shoes", value: "shoes" }, { label: "clothes", value: "clothes" },].map((item) => (
                            <Button key={item.value} type="button" onClick={() => setEditType(item.value)} 
                                style={{ backgroundColor: editType === item.value ? "#d9d9d9" : "#F2F2F2",}}>
                                {item.label}
                            </Button>
                        ))}
                    </ButtonBox>

                    <Label>성별</Label>
                    <ButtonBox>
                        {["male", "female", "unisex"].map((item) => (
                            <Button key={item} type="button" onClick={() => setGender(item)}
                                style={{backgroundColor: gender === item ? "#d9d9d9" : "#F2F2F2",}}>
                                {item}
                            </Button>
                        ))}
                    </ButtonBox>

                    <Label>색상</Label>
                    <ButtonBox>
                        {[
                            "red",
                            "pink",
                            "blue",
                            "gray",
                            "black",
                            "denim",
                            "multi",
                            "rainbow",
                            "holographic",
                        ].map((item) => (
                            <Button key={item} type="button" onClick={() => setColor(item)}
                                style={{backgroundColor: color === item ? "#d9d9d9" : "#F2F2F2",}}>
                                {item}
                            </Button>
                        ))}
                    </ButtonBox>
                    <Button type="submit">상품 수정 완료</Button>

                </Form>
            </TextContainer>
        </Container>
    )
}