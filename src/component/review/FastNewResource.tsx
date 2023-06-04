import { IconPlus } from '@arco-design/web-react/icon';
import { useState } from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
  Select,
  Message,
  Upload,
} from '@arco-design/web-react';

const FormItem = Form.Item;

export const FastNewResource = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const onOk = () => {
    console.log(form.getFieldsValue());
    form.validate().then(res => {
      console.log(res);
      setConfirmLoading(true);
      // 此处调用wpapi
      Message.success('上传成功 !');
      // form.clearFields();
      setConfirmLoading(false);
      setModalVisible(false);
    });
  }
  return (
    <div className="fixed bottom-20 right-24 ">
      <Button
        type="primary"
        size="large"
        shape="circle"
        style={{
          width: 60,
          height: 60,
        }}
        icon={<IconPlus style={{ fontSize: 30 }} />}
        onClick={() => setModalVisible(true)}
      />

      <Modal
        title="新增资源"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={
          <>
            <Button
              onClick={() => {
                form.clearFields();
                window.console.log('点击重置');
              }}
            >
              重置
            </Button>
            <Button loading={confirmLoading} onClick={onOk} type="primary">
              确认上传
            </Button>
          </>
        }
      >
        <Form form={form} layout="vertical" scrollToFirstError>
          <FormItem
            label="标题"
            field="title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="请填写标题" />
          </FormItem>
          <FormItem
            label="资源类型"
            required
            field="typeOfResource"
            rules={[{ required: true }]}
          >
            <Select options={['文章', '文档', '视频']} />
          </FormItem>
          <FormItem
            label="上传文件"
            field="resource"
            // rules={[{ required: true }]}
          >
            <Upload
              drag
              multiple
              accept="image/*"
              action="/"
              // tip="Only pictures can be uploaded"
              // style={{ height: 200 }}
            />
          </FormItem>
          <FormItem label="备注" field="note">
            <Input.TextArea
              placeholder="请输入 ..."
              maxLength={1000}
              showWordLimit
              style={{ minHeight: 80 }}
            />
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
};
