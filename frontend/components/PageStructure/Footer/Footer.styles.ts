import styled from 'styled-components';
import { black, lightGreySolid, white } from '../../styles/core/colours';

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${black};
  padding: 16px;

  ol {
    margin: 0;
    padding: 0;
    list-style: none;

    & > li {
      p {
        color: ${lightGreySolid};
      }
    }
  }

  & p:last-child {
    color: ${lightGreySolid};
  }
`;

export const FooterColumnContainer = styled.div`
  display: flex;
  gap: 64px;

  &:last-child {
    flex: 3;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  color: ${white};
`;
