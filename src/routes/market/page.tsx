// 展示商城主页
import './index.css';
import { Button, Grid, Input } from '@arco-design/web-react';

const { GridItem } = Grid;
const InputSearch = Input.Search;
// Title:标题
// date:日期
// price:价格
// detaillink:详情页链接地址
// buylink:购买页面链接地址
// tipType:提示类型,0:即将上线,1:进行中,2:已结束
interface Product {
  Title: string;
  date: string;
  price: number;
  detailLink: string;
  buyLink: string;
  tipType: number;
}
const products: Product[] = [
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 0,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 1,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 2,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 0,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 1,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 2,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 0,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 1,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 2,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 0,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 1,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 2,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 0,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 1,
  },
  {
    Title: 'Product 1',
    date: '2021-01-01 00:00:00',
    price: 19.99,
    detailLink: 'https://example.com/product1',
    buyLink: 'https://example.com/product1',
    tipType: 2,
  },
];
const tipClass = ['future', 'now', 'past'];
const tipText = ['即将上线', '进行中', '已结束'];
export default function Market() {
  return (
    <div className="market_page">
      <div className="page-title">商城主页</div>
      <div className="function-area">
        <div className="kind-select">
          <div className="kind">资源类型1</div>
          <div className="kind">资源类型2</div>
        </div>
        <InputSearch allowClear placeholder="搜索" style={{ width: 288 }} />
      </div>
      <div className="sub-title">商品</div>
      <Grid
        cols={{ xs: 1, sm: 2, lg: 3, xl: 4, xxl: 5 }}
        colGap={24}
        rowGap={24}
      >
        {products.map((product, index) => (
          <GridItem className="sellitem" key={index}>
            <div className={`tip ${tipClass[product.tipType]}`}>
              {tipText[product.tipType]}
            </div>
            <div className="item-top">
              <div className="item-title">{product.Title}</div>
              <div className="date">{product.Title}</div>
            </div>
            <div className="item-bottom">
              <Button style={{ marginRight: 20 }} type="primary">
                详情
              </Button>
              <Button style={{ marginRight: 20 }} type="secondary">
                购买
              </Button>
            </div>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
