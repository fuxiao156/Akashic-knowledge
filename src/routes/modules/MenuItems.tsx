// 左端的导航栏

import { Menu } from '@arco-design/web-react';
import '../style/MainPage.css';
import {
  IconEdit,
  IconFile,
  IconQuestion,
  IconSettings,
  IconStar,
  IconUserGroup,
} from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;

const MenuItems = () => {
  return (
    <Menu
      style={{ fontSize: '17px' }}
      defaultOpenKeys={['integrals']}
      defaultSelectedKeys={['integrals']}
    >
      <MenuItem key="integrals">
        <IconStar />
        查看积分
      </MenuItem>
      <MenuItem key="friends">
        <IconUserGroup />
        查看好友/群组
      </MenuItem>
      <MenuItem key="resources">
        <IconFile />
        查看资源
      </MenuItem>
      <MenuItem key="personalInformation">
        <IconEdit />
        查看/编辑个人信息
      </MenuItem>
      <MenuItem key="assistance">
        <IconQuestion />
        客服与帮助
      </MenuItem>
      <MenuItem key="settings">
        <IconSettings />
        设置
      </MenuItem>
    </Menu>
  );
};

export default MenuItems;
