import { useLocation, useNavigate } from "react-router-dom";
import FilterButton from "../../components/common/button/FilterButton";
import { useEffect, useState } from "react";
import filters from "../../components/common/filters";
import styled from "styled-components"; 

const FilterContainer = styled.div`
    display: flex;
    padding-right: 130px;
    padding-left: 130px;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
`;

export default function Main(){
    const [modalOpen, selectedFilter] = useState(false); // 모달 상태

    function handleFilterClick() {
        selectedFiter = filter.name
        modalOpen = true
    }  

    return (
        <FilterContainer>
            {filters.map((filter) => (
                <FilterButton 
                    key={filter.name} 
                    buttonName={filter.name}
                    onClick={() => {handleFilterClick}} />
            ))}
        </FilterContainer>
    )
}