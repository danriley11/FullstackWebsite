import styled from 'styled-components';
import { darkCandy, darkCandySolid, lightCoralSolid } from '../styles/core/colours';

export const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

export const CheckoutButton = styled.button`
  background: ${lightCoralSolid};
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 24px;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  transition: all 0.5s;

  &:hover {
    background: ${darkCandy};
    color: white;
  }

  &:active {
    background: ${darkCandySolid};
    color: white;
  }

  &[disabled] {
    opacity: 0.5;
  }
`;
