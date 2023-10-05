import { AnimationStyles, Badge } from './Cart.styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CartBadge = ({ count }) => {
  return (
    // Apply animation styles to the duplicated components
    <AnimationStyles>
      <TransitionGroup>
        {/* Duplicate the component */}
        <CSSTransition unmountOnExit className="count" classNames="count" key={count} timeout={{ enter: 400, exit: 400 }}>
          <Badge>{count}</Badge>
        </CSSTransition>
      </TransitionGroup>
    </AnimationStyles>
  );
};

export default CartBadge;
