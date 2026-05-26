import { useState } from "react";
import styled from "styled-components";

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
    min-width: 60px;
`;

const FilterButton = ({buttonName, onClick, icon}) => {
    return(
        <StyledFilterButton onClick={onClick}>
            {buttonName}
            {icon}
        </StyledFilterButton>
    )
}

export default FilterButton;