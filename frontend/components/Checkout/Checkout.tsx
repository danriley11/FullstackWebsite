import { loadStripe } from '@stripe/stripe-js';
import { CheckoutButton, CheckoutFormStyles } from './Checkout.styles';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import { useMutation } from '@apollo/client';
import { CHECKOUT_MUTATION } from './Checkout.graphql';
import { useRouter } from 'next/router';
import { useCart } from '../../utils/cartState';
import { CURRENT_USER_QUERY } from '../../utils/useUser';

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CheckoutForm = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { closeCart } = useCart();

  const [checkout, { error: checkoutMutationError }] = useMutation(CHECKOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  //   1. Stop form from submitting and activate loader
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // 2. Start page transition
    nProgress.start();

    // 3. Create the payment method via stripe (Token returns on success)
    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);

    // 4. Handle any errors from stripe
    if (paymentError) {
      setError(paymentError);
      nProgress.done();
      return; // Stops checkout from continuing
    }

    // 5. Send success token to keystone server via custom mutation
    const order = await checkout({
      variables: {
        token: paymentMethod.id,
      },
    });
    console.log('Order complete!');
    console.log(order);

    // 6. Change the page to view the order
    router.push({
      pathname: `/order/${order.data.checkout.id}`,
    });

    // 7. close the cart
    closeCart();

    // 8. turn off loader
    setLoading(false);
    nProgress.done();
  };

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      {checkoutMutationError && <p>{checkoutMutationError.message}</p>}
      {/* Can edit display formatting for CardElement in Cart.styles.ts > footer */}
      {/* TODO: highlight input when :active */}
      <CardElement />
      <CheckoutButton>Checkout now</CheckoutButton>
    </CheckoutFormStyles>
  );
};

const Checkout = () => {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
