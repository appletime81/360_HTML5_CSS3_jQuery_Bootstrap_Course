const express = require('express');
const router = express.Router();
const categoryList = require('../model/category-list');
// import db
const db = require('../db');

// 產品詳情路由
router.get('/show/:pid', function (req, res, next) {
    // 渲染 product/show.ejs
    res.render('product/show');
});

// 建立產品路由
router.get('/create', function (req, res, next) {
    // 渲染 product/create.ejs
    res.render('product/create');
});

// 編輯產品路由
router.get('/edit/:pid', async function (req, res, next) {
    // 取得動態路由參數:pid
    const pid = req.params.pid;
    console.log("pid", pid);

    // 透過pid至firebase取得指定文件的資料
    // db.doc('集合名稱/文件的ID').get()
    const doc = await db.doc(`productList/${pid}`).get()
    const product = doc.data();
    console.log("產品", product);
    // 渲染 product/edit.ejs
    res.locals.product = product;
    res.locals.categoryList = categoryList;
    res.render('product/edit');
});

module.exports = router;
