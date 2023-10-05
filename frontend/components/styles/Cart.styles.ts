import styled from 'styled-components';
import { darkCandySolid } from './core/colours';

const CartStyles = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;

  ${(props) => props.open && `transform: translateX(0);`};

  header {
    border-bottom: 5px solid black;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  footer {
    border-top: 10px double black;
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;

    p {
      margin: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }

  button {
    &:hover {
      cursor: pointer;
      color: red;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const CartItemStyles = styled.li`
  padding: 1rem, 0;
  border-bottom: 1px solid lightgrey;
  display: grid;
  grid-template-columns: auto 1fr auto;

  img {
    margin-right: 1rem;
    width: 100px;
  }

  h3,
  p {
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
`;

export const Badge = styled.div`
  background: ${darkCandySolid};
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 2rem;
  min-width: 3rem;
  margin-left: 1rem;

  /* To prevent the circle and value reshaping */
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;

export const AnimationStyles = styled.span`
  position: relative;

  .count {
    display: block;
    position: relative;
    transition: transform 0.4s;
    backface-visibility: hidden;
  }

  .count-enter {
    transform: scale(4) rotateX(0.5turn);
  }

  .count-enter-active {
    transform: rotateX(0);
    background: green;
  }

  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }

  .count-exit-active {
    background: pink;
    transform: scale(4) rotateX(0.5turn);
  }
`;

export default CartStyles;
