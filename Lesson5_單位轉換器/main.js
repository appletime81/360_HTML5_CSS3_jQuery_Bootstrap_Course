// 英吋轉公分功能實作

// 取得公分與英吋的輸入框DOM
const inchInput = document.getElementById("inchInput"),
    cmInput = document.getElementById("cmInput")

// 綁定英吋輸入框的輸入變更事件
inchInput.addEventListener("input", function (e) {
    console.log("英吋輸入框裡的輸入值被變更")

    // 取得英寸輸入框的輸入值
    const inch = parseFloat(inchInput.value)
    console.log("英吋:", inch)

    // 計算公分(英吋 --> 公分)
    let cm = inch * 2.54
    console.log("公分:", cm, typeof cm)

    // 將公分輸入框的輸入值做四捨五入到小數點後兩位
    cm = Math.round(cm * 100) / 100

    // 轉換後的公分值輸入到公分的輸入框
    cmInput.value = cm

    // 判斷輸入值是否正確，如果不正確，顯示提示文字
    if (!isNaN(inch)) {
        inchErr.innerText = ""
    }

    if (inchInput.value === "") {
        inchErr.innerText ="請輸入數字!!!"
    }
})

// 綁定公分輸入框的輸入變更事件
cmInput.addEventListener("input", function () {
    console.log("公分輸入框裡的輸入值被變更")

    // 取得公分輸入框的輸入值
    const cm = parseFloat(cmInput.value)
    console.log("公分:", cm)

    // 計算英吋(公分 --> 英吋)
    let inch = cm / 2.54
    console.log("英吋:", inch, typeof inch)

    // 將英吋輸入框的輸入值做四捨五入到小數點後兩位
    inch = Math.round(inch * 100) / 100

    // 轉換後的英吋值輸入到英吋的輸入框
    inchInput.value = inch

    // 判斷輸入值是否正確，如果不正確，顯示提示文字
    if (!isNaN(cm)) {
        cmErr.innerText = ""
    }

    if (cmInput.value === "") {
        cmErr.innerText ="請輸入數字!!!"
    }
})