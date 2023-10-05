import styled from 'styled-components';

export const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid lightGray;
`;

export const DropDownItem = styled.div`
  border-bottom: 1px solid lightGray;
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  border-left: 10px solid ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};

  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};

  &:hover {
    cursor: pointer;
    background: lightgrey;
  }

  img {
    margin-right: 10px;
  }
`;
