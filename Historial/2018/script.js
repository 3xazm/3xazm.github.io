


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