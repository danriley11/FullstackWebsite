import styled from 'styled-components';
import { lightCoral, lightCoralSolid } from '../styles/core/colours';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid lightGray;
  border-radius: 10px;

  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid lightGray;

    &:last-child {
      border-right: 0;

      &:hover {
        background: ${lightCoral};
        border-radius: 0 10px 10px 0;
        text-decoration: none;
      }

      &:active {
        background: ${lightCoralSolid};
      }
    }

    &:first-child {
      &:hover {
        background: ${lightCoral};
        border-radius: 10px 0 0 10px;
        text-decoration: none;
      }

      &:active {
        background: ${lightCoralSolid};
      }
    }
  }

  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
