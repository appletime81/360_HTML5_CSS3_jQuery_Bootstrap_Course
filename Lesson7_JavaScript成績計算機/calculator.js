// 成績計算表單
const scoreForm = document.getElementById('scoreForm');

// 各科目分數輸入框
const zhInput = document.getElementById('chineseScoreInput');
const enInput = document.getElementById('englishScoreInput');
const mathInput = document.getElementById('mathScoreInput');

// 報告顯示區塊
const reportDiv = document.getElementById('result');

scoreForm.addEventListener('submit', function (e) {
    // 防止表單重整畫面
    e.preventDefault();
    console.log("表單提交了");

    // TODO: 取得各科目成績
    const zhScore = parseInt(zhInput.value),
          enScore = parseInt(enInput.value),
          mathScore = parseInt(mathInput.value);

    // TODO: 計算總分
    const totalScore = zhScore + enScore + mathScore;
    console.log(`總分: ${totalScore}`);

    // TODO: 計算平均分數
    const roundScale = 100;
    const averageScore = totalScore / 3;

    // averageScore取小數點後二位
    const averageScoreRounded = Math.round(averageScore * roundScale) / roundScale;
    console.log(`平均分: ${averageScoreRounded}`);

    // TODO: 計算等級
    // 平均分數 >= 90 為A+
    // 平均分數 >= 80 為A
    // 平均分數 >= 70 為B
    // 平均分數 >= 60 為C
    // 平均分數 < 60 為F。
    let gpa = '';
    let color = 'secondary';
    if (averageScoreRounded >= 90) {
        gpa = 'A+';
        color = 'success';
    } else if (averageScoreRounded >= 80) {
        gpa = 'A';
    } else if (averageScoreRounded >= 70) {
        gpa = 'B';
    } else if (averageScoreRounded >= 60) {
        gpa = 'C';
    } else {
        gpa = 'F';
        color = 'danger';
    }


    // TODO: 顯示報告
    const report = `<div class="alert alert-${color}">
        國文: ${zhScore}<br>
        英文: ${enScore}<br>
        數學: ${mathScore}<br>
        總分: ${totalScore}<br>
        平均: ${averageScoreRounded}<br>
        總評: ${gpa}
    </div>`;
    reportDiv.innerHTML = report;

});