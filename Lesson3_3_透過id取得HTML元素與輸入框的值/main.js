const nameInput = document.getElementById("nameInput")
const btn = document.getElementById("btn")
const introBlock = document.getElementById("introBlock")
const ageInput = document.getElementById("ageInput")
const titleInput = document.getElementById("titleInput")

// 綁定按鈕的點擊事件
btn.addEventListener("click", function () {
    // btn被點擊後才做的事情
    const name = nameInput.value
    const age = ageInput.value
    const title = titleInput.value

    console.log("Hello " + nameInput.value)
    introBlock.innerHTML =
        `My name is <span class="h1">${name}</span>.<br> 
        I am <span class="h3">${age}</span> years old.<br> 
        My job is <span class="h3">${title}</span>.<br>`
})
