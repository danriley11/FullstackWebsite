import styled, { css } from 'styled-components';
import { black, darkGrey, darkCandySolid, lightGrey, white, lightCoralSolid } from '../core/colours';
import { rem } from '../core/sizing';
import { fontFamily, fontSize16, fontWeightSemiBold } from '../core/typography';

type ButtonLinkProps = {
  fontWeight?: number;
  disabled?: boolean;
};
export const ButtonLink = styled.a<ButtonLinkProps>`
  color: ${darkCandySolid};
  background-color: ${lightCoralSolid};
  border-radius: ${rem(24)};
  padding: ${rem(12)};
  font-size: ${fontSize16};
  font-family: ${fontFamily};
  font-weight: ${({ fontWeight = fontWeightSemiBold }) => fontWeight};

  &:hover {
    cursor: pointer;
    color: ${white};
    background: ${darkCandySolid};
  }

  &:active {
    background: ${darkCandySolid};
  }

  ${({ disabled = false }) =>
    disabled &&
    css`
      color: ${darkGrey};
      background-color: ${lightGrey};
      border: 1px solid ${black};
      pointer-events: none;
      text-decoration: line-through;
    `}
`;
