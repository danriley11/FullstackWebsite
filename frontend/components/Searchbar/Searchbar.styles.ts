import styled, { keyframes } from 'styled-components';
import { lightCoral } from '../styles/core/colours';

// TODO: Update searchbar stylings
const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

export const SearchStyles = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid ${lightCoral};
    font-size: 2rem;

    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;
