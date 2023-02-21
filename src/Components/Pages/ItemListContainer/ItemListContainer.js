import { products } from "../../Data/products";
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);
  const getProducts = new Promise((res, rej) => {
    if(categoryId){
      const filteredproducts = products.filter(
        (item) => item.category === categoryId
      );
       setTimeout(() => {
       res(filteredproducts);
       }, 1000);
  } else { 
    setTimeout(() => {
      res(products);
      }, 1000);
  }
});

useEffect(() => {
  getProducts
  .then((response) => {
    setProductList(response);
  })
  .catch((error) => {console.log(error)
  });
}, [categoryId]);

return (
  <div>
    <ItemList productList={productList} />
  </div>
 );
};

export default ItemListContainer;