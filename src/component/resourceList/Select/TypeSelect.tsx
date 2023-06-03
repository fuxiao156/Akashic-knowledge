import {Select} from "@arco-design/web-react";
import {TypeMap} from "@/component/resourceList/Select/options";
export const TypeSelect = (props:any) => {
  const Option = Select.Option;
  const value = props.value || {};
  const handleChange = (newValue:any) => {
    props.onChange && props.onChange(newValue);
  };
  const options = ['post', 'attachment', 'media' , 'file'];

  return(
    <>
      <Select
        mode='multiple'
        placeholder='请选择筛选类型'
        style={{ width: 200 }}
        allowClear
        onChange={(v:any) => {
          handleChange({ ...value, type:v });
        }}
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {TypeMap.get(option)}
          </Option>
        ))}
      </Select>
    </>
  );
}
