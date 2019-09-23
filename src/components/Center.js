import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  * {
    margin: 0;
  }
`;

export default function(props) {
  return <Center>{props.children}</Center>;
}
