// 模拟数据（默认显示的所有记录）
const lotteryData = [
    //   12
    /*
    { date: "2019-12-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-10", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-08", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-07", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-05", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-04", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-03", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-12-01", mediodia: "--", tarde: "--", noche: "--" },








    //   11
    { date: "2019-11-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2019-11-11", mediodia: "--", tarde: "--", noche: "--" },*/
    
    // 更多数据
];

// DOM 元素
const daySelector = document.getElementById("daySelector");
const monthSelector = document.getElementById("monthSelector");
const searchButton = document.getElementById("searchButton");
const resultsDiv = document.querySelector(".results");

// 初始化：动态生成天数下拉菜单 & 显示全部记录
function init() {
    // 动态生成天数
    const daysInMonth = 31; // 简单假设每个月有31天
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement("option");
        option.value = day.toString().padStart(2, "0");
        option.textContent = day;
        daySelector.appendChild(option);
    }

    // 默认显示全部记录
    displayResults(lotteryData);
}

// 显示记录
// 更新显示记录的函数
function displayResults(data) {
    resultsDiv.innerHTML = ""; // 清空之前的内容

    if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No hay resultados disponibles, El archivo puede ser estar dañado🙁.</p>";
        return;
    }

    data.forEach(item => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";

        // 将日期格式从 YYYY-MM-DD 转为 DD/MM/YYYY
        const [year, month, day] = item.date.split("-");
        const formattedDate = `${day}/${month}/${year}`;

        resultItem.innerHTML = `
            <div><strong>${formattedDate}</strong></div>
            <div>Mediodía: ${item.mediodia}</div>
            <div>Tarde: ${item.tarde}</div>
            <div>Noche: ${item.noche}</div>
        `;

        resultsDiv.appendChild(resultItem);
    });
}


// 筛选记录：显示选定日期及其之前的记录
function filterResults() {
    const selectedMonth = monthSelector.value.padStart(2, "0");
    const selectedDay = daySelector.value.padStart(2, "0");
    const selectedDate = `2019-${selectedMonth}-${selectedDay}`;

    // 筛选符合条件的记录（日期 <= 选定日期）
    const filteredResults = lotteryData.filter(item => item.date <= selectedDate);

    displayResults(filteredResults);
}





// 初始化页面
init();

// 绑定搜索按钮事件
searchButton.addEventListener("click", filterResults);



/* ================================= Derdl ==================================================== */

document.getElementById("yearSelector").addEventListener("change", function () {
    const selectedYear = this.value; // 获取用户选择的年份

    // 定义每个年份对应的网站链接
    const urls = {
        "2025": "https://carlosw-sky.github.io",
        "2024": "https://carlosw-sky.github.io/Historial/2024/",
        "2023": "https://carlosw-sky.github.io/Historial/2023/",
        "2022": "https://carlosw-sky.github.io/Historial/2022/",
        "2021": "https://carlosw-sky.github.io/Historial/2021/",
        "2020": "https://carlosw-sky.github.io/Historial/2020/",
        "2019": "https://carlosw-sky.github.io/Historial/2019/",
        "2018": "https://carlosw-sky.github.io/Historial/2018/",
        "2017": "https://carlosw-sky.github.io/Historial/2017/",
        "2016": "https://carlosw-sky.github.io/Historial/2016/",
        "2015": "https://carlosw-sky.github.io/Historial/2015/",
        "2014": "https://carlosw-sky.github.io/Historial/2014/",
        "2013": "https://carlosw-sky.github.io/Historial/2013/",
    };

    // 跳转到对应的网站
    if (urls[selectedYear]) {
        window.location.href = urls[selectedYear]; // 跳转到对应链接
    } else {
        alert("URL no está configurada para el año seleccionado.");
    }
});