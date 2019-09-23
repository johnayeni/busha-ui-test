import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 0 10%;
`;

export default function(props) {
  return <Content>{props.children}</Content>;
}
