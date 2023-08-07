// 积分界面：查看惩罚记录

import { Input, Table, TableColumnProps } from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';
import { useRef, useState } from 'react';

const ViewPublishRecord = () => {
  const inputRef = useRef(null);

  const columns: TableColumnProps[] = [
    {
      title: '惩罚记录',
      dataIndex: 'operation',
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className="arco-table-custom-filter">
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder=""
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
        value ? row.operation.indexOf(value) !== -1 : true,
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
    },
    {
      title: '积分变更',
      dataIndex: 'change',
    },
    {
      title: '详情',
      dataIndex: 'detail',
    },
    {
      title: '时间',
      dataIndex: 'time',
    },
  ];
  const [data, setData] = useState([
    {
      key: 1,
      operation: '操作',
      change: '积分-20',
      detail: '详细信息',
      time: '2023年7月31日',
    },
    {
      key: 2,
      operation: '操作',
      change: '积分-20',
      detail: '详细信息',
      time: '2023年7月31日',
    },
    {
      key: 3,
      operation: '操作',
      change: '积分-20',
      detail: '详细信息',
      time: '2023年7月31日',
    },
    {
      key: 4,
      operation: '操作',
      change: '积分-20',
      detail: '详细信息',
      time: '2023年7月31日',
    },
    {
      key: 5,
      operation: '操作',
      change: '积分-20',
      detail: '详细信息',
      time: '2023年7月31日',
    },
    {
      key: 6,
      operation: '操作',
      change: '积分-20',
      detail: '详细信息',
      time: '2023年7月31日',
    },
    {
      key: 7,
      operation: '操作',
      change: '积分-20',
      detail: '详细信息',
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

export default ViewPublishRecord;
