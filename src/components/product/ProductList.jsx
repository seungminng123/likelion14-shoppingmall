import ProductCard from "./ProductCard";
import styled from "styled-components";



const ProductGrid = styled.div` 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 28px;
  row-gap: 48px;
`;

function ProductList({products}){
    
    return(
        <ProductGrid >
            {products.map((product) => (
                <ProductCard 
                    key={product.id}
                    itemId={product.id} 
                    imageUrl={product.image}
                    name={product.name} 
                    price={product.price} 
                    reviewCount={product.reviewCount}
                />
            ))}
        </ProductGrid>
    )
} 
export default ProductList;