import styled from 'styled-components';
import { darkCandySolid, lightCoral } from '../../components/styles/core/colours';

export const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: var(--bs);
  padding: 2rem;
  border: 10px solid ${lightCoral};

  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 1px solid ${lightCoral};
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
  .order-item {
    border-bottom: 1px solid ${lightCoral};
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const OrderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

export const OrderItemStyles = styled.li`
  box-shadow: var(--bs);
  list-style: none;
  padding: 2rem;
  /* border: 1px solid whitesmoke; */
  border: 10px solid ${lightCoral};
  border-radius: 24px;

  &:hover {
    cursor: pointer;
    background: ${lightCoral};
  }

  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;

    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
      border-radius: 24px;
    }
  }

  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    display: grid;
    grid-gap: 1rem;
    text-align: center;

    & > * {
      margin: 0;
      background: ${lightCoral};
      padding: 1rem 0;
      border-radius: 24px;
    }

    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;
