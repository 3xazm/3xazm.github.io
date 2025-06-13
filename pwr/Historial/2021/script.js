// 模拟数据（默认显示的所有记录）
const lotteryData = [
    //   12
    /*
    { date: "2021-12-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-10", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-12-08", mediodia: "--", tarde: "--", noche: "--" },*/
    { date: "2021-12-07", mediodia: "77", tarde: "--", noche: "17" },
    { date: "2021-12-06", mediodia: "29", tarde: "--", noche: "74" },
    { date: "2021-12-05", mediodia: "05", tarde: "--", noche: "29" },
    { date: "2021-12-04", mediodia: "60", tarde: "--", noche: "81" },
    { date: "2021-12-03", mediodia: "92", tarde: "--", noche: "63" },
    { date: "2021-12-02", mediodia: "36", tarde: "--", noche: "34" },
    { date: "2021-12-01", mediodia: "79", tarde: "--", noche: "16" },







    //   11
    { date: "2021-11-30", mediodia: "93", tarde: "--", noche: "44" },
    { date: "2021-11-29", mediodia: "51", tarde: "--", noche: "11" },
    { date: "2021-11-28", mediodia: "15", tarde: "--", noche: "25" },
    { date: "2021-11-27", mediodia: "39", tarde: "--", noche: "12" },
    { date: "2021-11-26", mediodia: "55", tarde: "--", noche: "35" },
    { date: "2021-11-25", mediodia: "46", tarde: "--", noche: "70" },
    { date: "2021-11-24", mediodia: "77", tarde: "--", noche: "39" },
    { date: "2021-11-23", mediodia: "58", tarde: "--", noche: "09" },
    { date: "2021-11-22", mediodia: "99", tarde: "--", noche: "32" },
    { date: "2021-11-21", mediodia: "80", tarde: "--", noche: "52" },
    { date: "2021-11-20", mediodia: "53", tarde: "--", noche: "13" },
    { date: "2021-11-19", mediodia: "46", tarde: "--", noche: "14" },
    { date: "2021-11-18", mediodia: "51", tarde: "--", noche: "36" },
    { date: "2021-11-17", mediodia: "91", tarde: "--", noche: "14" },
    { date: "2021-11-16", mediodia: "87", tarde: "--", noche: "74" },
    { date: "2021-11-15", mediodia: "95", tarde: "--", noche: "00" },
    { date: "2021-11-14", mediodia: "60", tarde: "--", noche: "39" },
    { date: "2021-11-13", mediodia: "51", tarde: "--", noche: "31" },
    { date: "2021-11-12", mediodia: "98", tarde: "--", noche: "92" },
    { date: "2021-11-11", mediodia: "76", tarde: "--", noche: "92" },
    { date: "2021-11-10", mediodia: "69", tarde: "--", noche: "29" },
    { date: "2021-11-09", mediodia: "00", tarde: "--", noche: "74" },
    { date: "2021-11-08", mediodia: "60", tarde: "--", noche: "47" },
    { date: "2021-11-07", mediodia: "35", tarde: "--", noche: "46" },
    { date: "2021-11-06", mediodia: "07", tarde: "--", noche: "15" },
    { date: "2021-11-05", mediodia: "91", tarde: "--", noche: "77" },
    { date: "2021-11-04", mediodia: "82", tarde: "--", noche: "75" },
    { date: "2021-11-03", mediodia: "22", tarde: "--", noche: "41" },
    { date: "2021-11-02", mediodia: "60", tarde: "--", noche: "36" },
    { date: "2021-11-01", mediodia: "06", tarde: "--", noche: "42" },

    //   10
    { date: "2021-10-31", mediodia: "46", tarde: "--", noche: "26" },
    { date: "2021-10-30", mediodia: "26", tarde: "--", noche: "49" },
    { date: "2021-10-29", mediodia: "53", tarde: "--", noche: "44" },
    { date: "2021-10-28", mediodia: "88", tarde: "--", noche: "34" },
    { date: "2021-10-27", mediodia: "37", tarde: "--", noche: "47" },
    { date: "2021-10-26", mediodia: "39", tarde: "--", noche: "40" },
    { date: "2021-10-25", mediodia: "78", tarde: "--", noche: "22" },
    { date: "2021-10-24", mediodia: "80", tarde: "--", noche: "44" },
    { date: "2021-10-23", mediodia: "09", tarde: "--", noche: "31" },
    { date: "2021-10-22", mediodia: "99", tarde: "--", noche: "83" },
    { date: "2021-10-21", mediodia: "14", tarde: "--", noche: "84" },
    { date: "2021-10-20", mediodia: "99", tarde: "--", noche: "97" },
    { date: "2021-10-19", mediodia: "49", tarde: "--", noche: "70" },
    { date: "2021-10-18", mediodia: "63", tarde: "--", noche: "12" },
    { date: "2021-10-17", mediodia: "05", tarde: "--", noche: "81" },
    { date: "2021-10-16", mediodia: "95", tarde: "--", noche: "03" },
    { date: "2021-10-15", mediodia: "27", tarde: "--", noche: "35" },
    { date: "2021-10-14", mediodia: "11", tarde: "--", noche: "49" },
    { date: "2021-10-13", mediodia: "40", tarde: "--", noche: "48" },
    { date: "2021-10-12", mediodia: "51", tarde: "--", noche: "58" },
    { date: "2021-10-11", mediodia: "54", tarde: "--", noche: "62" },
    { date: "2021-10-10", mediodia: "62", tarde: "--", noche: "68" },
    { date: "2021-10-09", mediodia: "99", tarde: "--", noche: "97" },
    { date: "2021-10-08", mediodia: "44", tarde: "--", noche: "90" },
    { date: "2021-10-07", mediodia: "16", tarde: "--", noche: "14" },
    { date: "2021-10-06", mediodia: "47", tarde: "--", noche: "96" },
    { date: "2021-10-05", mediodia: "91", tarde: "--", noche: "09" },
    { date: "2021-10-04", mediodia: "48", tarde: "--", noche: "26" },
    { date: "2021-10-03", mediodia: "37", tarde: "--", noche: "12" },
    { date: "2021-10-02", mediodia: "84", tarde: "--", noche: "32" },
    { date: "2021-10-01", mediodia: "92", tarde: "--", noche: "72" },

    //   09
    { date: "2021-09-30", mediodia: "48", tarde: "--", noche: "18" },
    { date: "2021-09-29", mediodia: "52", tarde: "--", noche: "69" },
    { date: "2021-09-28", mediodia: "23", tarde: "--", noche: "31" },
    { date: "2021-09-27", mediodia: "31", tarde: "--", noche: "52" },
    { date: "2021-09-26", mediodia: "31", tarde: "--", noche: "65" },
    { date: "2021-09-25", mediodia: "62", tarde: "--", noche: "81" },
    { date: "2021-09-24", mediodia: "30", tarde: "--", noche: "97" },
    { date: "2021-09-23", mediodia: "25", tarde: "--", noche: "36" },
    { date: "2021-09-22", mediodia: "70", tarde: "--", noche: "02" },
    { date: "2021-09-21", mediodia: "80", tarde: "--", noche: "24" },
    { date: "2021-09-20", mediodia: "48", tarde: "--", noche: "86" },
    { date: "2021-09-19", mediodia: "15", tarde: "--", noche: "61" },
    { date: "2021-09-18", mediodia: "87", tarde: "--", noche: "53" },
    { date: "2021-09-17", mediodia: "80", tarde: "--", noche: "77" },
    { date: "2021-09-16", mediodia: "42", tarde: "--", noche: "38" },
    { date: "2021-09-15", mediodia: "99", tarde: "--", noche: "02" },
    { date: "2021-09-14", mediodia: "37", tarde: "--", noche: "19" },
    { date: "2021-09-13", mediodia: "16", tarde: "--", noche: "96" },
    { date: "2021-09-12", mediodia: "24", tarde: "--", noche: "82" },
    { date: "2021-09-11", mediodia: "19", tarde: "--", noche: "88" },
    { date: "2021-09-10", mediodia: "91", tarde: "--", noche: "39" },
    { date: "2021-09-09", mediodia: "66", tarde: "--", noche: "64" },
    { date: "2021-09-08", mediodia: "43", tarde: "--", noche: "72" },
    { date: "2021-09-07", mediodia: "08", tarde: "--", noche: "70" },
    { date: "2021-09-06", mediodia: "60", tarde: "--", noche: "60" },
    { date: "2021-09-05", mediodia: "83", tarde: "--", noche: "07" },
    { date: "2021-09-04", mediodia: "14", tarde: "--", noche: "12" },
    { date: "2021-09-03", mediodia: "42", tarde: "--", noche: "01" },
    { date: "2021-09-02", mediodia: "76", tarde: "--", noche: "23" },
    { date: "2021-09-01", mediodia: "05", tarde: "--", noche: "30" },
    


    //   08
    { date: "2021-08-31", mediodia: "20", tarde: "--", noche: "67" },
    { date: "2021-08-30", mediodia: "86", tarde: "--", noche: "75" },
    { date: "2021-08-29", mediodia: "87", tarde: "--", noche: "94" },
    { date: "2021-08-28", mediodia: "13", tarde: "--", noche: "69" },
    { date: "2021-08-27", mediodia: "95", tarde: "--", noche: "16" },
    { date: "2021-08-26", mediodia: "22", tarde: "--", noche: "81" },
    { date: "2021-08-25", mediodia: "05", tarde: "--", noche: "35" },
    { date: "2021-08-24", mediodia: "32", tarde: "--", noche: "93" },
    { date: "2021-08-23", mediodia: "13", tarde: "--", noche: "35" },
    { date: "2021-08-22", mediodia: "05", tarde: "--", noche: "30" },
    { date: "2021-08-21", mediodia: "97", tarde: "--", noche: "73" },
    { date: "2021-08-20", mediodia: "42", tarde: "--", noche: "85" },
    { date: "2021-08-19", mediodia: "19", tarde: "--", noche: "45" },
    { date: "2021-08-18", mediodia: "50", tarde: "--", noche: "96" },
    { date: "2021-08-17", mediodia: "14", tarde: "--", noche: "07" },
    { date: "2021-08-16", mediodia: "49", tarde: "--", noche: "65" },
    { date: "2021-08-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-08-14", mediodia: "82", tarde: "--", noche: "01" },
    { date: "2021-08-13", mediodia: "91", tarde: "--", noche: "30" },
    { date: "2021-08-12", mediodia: "81", tarde: "--", noche: "63" },
    { date: "2021-08-11", mediodia: "41", tarde: "--", noche: "88" },
    { date: "2021-08-10", mediodia: "73", tarde: "--", noche: "46" },
    { date: "2021-08-09", mediodia: "92", tarde: "--", noche: "67" },
    { date: "2021-08-08", mediodia: "97", tarde: "--", noche: "07" },
    { date: "2021-08-07", mediodia: "17", tarde: "--", noche: "39" },
    { date: "2021-08-06", mediodia: "41", tarde: "--", noche: "07" },
    { date: "2021-08-05", mediodia: "16", tarde: "--", noche: "37" },
    { date: "2021-08-04", mediodia: "71", tarde: "--", noche: "45" },
    { date: "2021-08-03", mediodia: "08", tarde: "--", noche: "00" },
    { date: "2021-08-02", mediodia: "99", tarde: "--", noche: "85" },
    { date: "2021-08-01", mediodia: "09", tarde: "--", noche: "60" },

    //   07
    { date: "2021-07-31", mediodia: "32", tarde: "--", noche: "99" },
    { date: "2021-07-30", mediodia: "73", tarde: "--", noche: "61" },
    { date: "2021-07-29", mediodia: "96", tarde: "--", noche: "31" },
    { date: "2021-07-28", mediodia: "05", tarde: "--", noche: "88" },
    { date: "2021-07-27", mediodia: "17", tarde: "--", noche: "49" },
    { date: "2021-07-26", mediodia: "59", tarde: "--", noche: "57" },
    { date: "2021-07-25", mediodia: "38", tarde: "--", noche: "31" },
    { date: "2021-07-24", mediodia: "30", tarde: "--", noche: "99" },
    { date: "2021-07-23", mediodia: "03", tarde: "--", noche: "76" },
    { date: "2021-07-22", mediodia: "00", tarde: "--", noche: "27" },
    { date: "2021-07-21", mediodia: "05", tarde: "--", noche: "86" },
    { date: "2021-07-20", mediodia: "60", tarde: "--", noche: "77" },
    { date: "2021-07-19", mediodia: "32", tarde: "--", noche: "42" },
    { date: "2021-07-18", mediodia: "49", tarde: "--", noche: "35" },
    { date: "2021-07-17", mediodia: "74", tarde: "--", noche: "23" },
    { date: "2021-07-16", mediodia: "42", tarde: "--", noche: "78" },
    { date: "2021-07-15", mediodia: "40", tarde: "--", noche: "12" },
    { date: "2021-07-14", mediodia: "45", tarde: "--", noche: "74" },
    { date: "2021-07-13", mediodia: "00", tarde: "--", noche: "42" },
    { date: "2021-07-12", mediodia: "88", tarde: "--", noche: "78" },
    { date: "2021-07-11", mediodia: "78", tarde: "--", noche: "32" },
    { date: "2021-07-10", mediodia: "49", tarde: "--", noche: "61" },
    { date: "2021-07-09", mediodia: "26", tarde: "--", noche: "18" },
    { date: "2021-07-08", mediodia: "36", tarde: "--", noche: "07" },
    { date: "2021-07-07", mediodia: "37", tarde: "--", noche: "42" },
    { date: "2021-07-06", mediodia: "82", tarde: "--", noche: "60" },
    { date: "2021-07-05", mediodia: "86", tarde: "--", noche: "95" },
    { date: "2021-07-04", mediodia: "09", tarde: "--", noche: "84" },
    { date: "2021-07-03", mediodia: "93", tarde: "--", noche: "41" },
    { date: "2021-07-02", mediodia: "35", tarde: "--", noche: "01" },
    { date: "2021-07-01", mediodia: "02", tarde: "--", noche: "08" },

    //   06
    { date: "2021-06-30", mediodia: "17", tarde: "--", noche: "48" },
    { date: "2021-06-29", mediodia: "99", tarde: "--", noche: "92" },
    { date: "2021-06-28", mediodia: "73", tarde: "--", noche: "97" },
    { date: "2021-06-27", mediodia: "36", tarde: "--", noche: "04" },
    { date: "2021-06-26", mediodia: "05", tarde: "--", noche: "53" },
    { date: "2021-06-25", mediodia: "48", tarde: "--", noche: "67" },
    { date: "2021-06-24", mediodia: "69", tarde: "--", noche: "08" },
    { date: "2021-06-23", mediodia: "90", tarde: "--", noche: "61" },
    { date: "2021-06-22", mediodia: "71", tarde: "--", noche: "86" },
    { date: "2021-06-21", mediodia: "12", tarde: "--", noche: "49" },
    { date: "2021-06-20", mediodia: "71", tarde: "--", noche: "66" },
    { date: "2021-06-19", mediodia: "39", tarde: "--", noche: "05" },
    { date: "2021-06-18", mediodia: "91", tarde: "--", noche: "36" },
    { date: "2021-06-17", mediodia: "11", tarde: "--", noche: "80" },
    { date: "2021-06-16", mediodia: "23", tarde: "--", noche: "22" },
    { date: "2021-06-15", mediodia: "75", tarde: "--", noche: "31" },
    { date: "2021-06-14", mediodia: "08", tarde: "--", noche: "48" },
    { date: "2021-06-13", mediodia: "76", tarde: "--", noche: "59" },
    { date: "2021-06-12", mediodia: "34", tarde: "--", noche: "17" },
    { date: "2021-06-11", mediodia: "77", tarde: "--", noche: "15" },
    { date: "2021-06-10", mediodia: "41", tarde: "--", noche: "78" },
    { date: "2021-06-09", mediodia: "70", tarde: "--", noche: "04" },
    { date: "2021-06-08", mediodia: "23", tarde: "--", noche: "99" },
    { date: "2021-06-07", mediodia: "69", tarde: "--", noche: "80" },
    { date: "2021-06-06", mediodia: "54", tarde: "--", noche: "59" },
    { date: "2021-06-05", mediodia: "79", tarde: "--", noche: "30" },
    { date: "2021-06-04", mediodia: "40", tarde: "--", noche: "12" },
    { date: "2021-06-03", mediodia: "96", tarde: "--", noche: "05" },
    { date: "2021-06-02", mediodia: "10", tarde: "--", noche: "04" },
    { date: "2021-06-01", mediodia: "28", tarde: "--", noche: "88" },

    //   05
    { date: "2021-05-31", mediodia: "70", tarde: "--", noche: "41" },
    { date: "2021-05-30", mediodia: "90", tarde: "--", noche: "87" },
    { date: "2021-05-29", mediodia: "18", tarde: "--", noche: "01" },
    { date: "2021-05-28", mediodia: "75", tarde: "--", noche: "07" },
    { date: "2021-05-27", mediodia: "99", tarde: "--", noche: "25" },
    { date: "2021-05-26", mediodia: "19", tarde: "--", noche: "48" },
    { date: "2021-05-25", mediodia: "68", tarde: "--", noche: "79" },
    { date: "2021-05-24", mediodia: "41", tarde: "--", noche: "52" },
    { date: "2021-05-23", mediodia: "67", tarde: "--", noche: "73" },
    { date: "2021-05-22", mediodia: "24", tarde: "--", noche: "89" },
    { date: "2021-05-21", mediodia: "10", tarde: "--", noche: "21" },
    { date: "2021-05-20", mediodia: "22", tarde: "--", noche: "87" },
    { date: "2021-05-19", mediodia: "30", tarde: "--", noche: "29" },
    { date: "2021-05-18", mediodia: "73", tarde: "--", noche: "51" },
    { date: "2021-05-17", mediodia: "84", tarde: "--", noche: "61" },
    { date: "2021-05-16", mediodia: "03", tarde: "--", noche: "79" },
    { date: "2021-05-15", mediodia: "00", tarde: "--", noche: "20" },
    { date: "2021-05-14", mediodia: "92", tarde: "--", noche: "36" },
    { date: "2021-05-13", mediodia: "95", tarde: "--", noche: "76" },
    { date: "2021-05-12", mediodia: "88", tarde: "--", noche: "33" },
    { date: "2021-05-11", mediodia: "58", tarde: "--", noche: "56" },
    { date: "2021-05-10", mediodia: "76", tarde: "--", noche: "58" },
    { date: "2021-05-09", mediodia: "99", tarde: "--", noche: "29" },
    { date: "2021-05-08", mediodia: "04", tarde: "--", noche: "19" },
    { date: "2021-05-07", mediodia: "41", tarde: "--", noche: "81" },
    { date: "2021-05-06", mediodia: "33", tarde: "--", noche: "24" },
    { date: "2021-05-05", mediodia: "57", tarde: "--", noche: "28" },
    { date: "2021-05-04", mediodia: "92", tarde: "--", noche: "65" },
    { date: "2021-05-03", mediodia: "60", tarde: "--", noche: "73" },
    { date: "2021-05-02", mediodia: "41", tarde: "--", noche: "80" },
    { date: "2021-05-01", mediodia: "52", tarde: "--", noche: "22" },









    //  04
    { date: "2021-04-30", mediodia: "00", tarde: "--", noche: "99" },
    { date: "2021-04-29", mediodia: "89", tarde: "--", noche: "01" },
    { date: "2021-04-28", mediodia: "43", tarde: "--", noche: "79" },
    { date: "2021-04-27", mediodia: "14", tarde: "--", noche: "68" },
    { date: "2021-04-26", mediodia: "49", tarde: "--", noche: "68" },
    { date: "2021-04-25", mediodia: "58", tarde: "--", noche: "60" },
    { date: "2021-04-24", mediodia: "49", tarde: "--", noche: "71" },
    { date: "2021-04-23", mediodia: "47", tarde: "--", noche: "65" },
    { date: "2021-04-22", mediodia: "73", tarde: "--", noche: "84" },
    { date: "2021-04-21", mediodia: "14", tarde: "--", noche: "76" },
    { date: "2021-04-20", mediodia: "82", tarde: "--", noche: "94" },
    { date: "2021-04-19", mediodia: "13", tarde: "--", noche: "69" },
    { date: "2021-04-18", mediodia: "75", tarde: "--", noche: "34" },
    { date: "2021-04-17", mediodia: "62", tarde: "--", noche: "68" },
    { date: "2021-04-16", mediodia: "01", tarde: "--", noche: "03" },
    { date: "2021-04-15", mediodia: "41", tarde: "--", noche: "74" },
    { date: "2021-04-14", mediodia: "64", tarde: "--", noche: "03" },
    { date: "2021-04-13", mediodia: "92", tarde: "--", noche: "50" },
    { date: "2021-04-12", mediodia: "26", tarde: "--", noche: "56" },
    { date: "2021-04-11", mediodia: "03", tarde: "--", noche: "09" },
    { date: "2021-04-10", mediodia: "83", tarde: "--", noche: "57" },
    { date: "2021-04-09", mediodia: "46", tarde: "--", noche: "18" },
    { date: "2021-04-08", mediodia: "86", tarde: "--", noche: "23" },
    { date: "2021-04-07", mediodia: "05", tarde: "--", noche: "91" },
    { date: "2021-04-06", mediodia: "53", tarde: "--", noche: "05" },
    { date: "2021-04-05", mediodia: "03", tarde: "--", noche: "73" },
    { date: "2021-04-04", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-04-03", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-04-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2021-04-01", mediodia: "--", tarde: "--", noche: "--" },









    //  03
    { date: "2021-03-31", mediodia: "80", tarde: "--", noche: "81" },
    { date: "2021-03-30", mediodia: "53", tarde: "--", noche: "70" },
    { date: "2021-03-29", mediodia: "79", tarde: "--", noche: "16" },
    { date: "2021-03-28", mediodia: "31", tarde: "--", noche: "89" },
    { date: "2021-03-27", mediodia: "15", tarde: "--", noche: "25" },
    { date: "2021-03-26", mediodia: "69", tarde: "--", noche: "33" },
    { date: "2021-03-25", mediodia: "77", tarde: "--", noche: "53" },
    { date: "2021-03-24", mediodia: "06", tarde: "--", noche: "10" },
    { date: "2021-03-23", mediodia: "43", tarde: "--", noche: "43" },
    { date: "2021-03-22", mediodia: "20", tarde: "--", noche: "61" },
    { date: "2021-03-21", mediodia: "64", tarde: "--", noche: "51" },
    { date: "2021-03-20", mediodia: "04", tarde: "--", noche: "25" },
    { date: "2021-03-19", mediodia: "40", tarde: "--", noche: "96" },
    { date: "2021-03-18", mediodia: "08", tarde: "--", noche: "20" },
    { date: "2021-03-17", mediodia: "39", tarde: "--", noche: "16" },
    { date: "2021-03-16", mediodia: "03", tarde: "--", noche: "53" },
    { date: "2021-03-15", mediodia: "92", tarde: "--", noche: "19" },
    { date: "2021-03-14", mediodia: "68", tarde: "--", noche: "35" },
    { date: "2021-03-13", mediodia: "33", tarde: "--", noche: "37" },
    { date: "2021-03-12", mediodia: "95", tarde: "--", noche: "11" },
    { date: "2021-03-11", mediodia: "41", tarde: "--", noche: "39" },
    { date: "2021-03-10", mediodia: "96", tarde: "--", noche: "95" },
    { date: "2021-03-09", mediodia: "28", tarde: "--", noche: "79" },
    { date: "2021-03-08", mediodia: "12", tarde: "--", noche: "39" },
    { date: "2021-03-07", mediodia: "75", tarde: "--", noche: "25" },
    { date: "2021-03-06", mediodia: "43", tarde: "--", noche: "94" },
    { date: "2021-03-05", mediodia: "89", tarde: "--", noche: "41" },
    { date: "2021-03-04", mediodia: "03", tarde: "--", noche: "63" },
    { date: "2021-03-03", mediodia: "97", tarde: "--", noche: "56" },
    { date: "2021-03-02", mediodia: "60", tarde: "--", noche: "14" },
    { date: "2021-03-01", mediodia: "17", tarde: "--", noche: "36" },









    //  02
    { date: "2021-02-28", mediodia: "39", tarde: "--", noche: "42" },
    { date: "2021-02-27", mediodia: "74", tarde: "--", noche: "89" },
    { date: "2021-02-26", mediodia: "14", tarde: "--", noche: "59" },
    { date: "2021-02-25", mediodia: "04", tarde: "--", noche: "46" },
    { date: "2021-02-24", mediodia: "14", tarde: "--", noche: "52" },
    { date: "2021-02-23", mediodia: "04", tarde: "--", noche: "57" },
    { date: "2021-02-22", mediodia: "44", tarde: "--", noche: "90" },
    { date: "2021-02-21", mediodia: "70", tarde: "--", noche: "17" },
    { date: "2021-02-20", mediodia: "68", tarde: "--", noche: "16" },
    { date: "2021-02-19", mediodia: "43", tarde: "--", noche: "71" },
    { date: "2021-02-18", mediodia: "10", tarde: "--", noche: "86" },
    { date: "2021-02-17", mediodia: "87", tarde: "--", noche: "04" },
    { date: "2021-02-16", mediodia: "20", tarde: "--", noche: "07" },
    { date: "2021-02-15", mediodia: "54", tarde: "--", noche: "31" },
    { date: "2021-02-14", mediodia: "75", tarde: "--", noche: "78" },
    { date: "2021-02-13", mediodia: "79", tarde: "--", noche: "07" },
    { date: "2021-02-12", mediodia: "83", tarde: "--", noche: "27" },
    { date: "2021-02-11", mediodia: "63", tarde: "--", noche: "57" },
    { date: "2021-02-10", mediodia: "97", tarde: "--", noche: "47" },
    { date: "2021-02-09", mediodia: "66", tarde: "--", noche: "03" },
    { date: "2021-02-08", mediodia: "48", tarde: "--", noche: "42" },
    { date: "2021-02-07", mediodia: "73", tarde: "--", noche: "48" },
    { date: "2021-02-06", mediodia: "20", tarde: "--", noche: "60" },
    { date: "2021-02-05", mediodia: "53", tarde: "--", noche: "37" },
    { date: "2021-02-04", mediodia: "49", tarde: "--", noche: "58" },
    { date: "2021-02-03", mediodia: "10", tarde: "--", noche: "59" },
    { date: "2021-02-02", mediodia: "21", tarde: "--", noche: "44" },
    { date: "2021-02-01", mediodia: "37", tarde: "--", noche: "55" },










    //  01
    { date: "2021-01-31", mediodia: "62", tarde: "--", noche: "02" },
    { date: "2021-01-30", mediodia: "92", tarde: "--", noche: "76" },
    { date: "2021-01-29", mediodia: "43", tarde: "--", noche: "51" },
    { date: "2021-01-28", mediodia: "12", tarde: "--", noche: "91" },
    { date: "2021-01-27", mediodia: "07", tarde: "--", noche: "91" },
    { date: "2021-01-26", mediodia: "88", tarde: "--", noche: "01" },
    { date: "2021-01-25", mediodia: "91", tarde: "--", noche: "32" },
    { date: "2021-01-24", mediodia: "87", tarde: "--", noche: "97" },
    { date: "2021-01-23", mediodia: "18", tarde: "--", noche: "49" },
    { date: "2021-01-22", mediodia: "19", tarde: "--", noche: "33" },
    { date: "2021-01-21", mediodia: "52", tarde: "--", noche: "76" },
    { date: "2021-01-20", mediodia: "41", tarde: "--", noche: "65" },
    { date: "2021-01-19", mediodia: "84", tarde: "--", noche: "85" },
    { date: "2021-01-18", mediodia: "09", tarde: "--", noche: "48" },
    { date: "2021-01-17", mediodia: "19", tarde: "--", noche: "80" },
    { date: "2021-01-16", mediodia: "83", tarde: "--", noche: "69" },
    { date: "2021-01-15", mediodia: "53", tarde: "--", noche: "18" },
    { date: "2021-01-14", mediodia: "88", tarde: "--", noche: "52" },
    { date: "2021-01-13", mediodia: "90", tarde: "--", noche: "41" },
    { date: "2021-01-12", mediodia: "34", tarde: "--", noche: "99" },
    { date: "2021-01-11", mediodia: "05", tarde: "--", noche: "22" },
    { date: "2021-01-10", mediodia: "09", tarde: "--", noche: "77" },
    { date: "2021-01-09", mediodia: "85", tarde: "--", noche: "01" },
    { date: "2021-01-08", mediodia: "59", tarde: "--", noche: "27" },
    { date: "2021-01-07", mediodia: "71", tarde: "--", noche: "40" },
    { date: "2021-01-06", mediodia: "84", tarde: "--", noche: "99" },
    { date: "2021-01-05", mediodia: "77", tarde: "--", noche: "72" },
    { date: "2021-01-04", mediodia: "97", tarde: "--", noche: "20" },
    { date: "2021-01-03", mediodia: "60", tarde: "--", noche: "51" },
    { date: "2021-01-02", mediodia: "75", tarde: "--", noche: "97" },
    { date: "2021-01-01", mediodia: "--", tarde: "--", noche: "--" }
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
    const selectedDate = `2021-${selectedMonth}-${selectedDay}`;

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
        "2025": "/pwr/index.html",
        "2024": "/pwr/Historial/2024/",
        "2023": "/pwr/Historial/2023/",
        "2022": "/pwr/Historial/2022/",
        "2021": "/pwr/Historial/2021/",
        "2020": "/pwr/Historial/2020/",
        "2019": "/pwr/Historial/2019/",
        "2018": "/pwr/Historial/2018/",
        "2017": "/pwr/Historial/2017/",
        "2016": "/pwr/Historial/2016/",
        "2015": "/pwr/Historial/2015/",
        "2014": "/pwr/Historial/2014/",
        "2013": "/pwr/Historial/2013/",
    };

    // 跳转到对应的网站
    if (urls[selectedYear]) {
        window.location.href = urls[selectedYear]; // 跳转到对应链接
    } else {
        alert("URL no está configurada para el año seleccionado.");
    }
});