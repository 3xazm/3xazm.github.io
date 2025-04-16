// 模拟数据（默认显示的所有记录）
const lotteryData = [
      //     12
    { date: "2024-12-31", mediodia: "22", tarde: "15", noche: "--" },
    { date: "2024-12-30", mediodia: "61", tarde: "39", noche: "67" },
    { date: "2024-12-29", mediodia: "35", tarde: "19", noche: "49" },
    { date: "2024-12-28", mediodia: "29", tarde: "46", noche: "33" },
    { date: "2024-12-27", mediodia: "61", tarde: "73", noche: "15" },
    { date: "2024-12-26", mediodia: "82", tarde: "14", noche: "70" },
    { date: "2024-12-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2024-12-24", mediodia: "10", tarde: "13", noche: "--" },
    { date: "2024-12-23", mediodia: "85", tarde: "11", noche: "62" },
    { date: "2024-12-22", mediodia: "38", tarde: "76", noche: "97" },
    { date: "2024-12-21", mediodia: "93", tarde: "87", noche: "76" },
    { date: "2024-12-20", mediodia: "40", tarde: "52", noche: "51" },
    { date: "2024-12-19", mediodia: "12", tarde: "72", noche: "08" },
    { date: "2024-12-18", mediodia: "47", tarde: "34", noche: "81" },
    { date: "2024-12-17", mediodia: "52", tarde: "71", noche: "16" },
    { date: "2024-12-16", mediodia: "70", tarde: "02", noche: "67" },
    { date: "2024-12-15", mediodia: "08", tarde: "75", noche: "43" },
    { date: "2024-12-14", mediodia: "95", tarde: "95", noche: "87" },
    { date: "2024-12-13", mediodia: "59", tarde: "88", noche: "37" },
    { date: "2024-12-12", mediodia: "97", tarde: "51", noche: "00" },
    { date: "2024-12-11", mediodia: "56", tarde: "97", noche: "45" },
    { date: "2024-12-10", mediodia: "75", tarde: "94", noche: "19" },
    { date: "2024-12-09", mediodia: "46", tarde: "41", noche: "79" },
    { date: "2024-12-08", mediodia: "55", tarde: "50", noche: "60" },
    { date: "2024-12-07", mediodia: "64", tarde: "94", noche: "45" },
    { date: "2024-12-06", mediodia: "41", tarde: "68", noche: "16" },
    { date: "2024-12-05", mediodia: "27", tarde: "61", noche: "92" },
    { date: "2024-12-04", mediodia: "56", tarde: "58", noche: "44" },
    { date: "2024-12-03", mediodia: "53", tarde: "69", noche: "62" },
    { date: "2024-12-02", mediodia: "18", tarde: "16", noche: "75" },
    { date: "2024-12-01", mediodia: "74", tarde: "61", noche: "26" },



    //     11
    { date: "2024-11-30", mediodia: "67", tarde: "05", noche: "82" },
    { date: "2024-11-29", mediodia: "15", tarde: "35", noche: "74" },
    { date: "2024-11-28", mediodia: "72", tarde: "64", noche: "79" },
    { date: "2024-11-27", mediodia: "40", tarde: "89", noche: "64" },
    { date: "2024-11-26", mediodia: "23", tarde: "46", noche: "37" },
    { date: "2024-11-25", mediodia: "94", tarde: "67", noche: "72" },
    { date: "2024-11-24", mediodia: "31", tarde: "66", noche: "39" },
    { date: "2024-11-23", mediodia: "23", tarde: "52", noche: "83" },
    { date: "2024-11-22", mediodia: "11", tarde: "42", noche: "58" },
    { date: "2024-11-21", mediodia: "86", tarde: "99", noche: "07" },
    { date: "2024-11-20", mediodia: "66", tarde: "98", noche: "94" },
    { date: "2024-11-19", mediodia: "28", tarde: "14", noche: "36" },
    { date: "2024-11-18", mediodia: "27", tarde: "47", noche: "44" },
    { date: "2024-11-17", mediodia: "46", tarde: "98", noche: "87" },
    { date: "2024-11-16", mediodia: "43", tarde: "54", noche: "09" },
    { date: "2024-11-15", mediodia: "42", tarde: "54", noche: "53" },
    { date: "2024-11-14", mediodia: "27", tarde: "92", noche: "31" },
    { date: "2024-11-13", mediodia: "81", tarde: "38", noche: "27" },
    { date: "2024-11-12", mediodia: "40", tarde: "46", noche: "15" },
    { date: "2024-11-11", mediodia: "00", tarde: "14", noche: "93" },
    { date: "2024-11-10", mediodia: "60", tarde: "24", noche: "92" },
    { date: "2024-11-09", mediodia: "19", tarde: "49", noche: "72" },
    { date: "2024-11-08", mediodia: "16", tarde: "86", noche: "44" },
    { date: "2024-11-07", mediodia: "80", tarde: "52", noche: "49" },
    { date: "2024-11-06", mediodia: "82", tarde: "91", noche: "58" },
    { date: "2024-11-05", mediodia: "74", tarde: "85", noche: "30" },
    { date: "2024-11-04", mediodia: "74", tarde: "81", noche: "86" },
    { date: "2024-11-03", mediodia: "69", tarde: "59", noche: "70" },
    { date: "2024-11-02", mediodia: "55", tarde: "04", noche: "74" },
    { date: "2024-11-01", mediodia: "38", tarde: "22", noche: "69" },



    //     10
    { date: "2024-10-31", mediodia: "97", tarde: "85", noche: "47" },
    { date: "2024-10-30", mediodia: "59", tarde: "44", noche: "74" },
    { date: "2024-10-29", mediodia: "31", tarde: "69", noche: "34" },
    { date: "2024-10-28", mediodia: "26", tarde: "58", noche: "15" },
    { date: "2024-10-27", mediodia: "09", tarde: "73", noche: "83" },
    { date: "2024-10-26", mediodia: "60", tarde: "63", noche: "07" },
    { date: "2024-10-25", mediodia: "75", tarde: "36", noche: "63" },
    { date: "2024-10-24", mediodia: "32", tarde: "21", noche: "79" },
    { date: "2024-10-23", mediodia: "27", tarde: "64", noche: "48" },
    { date: "2024-10-22", mediodia: "41", tarde: "99", noche: "82" },
    { date: "2024-10-21", mediodia: "37", tarde: "23", noche: "02" },
    { date: "2024-10-20", mediodia: "87", tarde: "60", noche: "70" },
    { date: "2024-10-19", mediodia: "36", tarde: "53", noche: "77" },
    { date: "2024-10-18", mediodia: "95", tarde: "20", noche: "73" },
    { date: "2024-10-17", mediodia: "78", tarde: "74", noche: "76" },
    { date: "2024-10-16", mediodia: "60", tarde: "14", noche: "48" },
    { date: "2024-10-15", mediodia: "56", tarde: "23", noche: "65" },
    { date: "2024-10-14", mediodia: "85", tarde: "15", noche: "37" },
    { date: "2024-10-13", mediodia: "88", tarde: "27", noche: "58" },
    { date: "2024-10-12", mediodia: "13", tarde: "27", noche: "39" },
    { date: "2024-10-11", mediodia: "41", tarde: "33", noche: "48" },
    { date: "2024-10-10", mediodia: "62", tarde: "83", noche: "50" },
    { date: "2024-10-09", mediodia: "65", tarde: "12", noche: "07" },
    { date: "2024-10-08", mediodia: "32", tarde: "43", noche: "74" },
    { date: "2024-10-07", mediodia: "43", tarde: "88", noche: "02" },
    { date: "2024-10-06", mediodia: "11", tarde: "21", noche: "00" },
    { date: "2024-10-05", mediodia: "14", tarde: "66", noche: "94" },
    { date: "2024-10-04", mediodia: "93", tarde: "95", noche: "80" },
    { date: "2024-10-03", mediodia: "57", tarde: "52", noche: "72" },
    { date: "2024-10-02", mediodia: "97", tarde: "09", noche: "32" },
    { date: "2024-10-01", mediodia: "54", tarde: "35", noche: "26" },



    //     09
    { date: "2024-09-30", mediodia: "83", tarde: "45", noche: "32" },
    { date: "2024-09-29", mediodia: "23", tarde: "59", noche: "50" },
    { date: "2024-09-28", mediodia: "00", tarde: "49", noche: "42" },
    { date: "2024-09-27", mediodia: "94", tarde: "13", noche: "51" },
    { date: "2024-09-26", mediodia: "23", tarde: "54", noche: "54" },
    { date: "2024-09-25", mediodia: "22", tarde: "59", noche: "22" },
    { date: "2024-09-24", mediodia: "23", tarde: "19", noche: "22" },
    { date: "2024-09-23", mediodia: "87", tarde: "48", noche: "01" },
    { date: "2024-09-22", mediodia: "14", tarde: "09", noche: "71" },
    { date: "2024-09-21", mediodia: "15", tarde: "42", noche: "26" },
    { date: "2024-09-20", mediodia: "36", tarde: "77", noche: "90" },
    { date: "2024-09-19", mediodia: "19", tarde: "75", noche: "39" },
    { date: "2024-09-18", mediodia: "88", tarde: "48", noche: "76" },
    { date: "2024-09-17", mediodia: "17", tarde: "48", noche: "46" },
    { date: "2024-09-16", mediodia: "29", tarde: "11", noche: "32" },
    { date: "2024-09-15", mediodia: "84", tarde: "23", noche: "35" },
    { date: "2024-09-14", mediodia: "80", tarde: "06", noche: "92" },
    { date: "2024-09-13", mediodia: "78", tarde: "32", noche: "98" },
    { date: "2024-09-12", mediodia: "04", tarde: "94", noche: "92" },
    { date: "2024-09-11", mediodia: "09", tarde: "18", noche: "93" },
    { date: "2024-09-10", mediodia: "32", tarde: "22", noche: "31" },
    { date: "2024-09-09", mediodia: "04", tarde: "11", noche: "81" },
    { date: "2024-09-08", mediodia: "65", tarde: "66", noche: "01" },
    { date: "2024-09-07", mediodia: "43", tarde: "84", noche: "52" },
    { date: "2024-09-06", mediodia: "05", tarde: "62", noche: "12" },
    { date: "2024-09-05", mediodia: "66", tarde: "90", noche: "72" },
    { date: "2024-09-04", mediodia: "37", tarde: "64", noche: "71" },
    { date: "2024-09-03", mediodia: "83", tarde: "46", noche: "50" },
    { date: "2024-09-02", mediodia: "28", tarde: "61", noche: "84" },
    { date: "2024-09-01", mediodia: "04", tarde: "62", noche: "86" },



    //     08
    { date: "2024-08-31", mediodia: "62", tarde: "04", noche: "83" },
    { date: "2024-08-30", mediodia: "47", tarde: "63", noche: "13" },
    { date: "2024-08-29", mediodia: "59", tarde: "13", noche: "06" },
    { date: "2024-08-28", mediodia: "29", tarde: "94", noche: "44" },
    { date: "2024-08-27", mediodia: "11", tarde: "78", noche: "26" },
    { date: "2024-08-26", mediodia: "96", tarde: "40", noche: "95" },
    { date: "2024-08-25", mediodia: "89", tarde: "19", noche: "48" },
    { date: "2024-08-24", mediodia: "68", tarde: "52", noche: "76" },
    { date: "2024-08-23", mediodia: "96", tarde: "95", noche: "75" },
    { date: "2024-08-22", mediodia: "77", tarde: "19", noche: "47" },
    { date: "2024-08-21", mediodia: "23", tarde: "59", noche: "62" },
    { date: "2024-08-20", mediodia: "08", tarde: "18", noche: "49" },
    { date: "2024-08-19", mediodia: "53", tarde: "88", noche: "91" },
    { date: "2024-08-18", mediodia: "14", tarde: "02", noche: "49" },
    { date: "2024-08-17", mediodia: "59", tarde: "57", noche: "72" },
    { date: "2024-08-16", mediodia: "13", tarde: "74", noche: "14" },
    { date: "2024-08-15", mediodia: "22", tarde: "37", noche: "26" },
    { date: "2024-08-14", mediodia: "37", tarde: "84", noche: "34" },
    { date: "2024-08-13", mediodia: "14", tarde: "69", noche: "59" },
    { date: "2024-08-12", mediodia: "53", tarde: "04", noche: "13" },
    { date: "2024-08-11", mediodia: "73", tarde: "78", noche: "69" },
    { date: "2024-08-10", mediodia: "99", tarde: "86", noche: "34" },
    { date: "2024-08-09", mediodia: "40", tarde: "46", noche: "60" },
    { date: "2024-08-08", mediodia: "90", tarde: "84", noche: "41" },
    { date: "2024-08-07", mediodia: "96", tarde: "00", noche: "50" },
    { date: "2024-08-06", mediodia: "15", tarde: "47", noche: "35" },
    { date: "2024-08-05", mediodia: "30", tarde: "32", noche: "54" },
    { date: "2024-08-04", mediodia: "54", tarde: "74", noche: "94" },
    { date: "2024-08-03", mediodia: "27", tarde: "07", noche: "27" },
    { date: "2024-08-02", mediodia: "12", tarde: "34", noche: "05" },
    { date: "2024-08-01", mediodia: "31", tarde: "00", noche: "51" },



    //     07
    { date: "2024-07-31", mediodia: "44", tarde: "25", noche: "95" },
    { date: "2024-07-30", mediodia: "16", tarde: "79", noche: "94" },
    { date: "2024-07-29", mediodia: "20", tarde: "28", noche: "87" },
    { date: "2024-07-28", mediodia: "66", tarde: "30", noche: "46" },
    { date: "2024-07-27", mediodia: "39", tarde: "13", noche: "53" },
    { date: "2024-07-26", mediodia: "91", tarde: "72", noche: "99" },
    { date: "2024-07-25", mediodia: "40", tarde: "77", noche: "30" },
    { date: "2024-07-24", mediodia: "34", tarde: "96", noche: "80" },
    { date: "2024-07-23", mediodia: "30", tarde: "25", noche: "48" },
    { date: "2024-07-22", mediodia: "33", tarde: "69", noche: "84" },
    { date: "2024-07-21", mediodia: "57", tarde: "17", noche: "53" },
    { date: "2024-07-20", mediodia: "68", tarde: "02", noche: "91" },
    { date: "2024-07-19", mediodia: "06", tarde: "35", noche: "98" },
    { date: "2024-07-18", mediodia: "09", tarde: "40", noche: "14" },
    { date: "2024-07-17", mediodia: "88", tarde: "37", noche: "20" },
    { date: "2024-07-16", mediodia: "44", tarde: "07", noche: "81" },
    { date: "2024-07-15", mediodia: "26", tarde: "75", noche: "25" },
    { date: "2024-07-14", mediodia: "44", tarde: "12", noche: "20" },
    { date: "2024-07-13", mediodia: "14", tarde: "25", noche: "84" },
    { date: "2024-07-12", mediodia: "57", tarde: "62", noche: "05" },
    { date: "2024-07-11", mediodia: "97", tarde: "55", noche: "14" },
    { date: "2024-07-10", mediodia: "80", tarde: "04", noche: "64" },
    { date: "2024-07-09", mediodia: "26", tarde: "29", noche: "83" },
    { date: "2024-07-08", mediodia: "09", tarde: "68", noche: "88" },
    { date: "2024-07-07", mediodia: "89", tarde: "34", noche: "69" },
    { date: "2024-07-06", mediodia: "00", tarde: "41", noche: "76" },
    { date: "2024-07-05", mediodia: "60", tarde: "55", noche: "47" },
    { date: "2024-07-04", mediodia: "22", tarde: "67", noche: "05" },
    { date: "2024-07-03", mediodia: "32", tarde: "73", noche: "92" },
    { date: "2024-07-02", mediodia: "27", tarde: "29", noche: "52" },
    { date: "2024-07-01", mediodia: "75", tarde: "72", noche: "08" },



    //     06
    { date: "2024-06-30", mediodia: "36", tarde: "65", noche: "11" },
    { date: "2024-06-29", mediodia: "64", tarde: "43", noche: "79" },
    { date: "2024-06-28", mediodia: "89", tarde: "43", noche: "20" },
    { date: "2024-06-27", mediodia: "14", tarde: "21", noche: "00" },
    { date: "2024-06-26", mediodia: "65", tarde: "58", noche: "45" },
    { date: "2024-06-25", mediodia: "90", tarde: "88", noche: "70" },
    { date: "2024-06-24", mediodia: "10", tarde: "53", noche: "60" },
    { date: "2024-06-23", mediodia: "50", tarde: "71", noche: "42" },
    { date: "2024-06-22", mediodia: "68", tarde: "42", noche: "14" },
    { date: "2024-06-21", mediodia: "79", tarde: "90", noche: "80" },
    { date: "2024-06-20", mediodia: "63", tarde: "51", noche: "31" },
    { date: "2024-06-19", mediodia: "45", tarde: "87", noche: "29" },
    { date: "2024-06-18", mediodia: "19", tarde: "67", noche: "82" },
    { date: "2024-06-17", mediodia: "07", tarde: "94", noche: "79" },
    { date: "2024-06-16", mediodia: "62", tarde: "56", noche: "38" },
    { date: "2024-06-15", mediodia: "56", tarde: "51", noche: "91" },
    { date: "2024-06-14", mediodia: "95", tarde: "02", noche: "27" },
    { date: "2024-06-13", mediodia: "16", tarde: "45", noche: "13" },
    { date: "2024-06-12", mediodia: "40", tarde: "24", noche: "64" },
    { date: "2024-06-11", mediodia: "10", tarde: "88", noche: "19" },
    { date: "2024-06-10", mediodia: "92", tarde: "76", noche: "67" },
    { date: "2024-06-09", mediodia: "22", tarde: "32", noche: "17" },
    { date: "2024-06-08", mediodia: "08", tarde: "59", noche: "11" },
    { date: "2024-06-07", mediodia: "43", tarde: "82", noche: "38" },
    { date: "2024-06-06", mediodia: "79", tarde: "26", noche: "54" },
    { date: "2024-06-05", mediodia: "68", tarde: "26", noche: "00" },
    { date: "2024-06-04", mediodia: "27", tarde: "85", noche: "08" },
    { date: "2024-06-03", mediodia: "85", tarde: "02", noche: "94" },
    { date: "2024-06-02", mediodia: "52", tarde: "88", noche: "66" },
    { date: "2024-06-01", mediodia: "86", tarde: "75", noche: "35" },



    //     05
    { date: "2024-05-31", mediodia: "72", tarde: "40", noche: "81" },
    { date: "2024-05-30", mediodia: "40", tarde: "08", noche: "23" },
    { date: "2024-05-29", mediodia: "28", tarde: "46", noche: "01" },
    { date: "2024-05-28", mediodia: "56", tarde: "14", noche: "91" },
    { date: "2024-05-27", mediodia: "16", tarde: "76", noche: "52" },
    { date: "2024-05-26", mediodia: "69", tarde: "42", noche: "73" },
    { date: "2024-05-25", mediodia: "51", tarde: "17", noche: "41" },
    { date: "2024-05-24", mediodia: "90", tarde: "80", noche: "88" },
    { date: "2024-05-23", mediodia: "40", tarde: "94", noche: "83" },
    { date: "2024-05-22", mediodia: "33", tarde: "60", noche: "60" },
    { date: "2024-05-21", mediodia: "84", tarde: "38", noche: "48" },
    { date: "2024-05-20", mediodia: "18", tarde: "91", noche: "37" },
    { date: "2024-05-19", mediodia: "45", tarde: "61", noche: "51" },
    { date: "2024-05-18", mediodia: "70", tarde: "96", noche: "47" },
    { date: "2024-05-17", mediodia: "20", tarde: "98", noche: "45" },
    { date: "2024-05-16", mediodia: "07", tarde: "25", noche: "85" },
    { date: "2024-05-15", mediodia: "56", tarde: "89", noche: "27" },
    { date: "2024-05-14", mediodia: "24", tarde: "01", noche: "98" },
    { date: "2024-05-13", mediodia: "91", tarde: "49", noche: "42" },
    { date: "2024-05-12", mediodia: "21", tarde: "13", noche: "98" },
    { date: "2024-05-11", mediodia: "00", tarde: "27", noche: "63" },
    { date: "2024-05-10", mediodia: "04", tarde: "80", noche: "82" },
    { date: "2024-05-09", mediodia: "94", tarde: "39", noche: "22" },
    { date: "2024-05-08", mediodia: "06", tarde: "65", noche: "40" },
    { date: "2024-05-07", mediodia: "97", tarde: "71", noche: "01" },
    { date: "2024-05-06", mediodia: "95", tarde: "12", noche: "91" },
    { date: "2024-05-05", mediodia: "04", tarde: "77", noche: "61" },
    { date: "2024-05-04", mediodia: "52", tarde: "24", noche: "75" },
    { date: "2024-05-03", mediodia: "52", tarde: "84", noche: "05" },
    { date: "2024-05-02", mediodia: "28", tarde: "59", noche: "62" },
    { date: "2024-05-01", mediodia: "19", tarde: "21", noche: "05" },



    //     04
    { date: "2024-04-30", mediodia: "96", tarde: "63", noche: "22" },
    { date: "2024-04-29", mediodia: "93", tarde: "63", noche: "22" },
    { date: "2024-04-28", mediodia: "49", tarde: "13", noche: "29" },
    { date: "2024-04-27", mediodia: "95", tarde: "41", noche: "09" },
    { date: "2024-04-26", mediodia: "13", tarde: "65", noche: "83" },
    { date: "2024-04-25", mediodia: "10", tarde: "92", noche: "35" },
    { date: "2024-04-24", mediodia: "48", tarde: "72", noche: "47" },
    { date: "2024-04-23", mediodia: "11", tarde: "87", noche: "32" },
    { date: "2024-04-22", mediodia: "61", tarde: "89", noche: "03" },
    { date: "2024-04-21", mediodia: "04", tarde: "96", noche: "90" },
    { date: "2024-04-20", mediodia: "14", tarde: "07", noche: "90" },
    { date: "2024-04-19", mediodia: "61", tarde: "21", noche: "77" },
    { date: "2024-04-18", mediodia: "81", tarde: "65", noche: "07" },
    { date: "2024-04-17", mediodia: "73", tarde: "40", noche: "53" },
    { date: "2024-04-16", mediodia: "46", tarde: "00", noche: "16" },
    { date: "2024-04-15", mediodia: "70", tarde: "69", noche: "40" },
    { date: "2024-04-14", mediodia: "12", tarde: "70", noche: "54" },
    { date: "2024-04-13", mediodia: "49", tarde: "17", noche: "59" },
    { date: "2024-04-12", mediodia: "83", tarde: "50", noche: "71" },
    { date: "2024-04-11", mediodia: "61", tarde: "76", noche: "73" },
    { date: "2024-04-10", mediodia: "60", tarde: "38", noche: "84" },
    { date: "2024-04-09", mediodia: "67", tarde: "03", noche: "84" },
    { date: "2024-04-08", mediodia: "16", tarde: "04", noche: "97" },
    { date: "2024-04-07", mediodia: "47", tarde: "71", noche: "93" },
    { date: "2024-04-06", mediodia: "87", tarde: "89", noche: "34" },
    { date: "2024-04-05", mediodia: "68", tarde: "57", noche: "66" },
    { date: "2024-04-04", mediodia: "10", tarde: "62", noche: "83" },
    { date: "2024-04-03", mediodia: "70", tarde: "05", noche: "52" },
    { date: "2024-04-02", mediodia: "23", tarde: "05", noche: "42" },
    { date: "2024-04-01", mediodia: "23", tarde: "05", noche: "42" },



    //     03
    { date: "2024-03-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2024-03-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2024-03-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2024-03-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2024-03-27", mediodia: "96", tarde: "35", noche: "34" },
    { date: "2024-03-26", mediodia: "25", tarde: "50", noche: "33" },
    { date: "2024-03-25", mediodia: "51", tarde: "89", noche: "09" },
    { date: "2024-03-24", mediodia: "03", tarde: "27", noche: "35" },
    { date: "2024-03-23", mediodia: "02", tarde: "95", noche: "54" },
    { date: "2024-03-22", mediodia: "24", tarde: "04", noche: "44" },
    { date: "2024-03-21", mediodia: "36", tarde: "13", noche: "97" },
    { date: "2024-03-20", mediodia: "20", tarde: "48", noche: "15" },
    { date: "2024-03-19", mediodia: "07", tarde: "99", noche: "30" },
    { date: "2024-03-18", mediodia: "33", tarde: "96", noche: "47" },
    { date: "2024-03-17", mediodia: "28", tarde: "01", noche: "71" },
    { date: "2024-03-16", mediodia: "89", tarde: "35", noche: "13" },
    { date: "2024-03-15", mediodia: "83", tarde: "21", noche: "75" },
    { date: "2024-03-14", mediodia: "42", tarde: "05", noche: "92" },
    { date: "2024-03-13", mediodia: "77", tarde: "79", noche: "91" },
    { date: "2024-03-12", mediodia: "60", tarde: "48", noche: "83" },
    { date: "2024-03-11", mediodia: "39", tarde: "22", noche: "70" },
    { date: "2024-03-10", mediodia: "60", tarde: "57", noche: "99" },
    { date: "2024-03-09", mediodia: "00", tarde: "06", noche: "38" },
    { date: "2024-03-08", mediodia: "00", tarde: "59", noche: "59" },
    { date: "2024-03-07", mediodia: "35", tarde: "98", noche: "98" },
    { date: "2024-03-06", mediodia: "14", tarde: "89", noche: "52" },
    { date: "2024-03-05", mediodia: "10", tarde: "45", noche: "50" },
    { date: "2024-03-04", mediodia: "34", tarde: "99", noche: "50" },
    { date: "2024-03-03", mediodia: "96", tarde: "11", noche: "41" },
    { date: "2024-03-02", mediodia: "95", tarde: "25", noche: "17" },
    { date: "2024-03-01", mediodia: "86", tarde: "58", noche: "34" },




    //     02
    { date: "2024-02-29", mediodia: "31", tarde: "98", noche: "72" },
    { date: "2024-02-28", mediodia: "29", tarde: "23", noche: "97" },
    { date: "2024-02-27", mediodia: "89", tarde: "43", noche: "84" },
    { date: "2024-02-26", mediodia: "12", tarde: "49", noche: "53" },
    { date: "2024-02-25", mediodia: "50", tarde: "00", noche: "80" },
    { date: "2024-02-24", mediodia: "58", tarde: "46", noche: "84" },
    { date: "2024-02-23", mediodia: "91", tarde: "35", noche: "06" },
    { date: "2024-02-22", mediodia: "43", tarde: "48", noche: "00" },
    { date: "2024-02-21", mediodia: "72", tarde: "20", noche: "23" },
    { date: "2024-02-20", mediodia: "42", tarde: "97", noche: "30" },
    { date: "2024-02-19", mediodia: "66", tarde: "45", noche: "99" },
    { date: "2024-02-18", mediodia: "51", tarde: "02", noche: "66" },
    { date: "2024-02-17", mediodia: "71", tarde: "16", noche: "28" },
    { date: "2024-02-16", mediodia: "21", tarde: "40", noche: "44" },
    { date: "2024-02-15", mediodia: "40", tarde: "77", noche: "01" },
    { date: "2024-02-14", mediodia: "67", tarde: "80", noche: "89" },
    { date: "2024-02-13", mediodia: "62", tarde: "67", noche: "06" },
    { date: "2024-02-12", mediodia: "74", tarde: "51", noche: "24" },
    { date: "2024-02-11", mediodia: "55", tarde: "60", noche: "94" },
    { date: "2024-02-10", mediodia: "30", tarde: "13", noche: "11" },
    { date: "2024-02-09", mediodia: "26", tarde: "92", noche: "74" },
    { date: "2024-02-08", mediodia: "90", tarde: "28", noche: "73" },
    { date: "2024-02-07", mediodia: "53", tarde: "98", noche: "00" },
    { date: "2024-02-06", mediodia: "13", tarde: "93", noche: "80" },
    { date: "2024-02-05", mediodia: "21", tarde: "36", noche: "19" },
    { date: "2024-02-04", mediodia: "44", tarde: "81", noche: "89" },
    { date: "2024-02-03", mediodia: "64", tarde: "14", noche: "01" },
    { date: "2024-02-02", mediodia: "58", tarde: "69", noche: "39" },
    { date: "2024-02-01", mediodia: "13", tarde: "85", noche: "06" },


    
    //     01
    { date: "2024-01-31", mediodia: "01", tarde: "19", noche: "17" },
    { date: "2024-01-30", mediodia: "14", tarde: "38", noche: "27" },
    { date: "2024-01-29", mediodia: "51", tarde: "01", noche: "33" },
    { date: "2024-01-28", mediodia: "33", tarde: "49", noche: "07" },
    { date: "2024-01-27", mediodia: "69", tarde: "44", noche: "01" },
    { date: "2024-01-26", mediodia: "87", tarde: "89", noche: "10" },
    { date: "2024-01-25", mediodia: "64", tarde: "20", noche: "64" },
    { date: "2024-01-24", mediodia: "33", tarde: "19", noche: "76" },
    { date: "2024-01-23", mediodia: "28", tarde: "47", noche: "51" },
    { date: "2024-01-22", mediodia: "45", tarde: "63", noche: "95" },
    { date: "2024-01-21", mediodia: "95", tarde: "60", noche: "44" },
    { date: "2024-01-20", mediodia: "48", tarde: "62", noche: "67" },
    { date: "2024-01-19", mediodia: "19", tarde: "62", noche: "98" },
    { date: "2024-01-18", mediodia: "29", tarde: "40", noche: "20" },
    { date: "2024-01-17", mediodia: "55", tarde: "10", noche: "62" },
    { date: "2024-01-16", mediodia: "66", tarde: "79", noche: "49" },
    { date: "2024-01-15", mediodia: "75", tarde: "99", noche: "92" },
    { date: "2024-01-14", mediodia: "76", tarde: "36", noche: "41" },
    { date: "2024-01-13", mediodia: "73", tarde: "11", noche: "40" },
    { date: "2024-01-12", mediodia: "76", tarde: "42", noche: "03" },
    { date: "2024-01-11", mediodia: "01", tarde: "24", noche: "08" },
    { date: "2024-01-10", mediodia: "70", tarde: "77", noche: "24" },
    { date: "2024-01-09", mediodia: "58", tarde: "33", noche: "66" },
    { date: "2024-01-08", mediodia: "27", tarde: "69", noche: "89" },
    { date: "2024-01-07", mediodia: "98", tarde: "57", noche: "60" },
    { date: "2024-01-06", mediodia: "77", tarde: "92", noche: "68" },
    { date: "2024-01-05", mediodia: "64", tarde: "74", noche: "73" },
    { date: "2024-01-04", mediodia: "88", tarde: "42", noche: "51" },
    { date: "2024-01-03", mediodia: "97", tarde: "94", noche: "30" },
    { date: "2024-01-02", mediodia: "34", tarde: "14", noche: "37" },
    { date: "2024-01-01", mediodia: "--", tarde: "--", noche: "--" },
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
    const selectedDate = `2024-${selectedMonth}-${selectedDay}`;

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