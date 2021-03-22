const jsonServer = require('json-server');
const products = require("./data");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

let product = products();

server.use(middlewares);

server.get('/catalog', (req, res) => {
  let pageProducts = getPageProducts(product.products, req.query.page);
  console.log('req.query: ', req.query)
  let products = getFilterProducts(req.query, pageProducts);
  let page = getData(product.products, req.query.page, products);
  res.jsonp(page);
});

server.get('/catalog/:id', (req, res) => {
  let id = req.params.id;
  let products = getProducts('none', product.products);
  res.jsonp(products.find(item => item.id == id));
});

server.listen(3000, () => {
  console.log('JSON Server is running');
})

function getPageProducts(products, page) {
  return products.slice((Number(page)-1)*4, (Number(page)-1)*4+4);
}

// метод фильтрации каталога
function getFilterProducts(orderBy, products) {
  let sieve = [];
  console.log('orderBy: ', orderBy)
  if (orderBy.orderBy == 'actionPrice') {
    console.log('Я тут')
    products.map(item => {
      if (item.price.discount) {
        sieve.push(item);
      }
    });
  } else if (orderBy.orderBy === 'available') {
    products.map(item => {
      if (item.availability) {
        sieve.push(item);
      }
    });
  } else {
    sieve = products || [];
  }
  console.log(sieve)
  return sieve;
}

// возврат страницы с продукцией
function getData(products, page, data) {
  let total = products.length;
  let pages = Math.ceil(products.length / 4);
  let current = Number(page);
  return {
    'meta': {
      'total': total,
      'pages': pages,
      'current': current
    },
    'data': data
  }
}
