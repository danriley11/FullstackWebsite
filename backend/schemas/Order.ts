import { text, integer, relationship, virtual } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import formatMoney from '../lib/formatMoney';

export const Order = list({
  fields: {
    // Creating custom fieldname
    orderTotal: virtual({
      graphQLReturnType: 'String',
      resolver(item) {
        console.log('item', item);
        return `Order total: ${formatMoney(item.total)}`;
      },
    }),

    // orderItemsQuantity: virtual({
    //   graphQLReturnType: 'Int',
    //   resolver: async (item, _, context) => {
    //     // Fetch order items associated with the order
    //     const orderItems = await context.lists.OrderItem.findMany({
    //       where: { order: { id: item.id } },
    //       resolveFields: 'quantity',
    //     });

    //     // Calculate the total quantity of order items
    //     const totalQuantity = orderItems.reduce((acc, orderItem) => acc + orderItem.quantity, 0);
    //     return totalQuantity;
    //   },
    // }),

    // Schema fields and their types
    total: integer(),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    user: relationship({ ref: 'User.orders' }),
    charge: text(),
  },
  ui: {
    listView: {
      initialColumns: ['user', 'orderTotal', 'items'],
    },
  },
});
