import { useState } from "react";
import styled from "styled-components";
import iconurl from "../../assets/icons/add_icon.png"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 80px 130px;
`;
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Icon = styled.img`
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

export default function ProductAdd(){
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState("");
    const [price, setPrice] = useState("");
    const [soldout, setSoldout] = useState(false); 
    const [size, setSize] = useState("");
    const [type, setType] = useState("");
    const [gender, setGender] = useState("");
    const [color, setColor] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            image: "",
            name: name,
            rating: Number(rating),
            reviews: Number(reviews),
            price: Number(price),
            soldout : false,
            size: size,
            type: type,
            gender: gender,
            color: color,
        };
        try{
            const response = await fetch(`http://localhost:3001/${type}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });
            if(!response.ok){
                throw new Error("상품 등록 실패");
            }
            alert("상품이 성공적으로 등록되었습니다.");
        } catch (error) {
            console.error("상품 등록 중 오류 발생:", error);
            alert("상품 등록 중 오류가 발생했습니다. 다시 시도해주세요.");
        }   
    }


    return(
        <Container>
            <IconContainer>
                <Icon src={iconurl} alt="Add Icon" />
            </IconContainer>

                <Divider />

            <TextContainer>
                <h2>상품 정보 등록</h2>
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
                        {[ 
                        { label: "shoes", value: "shoes" },
                        { label: "clothing", value: "shirt" },
                        ].map((item) => (
                            <Button
                                key={item.value}
                                type="button"
                                onClick={() => setType(item.value)}
                                style={{
                                    backgroundColor:
                                        type === item.value ? "#d9d9d9" : "#F2F2F2",
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </ButtonBox>

                    <Label>성별</Label>
                    <ButtonBox>
                        {["male", "female", "unisex"].map((item) => (
                            <Button
                                key={item}
                                type="button"
                                onClick={() => setGender(item)}
                                style={{
                                    backgroundColor:
                                        gender === item ? "#d9d9d9" : "#F2F2F2",
                                }}
                            >
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
                            <Button
                                key={item}
                                type="button"
                                onClick={() => setColor(item)}
                                style={{
                                    backgroundColor:
                                        color === item ? "#d9d9d9" : "#F2F2F2",
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </ButtonBox>
                    <Button type="submit">등록하기</Button>
                
                </Form>
            </TextContainer>
        </Container>
    )
}