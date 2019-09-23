import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Colors from 'constants/Colors';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-right: 1px solid ${Colors.lightGrey};
`;

const SideBarHeader = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-right: 10px;
  }
`;

const SideBarBusinessLogo = styled.div`
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 2px 5px 0 rgba(60, 66, 87, 0.1);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const SideBarLinks = styled.ul`
  flex: 1;
  list-style: none;
  padding: 0;
  font-size: 0.8rem;
`;

const SideBarLink = styled.li`
  padding: 15px 0;
  display: flex;
  align-items: center;
  color: #42526e;
  filter: brightness(0.2);
  * {
    margin-right: 10px;
  }
  ${(props) =>
    props.active &&
    css`
      font-family: 'Booster Bold';
      color: ${Colors.green};
      filter: brightness(1);
    `}
`;

export default function() {
  const activeLink = window.location.pathname;
  return (
    <SideBar>
      <SideBarHeader>
        <SideBarBusinessLogo>B</SideBarBusinessLogo>
        <h4>Business name</h4>
        <Icon icon="arrow-down" size={10} />
      </SideBarHeader>
      <SideBarLinks>
        <SideBarLink>
          <Icon icon="house" />
          <span>Dashboard</span>
        </SideBarLink>
        <Link to="/balances">
          <SideBarLink active={activeLink === '/balances'}>
            <Icon icon="wallet" />
            <span>Balances</span>
          </SideBarLink>
        </Link>
        <SideBarLink>
          <Icon icon="credit-card" />
          <span>Payments</span>
        </SideBarLink>
        <Link to="/transfers">
          <SideBarLink active={activeLink === '/transfers'}>
            <Icon icon="transfers" />
            <span>Transfers</span>
          </SideBarLink>
        </Link>
        <SideBarLink>
          <Icon icon="code" />
          <span>Developers</span>
        </SideBarLink>
        <SideBarLink>
          <Icon icon="settings" />
          <span>Settings</span>
        </SideBarLink>
      </SideBarLinks>
      <Button inverted fullWidth icon="plus-circle" iconLeft>
        Accept Payment
      </Button>
    </SideBar>
  );
}
