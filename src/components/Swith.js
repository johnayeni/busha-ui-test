import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/Colors';

const Switch = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchToggle = styled.label`
  position: relative;
  width: 50px;
  height: 18px;
  border: none;
  margin-right: 10px;
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 28px;
    &:before {
      position: absolute;
      border: 1px solid #ccc
      content: '';
      height: 22px;
      width: 22px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 28px;
      transform: translateY(-3px);
    }
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .slider {
      background-color: ${Colors.green};
    }

    &:focus + .slider {
      box-shadow: 0 0 1px ${Colors.green};
    }

    &:checked + .slider:before {
      -webkit-transform: translateX(26px) translateY(-3px);
      -ms-transform: translateX(26px) translateY(-3px);
      transform: translateX(26px) translateY(-3px);
      border: 1px solid ${Colors.green}
    }
  }
`;

const SwitchLabel = styled.span`
  font-family: 'Booster Bold';
  font-size: 0.8rem;
  font-weight: 900;
`;

export default function(props) {
  return (
    <Switch>
      <SwitchToggle>
        <input type="checkbox" />
        <span class="slider"></span>
      </SwitchToggle>
      <SwitchLabel>{props.text}</SwitchLabel>
    </Switch>
  );
}
