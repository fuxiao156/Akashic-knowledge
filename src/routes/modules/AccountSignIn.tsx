// 登陆界面：通过账号密码登录

import { Button, Checkbox, Form, Input, Message } from '@arco-design/web-react';
import { IconUnlock, IconUser } from '@arco-design/web-react/icon';
import { useEffect, useRef } from 'react';

const FormItem = Form.Item;

const accountSignIn = () => {
  const formRef = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // @ts-expect-error
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

  return (
    <>
      <Form autoComplete="off" ref={formRef}>
        <FormItem field="学号/工号" rules={[{ required: true }]}>
          <Input
            placeholder="请输入学号/工号"
            prefix={<IconUser />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="密码" rules={[{ required: true }]}>
          <Input
            placeholder="请输入密码"
            prefix={<IconUnlock />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="七天免登录" style={{ textAlign: 'left' }}>
          <Checkbox>七天免登录</Checkbox>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            style={{
              fontSize: '20px',
              height: '50px',
              width: '125%',
              borderRadius: '5px',
            }}
            onClick={async () => {
              if (formRef.current) {
                try {
                  await formRef.current.validate();
                  Message.info('校验通过，提交成功！');
                } catch (_) {
                  console.log(formRef.current.getFieldsError());
                  Message.error('校验失败，请检查字段！');
                }
              }
            }}
          >
            登 录
          </Button>
        </FormItem>
      </Form>

      <div className="accountWrapper">
        <div className="box">
          <a href="about:blank" style={{ textDecoration: 'none' }}>
            <div className="item1">忘记密码</div>
          </a>
          <a href="about:blank" style={{ textDecoration: 'none' }}>
            <div className="item1">账号申诉</div>
          </a>
        </div>
        <div className="box">
          <a href="about:blank" style={{ textDecoration: 'none' }}>
            <div className="item2">账号激活</div>
          </a>
          <a href="about:blank" style={{ textDecoration: 'none' }}>
            <div className="item2">账号申请</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default accountSignIn;
