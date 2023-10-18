import styled from 'styled-components';
import { ButtonLink } from '../styles/buttons/buttons';
import { darkCandySolid, lightCoralSolid, white } from '../styles/core/colours';
import { rem } from '../styles/core/sizing';
import { fontSize16, fontFamily, fontWeightSemiBold, fontSize20, fontSize24 } from '../styles/core/typography';

export const ProductStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  gap: 2rem;
  max-width: var(--maxWidth);

  img {
    height: 400px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h3,
  h4,
  p {
    margin: 8px;
  }

  div {
    margin: 10px 0;
  }

  button {
    color: white;
    background-color: ${lightCoralSolid};
    border: 1px solid ${darkCandySolid};
    border-radius: ${rem(24)};
    padding: ${rem(12)};
    font-size: ${fontSize24};
    font-family: ${fontFamily};
    font-weight: ${({ fontWeight = fontWeightSemiBold }) => fontWeight};

    &:hover {
      cursor: pointer;
      color: ${white};
      background: ${darkCandySolid};
    }

    margin: 12px 0;
    width: 100%;
  }
`;
