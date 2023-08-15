// 登陆界面：登录信息输入模块

import { Divider, Tabs, Typography } from '@arco-design/web-react';
import QRCodeSignIn from '@/routes/modules/QRCodeSignIn';
import AccountSignIn from '@/routes/modules/AccountSignIn';
import VerificationCodeSignIn from '@/routes/modules/VerificationCodeSignIn';

import '../style/SignInPage.css';

const { TabPane } = Tabs;

const SignIn = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: '73%',
          top: '8%',
          right: '3%',
          bottom: '5%',
          textAlign: 'center',
        }}
      >
        <Tabs defaultActiveTab="accountSignIn" size={'large'} type={'text'}>
          <TabPane key="accountSignIn" title="账号登陆">
            <Typography.Paragraph
              style={{
                textAlign: 'center',
                marginTop: 20,
              }}
            />
            <Divider />
            <AccountSignIn />
          </TabPane>

          <TabPane key="verificationCodeSignIn" title="验证码登录">
            <Typography.Paragraph
              style={{
                textAlign: 'center',
                marginTop: 20,
              }}
            />
            <Divider />
            <VerificationCodeSignIn />
          </TabPane>

          <TabPane key="QRCodeSignIn" title="扫码登录">
            <Typography.Paragraph
              style={{
                textAlign: 'center',
                marginTop: 20,
              }}
            />
            <Divider />
            <QRCodeSignIn />
          </TabPane>
        </Tabs>
      </div>
      <div id="otherSignIn">
        <span id="otherSignInText">其他登录方式</span>
        <a href="about:blank">
          <div id="qq" />
        </a>
        <a href="about:blank">
          <div id="wechat" />
        </a>
      </div>
    </>
  );
};

export default SignIn;
