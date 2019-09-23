import React from 'react';
import { Layout, SideBar, Content, Header, Card, Table, Icon } from 'components';

function renderTableContent() {
  return (
    <Table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Pending</td>
          <td>Available</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="bold">
            <Icon icon="Bitcoin" large size={30} /> Bitcoin
          </td>
          <td>
            <p>10.32382838 BTC</p>
            <span>2,000,000 NGN</span>
          </td>
          <td>
            <p>10.32382838 BTC</p>
            <span>2,000,000 NGN</span>
          </td>
        </tr>
        <tr>
          <td className="bold">
            <Icon icon="ethereum" large size={30} /> Ethereum
          </td>
          <td>
            <p>10.32382838 BTC</p>
            <span>2,000,000 NGN</span>
          </td>
          <td>
            <p>10.32382838 BTC</p>
            <span>2,000,000 NGN</span>
          </td>
        </tr>
        <tr>
          <td className="bold">
            <Icon icon="busha" large size={30} /> Naira
          </td>
          <td>
            <p>NGN 800,000</p>
          </td>
          <td>
            <p>NGN 2,000,000</p>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

function BalancesPage() {
  return (
    <Layout>
      <SideBar />
      <Content>
        <Header title="Balances" />
        <Card>{renderTableContent()}</Card>
      </Content>
    </Layout>
  );
}

export default BalancesPage;
