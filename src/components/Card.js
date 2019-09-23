import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/Colors';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.lightGrey};
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(15, 15, 15, 0.1), 0 0 0 1px rgba(15, 15, 15, 0.06);
  width: 100%;
  padding 0;
  min-height: 450px;
`;

export default function(props) {
  return <Card>{props.children}</Card>;
}
