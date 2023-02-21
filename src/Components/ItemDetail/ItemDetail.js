


const ItemDetail = ({ detail }) => {
    console.log(detail);
  return ( <div  
    
    style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    flexDirection: 'column',
   }}
  >
    <img src={detail.image} alt={detail.name} width='500px'/>
    <h2>{detail.name}</h2>
    <h3>{detail.description}</h3>
    <h2>{detail.price}</h2>
    </div>
  );
};

export default ItemDetail;