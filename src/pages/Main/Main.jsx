import { useLocation, useNavigate } from "react-router-dom";
import FilterButton from "../../components/common/button/FilterButton";
import { useEffect, useState } from "react";
import filters from "../../components/common/filters";
import styled from "styled-components"; 
import Modal from "../../components/common/modal/Modal"
import IconUrl from "../../assets/icons/vector_icon.png";

const FilterContainer = styled.div`
    display: flex;
    padding-right: 130px;
    padding-left: 130px;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
`;
const TextBox = styled.div`
    display: flex;
    flex-direction: column; // 텍스트를 세로로 배치
    padding: 30px 33px 48px 35px;
`;
const Options = styled.div`
    flex-wrap: wrap;
    display: flex; 
    gap: 10px 15px;
    margin-top: 20px;
    width: 240px;
`;
const VactorIcon = styled.img`
    width: 10px;
    height: 5px;
`;


export default function Main(){
    const [modalOpen, setModalOpen] = useState(false); // 모달 상태
    const [selectedFilter, setSelectedFilter] = useState(null); // 선택된 필터 상태

    function handleFilterClick(filterName) {
        setSelectedFilter(filterName);
        setModalOpen(true);
    }  
    function onClose(){
        setModalOpen(false);
        setSelectedFilter(null);
    }

    return (
        <FilterContainer>
            {filters.map((filter) => (
                <FilterButton 
                    key={filter.name} 
                    buttonName={filter.name}
                    icon={<VactorIcon src={IconUrl} alt="vector icon" />}
                    onClick={() => {handleFilterClick(filter.name)}} />
            ))}
            {modalOpen == true && (
                <Modal onClose={onClose}>
                    <TextBox>
                        <h3>{selectedFilter}</h3>
                            <Options> 
                                {filters.map((filter) => {
                                    if(filter.name === selectedFilter){
                                        return filter.options.map((option) => (                                       
                                            <FilterButton 
                                                key={option}
                                                buttonName={option}
                                            />
                                        ));
                                    }
                                })}
                            </Options>
                    </TextBox>
                </Modal>
            )}

        </FilterContainer>
    )
}