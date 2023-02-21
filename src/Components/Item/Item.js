import "./style.css";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img alt={product.name} src={product.image} width="250px"/>
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>
    </div>
  );
};

export default Item;