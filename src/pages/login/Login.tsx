import * as React from "react";
import { Input, Button } from "antd";

import { LoginWrapper, ContentWrapper } from "./style";
import { changeUserName } from "./store/action";
import { connect } from "react-redux";

type Props = {};
class Login extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <LoginWrapper>
        <ContentWrapper>
          <div className="login-logo">
            <span>Skill</span>
          </div>
          <div className="login-top">
            <div className="login-input">
              <Input
                size="large"
                placeholder="请输入账号"
                value={this.props.userName}
                onChange={this.props.handleOnChange}
              />
            </div>
            <div className="login-input">
              <Input.Password size="large" placeholder="请输入密码" />
            </div>
          </div>
          <div className="login-bottom">
            <Button size="large" type="primary" block>
              登录
            </Button>
          </div>
        </ContentWrapper>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.getIn(["login", "userName"])
});

const mapDispatchToProps = dispatch => ({
  handleOnChange(e) {
    dispatch(changeUserName(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
