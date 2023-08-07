// 登录界面

import '../style/SignInPage.css';
import { Select } from '@arco-design/web-react';
import SignIn from '@/routes/modules/SignIn';

const { Option } = Select;
const options = ['简体中文', 'English'];
const SignInPage = () => {
  return (
    <div className={'background'}>
      <Select
        placeholder="选择语言"
        defaultValue="简体中文"
        className={'language'}
      >
        {options.map(option => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <div className={'signInCard'}>
        <div className={'signInCardImage'}>
          <div className={'logo'} />
        </div>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
