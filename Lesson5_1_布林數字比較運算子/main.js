const form = document.getElementById('form'),
    xInput = document.getElementById('xInput'),
    yInput = document.getElementById('yInput'),
    result = document.getElementById('result')

form.addEventListener("submit", function (e) {
    // 表單送出後的流程
    e.preventDefault()
    
    // 表單送出後，進行計算
    console.log("表單被送出囉!")
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const ans = x + y
    result.innerText = ans
})