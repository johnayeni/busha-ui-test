import React from 'react';
import styled, { css } from 'styled-components';

const Padded = styled.div`
  ${(props) =>
    css`
      padding: ${props.padding || 20}px;
      display: flow-root;
    `}
`;

export default function(props) {
  return <Padded>{props.children}</Padded>;
}
