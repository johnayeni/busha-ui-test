import React from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon';
import Colors from 'constants/Colors';

const Notification = styled.div`
  position: relative;
  &:after {
    position: absolute;
    right: -10px;
    top: -10px;
    min-width: 10px;
    min-height: 10px;
    line-height: 10px;
    padding: 5px;
    color: #fff;
    background-color: ${Colors.red};
    font-size: 10px;
    border-radius: 20px;
    border: none;
    ${(props) =>
      css`
        content: ${props.number};
      `}
  }
`;

export default function(props) {
  return (
    <Notification {...props}>
      <Icon icon="bell" large />
    </Notification>
  );
}
