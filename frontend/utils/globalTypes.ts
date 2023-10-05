export type Query = {
  query: {
    id: string;
  };
};

export type Cart = {
  cart: [
    {
      id: string;
      product: {
        id: string;
        name: string;
        description: string;
        price: number;
        photo: {
          image: {
            publicUrlTransformed: string;
          };
        };
      };
      quantity: number;
    },
  ];
};
