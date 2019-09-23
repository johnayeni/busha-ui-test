import React from 'react';
import { Layout, SideBar, Content, Header, Card, Table, Button, Padded, Center } from 'components';

function renderTableContent() {
  return (
    <Table>
      <thead>
        <tr className="alt">
          <td>Reference</td>
          <td>Status</td>
          <td>Amount</td>
        </tr>
      </thead>
    </Table>
  );
}

function TransfersPage() {
  return (
    <Layout>
      <SideBar />
      <Content>
        <Header title="Transfers" />
        <Card>
          <Padded>
            <Button icon="arrow-down-white" iconRight floatRight>
              New Transfer
            </Button>
          </Padded>
          {renderTableContent()}
          <Center>
            <h3 className="light">You haven't made any transfers yet</h3>
            <p
              className="light"
              style={{
                fontSize: 16,
              }}
            >
              Your transfers will be displayed here
            </p>
          </Center>
        </Card>
      </Content>
    </Layout>
  );
}

export default TransfersPage;
