import { useQuery } from '@apollo/client';
import DisplayError from '../components/ErrorMessage';
import ErrorMessage from '../components/ErrorMessage';
import { ALL_USERS_ORDERS_QUERY } from './order/order.graphql';
import { OrderItemStyles, OrderUl } from './order/order.styles';
import Link from 'next/link';
import FormatMoney from '../utils/formatMoney';
import useUser from '../utils/useUser';
import { IsLoggedOut } from '../utils/isLoggedOut';
import Head from 'next/head';

const OrdersPage = () => {
  const user = useUser();

  const { data, loading, error } = useQuery(ALL_USERS_ORDERS_QUERY, {
    variables: {
      id: user?.id,
    },
  });

  const allOrders = data?.allOrders;

  const countItemsInAnOrder = (order) => {
    return order.items.reduce((sumTotal, item) => sumTotal + item.quantity, 0);
  };

  IsLoggedOut();
  if (loading) return <h3>Loading...</h3>;
  //   TODO: what's the difference between DisplayError & ErrorMessage?
  if (error) return <DisplayError error={error} />;
  //   for permissions
  if (error) return <ErrorMessage error={error} />;
  return (
    <div>
      <Head>
        <title>Bespoke Designs | Orders</title>
      </Head>
      <h2>You have {allOrders.length} orders!</h2>

      <OrderUl>
        {allOrders.map((order) => (
          <Link href={`/order/${order.id}`}>
            <OrderItemStyles key={order.id}>
              <div>
                <div className="order-meta">
                  <p>
                    {countItemsInAnOrder(order)} Item{countItemsInAnOrder(order) === 1 ? '' : 's'}
                  </p>

                  <p>
                    {order.items.length} Product{order.items.length === 1 ? '' : 's'}
                  </p>

                  <p>Total: {FormatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <img key={item.id} src={item.photo?.image?.publicUrlTransformed} alt={item.name} />
                  ))}
                </div>
              </div>
            </OrderItemStyles>
          </Link>
        ))}
      </OrderUl>
    </div>
  );
};

export default OrdersPage;
