import styled from 'styled-components';

export const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
