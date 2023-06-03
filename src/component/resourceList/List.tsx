import { ResourceListItem } from './ListItem';
import { IResource } from '@/domain/entity/resource.interface';
import {Button, Form} from "@arco-design/web-react";
import {TypeSelect} from "@/component/resourceList/Select/TypeSelect";
import {YearSelect} from "@/component/resourceList/Select/YearSelect";
import {useState} from "react";
import {Grid} from "@arco-design/web-react";
const {Row,Col} = Grid;
export const ResourceList = (props: { resources: IResource<any>[] }) => {
  const [resources,setResources] = useState(props.resources);
  const [form] = Form.useForm();

  const isType = (typeArray:string[],target:string) => {
    let targeted = false;
    typeArray.map(type=>{
      if(type === target){
        targeted = true;
      }
    })
    return targeted;
  }
  const isYear = (yearArray:string[],target:string) =>{
    let targeted = false;
    yearArray.map(year =>{
      if(year === target)
        targeted = true;
    })
    return targeted;
  }
  const filter = () =>{
    const Search = form.getFieldsValue();
    if(!Search.type&&!Search.year)
      setResources(props.resources);
    else {
      const newResources = new Array();
      props.resources.map(resource => {
        // console.log(resource.type,"---",Search.type.type)
        console.log(isType(Search.type.type, resource.type));
        if (isType(Search.type.type, resource.type)) {
          newResources.push(resource);
        }
      })
      setResources(newResources);
    }
  }
  return (
    <>
      <Form form={form}>
        <Row>
          <Col span={8}>
            <Form.Item field="type" label="類型">
              <TypeSelect />
            </Form.Item >
          </Col>
          <Col span={8}>
            <Form.Item field="year" label="年份">
              <YearSelect />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Button onClick={filter}>
              搜索
            </Button>
          </Col>
        </Row>
      </Form>
      <div className="ml-10 flex flex-col">
        {resources.map(resource => (
          <ResourceListItem key={resource.id} resource={resource} />
        ))}
      </div>
    </>
  );
};
