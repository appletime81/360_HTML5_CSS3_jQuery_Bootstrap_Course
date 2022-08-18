const $select = $("#productCategory");
// TODO: 取得商品分類清單
// PATH: "/api/category-list"
axios.get("/api/category-list")
    .then(res => {
        console.log("成功取得分類清單", res);
        const categoryList = res.data.categoryList;
        // for each
        categoryList.forEach(category => {
            $select.append(`<option value="${category.id}">${category.title}</option>`);
        });
    })
    .catch(err => {
        console.log("錯誤=", err);
    });

$('#createProductForm').submit(function (event) {
    event.preventDefault();
    const product = {
        name: $('#productName').val(),
        price: parseInt($('#productPrice').val()),
        image: $('#productImage').val(),
        category: $('#productCategory').val(),
        createdAt: new Date().getTime()
    };
    console.log('[新增產品]', product);
    // TODO: 創建商品API
    // PATH: "/api/product/create",
    // MATHOD: "POST",
    // DATA: product 新產品資料(物件)
    axios.post("/api/product/create", product)
        .then(res => {
            console.log("成功新增產品", res);
        })
        .catch(err => {
            console.log("錯誤", err);
        });
});