import { useState } from "react";
import styled from "styled-components";
import IconUrl from "../../../assets/icons/icon.png"
import IconUrl2 from "../../../assets/icons/check_icon.png"

const Wrapper = styled.div`
    position: relative;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    color: #6c6c6c;
    font-size: 13px;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 25px;
    left: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    overflow: hidden;
    min-width : 130px;
`;
const Icon = styled.img`
    width: 10px;
    height: 11px;
    margin-left: 8px; 
`;


const Option = styled.div`
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
      background: #f2f2f2;
    }
`;

function SortDropdown({ onChangeSort }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("기본 정렬순");

  function handleSelect(value) {
    setSelected(value);     
    setOpen(false);         
    onChangeSort(value);    
  }

  return (
    <Wrapper>
      <Button onClick={() => setOpen(!open)}>
        {selected}
        <Icon src={IconUrl} alt="dropdown icon" />
      </Button>
      {open == true && (
        <Dropdown>
          <Option onClick={() => handleSelect("기본 정렬순")}>
            기본 정렬순 
            {selected === "기본 정렬순" && <Icon src={IconUrl2} alt="dropdown icon" />}
          </Option>
          <Option onClick={() => handleSelect("평점 높은순")}>
            평점 높은순
            {selected === "평점 높은순" && <Icon src={IconUrl2} alt="dropdown icon" />}
          </Option>
          <Option onClick={() => handleSelect("리뷰 많은순")}>
            리뷰 많은순
            {selected === "리뷰 많은수" && <Icon src={IconUrl2} alt="dropdown icon" />}
          </Option>
        </Dropdown>
      )}
    </Wrapper>
  );
}
export default  SortDropdown;