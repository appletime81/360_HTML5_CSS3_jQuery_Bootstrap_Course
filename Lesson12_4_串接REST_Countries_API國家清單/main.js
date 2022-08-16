const countrySelect = document.getElementById('countrySelect');

// add event listener to countrySelect
countrySelect.addEventListener('change', (e) => {
    alert(e.target.value);
})

axios.get('https://restcountries.com/v2/all')
    .then(function (response) {
        console.log('取得資料成功', response.data);
        response.data.forEach(function (country) {
            const options = `<option value="${country.name}">${country.name}</option>`;
            countrySelect.innerHTML += options;
        })
        
    })
    .catch(function (error) {
        console.log('取得資料失敗', error);
    });