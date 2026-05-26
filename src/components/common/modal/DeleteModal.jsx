import styled from "styled-components";

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.10);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background-color: white;
    position: absolute;
    width: 296px;
    height: 136px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const Text = styled.div`
    color: #333;
    font-size: 16px;
    font-weight: 600;
`;

const ButtonBox = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    width: 90px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background-color: #f2f2f2;
    cursor: pointer;
    &:hover {
        background-color: #D0D0D0;
    }
`;

export default function DeleteModal({onClose, onDelete}) {
    return (
            <ModalBackground>
                <ModalContainer>
                    <Text>상품을 삭제하시겠습니까?</Text>
                    <ButtonBox>
                      <Button onClick={onDelete}>확인</Button>
                        <Button onClick={onClose}>취소</Button>
                    </ButtonBox>
                </ModalContainer>
            </ModalBackground>        
    )
}