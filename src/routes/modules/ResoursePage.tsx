// 资源界面

import { Tabs } from '@arco-design/web-react';
import CollectedResource from '@/routes/modules/CollectedResource';
import BoughtResource from '@/routes/modules/BougntResource';
import '../style/integralPage.css';
import { useRef } from 'react';

const { TabPane } = Tabs;

const ResourcePage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '17%',
        right: '0',
        top: '18%',
        bottom: '0',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          marginLeft: '50px',
          marginTop: '20px',
          marginRight: '50px',
          textAlign: 'left',
        }}
      >
        <br />
        <Tabs type={'card'} size={'large'}>
          <TabPane key="1" title="购买的资源">
            <BoughtResource />
          </TabPane>
          <TabPane key="2" title="收藏的资源">
            <CollectedResource />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ResourcePage;
