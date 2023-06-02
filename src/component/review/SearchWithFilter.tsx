import { IconSearch } from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import {
  Trigger,
  Button,
  Form,
  Input,
  Checkbox,
  Card,
  Grid,
} from '@arco-design/web-react';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

interface Props {
  getConditions: (searchString: string, type: []) => void;
  reset: () => void;
}

const Popup: React.FC<Props> = ({ getConditions, reset }) => {
  const [searchString, setSearchString] = useState<string>('');
  const [typeOfResources, setTypeOfResources] = useState<string[]>([]);
  const [form] = Form.useForm();

  const options = [
    { label: '文档', value: 'file' },
    { label: '文章', value: 'article' },
    { label: '视频', value: 'media' },
  ];

  return (
    <div className="fixed bottom-1/2 right-20 w-96 h-60">
      <Card>
        <Form form={form}>
          <FormItem field="search" initialValue={''}>
            <Input.Search
              allowClear
              value={searchString}
              onChange={() => setSearchString(searchString)}
            />
          </FormItem>
          <FormItem field="condition" initialValue={typeOfResources}>
            <CheckboxGroup
              options={options}
              onChange={value => {
                setTypeOfResources(value);
                window.console.log(value);
              }}
            />
          </FormItem>
          <FormItem>
            <Grid.Row>
              <Grid.Col span={6}>
                <Button
                  className="w-auto"
                  onClick={() => {
                    form.clearFields();
                    form.setFieldValue('condition', []);
                    reset();
                  }}
                >
                  重置
                </Button>
              </Grid.Col>
              <Grid.Col span={6} offset={12}>
                <Button
                  onClick={() => {
                    form.validate().then(data => {
                      window.console.log(data);
                      getConditions(data.search, data.condition);
                    });
                  }}
                  type="primary"
                  style={{ marginRight: 24 }}
                >
                  筛选
                </Button>
              </Grid.Col>
            </Grid.Row>
          </FormItem>
        </Form>
      </Card>
    </div>
  );
};

export const SearchWithFilter: React.FC<Props> = ({ getConditions, reset }) => {
  return (
    <div className="fixed bottom-48 right-24">
      <Trigger
        trigger={'click'}
        position="top"
        popup={() => <Popup getConditions={getConditions} reset={reset} />}
        clickOutsideToClose={false}
        updateOnScroll={false}
      >
        <div>
          <Button
            size="large"
            shape="circle"
            style={{
              width: 60,
              height: 60,
            }}
            className="shadow-lg"
            icon={<IconSearch style={{ fontSize: 30 }} />}
          />
        </div>
      </Trigger>
    </div>
  );
};
