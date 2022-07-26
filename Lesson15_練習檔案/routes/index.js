const express = require('express');
const router = express.Router();
const db = require('../db');
const categoryList = require('../model/category-list');

// 首頁路由
router.get('/', async function (req, res, next) {
  // Cloud Firestore 規格
  // doc.id => 取得文件的id(字串)
  // doc.data() => 取得文件的原始資料(物件)
  const productList = [];
  // 取得產品列表 ES7
  // 取得productList集合裡所有的文件(document)
  const productCollection = await db.collection('productList').get();
  // 將產品列表傳遞到模板
  productCollection.forEach(doc => {
    // console.log(doc.id, '=>', doc.data());
    const product = doc.data();
    product.id = doc.id;
    console.log('product', product);
    // 將產品加入產品列表(productList)
    productList.push(product);
  });

  res.locals.productList = productList;
  res.locals.categoryList = categoryList;
  res.render('index');
});

//  add a route (/about)
router.get('/about', function (req, res, next) {
  res.render('about-page');
});

module.exports = router;
