import React from 'react';
import styled from 'styled-components';
import Notification from 'components/Notification';
import Switch from 'components/Swith';
import Avatar from 'components/Avatar';

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 0;
  > * {
    margin: 20px;
  }
  *:first-child {
    margin-left: 0;
  }
  *:last-child {
    margin-right: 0;
  }
`;

const HeaderTitle = styled.div`
  flex: 1;
`;

export default function(props) {
  return (
    <Header>
      <HeaderTitle>
        <h2>{props.title || 'Header'}</h2>
      </HeaderTitle>
      <Switch text="Test Mode" />
      <Notification number="0" />
      <Avatar name="Oluwatobi Mayowa" />
    </Header>
  );
}
