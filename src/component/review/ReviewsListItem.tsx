import { useState } from 'react';
import {
  Typography,
  Space,
  Card,
  Tooltip,
  Drawer,
} from '@arco-design/web-react';
import { IconFile, IconFilePdf } from '@arco-design/web-react/icon';
import { ItemDetail } from './ItemDetail';
import { TArticle } from '@/domain/entity/content/article.type';
import { TFile } from '@/domain/entity/content/file.type';
import { TMedia } from '@/domain/entity/content/media.type';
import { IResource } from '@/domain/entity/resource.interface';
import {
  isArticleResource,
  isFileResource,
  isMediaResource,
} from '@/utils/resource.guard';

const { Title, Paragraph } = Typography;

const FileItem = (props: { resource: IResource<TFile> }) => {
  const { resource } = props;
  return (
    <div>
      <Card hoverable className="hover:bg-slate-200">
        <Space size="large" className="h-16">
          <Tooltip content="文档">
            <IconFile
              style={{
                width: 30,
                height: 30,
              }}
            />
          </Tooltip>

          <Typography>
            <Title heading={4}>{resource.title}</Title>
            <Paragraph>文章标签或者摘要可以在此显示</Paragraph>
          </Typography>
        </Space>
      </Card>
    </div>
  );
};

// 暂时用不到
const MediaItem = (props: { resource: IResource<TMedia> }) => {
  const { resource } = props;
  return (
    <div>
      <IconFilePdf />
      <div>
        <Title heading={1}>{resource.title}</Title>
        <Paragraph>文章摘要或标签</Paragraph>
      </div>
    </div>
  );
};

const ArticleItem = (props: { resource: IResource<TArticle> }) => {
  const { resource } = props;
  return (
    <div>
      <Card hoverable className="hover:bg-slate-200">
        <Space size="large" className="h-16">
          <Tooltip content="文章">
            <IconFilePdf
              style={{
                width: 30,
                height: 30,
              }}
            />
          </Tooltip>

          <Typography>
            <Title heading={4}>{resource.title}</Title>
            <Paragraph>文章摘要或标签</Paragraph>
          </Typography>
        </Space>
      </Card>
    </div>
  );
};

const ResourceSwitch = (props: {
  resource: IResource<TFile | TMedia | TArticle>;
}) => {
  const { resource } = props;
  if (isArticleResource(resource)) {
    return <ArticleItem resource={resource} />;
  }
  if (isFileResource(resource)) {
    return <FileItem resource={resource} />;
  }
  if (isMediaResource(resource)) {
    return <MediaItem resource={resource} />;
  }
  throw new Error('unknown resource type');
};

export const ReviewsListItem = (props: {
  resource: IResource<TFile | TMedia | TArticle>;
}) => {
  const { resource } = props;
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Drawer
        width={332}
        height="100%"
        visible={visible}
        placement="bottom"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <ItemDetail resource={resource} />
      </Drawer>
      <ResourceSwitch resource={resource} />
    </div>
  );
};
