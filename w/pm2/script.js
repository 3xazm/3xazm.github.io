// 模拟数据（默认显示的所有记录）

const lotteryData = [
    // { date: "2025-mm-dd", mediodia: "--", tarde: "--", noche: "--" },
    /*
    { date: "2025-01-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-29", mediodia: "--", tarde: "--", noche: "--" },   
    { date: "2025-01-28", mediodia: "--", tarde: "--", noche: "--" },  
    { date: "2025-01-27", mediodia: "--", tarde: "--", noche: "--" },   
    { date: "2025-01-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-10", mediodia: "--", tarde: "--", noche: "--" },*/
    { date: "2025-01-09", mediodia: "05", tarde: "--", noche: "--" },
    { date: "2025-01-08", mediodia: "08", tarde: "21", noche: "51" },
    { date: "2025-01-07", mediodia: "70", tarde: "34", noche: "42" },
    { date: "2025-01-06", mediodia: "63", tarde: "02", noche: "70" },
    { date: "2025-01-05", mediodia: "51", tarde: "43", noche: "90" },
    { date: "2025-01-04", mediodia: "97", tarde: "40", noche: "97" },
    { date: "2025-01-03", mediodia: "48", tarde: "32", noche: "63" },
    { date: "2025-01-02", mediodia: "33", tarde: "42", noche: "76" }
    // 更多数据
];

// DOM 元素
const daySelector = document.getElementById("daySelector");
const monthSelector = document.getElementById("monthSelector");
const searchButton = document.getElementById("searchButton");
const resultsDiv = document.querySelector(".results");
const loadingOverlay = document.getElementById("loading");


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
        resultsDiv.innerHTML = "<p>No hay resultados disponibles.</p>";
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


function filterResults() {
    const selectedMonth = monthSelector.value.padStart(2, "0");
    const selectedDay = daySelector.value.padStart(2, "0");
    const selectedDate = `2025-${selectedMonth}-${selectedDay}`;

    // 显示加载画面
    const loadingOverlay = document.getElementById("loading");
    loadingOverlay.style.display = "flex";

    // 模拟加载过程，设置定时器
    setTimeout(() => {
        // 筛选符合条件的记录（日期 <= 选定日期）
        const filteredResults = lotteryData.filter(item => item.date <= selectedDate);

        // 隐藏加载画面
        loadingOverlay.style.display = "none";
        // 显示结果
        displayResults(filteredResults);
    }, 500); // 模拟 1 秒的加载时间
}


    

// 初始化页面
init();

// 绑定搜索按钮事件
searchButton.addEventListener("click", filterResults);


/* ================================= Derdl ==================================================== */
document.getElementById("yearSelector").addEventListener("change", function () {
    const selectedYear = this.value; // 获取用户选择的年份

    
    // 定义每个年份对应的网站链接 @调用全部
    const urls = {
        "2025": "https://3xazm.github.io/w/pm2/Historial/2025/",
        "2024": "https://3xazm.github.io/w/pm2/Historial/2024/",
        "2023": "https://3xazm.github.io/w/pm2/Historial/2023/",
        "2022": "https://3xazm.github.io/w/pm2/Historial/2022/",
        "2021": "https://3xazm.github.io/w/pm2/Historial/2021/",
        "2020": "https://3xazm.github.io/w/pm2/Historial/2020/",
        "2019": "https://3xazm.github.io/w/pm2/Historial/2019/",
        "2018": "https://3xazm.github.io/w/pm2/Historial/2018/",
        "2017": "https://3xazm.github.io/w/pm2/Historial/2017/",
        "2016": "https://3xazm.github.io/w/pm2/Historial/2016/",
        "2015": "https://3xazm.github.io/w/pm2/Historial/2015/",
        "2014": "https://3xazm.github.io/w/pm2/Historial/2014/",
        "2013": "https://3xazm.github.io/w/pm2/Historial/2013/",
    };


    // 跳转到对应的网站
    if (urls[selectedYear]) {
        window.location.href = urls[selectedYear]; // 跳转到对应链接
    } else {
        alert("URL no está configurada para el año seleccionado.");
    }
});
