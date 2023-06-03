import {Select} from "@arco-design/web-react";
export const YearSelect = (props:any) => {
  const Option = Select.Option;
  const value = props.value || {};
  const handleChange = (newValue:any) => {
    props.onChange && props.onChange(newValue);
  };
  const options = ['2020', '2021', '2022', '2023'];

  return(
    <>
      <Select
        mode='multiple'
        placeholder='请选择年份'
        style={{ width: 200 }}
        allowClear
        onChange={(v:any) => {
          handleChange({ ...value, year:v });
        }
      }
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </>
  );
}
