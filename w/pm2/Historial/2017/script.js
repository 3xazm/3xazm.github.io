// 模拟数据（默认显示的所有记录）
const lotteryData = [
    //   12
    /*
    { date: "2017-12-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-23", mediodia: "--", tarde: "--", noche: "--" },*/
    { date: "2017-12-22", mediodia: "17", tarde: "--", noche: "74" },
    { date: "2017-12-21", mediodia: "84", tarde: "--", noche: "27" },
    { date: "2017-12-20", mediodia: "88", tarde: "--", noche: "44" },
    { date: "2017-12-19", mediodia: "32", tarde: "--", noche: "58" },
    { date: "2017-12-18", mediodia: "07", tarde: "--", noche: "23" },
    { date: "2017-12-17", mediodia: "--", tarde: "--", noche: "06" },
    { date: "2017-12-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-12-10", mediodia: "04", tarde: "--", noche: "76" },
    { date: "2017-12-09", mediodia: "13", tarde: "--", noche: "38" },
    { date: "2017-12-08", mediodia: "77", tarde: "--", noche: "35" },
    { date: "2017-12-07", mediodia: "82", tarde: "--", noche: "37" },
    { date: "2017-12-06", mediodia: "98", tarde: "--", noche: "93" },
    { date: "2017-12-05", mediodia: "36", tarde: "--", noche: "95" },
    { date: "2017-12-04", mediodia: "28", tarde: "--", noche: "97" },
    { date: "2017-12-03", mediodia: "22", tarde: "--", noche: "12" },
    { date: "2017-12-02", mediodia: "18", tarde: "--", noche: "30" },
    { date: "2017-12-01", mediodia: "--", tarde: "--", noche: "19" },





    //   11
    { date: "2017-11-30", mediodia: "18", tarde: "--", noche: "54" },
    { date: "2017-11-29", mediodia: "85", tarde: "--", noche: "61" },
    { date: "2017-11-28", mediodia: "87", tarde: "--", noche: "01" },
    { date: "2017-11-27", mediodia: "31", tarde: "--", noche: "47" },
    { date: "2017-11-26", mediodia: "75", tarde: "--", noche: "38" },
    { date: "2017-11-25", mediodia: "32", tarde: "--", noche: "28" },
    { date: "2017-11-24", mediodia: "56", tarde: "--", noche: "27" },
    { date: "2017-11-23", mediodia: "69", tarde: "--", noche: "95" },
    { date: "2017-11-22", mediodia: "04", tarde: "--", noche: "94" },
    { date: "2017-11-21", mediodia: "79", tarde: "--", noche: "80" },
    { date: "2017-11-20", mediodia: "59", tarde: "--", noche: "72" },
    { date: "2017-11-19", mediodia: "54", tarde: "--", noche: "10" },
    { date: "2017-11-18", mediodia: "77", tarde: "--", noche: "33" },
    { date: "2017-11-17", mediodia: "35", tarde: "--", noche: "81" },
    { date: "2017-11-16", mediodia: "93", tarde: "--", noche: "38" },
    { date: "2017-11-15", mediodia: "73", tarde: "--", noche: "32" },
    { date: "2017-11-14", mediodia: "33", tarde: "--", noche: "05" },
    { date: "2017-11-13", mediodia: "45", tarde: "--", noche: "67" },
    { date: "2017-11-12", mediodia: "31", tarde: "--", noche: "07" },
    { date: "2017-11-11", mediodia: "92", tarde: "--", noche: "39" },
    { date: "2017-11-10", mediodia: "65", tarde: "--", noche: "59" },
    { date: "2017-11-09", mediodia: "09", tarde: "--", noche: "96" },
    { date: "2017-11-08", mediodia: "33", tarde: "--", noche: "21" },
    { date: "2017-11-07", mediodia: "93", tarde: "--", noche: "76" },
    { date: "2017-11-06", mediodia: "04", tarde: "--", noche: "10" },
    { date: "2017-11-05", mediodia: "88", tarde: "--", noche: "91" },
    { date: "2017-11-04", mediodia: "47", tarde: "--", noche: "95" },
    { date: "2017-11-03", mediodia: "93", tarde: "--", noche: "51" },
    { date: "2017-11-02", mediodia: "66", tarde: "--", noche: "80" },
    { date: "2017-11-01", mediodia: "77", tarde: "--", noche: "87" },

    //   10
    { date: "2017-10-31", mediodia: "74", tarde: "--", noche: "91" },
    { date: "2017-10-30", mediodia: "84", tarde: "--", noche: "55" },
    { date: "2017-10-29", mediodia: "37", tarde: "--", noche: "78" },
    { date: "2017-10-28", mediodia: "78", tarde: "--", noche: "59" },
    { date: "2017-10-27", mediodia: "89", tarde: "--", noche: "22" },
    { date: "2017-10-26", mediodia: "55", tarde: "--", noche: "33" },
    { date: "2017-10-25", mediodia: "25", tarde: "--", noche: "08" },
    { date: "2017-10-24", mediodia: "27", tarde: "--", noche: "08" },
    { date: "2017-10-23", mediodia: "02", tarde: "--", noche: "65" },
    { date: "2017-10-22", mediodia: "91", tarde: "--", noche: "85" },
    { date: "2017-10-21", mediodia: "96", tarde: "--", noche: "85" },
    { date: "2017-10-20", mediodia: "53", tarde: "--", noche: "13" },
    { date: "2017-10-19", mediodia: "51", tarde: "--", noche: "06" },
    { date: "2017-10-18", mediodia: "63", tarde: "--", noche: "03" },
    { date: "2017-10-17", mediodia: "00", tarde: "--", noche: "44" },
    { date: "2017-10-16", mediodia: "47", tarde: "--", noche: "23" },
    { date: "2017-10-15", mediodia: "15", tarde: "--", noche: "35" },
    { date: "2017-10-14", mediodia: "20", tarde: "--", noche: "44" },
    { date: "2017-10-13", mediodia: "04", tarde: "--", noche: "24" },
    { date: "2017-10-12", mediodia: "23", tarde: "--", noche: "67" },
    { date: "2017-10-11", mediodia: "78", tarde: "--", noche: "71" },
    { date: "2017-10-10", mediodia: "45", tarde: "--", noche: "83" },
    { date: "2017-10-09", mediodia: "63", tarde: "--", noche: "57" },
    { date: "2017-10-08", mediodia: "79", tarde: "--", noche: "10" },
    { date: "2017-10-07", mediodia: "49", tarde: "--", noche: "91" },
    { date: "2017-10-06", mediodia: "43", tarde: "--", noche: "88" },
    { date: "2017-10-05", mediodia: "47", tarde: "--", noche: "30" },
    { date: "2017-10-04", mediodia: "44", tarde: "--", noche: "14" },
    { date: "2017-10-03", mediodia: "67", tarde: "--", noche: "48" },
    { date: "2017-10-02", mediodia: "78", tarde: "--", noche: "61" },
    { date: "2017-10-01", mediodia: "99", tarde: "--", noche: "32" },

    //   09
    { date: "2017-09-30", mediodia: "73", tarde: "--", noche: "04" },
    { date: "2017-09-29", mediodia: "--", tarde: "--", noche: "48" },
    { date: "2017-09-28", mediodia: "76", tarde: "--", noche: "38" },
    { date: "2017-09-27", mediodia: "12", tarde: "--", noche: "65" },
    { date: "2017-09-26", mediodia: "09", tarde: "--", noche: "90" },
    { date: "2017-09-25", mediodia: "93", tarde: "--", noche: "93" },
    { date: "2017-09-24", mediodia: "45", tarde: "--", noche: "65" },
    { date: "2017-09-23", mediodia: "22", tarde: "--", noche: "06" },
    { date: "2017-09-22", mediodia: "04", tarde: "--", noche: "67" },
    { date: "2017-09-21", mediodia: "32", tarde: "--", noche: "29" },
    { date: "2017-09-20", mediodia: "26", tarde: "--", noche: "44" },
    { date: "2017-09-19", mediodia: "26", tarde: "--", noche: "52" },
    { date: "2017-09-18", mediodia: "43", tarde: "--", noche: "41" },
    { date: "2017-09-17", mediodia: "21", tarde: "--", noche: "77" },
    { date: "2017-09-16", mediodia: "55", tarde: "--", noche: "36" },
    { date: "2017-09-15", mediodia: "02", tarde: "--", noche: "41" },
    { date: "2017-09-14", mediodia: "42", tarde: "--", noche: "62" },
    { date: "2017-09-13", mediodia: "23", tarde: "--", noche: "87" },
    { date: "2017-09-12", mediodia: "75", tarde: "--", noche: "45" }, 
    { date: "2017-09-11", mediodia: "58", tarde: "--", noche: "41" },
    { date: "2017-09-10", mediodia: "93", tarde: "--", noche: "21" },
    { date: "2017-09-09", mediodia: "63", tarde: "--", noche: "02" },
    { date: "2017-09-08", mediodia: "84", tarde: "--", noche: "63" },
    { date: "2017-09-07", mediodia: "96", tarde: "--", noche: "08" },
    { date: "2017-09-06", mediodia: "37", tarde: "--", noche: "20" },
    { date: "2017-09-05", mediodia: "65", tarde: "--", noche: "29" },
    { date: "2017-09-04", mediodia: "09", tarde: "--", noche: "66" },
    { date: "2017-09-03", mediodia: "90", tarde: "--", noche: "72" },
    { date: "2017-09-02", mediodia: "69", tarde: "--", noche: "50" },
    { date: "2017-09-01", mediodia: "67", tarde: "--", noche: "02" },







    //   08
    { date: "2017-08-31", mediodia: "42", tarde: "--", noche: "67" },
    { date: "2017-08-30", mediodia: "42", tarde: "--", noche: "79" },
    { date: "2017-08-29", mediodia: "30", tarde: "--", noche: "97" },
    { date: "2017-08-28", mediodia: "95", tarde: "--", noche: "70" },
    { date: "2017-08-27", mediodia: "15", tarde: "--", noche: "05" },
    { date: "2017-08-26", mediodia: "46", tarde: "--", noche: "89" },
    { date: "2017-08-25", mediodia: "05", tarde: "--", noche: "11" },
    { date: "2017-08-24", mediodia: "23", tarde: "--", noche: "74" },
    { date: "2017-08-23", mediodia: "95", tarde: "--", noche: "86" },
    { date: "2017-08-22", mediodia: "30", tarde: "--", noche: "48" },
    { date: "2017-08-21", mediodia: "46", tarde: "--", noche: "44" },
    { date: "2017-08-20", mediodia: "79", tarde: "--", noche: "91" },
    { date: "2017-08-19", mediodia: "88", tarde: "--", noche: "09" },
    { date: "2017-08-18", mediodia: "34", tarde: "--", noche: "57" },
    { date: "2017-08-17", mediodia: "57", tarde: "--", noche: "86" },
    { date: "2017-08-16", mediodia: "68", tarde: "--", noche: "77" },
    { date: "2017-08-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-08-14", mediodia: "00", tarde: "--", noche: "93" },
    { date: "2017-08-13", mediodia: "89", tarde: "--", noche: "47" },
    { date: "2017-08-12", mediodia: "92", tarde: "--", noche: "65" },
    { date: "2017-08-11", mediodia: "38", tarde: "--", noche: "16" },
    { date: "2017-08-10", mediodia: "34", tarde: "--", noche: "89" },
    { date: "2017-08-09", mediodia: "17", tarde: "--", noche: "34" },
    { date: "2017-08-08", mediodia: "30", tarde: "--", noche: "53" },
    { date: "2017-08-07", mediodia: "81", tarde: "--", noche: "66" },
    { date: "2017-08-06", mediodia: "92", tarde: "--", noche: "33" },
    { date: "2017-08-05", mediodia: "20", tarde: "--", noche: "42" },
    { date: "2017-08-04", mediodia: "94", tarde: "--", noche: "71" },
    { date: "2017-08-03", mediodia: "06", tarde: "--", noche: "42" },
    { date: "2017-08-02", mediodia: "30", tarde: "--", noche: "99" },
    { date: "2017-08-01", mediodia: "52", tarde: "--", noche: "83" },




    //   07
    { date: "2017-07-31", mediodia: "48", tarde: "--", noche: "69" },
    { date: "2017-07-30", mediodia: "32", tarde: "--", noche: "91" },
    { date: "2017-07-29", mediodia: "17", tarde: "--", noche: "43" },
    { date: "2017-07-28", mediodia: "05", tarde: "--", noche: "68" },
    { date: "2017-07-27", mediodia: "94", tarde: "--", noche: "47" },
    { date: "2017-07-26", mediodia: "35", tarde: "--", noche: "27" },
    { date: "2017-07-25", mediodia: "22", tarde: "--", noche: "63" },
    { date: "2017-07-24", mediodia: "66", tarde: "--", noche: "82" },
    { date: "2017-07-23", mediodia: "66", tarde: "--", noche: "03" },
    { date: "2017-07-22", mediodia: "28", tarde: "--", noche: "84" },
    { date: "2017-07-21", mediodia: "44", tarde: "--", noche: "92" },
    { date: "2017-07-20", mediodia: "97", tarde: "--", noche: "51" },
    { date: "2017-07-19", mediodia: "47", tarde: "--", noche: "83" },
    { date: "2017-07-18", mediodia: "79", tarde: "--", noche: "87" },
    { date: "2017-07-17", mediodia: "99", tarde: "--", noche: "79" },
    { date: "2017-07-16", mediodia: "37", tarde: "--", noche: "71" },
    { date: "2017-07-15", mediodia: "44", tarde: "--", noche: "40" },
    { date: "2017-07-14", mediodia: "85", tarde: "--", noche: "92" },
    { date: "2017-07-13", mediodia: "03", tarde: "--", noche: "92" },
    { date: "2017-07-12", mediodia: "33", tarde: "--", noche: "94" },
    { date: "2017-07-11", mediodia: "89", tarde: "--", noche: "31" },
    { date: "2017-07-10", mediodia: "24", tarde: "--", noche: "95" },
    { date: "2017-07-09", mediodia: "62", tarde: "--", noche: "24" },
    { date: "2017-07-08", mediodia: "54", tarde: "--", noche: "29" },
    { date: "2017-07-07", mediodia: "23", tarde: "--", noche: "93" },
    { date: "2017-07-06", mediodia: "32", tarde: "--", noche: "09" },
    { date: "2017-07-05", mediodia: "76", tarde: "--", noche: "55" },
    { date: "2017-07-04", mediodia: "30", tarde: "--", noche: "16" },
    { date: "2017-07-03", mediodia: "61", tarde: "--", noche: "28" },
    { date: "2017-07-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-07-01", mediodia: "--", tarde: "--", noche: "--" },







    //   06
    { date: "2017-06-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-06-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-06-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-06-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-06-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-06-25", mediodia: "81", tarde: "--", noche: "81" },
    { date: "2017-06-24", mediodia: "73", tarde: "--", noche: "18" },
    { date: "2017-06-23", mediodia: "27", tarde: "--", noche: "42" },
    { date: "2017-06-22", mediodia: "15", tarde: "--", noche: "66" },
    { date: "2017-06-21", mediodia: "17", tarde: "--", noche: "58" },
    { date: "2017-06-20", mediodia: "47", tarde: "--", noche: "78" },
    { date: "2017-06-19", mediodia: "22", tarde: "--", noche: "16" },
    { date: "2017-06-18", mediodia: "54", tarde: "--", noche: "56" },
    { date: "2017-06-17", mediodia: "38", tarde: "--", noche: "48" },
    { date: "2017-06-16", mediodia: "24", tarde: "--", noche: "36" },
    { date: "2017-06-15", mediodia: "74", tarde: "--", noche: "11" },
    { date: "2017-06-14", mediodia: "29", tarde: "--", noche: "76" },
    { date: "2017-06-13", mediodia: "12", tarde: "--", noche: "11" },
    { date: "2017-06-12", mediodia: "52", tarde: "--", noche: "29" },
    { date: "2017-06-11", mediodia: "82", tarde: "--", noche: "52" },
    { date: "2017-06-10", mediodia: "26", tarde: "--", noche: "74" },
    { date: "2017-06-09", mediodia: "07", tarde: "--", noche: "67" },
    { date: "2017-06-08", mediodia: "93", tarde: "--", noche: "28" },
    { date: "2017-06-07", mediodia: "53", tarde: "--", noche: "12" },
    { date: "2017-06-06", mediodia: "31", tarde: "--", noche: "07" },
    { date: "2017-06-05", mediodia: "49", tarde: "--", noche: "06" },
    { date: "2017-06-04", mediodia: "08", tarde: "--", noche: "61" },
    { date: "2017-06-03", mediodia: "94", tarde: "--", noche: "86" },
    { date: "2017-06-02", mediodia: "32", tarde: "--", noche: "88" },
    { date: "2017-06-01", mediodia: "32", tarde: "--", noche: "85" },







    //   05
    { date: "2017-05-31", mediodia: "51", tarde: "--", noche: "36" },
    { date: "2017-05-30", mediodia: "45", tarde: "--", noche: "47" },
    { date: "2017-05-29", mediodia: "32", tarde: "--", noche: "78" },
    { date: "2017-05-28", mediodia: "73", tarde: "--", noche: "36" },
    { date: "2017-05-27", mediodia: "91", tarde: "--", noche: "58" },
    { date: "2017-05-26", mediodia: "07", tarde: "--", noche: "78" },
    { date: "2017-05-25", mediodia: "24", tarde: "--", noche: "63" },
    { date: "2017-05-24", mediodia: "30", tarde: "--", noche: "21" },
    { date: "2017-05-23", mediodia: "33", tarde: "--", noche: "72" },
    { date: "2017-05-22", mediodia: "46", tarde: "--", noche: "63" },
    { date: "2017-05-21", mediodia: "80", tarde: "--", noche: "05" },
    { date: "2017-05-20", mediodia: "06", tarde: "--", noche: "69" },
    { date: "2017-05-19", mediodia: "15", tarde: "--", noche: "20" },
    { date: "2017-05-18", mediodia: "96", tarde: "--", noche: "36" },
    { date: "2017-05-17", mediodia: "24", tarde: "--", noche: "26" },
    { date: "2017-05-16", mediodia: "51", tarde: "--", noche: "50" },
    { date: "2017-05-15", mediodia: "28", tarde: "--", noche: "57" },
    { date: "2017-05-14", mediodia: "53", tarde: "--", noche: "73" },
    { date: "2017-05-13", mediodia: "46", tarde: "--", noche: "94" },
    { date: "2017-05-12", mediodia: "37", tarde: "--", noche: "95" },
    { date: "2017-05-11", mediodia: "57", tarde: "--", noche: "35" },
    { date: "2017-05-10", mediodia: "65", tarde: "--", noche: "89" },
    { date: "2017-05-09", mediodia: "75", tarde: "--", noche: "04" },
    { date: "2017-05-08", mediodia: "70", tarde: "--", noche: "99" },
    { date: "2017-05-07", mediodia: "91", tarde: "--", noche: "20" },
    { date: "2017-05-06", mediodia: "54", tarde: "--", noche: "28" },
    { date: "2017-05-05", mediodia: "55", tarde: "--", noche: "25" },
    { date: "2017-05-04", mediodia: "27", tarde: "--", noche: "50" },
    { date: "2017-05-03", mediodia: "14", tarde: "--", noche: "97" },
    { date: "2017-05-02", mediodia: "97", tarde: "--", noche: "91" },
    { date: "2017-05-01", mediodia: "56", tarde: "--", noche: "22" },

    //   04
    { date: "2017-04-30", mediodia: "41", tarde: "--", noche: "18" },
    { date: "2017-04-29", mediodia: "29", tarde: "--", noche: "50" },
    { date: "2017-04-28", mediodia: "47", tarde: "--", noche: "66" },
    { date: "2017-04-27", mediodia: "58", tarde: "--", noche: "70" },
    { date: "2017-04-26", mediodia: "96", tarde: "--", noche: "73" },
    { date: "2017-04-25", mediodia: "49", tarde: "--", noche: "82" },
    { date: "2017-04-24", mediodia: "03", tarde: "--", noche: "68" },
    { date: "2017-04-23", mediodia: "77", tarde: "--", noche: "46" },
    { date: "2017-04-22", mediodia: "28", tarde: "--", noche: "95" },
    { date: "2017-04-21", mediodia: "43", tarde: "--", noche: "02" },
    { date: "2017-04-20", mediodia: "05", tarde: "--", noche: "83" },
    { date: "2017-04-19", mediodia: "23", tarde: "--", noche: "34" },
    { date: "2017-04-18", mediodia: "02", tarde: "--", noche: "32" },
    { date: "2017-04-17", mediodia: "16", tarde: "--", noche: "10" },
    { date: "2017-04-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-04-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-04-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-04-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2017-04-12", mediodia: "49", tarde: "--", noche: "03" },
    { date: "2017-04-11", mediodia: "98", tarde: "--", noche: "49" },
    { date: "2017-04-10", mediodia: "92", tarde: "--", noche: "77" },
    { date: "2017-04-09", mediodia: "90", tarde: "--", noche: "51" },
    { date: "2017-04-08", mediodia: "69", tarde: "--", noche: "64" },
    { date: "2017-04-07", mediodia: "92", tarde: "--", noche: "79" },
    { date: "2017-04-06", mediodia: "22", tarde: "--", noche: "80" },
    { date: "2017-04-05", mediodia: "03", tarde: "--", noche: "96" },
    { date: "2017-04-04", mediodia: "14", tarde: "--", noche: "01" },
    { date: "2017-04-03", mediodia: "96", tarde: "--", noche: "86" },
    { date: "2017-04-02", mediodia: "31", tarde: "--", noche: "11" },
    { date: "2017-04-01", mediodia: "01", tarde: "--", noche: "20" },

    //   03
    { date: "2017-03-31", mediodia: "--", tarde: "--", noche: "39" },
    { date: "2017-03-30", mediodia: "23", tarde: "--", noche: "11" },
    { date: "2017-03-29", mediodia: "13", tarde: "--", noche: "16" },
    { date: "2017-03-28", mediodia: "39", tarde: "--", noche: "77" },
    { date: "2017-03-27", mediodia: "64", tarde: "--", noche: "27" },
    { date: "2017-03-26", mediodia: "06", tarde: "--", noche: "29" },
    { date: "2017-03-25", mediodia: "14", tarde: "--", noche: "50" },
    { date: "2017-03-24", mediodia: "06", tarde: "--", noche: "27" },
    { date: "2017-03-23", mediodia: "26", tarde: "--", noche: "78" },
    { date: "2017-03-22", mediodia: "47", tarde: "--", noche: "40" },
    { date: "2017-03-21", mediodia: "75", tarde: "--", noche: "85" },
    { date: "2017-03-20", mediodia: "48", tarde: "--", noche: "96" },
    { date: "2017-03-19", mediodia: "08", tarde: "--", noche: "71" },
    { date: "2017-03-18", mediodia: "02", tarde: "--", noche: "27" },
    { date: "2017-03-17", mediodia: "33", tarde: "--", noche: "72" },
    { date: "2017-03-16", mediodia: "77", tarde: "--", noche: "37" },
    { date: "2017-03-15", mediodia: "55", tarde: "--", noche: "58" },
    { date: "2017-03-14", mediodia: "13", tarde: "--", noche: "91" },
    { date: "2017-03-13", mediodia: "73", tarde: "--", noche: "17" },
    { date: "2017-03-12", mediodia: "30", tarde: "--", noche: "05" },
    { date: "2017-03-11", mediodia: "42", tarde: "--", noche: "42" },
    { date: "2017-03-10", mediodia: "62", tarde: "--", noche: "30" },
    { date: "2017-03-09", mediodia: "21", tarde: "--", noche: "34" },
    { date: "2017-03-08", mediodia: "15", tarde: "--", noche: "42" },
    { date: "2017-03-07", mediodia: "75", tarde: "--", noche: "31" },
    { date: "2017-03-06", mediodia: "79", tarde: "--", noche: "78" },
    { date: "2017-03-05", mediodia: "61", tarde: "--", noche: "01" },
    { date: "2017-03-04", mediodia: "49", tarde: "--", noche: "76" },
    { date: "2017-03-03", mediodia: "46", tarde: "--", noche: "98" },
    { date: "2017-03-02", mediodia: "47", tarde: "--", noche: "70" },
    { date: "2017-03-01", mediodia: "--", tarde: "--", noche: "--" },








    //   02
    { date: "2017-02-28", mediodia: "37", tarde: "--", noche: "06" },
    { date: "2017-02-27", mediodia: "54", tarde: "--", noche: "86" },
    { date: "2017-02-26", mediodia: "11", tarde: "--", noche: "04" },
    { date: "2017-02-25", mediodia: "09", tarde: "--", noche: "48" },
    { date: "2017-02-24", mediodia: "65", tarde: "--", noche: "51" },
    { date: "2017-02-23", mediodia: "14", tarde: "--", noche: "24" },
    { date: "2017-02-22", mediodia: "59", tarde: "--", noche: "24" },
    { date: "2017-02-21", mediodia: "83", tarde: "--", noche: "04" },
    { date: "2017-02-20", mediodia: "80", tarde: "--", noche: "17" },
    { date: "2017-02-19", mediodia: "26", tarde: "--", noche: "86" },
    { date: "2017-02-18", mediodia: "32", tarde: "--", noche: "39" },
    { date: "2017-02-17", mediodia: "68", tarde: "--", noche: "24" },
    { date: "2017-02-16", mediodia: "77", tarde: "--", noche: "37" },
    { date: "2017-02-15", mediodia: "07", tarde: "--", noche: "76" },
    { date: "2017-02-14", mediodia: "97", tarde: "--", noche: "65" },
    { date: "2017-02-13", mediodia: "37", tarde: "--", noche: "90" },
    { date: "2017-02-12", mediodia: "62", tarde: "--", noche: "07" },
    { date: "2017-02-11", mediodia: "80", tarde: "--", noche: "91" },
    { date: "2017-02-10", mediodia: "61", tarde: "--", noche: "20" },
    { date: "2017-02-09", mediodia: "13", tarde: "--", noche: "77" },
    { date: "2017-02-08", mediodia: "37", tarde: "--", noche: "53" },
    { date: "2017-02-07", mediodia: "74", tarde: "--", noche: "90" },
    { date: "2017-02-06", mediodia: "69", tarde: "--", noche: "95" },
    { date: "2017-02-05", mediodia: "48", tarde: "--", noche: "74" },
    { date: "2017-02-04", mediodia: "58", tarde: "--", noche: "60" },
    { date: "2017-02-03", mediodia: "48", tarde: "--", noche: "15" },
    { date: "2017-02-02", mediodia: "83", tarde: "--", noche: "94" },
    { date: "2017-02-01", mediodia: "56", tarde: "--", noche: "96" },








    //   01
    { date: "2017-01-31", mediodia: "73", tarde: "--", noche: "49" },
    { date: "2017-01-30", mediodia: "96", tarde: "--", noche: "75" },
    { date: "2017-01-29", mediodia: "87", tarde: "--", noche: "64" },
    { date: "2017-01-28", mediodia: "65", tarde: "--", noche: "49" },
    { date: "2017-01-27", mediodia: "66", tarde: "--", noche: "06" },
    { date: "2017-01-26", mediodia: "92", tarde: "--", noche: "06" },
    { date: "2017-01-25", mediodia: "90", tarde: "--", noche: "94" },
    { date: "2017-01-24", mediodia: "11", tarde: "--", noche: "32" },
    { date: "2017-01-23", mediodia: "38", tarde: "--", noche: "17" },
    { date: "2017-01-22", mediodia: "25", tarde: "--", noche: "77" },
    { date: "2017-01-21", mediodia: "12", tarde: "--", noche: "11" },
    { date: "2017-01-20", mediodia: "10", tarde: "--", noche: "72" },
    { date: "2017-01-19", mediodia: "90", tarde: "--", noche: "50" },
    { date: "2017-01-18", mediodia: "27", tarde: "--", noche: "51" },
    { date: "2017-01-17", mediodia: "52", tarde: "--", noche: "22" },
    { date: "2017-01-16", mediodia: "86", tarde: "--", noche: "47" },
    { date: "2017-01-15", mediodia: "00", tarde: "--", noche: "04" },
    { date: "2017-01-14", mediodia: "45", tarde: "--", noche: "14" },
    { date: "2017-01-13", mediodia: "67", tarde: "--", noche: "85" },
    { date: "2017-01-12", mediodia: "72", tarde: "--", noche: "77" },
    { date: "2017-01-11", mediodia: "20", tarde: "--", noche: "56" },
    { date: "2017-01-10", mediodia: "18", tarde: "--", noche: "93" },
    { date: "2017-01-09", mediodia: "55", tarde: "--", noche: "59" },
    { date: "2017-01-08", mediodia: "93", tarde: "--", noche: "57" },
    { date: "2017-01-07", mediodia: "32", tarde: "--", noche: "63" },
    { date: "2017-01-06", mediodia: "79", tarde: "--", noche: "12" },
    { date: "2017-01-05", mediodia: "14", tarde: "--", noche: "53" },
    { date: "2017-01-04", mediodia: "85", tarde: "--", noche: "55" },
    { date: "2017-01-03", mediodia: "90", tarde: "--", noche: "22" },
    { date: "2017-01-02", mediodia: "45", tarde: "--", noche: "14" },
    { date: "2017-01-01", mediodia: "--", tarde: "--", noche: "--" },
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


// 筛选记录：显示选定日期及其之前的记录
function filterResults() {
    const selectedMonth = monthSelector.value.padStart(2, "0");
    const selectedDay = daySelector.value.padStart(2, "0");
    const selectedDate = `2017-${selectedMonth}-${selectedDay}`;

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