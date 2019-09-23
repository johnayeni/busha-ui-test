import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/Colors';

const Avatar = styled.header`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const AvatarCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 100%;
  background-color: #d8d8d8;
`;

export default function(props) {
  return (
    <Avatar>
      <AvatarCircle>{props.name.charAt(0).toUpperCase()}</AvatarCircle>
      <span>{props.name}</span>
    </Avatar>
  );
}
