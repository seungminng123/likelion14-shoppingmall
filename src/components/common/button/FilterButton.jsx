import { useState } from "react";
import styled from "styled-components";
import IconUrl from "../../../assets/icons/vector_icon.png";

const StyledFilterButton = styled.div`
    display: flex;
    padding: 8px 10px 11px 10px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 20px;
    background: #F2F2F2;
    white-space: nowrap; //줄바꿈 금지
    font-size: 13px;
`;
const VactorIcon = styled.img`
    width: 10px;
    height: 5px;
`;

const FilterButton = ({buttonName, onClick}) => {
    return(
        <StyledFilterButton onClick={onClick}>
            {buttonName}
            <VactorIcon src={IconUrl} alt="vector icon" />
        </StyledFilterButton>
    )
}

export default FilterButton;