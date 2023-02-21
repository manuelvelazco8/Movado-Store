import "./style.css";
import Item from "../Item/Item"
import { Link } from "react-router-dom";

const ItemList = ({ productList }) => {
  console.log(productList)


  return (
  <div className="itemlist">
    {productList.map((product) => (
        <div key={product.id}>
          <Link to={`/item/${product.id}`}>
          <Item product={product}/>
          </Link>
        </div>
      ))
    }
  </div>
  );
};

export default ItemList;
