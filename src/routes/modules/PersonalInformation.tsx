// 右上方的个人信息部分
import { Avatar, Space } from '@arco-design/web-react';
import { Divider, Typography } from '@arco-design/web-react';

const { Text } = Typography;

const person = {
  name: '夏铎恺',
  college: '计算机学院',
  class: '软件工程2206班',
};

const PersonalInformation = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '0',
        top: '0',
        bottom: '86%',
      }}
    >
      <div style={{ marginTop: '25px', textAlign: 'right' }}>
        <div className="divider-demo">
          <Text>
            <span style={{ fontSize: '15px' }}>学生实名字段</span>
          </Text>
          <Divider type="vertical" />
          <Text>
            <span style={{ fontSize: '15px' }}>{person.name}</span>
          </Text>
          <Divider type="vertical" />
          <Text>
            <span style={{ fontSize: '15px' }}>{person.college}</span>
          </Text>
          <Divider type="vertical" />
          <Text>
            <span style={{ fontSize: '15px' }}>{person.class}</span>
          </Text>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div className="divider-demo">
            <Text>
              <a
                href={'about:blank'}
                style={{ textDecoration: 'none', fontSize: '15px' }}
              >
                切换账号
              </a>
            </Text>
            <Divider type="vertical" />
            <Text>
              <a
                href={'about:blank'}
                style={{ textDecoration: 'none', fontSize: '15px' }}
              >
                退出
              </a>
            </Text>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}
      >
        <Space size="large">
          <Avatar size={84}>
            <img alt="avatar" src="dist/static/image/avatar.png" />
          </Avatar>
        </Space>
      </div>
    </div>
  );
};

export default PersonalInformation;
