import './index.css';

// Title:标题 string
// date:日期 string
// price:价格 number
// detaillink:详情页链接地址 string
// buylink:购买页面链接地址 string
// tipType:提示类型,0:即将上线,1:进行中,2:已结束 number
const products = [
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
// tip的类型
const tipType = ['future', 'now', 'past'];
const tipText = ['即将上线', '进行中', '已结束'];
export default function Market() {
  return (
    <div className="marketPage">
      <div className="pageTitle">商城主页</div>
      <div className="functionArea">
        <div className="kindSelect">
          <div className="kind">资源类型1</div>
          <div className="kind">资源类型2</div>
        </div>
        <div className="search">
          <input className="searchInput" type="text" placeholder="搜索商品" />
          <button className="searchButton">搜索</button>
        </div>
      </div>
      <div className="subTitle">商品</div>
      <div className="sellBox">
        {products.map((product, index) => (
          <div className="sellitem" key={index}>
            <div className={`tip ${tipType[product.tipType]}`}>
              {tipText[product.tipType]}
            </div>
            <div className="itemTop">
              <div className="itemTitle">{product.Title}</div>
              <div className="date">{product.Title}</div>
            </div>
            <div className="itemBottom">
              <a className="detail" href={product.detailLink}>
                详情
              </a>
              <a className="buy" href={product.buyLink}>
                购买
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
