import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/Colors';

const Layout = styled.div`
  display: grid;
  height: 100vh;
  margin: 0;
  padding: 0;
  grid-template-columns: 300px auto;
  grid-template-rows: 100%;
  color: ${Colors.black};
  background-color: ${Colors.cream};
`;

export default function(props) {
  return <Layout>{props.children}</Layout>;
}
