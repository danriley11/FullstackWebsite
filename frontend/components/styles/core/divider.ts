import styled from 'styled-components';
import { darkCandySolid } from './colours';

type DividerProps = {
  height?: number;
  colour?: string;
};
export const Divider = styled.div<DividerProps>`
  height: ${({ height = '10px' }) => height};
  background: ${({ colour = darkCandySolid }) => colour};
`;
