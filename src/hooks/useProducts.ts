import { IProduct } from "interfaces/product"

export const useProducts = async () => {
    try {
        const response = await fetch('http://localhost:1337/products', {
          headers: { "x-api-key": "1234" }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const products: IProduct[] = await response.json();
    
        return products;
      } catch (error) {
        console.error('Error fetching products:', error);
        return []
      }
}