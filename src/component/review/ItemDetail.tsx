import { useState } from 'react';
import { Layout, Grid, Card, Button, Input, Tag } from '@arco-design/web-react';
import { ResourceTypeLabel } from '../resourceList/ListItem';
import { TArticle } from '@/domain/entity/content/article.type';
import { TFile } from '@/domain/entity/content/file.type';
import { TMedia } from '@/domain/entity/content/media.type';
import { IResource } from '@/domain/entity/resource.interface';

export const ItemDetail = (props: {
  resource: IResource<TFile | TMedia | TArticle>;
}) => {
  const { resource } = props;
  const [suggestion, setSuggestion] = useState('');
  return (
    <div className="h-screen">
      <Layout style={{ height: '95%' }}>
        <Layout.Header>
          <Grid.Row>
            <Grid.Col span={6}>
              <div className="whitespace-nowrap">
                <h1 className="text-2xl font-bold m-5 inline-block">
                  {resource.title}
                </h1>
                <ResourceTypeLabel type={resource.type} />
              </div>
            </Grid.Col>
            <Grid.Col span={6} offset={12} className="text-center">
              <div className="text-2xl font-bold m-4 inline-block rounded">
                <Tag color="#ffb400" size="large" bordered>
                  资源状态
                </Tag>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Layout.Header>
        <Layout.Content>
          <Card className="h-3/4">主要内容</Card>

          <Card className="h-1/5">
            <Input.TextArea
              placeholder="审核意见"
              autoSize
              style={{ minHeight: 80, width: '100%' }}
              value={suggestion}
              onChange={value => setSuggestion(value)}
            />
          </Card>
        </Layout.Content>
        <Layout.Footer>
          <Grid.Row justify="space-around">
            <Grid.Col span={4}>
              <Button type="primary">驳回</Button>
            </Grid.Col>
            <Grid.Col span={4}>
              <Button type="primary">通过</Button>
            </Grid.Col>
          </Grid.Row>
        </Layout.Footer>
      </Layout>
    </div>
  );
};
