// 积分界面

import { useState } from 'react';
import { Tabs } from '@arco-design/web-react';
import ViewIntegralUseRecord from '@/routes/modules/ViewIntegralUseRecord';
import ViewPublishReword from '@/routes/modules/ViewPublishReword';
import '../style/integralPage.css';
import ViewRewardRecord from '@/routes/modules/ViewRewardRecord';

const { TabPane } = Tabs;

const integralPage = () => {
  const [integral, setIntegral] = useState(100);

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
        <h2 style={{ fontSize: '25px' }}>你的积分：{integral}</h2>
        <br />
        <Tabs type={'card'} size={'large'}>
          <TabPane key="1" title="查看奖励记录">
            <ViewRewardRecord />
          </TabPane>
          <TabPane key="2" title="查看惩罚记录">
            <ViewPublishReword />
          </TabPane>
          <TabPane key="3" title="查看积分使用记录">
            <ViewIntegralUseRecord />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default integralPage;
