import FilterButton from "../../components/common/button/FilterButton";
import filters from "../../data/filters";
import styled from "styled-components"; 
import Modal from "../../components/common/modal/Modal"
import IconUrl from "../../assets/icons/vector_icon.png";
import IconUrl2 from "../../assets/icons/icon.png";
import ProductList from "../../components/product/ProductList";
import SortDropdown from "../../components/common/sort/SortDropdown";
import { useEffect, useState } from "react";
import { getShops } from "../../api/shop";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    flex-direction: column;
`;

const FilterButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 60px;
`;

const ProductListContainer = styled.div`
    width: 100%;
`;
const Sort = styled.div`
    display : flex;
    justify-content: flex-end;
    width: 100%;
    gap: 5px;
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
const Icon = styled.img`
    width: 10px;
    height: 5px;
`;
const Icon2 = styled.img`
    width: 10px;
    height: 11px;
`;

function Main(){
    const [modalOpen, setModalOpen] = useState(false); // 모달 상태
    const [selectedFilter, setSelectedFilter] = useState(null); // 선택된 필터 상태

    const[sortType, setSortType] = useState("기본 정렬순");

    const [items, setItems] = useState([]);

    useEffect(() => {
    if (modalOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto";
    };
    }, [modalOpen]);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const shoes = await getShops("shoes");
                const clothes  = await getShops ("clothes");
                
                if (!cancelled) {
                setItems([
                    ...(Array.isArray(clothes) ? clothes : []),
                    ...(Array.isArray(shoes) ? shoes : []),
                ]);
            }
            } catch {
                if(!cancelled) { setItems([]); 
                }
            }
        })();
        return () => { cancelled = true; };
    }, []);

    function handleFilterClick(filterName) {
        setSelectedFilter(filterName);
        setModalOpen(true);
    }  
    function onClose(){
        setModalOpen(false);
        setSelectedFilter(null);
    }
    function getSortedProducts(){
        if(sortType == "평점 높은순");
    }

    return (
        <Container>
            <FilterButtonContainer>
            {filters.map((filter) => (
                <FilterButton 
                    key={filter.name} 
                    buttonName={filter.name}
                    icon={<VactorIcon src={IconUrl} alt="vector icon" />}
                    onClick={() => {handleFilterClick(filter.name)}} />
            ))}
            </FilterButtonContainer>
            <Sort>
                <SortDropdown onChangeSort={setSortType} />
            </Sort>
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
            <ProductListContainer>
                <ProductList 
                    items={items}
                />
            </ProductListContainer>
        </Container> 
    )
}
export default Main;