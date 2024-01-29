import React from "react";
import Axios from "axios";
import { Layout, Flex } from "antd";
import Chat from "./components/\bChat";
const { Header, Footer, Sider, Content } = Layout;

const fetch = async () => {
  const url = "http://localhost:8000";
  try {
    const response = await Axios.get(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
fetch();
const App = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout className="App">
      <Header className="header">Header</Header>
      <Layout>
        <Sider className="sidebar" width="25%">
          Sider
        </Sider>
        <Content className="body">
          <Chat />
        </Content>
      </Layout>
      <Footer className="footer">Footer</Footer>
    </Layout>
  </Flex>
);

export default App;
