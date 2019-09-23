import React from 'react';
import styled, { css } from 'styled-components';
import Colors from 'constants/Colors';
import Icon from 'components/Icon';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.green};
  color: ${Colors.white}
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  width: 132px;
  height: 35px;
  font-family: 'Booster Bold';
  font-size: 14px;
  box-sizing: border-box;
  ${(props) =>
    props.inverted &&
    css`
      background-color: rgba(103, 196, 98, 0.12);
      color: ${Colors.green};
      box-shadow: 0 1px 2px 0 rgba(15, 15, 15, 0.1), inset 0 0 0 1px rgba(103, 196, 98, 0.3);
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.floatRight &&
    css`
      float: right;
    `}
  * {
    margin: 10px;
  }
`;

export default function(props) {
  return (
    <Button {...props}>
      {props.icon && props.iconLeft && <Icon icon={props.icon} size={12} />}
      {props.children}
      {props.icon && props.iconRight && <Icon icon={props.icon} size={12} />}
    </Button>
  );
}
