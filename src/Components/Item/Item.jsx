import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
  return (
    <div className="item">
      {props.id ? (
        <Link
          to={`/product/${props.id}`}
          state={{
            product: {
              id: props.id,
              image: props.image,
              name: props.name,
              new_price: props.new_price,
              old_price: props.old_price,
            },
          }}
        >
          <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
        </Link>
      ) : (
        <img src={props.image} alt={props.name} />
      )}
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="items-price-new">${props.new_price}</div>
        <div className="items-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
