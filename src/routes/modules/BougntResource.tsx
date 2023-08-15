// 资源界面：展示购买的资源

import { Table, TableColumnProps, Input, Button } from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';
import { useRef, useState } from 'react';

const BoughtResource = () => {
  const inputRef = useRef(null);
  const columns: TableColumnProps[] = [
    {
      title: '购买的资源',
      dataIndex: 'boughtResource',
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className="arco-table-custom-filter">
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder="Please enter name"
              value={filterKeys[0] || ''}
              onChange={value => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) =>
        value ? row.boughtResource.indexOf(value) !== -1 : true,
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
    },
    {
      title: '资源描述',
      dataIndex: 'description',
    },
    {
      title: '查看资源',
      dataIndex: 'view',
    },
    {
      title: '时间',
      dataIndex: 'time',
    },
  ];

  const [data, setData] = useState([
    {
      key: 1,
      boughtResource: '购买的资源1',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 2,
      boughtResource: '购买的资源2',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 3,
      boughtResource: '购买的资源3',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 4,
      boughtResource: '购买的资源4',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 5,
      boughtResource: '购买的资源5',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 6,
      boughtResource: '购买的资源6',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 7,
      boughtResource: '购买的资源7',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
  ]);
  return (
    <Table
      borderCell={true}
      stripe={true}
      columns={columns}
      data={data}
      pagination={{
        showTotal: true,
        pageSize: 5,
      }}
      style={{
        marginRight: '30px',
        marginLeft: '30px',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    />
  );
};

export default BoughtResource;
