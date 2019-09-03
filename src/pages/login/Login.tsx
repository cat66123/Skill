import * as React from "react";
import { Input, Button } from "antd";

import { LoginWrapper, ContentWrapper } from "./style";

class Login extends React.Component {
  render() {
    return (
      <LoginWrapper>
        <ContentWrapper>
          <div className="login-logo">
            <span>Skill</span>
          </div>
          <div className="login-top">
            <div className="login-input">
              <Input size="large" placeholder="请输入账号" />
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

export default Login;
