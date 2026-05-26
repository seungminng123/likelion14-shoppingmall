import styled from "styled-components";
import IconUrl from "../../../assets/icons/X_icon.png";

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.10);
`;

const ModalContainer = styled.div`
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    border-radius: 20px;
`;

const XIcon = styled.img`
    position: absolute;
    top: 30px;
    right: 33px;
`;

function Modal({onClose, children}) {

    function handleModalClose(){
        onClose();   
    }

    return (
        <ModalBackground onClick={handleModalClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <XIcon src={IconUrl} alt="Close" onClick={handleModalClose} />
                {children} 
            </ModalContainer>
        </ModalBackground>
    )
    
}

export default Modal;