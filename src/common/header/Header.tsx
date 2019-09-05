import * as React from "react";
import { Layout, Menu, Input, Button } from "antd";
import { HeaderWrapper, MenuWrapper, SearchWrapper } from "./style";
import { CSSTransition } from "react-transition-group";

type Props = {};

class Header extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  handleFocus() {
    this.setState(prevState => {
      return {
        focused: true
      };
    });
  }
  handleBlur() {
    this.setState(prevState => {
      return {
        focused: false
      };
    });
  }

  render() {
    const { Header } = Layout;
    const { focused } = this.state;
    console.log(focused);
    return (
      <HeaderWrapper>
        <Header className="header-content">
          <span className="logo">Skill</span>
          <MenuWrapper>
            <Menu className="menu-content" mode="horizontal">
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">SkillDoc</Menu.Item>
              <Menu.Item key="3">Mine</Menu.Item>
            </Menu>
          </MenuWrapper>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <Input
                placeholder="输入搜索内容"
                className="searchInput"
                suffix={<span className="iconfont">&#xe629;</span>}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
              />
            </CSSTransition>
            <CSSTransition in={focused} timeout={200} classNames="slideButton">
              <Button type="primary" className="searchButton">
                搜索
              </Button>
            </CSSTransition>
          </SearchWrapper>
        </Header>
      </HeaderWrapper>
    );
  }
}

export default Header;
