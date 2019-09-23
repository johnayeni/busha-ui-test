import React from 'react';
import styled, { css } from 'styled-components';

const images = require.context('assets/images', false, /.svg$/);

const Icon = styled.img`
  width: 18px;
  height: 18px;
  ${(props) =>
    props.large &&
    css`
      width: 25px;
      height: 25px;
    `}
  ${(props) =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
    `}
`;

export default function(props) {
  return <Icon src={images(`./${props.icon || 'house'}.svg`)} alt={props.alt} {...props} />;
}
