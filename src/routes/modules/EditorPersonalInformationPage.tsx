// 编辑个人信息界面

import { Button, Descriptions } from '@arco-design/web-react';

const person = {
  姓名: '夏铎恺',
  学院: '计算机学院',
  专业班级: '软件工程2206',
  学号: '8209220608',
};

const data = [];

Object.keys(person).forEach(key => {
  data.push({ label: key, value: person[key] });
});

const EditorPersonalInformationPage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '17%',
        right: '0',
        top: '18%',
        bottom: '0',
      }}
    >
      <Button
        type="primary"
        style={{
          position: 'absolute',
          top: '8%',
          left: '12%',
          width: '150px',
          height: '40px',
        }}
      >
        编辑个人信息
      </Button>
      <div
        style={{
          position: 'absolute',
          top: '17%',
          right: '10%',
          left: '10%',
          border: 'solid 1.5px #DCDCDC',
          textAlign: 'center',
        }}
      >
        <h2>个人信息</h2>
        <h3>学生实名字段</h3>
        <Descriptions
          column={1}
          labelStyle={{ paddingRight: 36 }}
          size={'large'}
          data={data}
          style={{
            marginLeft: 50,
            marginBottom: 10,
          }}
        />
      </div>
    </div>
  );
};

export default EditorPersonalInformationPage;
