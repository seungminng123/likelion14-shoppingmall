import ProductCard from "./ProductCard";
import styled from "styled-components";



const ProductGrid = styled.div` 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 28px;
  row-gap: 48px;
`;

function ProductList({items}){
    
    return(
        <ProductGrid >
            {items.map((item) => (
                <ProductCard 
                    key={item.id}
                    itemId={item.id} 
                    imageUrl={item.image}
                    name={item.name} 
                    price={`${Number(item.price).toLocaleString()}원`} 
                    reviewCount={item.reviewCount}
                />
            ))}
        </ProductGrid>
    )
} 
export default ProductList;