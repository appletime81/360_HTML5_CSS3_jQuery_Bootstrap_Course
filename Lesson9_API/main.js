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
    
});