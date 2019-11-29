var E = [ "日", "一", "二", "三", "四", "五", "六" ], N = [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ], T = [ [ "2017-12-25", "圣诞" ], [ "2018-01-01", "元旦" ], [ "2018-02-15", "除夕" ], [ "2018-02-16", "春节" ], [ "2018-03-02", "元宵节" ], [ "2018-04-05", "清明节" ], [ "2018-05-01", "劳动节" ] ], A = {
    0: "出生日期",
    1: "身份证",
    2: "护照",
    3: "学生证",
    4: "军人证",
    6: "驾驶证",
    7: "回乡证",
    8: "台胞证",
    10: "港澳通行证",
    11: "国际海员证",
    20: "外国人永久居留证",
    21: "旅行证",
    22: "台湾通行证",
    23: "士兵证",
    24: "临时身份证",
    25: "户口薄",
    26: "警官证",
    27: "出生证明",
    99: "其他"
}, _ = {
    "出生日期": 0,
    "身份证": 1,
    "护照": 2,
    "学生证": 3,
    "军人证": 4,
    "驾驶证": 6,
    "回乡证": 7,
    "台胞证": 8,
    "港澳通行证": 10,
    "国际海员证": 11,
    "外国人永久居留证": 20,
    "旅行证": 21,
    "台湾通行证": 22,
    "士兵证": 23,
    "临时身份证": 24,
    "户口簿": 25,
    "警官证": 26,
    "出生证明": 27,
    "其他": 99
}, R = {
    A: "成人票",
    C: "儿童票",
    X: "携童票"
}, C = {
    "成人": "A",
    "儿童": "C",
    "携童": "X"
}, O = {
    CN: "中国大陆",
    HK: "中国香港",
    MO: "中国澳门",
    TW: "中国台湾"
}, P = {
    "中国大陆": "CN",
    "中国香港": "HK",
    "中国澳门": "MO",
    "中国台湾": "TW"
}, S = {
    M: "男",
    F: "女"
}, M = {
    PRESALE_MONTH: 2,
    STATION_EXPIRE: 18e5,
    AUTH_EXPIRE: 1296e6
};

module.exports = {
    MONTH: N,
    WEEK_DAY: E,
    HOLIDAYS: T,
    CARDS_TYPE: A,
    CARD_ENUM: _,
    CONSTANT: M,
    PASSENGER_TYPE: R,
    PASSENGER_ENUM: C,
    COUNTRY_TYPE: O,
    COUNTRY_ENUM: P,
    GANDER_TYPE: S
};