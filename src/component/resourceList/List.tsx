import { ResourceListItem } from './ListItem';
import { IResource } from '@/domain/entity/resource.interface';
import {Button, Form, Input} from "@arco-design/web-react";
import {TypeSelect} from "@/component/resourceList/Select/TypeSelect";
import {YearSelect} from "@/component/resourceList/Select/YearSelect";
import {useEffect, useState} from "react";
import {Grid} from "@arco-design/web-react";
import {throttle} from "lodash";
import {wordPressCMS} from "@/services/cms/wp";
const {Row,Col} = Grid;
export const ResourceList = (props: { resources: IResource<any>[] }) => {
  const [resources,setResources] = useState(props.resources);
  const [form] = Form.useForm();
  const [SearchValue,setSearchValue] = useState("");

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
  const throttledSearch = throttle((searchString: string) => {
    wordPressCMS.fetchAll(searchString).then(res => setResources(res));
  }, 1000);

  useEffect(() => throttledSearch(SearchValue), [SearchValue]);
  const filter = () =>{
    const Search = form.getFieldsValue();
    setSearchValue(Search.name);


    if(!Search.type&&!Search.year)
      setResources(props.resources);
    else {
      const newResources = new Array();
      resources.map(resource => {
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
          <Col span={6}>
            <Form.Item field="name" label="名称">
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}/>
          <Col span={6}>
            <Form.Item field="type" label="类型">
              <TypeSelect />
            </Form.Item >
          </Col>
          <Col span={6}>
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
