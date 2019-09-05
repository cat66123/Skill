import * as React from "react";
import { Layout } from "antd";
import Header from "../../common/header/Header";
import { ContentWrapper, ContentItem } from "./style";
import { connect } from "react-redux";
import { getList } from "./store/action";

class Home extends React.Component {
  getListArea() {
    const { list } = this.props;
    if (list.size === 0) {
      return null;
    }
    const jsList = list.toJS();
    let rlt = jsList.map(val => {
      return (
        <ContentItem key={val}>
          <span className="item-text">{val}</span>
        </ContentItem>
      );
    });
    return <div className="content-box">{rlt}</div>;
  }

  componentDidMount() {
    this.props.getInitList();
  }

  render() {
    const { Footer, Sider, Content } = Layout;
    return (
      <Layout>
        <Header />
        <ContentWrapper>
          <Content className="home-content">{this.getListArea()}</Content>
        </ContentWrapper>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  list: state.getIn(["home", "list"])
});

const mapDispatchToProps = dispatch => ({
  getInitList() {
    dispatch(getList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
