import styled from 'styled-components';
import { darkCandy, darkCandySolid, lightCoral, lightCoralSolid } from '../styles/core/colours';

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export const Item = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  border-radius: 24px;
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;

  :hover {
    background: ${lightCoral};
    border-bottom: 1px solid ${darkCandySolid};
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 24px;
  }

  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }

  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGray);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export const PriceTag = styled.span`
  background: ${lightCoralSolid};
  /* transform: rotate(3deg); */
  border-radius: 0 24px 0 0;
  color: white;
  font-weight: 600;
  padding: 8px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  right: 0;
`;

export const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  /* transform: skew(-5deg) rotate(-1deg); */
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

  a {
    border-radius: 24px;
    background: ${darkCandy};
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;
