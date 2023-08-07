// 个人模块界面（总界面）

import '../style/MainPage.css';
import EditorPersonalInformationPage from '@/routes/modules/EditorPersonalInformationPage';
import IntegralPage from '@/routes/modules/IntegralPage';
import MenuItems from '@/routes/modules/MenuItems';
import PersonalInformation from '@/routes/modules/PersonalInformation';
import ResourcePage from '@/routes/modules/ResoursePage';

const MainPage = () => {
  return (
    <div className={'background'}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          right: '0',
          left: '0',
          top: '0',
          bottom: '86%',
        }}
      >
        <div className={'logo'} />
        <PersonalInformation />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: '14%',
          bottom: '82%',
          background: '#186ff1',
        }}
      />
      <div className={'navigationBar'}>
        <MenuItems />
      </div>
      {/* <IntegralPage /> */}
      {/* <ResourcePage /> */}
      <EditorPersonalInformationPage />
    </div>
  );
};

export default MainPage;
