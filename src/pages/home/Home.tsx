import * as React from "react";
import { Layout } from "antd";

class Home extends React.Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <Layout>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
    );
  }
}

export default Home;
