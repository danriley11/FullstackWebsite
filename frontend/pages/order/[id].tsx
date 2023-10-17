import { useQuery } from '@apollo/client';
import { SINGLE_ORDER_QUERY } from './order.graphql';
import DisplayError from '../../components/ErrorMessage';
import ErrorMessage from '../../components/ErrorMessage';
import OrderStyles from './order.styles';
import FormatMoney from '../../utils/formatMoney';
import { Query } from '../../utils/globalTypes';
import useUser from '../../utils/useUser';
import { IsLoggedOut } from '../../utils/isLoggedOut';

const SingleOrderPage = ({ query }: Query) => {
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id: query.id,
    },
  });
  const order = data?.order;

  IsLoggedOut();
  if (loading) return <h3>Loading...</h3>;
  //   whats the difference?
  if (error) return <DisplayError error={error} />;
  //   for permissions
  if (error) return <ErrorMessage error={error} />;
  return (
    <OrderStyles>
      <title>Bespoke designs by Sharon - {order.id}</title>
      <p>
        <span>Order ID:</span>
        <span>{order.id}</span>
      </p>

      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>

      <p>
        <span>Order total:</span>
        <span>{FormatMoney(order.total)}</span>
      </p>

      <p>
        <span>Item count:</span>
        <span>{order.items.length}</span>
      </p>

      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.photo.image.publicUrlTransformed} alt={item.title} />
            <div>
              <h2>{item.name}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {FormatMoney(item.price)}</p>
              <p>Sub Total: {FormatMoney(item.price * item.quantity)}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
};

export default SingleOrderPage;
