/*
 * TODO: 串接ipinfo.io服務取得使用者的IP資訊，並顯示結果於網頁上
 * https://ipinfo.io/
 * 一個可回傳用戶端IP資訊的公開API服務
 */

const btn = document.getElementById('btn');
const reportBlock = document.getElementById('reportBlock');
const url = 'https://ipinfo.io/json?token=cf9c05d7249c08';

// 綁定按鈕點擊事件
btn.addEventListener('click', function () {
    console.log('準備取得使用者IP資訊');

    // 透過axios對API發送HTTP Request
    axios
        .get(url)
        // 取得回傳的資料
        .then(res => {
            console.log('ipinfo伺服器的回應', res);
            // const data = res.data;
            const { data } = res;
            console.log('ipinfo回傳的資料', data);
            const { ip, city, region, country, loc, org } = data;
            reportBlock.innerHTML = `<div class='alert alert-info'>
                城市: ${city}<br>
                國家: ${country}<br>
                IP: ${loc}<br>
                組織: ${org}<br>
            </div>`;
        })
        // 如果取得回傳資料失敗
        .catch(err => {
            console.log('發生錯誤', err);
            reportBlock.innerHTML = `<div class='alert alert-danger'>
                發生錯誤，請稍後再試
        </div>`;
        });
});