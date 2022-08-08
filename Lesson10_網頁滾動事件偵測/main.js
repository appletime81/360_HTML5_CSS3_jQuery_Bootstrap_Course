// 所有導覽列中的連結nav-link
const navLinkList = document.querySelectorAll('.navbar .nav-link'),
    // 導覽列
    navbar = document.getElementById('navbar'),
    // 滑動資訊報告元件
    scrollReport = document.getElementById('scrollReport');

const navigationTable = {};

// TODO: 透過forEach迴圈取出 navLinkList 裡所有的連結DOM
console.log('-- navLinkList --');
navLinkList.forEach(navLink => {
    console.log('a', navLink.dataset.target)
    const sectionId = navLink.dataset.target;
    // Update navigationTable --> 物件['屬性名稱'] = 值
    navigationTable[sectionId] = {
        link: navLink,
        section: document.getElementById(sectionId),
    };
});
console.log(navigationTable);
console.log('-- navLinkList --');

// 綁定視窗(window)的滾動事件(scroll)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
window.addEventListener('scroll', function () {
    // 取得視窗的直向滑動偵測點(scrollY) + navbar的高度(offsetHeight)
    const y = window.scrollY + navbar.offsetHeight;
    scrollReport.innerText = `目前滑動位置: ${y}px`;
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY

    // TODO: 取得每個章節的所在位置頂邊座標(offsetTop)、底邊座標(offsetTop + offsetHeight)
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    for (const sid in navigationTable) {
        const section = navigationTable[sid].section;
        const link = navigationTable[sid].link;
        const top = section.offsetTop; // 章節頂邊座標
        const bottom = top + section.offsetHeight; // 章節底邊座標

        // 判斷視窗的滑動偵測點是否在章節的頂邊座標與底邊座標之間
        if (y >= top && y < bottom) {
            // 為對應的<a></a>標籤變更樣式
            link.classList.add('text-warning');
            section.classList.add('is-active');
        } else {
            link.classList.remove('text-warning');
            section.classList.remove('is-active');
        };
    };
    console.log('----------------------------------');

});