<template>
  <div class="casWrapper" ref="parentCo">
    <div class="content">
      <div class="list" v-show="showFirst">
        <ul>
          <li class="item" v-for="item in listCode" @click="fliterList(item)">{{item}}</li>
        </ul>
      </div>
      <transition name="fade">
        <div class="first" v-show="showFirst">
          <ul>
            <li class='firstItem' v-for="item in current" @click="showThirf(item.Findex);showSecond=true;getCarBrand(item);passData()">
              {{item.Findex}}
              &nbsp;{{item.Fsinger_name.slice(-2)}}
            </li>
            <li v-if="!current.length"> 暂无数据</li>
          </ul>
        </div>
      </transition>

      <transition name="fade">
        <div class="second"  v-show="showSecond" >
          <ul>
            <li class='firstItem' v-for="item in secondList" @click="getCarModel(item);passData()">{{item}}</li>
            <li v-if="!secondList.length"> 暂无数据</li>
          </ul>
        </div>
      </transition>
    </div>

  </div>
</template>
<script>

  export default {
    props: ["showFirst","showSecond"],
    data() {
      return {
        listCode: ['qb', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        list: {
          "code": 0,
          "data": {
            "list": [{
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "X",
              "Fother_name": "Joker",
              "Fsinger_id": "5062",
              "Fsinger_mid": "002J4UUk29y8BY",
              "Fsinger_name": "薛之谦",
              "Fsinger_tag": "541,555",
              "Fsort": "1",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Jay Chou",
              "Fsinger_id": "4558",
              "Fsinger_mid": "0025NhlN2yWrP4",
              "Fsinger_name": "周杰伦",
              "Fsinger_tag": "541,555",
              "Fsort": "2",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "2",
              "Fattribute_3": "5",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "B",
              "Fother_name": "빅뱅",
              "Fsinger_id": "11733",
              "Fsinger_mid": "004AlfUb0cVkN1",
              "Fsinger_name": "BIGBANG (빅뱅)",
              "Fsinger_tag": "645,663,676,679,694,703,710,713",
              "Fsort": "3",
              "Ftrend": "0",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "C",
              "Fother_name": "Eason Chan",
              "Fsinger_id": "143",
              "Fsinger_mid": "003Nz2So3XXYek",
              "Fsinger_name": "陈奕迅",
              "Fsinger_tag": "555",
              "Fsort": "4",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "44",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "JJ Lin",
              "Fsinger_id": "4286",
              "Fsinger_mid": "001BLpXF2DyJe2",
              "Fsinger_name": "林俊杰",
              "Fsinger_tag": "541,555",
              "Fsort": "5",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "0",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "A",
              "Fother_name": "艾伦·沃克",
              "Fsinger_id": "944940",
              "Fsinger_mid": "0020PeOh4ZaCw1",
              "Fsinger_name": "Alan Walker (艾伦·沃克)",
              "Fsinger_tag": "",
              "Fsort": "6",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "Ronghao Li",
              "Fsinger_id": "60505",
              "Fsinger_mid": "000aHmbL2aPXWH",
              "Fsinger_name": "李荣浩",
              "Fsinger_tag": "",
              "Fsort": "7",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "T",
              "Fother_name": "",
              "Fsinger_id": "34412",
              "Fsinger_mid": "000zmpju02bEBm",
              "Fsinger_name": "TFBOYS",
              "Fsinger_tag": "",
              "Fsort": "8",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "6",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "M",
              "Fother_name": "魔力红乐团",
              "Fsinger_id": "4983",
              "Fsinger_mid": "001JuGrt372YIQ",
              "Fsinger_name": "Maroon 5 (魔力红乐团)",
              "Fsinger_tag": "644,645",
              "Fsort": "9",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "X",
              "Fother_name": "Vae Xu",
              "Fsinger_id": "7221",
              "Fsinger_mid": "000CK5xN3yZDJt",
              "Fsinger_name": "许嵩",
              "Fsinger_tag": "",
              "Fsort": "10",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "G",
              "Fother_name": "Gem Tang",
              "Fsinger_id": "13948",
              "Fsinger_mid": "001fNHEf1SFEFN",
              "Fsinger_name": "G.E.M. 邓紫棋",
              "Fsinger_tag": "541,555",
              "Fsort": "11",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Jason Zhang",
              "Fsinger_id": "6499",
              "Fsinger_mid": "002azErJ0UcDN6",
              "Fsinger_name": "张杰",
              "Fsinger_tag": "555",
              "Fsort": "12",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "",
              "Fsinger_id": "204664",
              "Fsinger_mid": "001SqkF53OEhdO",
              "Fsinger_name": "鹿晗",
              "Fsinger_tag": "",
              "Fsort": "13",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Ada Zhuang",
              "Fsinger_id": "89698",
              "Fsinger_mid": "003Cn3Yh16q1MO",
              "Fsinger_name": "庄心妍",
              "Fsinger_tag": "555",
              "Fsort": "14",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "Y",
              "Fother_name": "Aska Yang",
              "Fsinger_id": "11608",
              "Fsinger_mid": "003tMm0y0TuewY",
              "Fsinger_name": "杨宗纬",
              "Fsinger_tag": "555",
              "Fsort": "15",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "15",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "J",
              "Fother_name": "贾斯汀·比伯",
              "Fsinger_id": "16257",
              "Fsinger_mid": "002DYpxl3hW3EP",
              "Fsinger_name": "Justin Bieber (贾斯汀·比伯)",
              "Fsinger_tag": "645,710",
              "Fsort": "16",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "",
              "Fsinger_id": "199515",
              "Fsinger_mid": "0003ZpE43ypssl",
              "Fsinger_name": "张碧晨",
              "Fsinger_tag": "",
              "Fsort": "17",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "1"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "H",
              "Fother_name": "",
              "Fsinger_id": "163550",
              "Fsinger_mid": "002Vcz8F2hpBQj",
              "Fsinger_name": "华晨宇",
              "Fsinger_tag": "555",
              "Fsort": "18",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Jacky Cheung",
              "Fsinger_id": "174",
              "Fsinger_mid": "004Be55m1SJaLk",
              "Fsinger_name": "张学友",
              "Fsinger_tag": "555",
              "Fsort": "19",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "T",
              "Fother_name": "Hebe Tian",
              "Fsinger_id": "4701",
              "Fsinger_mid": "001ByAsv3XCdgm",
              "Fsinger_name": "田馥甄",
              "Fsinger_tag": "555",
              "Fsort": "20",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "2",
              "Fattribute_3": "4",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "R",
              "Fother_name": "ラッドウィンプス",
              "Fsinger_id": "9962",
              "Fsinger_mid": "000f1b6W1wzyRN",
              "Fsinger_name": "RADWIMPS (ラッドウィンプス)",
              "Fsinger_tag": "645,683,690,709",
              "Fsort": "21",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "X",
              "Fother_name": "Jam Hsiao",
              "Fsinger_id": "13203",
              "Fsinger_mid": "004bsIDK0awMOv",
              "Fsinger_name": "萧敬腾",
              "Fsinger_tag": "",
              "Fsort": "22",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "N",
              "Fother_name": "",
              "Fsinger_id": "137",
              "Fsinger_mid": "003LCFXH0eodXv",
              "Fsinger_name": "那英",
              "Fsinger_tag": "555",
              "Fsort": "23",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "W",
              "Fother_name": "Leehom Wang",
              "Fsinger_id": "265",
              "Fsinger_mid": "001JDzPT3JdvqK",
              "Fsinger_name": "王力宏",
              "Fsinger_tag": "541,573",
              "Fsort": "24",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Jane Zhang",
              "Fsinger_id": "4607",
              "Fsinger_mid": "000aw4WC2EQYTv",
              "Fsinger_name": "张靓颖",
              "Fsinger_tag": "555",
              "Fsort": "25",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "W",
              "Fother_name": "Kris Wu",
              "Fsinger_id": "180646",
              "Fsinger_mid": "002yeznU3VAVEV",
              "Fsinger_name": "吴亦凡",
              "Fsinger_tag": "",
              "Fsort": "26",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "B",
              "Fother_name": "",
              "Fsinger_id": "2",
              "Fsinger_mid": "002pUZT93gF4Cu",
              "Fsinger_name": "BEYOND",
              "Fsinger_tag": "541,558,569",
              "Fsort": "27",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "Yoga Lin",
              "Fsinger_id": "11606",
              "Fsinger_mid": "001f0VyZ1hmWZ1",
              "Fsinger_name": "林宥嘉",
              "Fsinger_tag": "555",
              "Fsort": "28",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "17",
              "Findex": "N",
              "Fother_name": "NZBZ",
              "Fsinger_id": "69205",
              "Fsinger_mid": "003ZQQb64D5317",
              "Fsinger_name": "南征北战",
              "Fsinger_tag": "",
              "Fsort": "29",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "W",
              "Fother_name": "Silence Wan",
              "Fsinger_id": "3954",
              "Fsinger_mid": "001z2JmX09LLgL",
              "Fsinger_name": "汪苏泷",
              "Fsinger_tag": "541,555,562",
              "Fsort": "30",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "2",
              "Fattribute_3": "5",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "G",
              "Fother_name": "权志龙",
              "Fsinger_id": "19851",
              "Fsinger_mid": "000t2qd13dLpae",
              "Fsinger_name": "G-DRAGON (权志龙)",
              "Fsinger_tag": "646,663,666,676,679,690,705,714",
              "Fsort": "31",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "S",
              "Fother_name": "Sodagreen",
              "Fsinger_id": "5924",
              "Fsinger_mid": "000Q4W691sMvLG",
              "Fsinger_name": "苏打绿",
              "Fsinger_tag": "544,555,569",
              "Fsort": "32",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "P",
              "Fother_name": "",
              "Fsinger_id": "4442",
              "Fsinger_mid": "000mLAT42CFWNa",
              "Fsinger_name": "朴树",
              "Fsinger_tag": "541,555,558",
              "Fsort": "33",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "W",
              "Fother_name": "Faye Wong",
              "Fsinger_id": "264",
              "Fsinger_mid": "000GDDuQ3sGQiT",
              "Fsinger_name": "王菲",
              "Fsinger_tag": "555",
              "Fsort": "34",
              "Ftrend": "1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "K",
              "Fother_name": "",
              "Fsinger_id": "11761",
              "Fsinger_mid": "002Sm9iK4RIsCr",
              "Fsinger_name": "筷子兄弟",
              "Fsinger_tag": "555",
              "Fsort": "35",
              "Ftrend": "-1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "M",
              "Fother_name": "",
              "Fsinger_id": "160022",
              "Fsinger_mid": "0035kILA0ydw3j",
              "Fsinger_name": "MC天佑",
              "Fsinger_tag": "",
              "Fsort": "36",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "M",
              "Fother_name": "",
              "Fsinger_id": "1045852",
              "Fsinger_mid": "000WbpKa3WokLD",
              "Fsinger_name": "MC魏小然",
              "Fsinger_tag": "",
              "Fsort": "37",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "J",
              "Fother_name": "",
              "Fsinger_id": "12111",
              "Fsinger_mid": "004YXxql1sSr2o",
              "Fsinger_name": "金志文",
              "Fsinger_tag": "541,555",
              "Fsort": "40",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "S",
              "Fother_name": "Niko Sun",
              "Fsinger_id": "22874",
              "Fsinger_mid": "001oXbjs29oPul",
              "Fsinger_name": "孙子涵",
              "Fsinger_tag": "541,555,562",
              "Fsort": "41",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "A",
              "Fother_name": "黄丽玲",
              "Fsinger_id": "6028",
              "Fsinger_mid": "003ArN8Z0WpjTz",
              "Fsinger_name": "A-Lin",
              "Fsinger_tag": "555",
              "Fsort": "42",
              "Ftrend": "1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "X",
              "Fother_name": "",
              "Fsinger_id": "3376",
              "Fsinger_mid": "00235pCx2tYjlq",
              "Fsinger_name": "许巍",
              "Fsinger_tag": "541,558",
              "Fsort": "43",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "S",
              "Fother_name": "Donye.S",
              "Fsinger_id": "61620",
              "Fsinger_mid": "004KKLWZ4320g1",
              "Fsinger_name": "宋冬野",
              "Fsinger_tag": "544,558",
              "Fsort": "45",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "aMEI",
              "Fsinger_id": "141",
              "Fsinger_mid": "003JGrNQ3RjelA",
              "Fsinger_name": "张惠妹",
              "Fsinger_tag": "555",
              "Fsort": "46",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Steve Chou",
              "Fsinger_id": "4365",
              "Fsinger_mid": "004NMZuf2BLjg8",
              "Fsinger_name": "周传雄",
              "Fsinger_tag": "541,555",
              "Fsort": "47",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Jeff Chang",
              "Fsinger_id": "167",
              "Fsinger_mid": "0000mFvh1jtLcz",
              "Fsinger_name": "张信哲",
              "Fsinger_tag": "555",
              "Fsort": "48",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Y",
              "Fother_name": "",
              "Fsinger_id": "944274",
              "Fsinger_mid": "004coWV04C5FCV",
              "Fsinger_name": "杨洋",
              "Fsinger_tag": "",
              "Fsort": "49",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "X",
              "Fother_name": "L Xu",
              "Fsinger_id": "22704",
              "Fsinger_mid": "004aRKga0CXIPm",
              "Fsinger_name": "徐良",
              "Fsinger_tag": "541,562",
              "Fsort": "50",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "C",
              "Fother_name": "Jordan Chan",
              "Fsinger_id": "4284",
              "Fsinger_mid": "004DFS271osAwp",
              "Fsinger_name": "陈小春",
              "Fsinger_tag": "555",
              "Fsort": "51",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Q",
              "Fother_name": "Wanting Qu",
              "Fsinger_id": "34703",
              "Fsinger_mid": "0030RkE50nmpWC",
              "Fsinger_name": "曲婉婷",
              "Fsinger_tag": "",
              "Fsort": "52",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "P",
              "Fother_name": "",
              "Fsinger_id": "1102711",
              "Fsinger_mid": "003vSrlp0ujV6o",
              "Fsinger_name": "鹏泊",
              "Fsinger_tag": "",
              "Fsort": "53",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "44",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "S",
              "Fother_name": "Stefanie Sun",
              "Fsinger_id": "109",
              "Fsinger_mid": "001pWERg3vFgg8",
              "Fsinger_name": "孙燕姿",
              "Fsinger_tag": "555,558",
              "Fsort": "54",
              "Ftrend": "1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "6",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "W",
              "Fother_name": "维兹·卡利法",
              "Fsinger_id": "12978",
              "Fsinger_mid": "000CQ06r24Naco",
              "Fsinger_name": "Wiz Khalifa (维兹·卡利法)",
              "Fsinger_tag": "644",
              "Fsort": "55",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Phil Chang",
              "Fsinger_id": "168",
              "Fsinger_mid": "0044wQXL0ElWF1",
              "Fsinger_name": "张宇",
              "Fsinger_tag": "555",
              "Fsort": "56",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "G",
              "Fother_name": "",
              "Fsinger_id": "61959",
              "Fsinger_mid": "002OfR3n1vx75j",
              "Fsinger_name": "葛林",
              "Fsinger_tag": "",
              "Fsort": "58",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "M",
              "Fother_name": "Karen Mok",
              "Fsinger_id": "54",
              "Fsinger_mid": "000cISVf2QqLc6",
              "Fsinger_name": "莫文蔚",
              "Fsinger_tag": "555",
              "Fsort": "59",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "",
              "Fsinger_id": "1012038",
              "Fsinger_mid": "004eaDNU1nfRO0",
              "Fsinger_name": "张磊",
              "Fsinger_tag": "",
              "Fsort": "60",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "J",
              "Fother_name": "",
              "Fsinger_id": "1041231",
              "Fsinger_mid": "0023ni2j3F9CpN",
              "Fsinger_name": "Jam",
              "Fsinger_tag": "",
              "Fsort": "61",
              "Ftrend": "1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "N",
              "Fother_name": "Milk Coffee",
              "Fsinger_id": "4422",
              "Fsinger_mid": "0012bj8d36Xkw1",
              "Fsinger_name": "牛奶咖啡",
              "Fsinger_tag": "552,555",
              "Fsort": "62",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "W",
              "Fother_name": "",
              "Fsinger_id": "4604",
              "Fsinger_mid": "001adLDR1SS40P",
              "Fsinger_name": "汪峰",
              "Fsinger_tag": "541,555,569",
              "Fsort": "63",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "6",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "C",
              "Fother_name": "查理·普斯",
              "Fsinger_id": "39000",
              "Fsinger_mid": "000jnR7q3pCzYG",
              "Fsinger_name": "Charlie Puth (查理·普斯)",
              "Fsinger_tag": "644",
              "Fsort": "64",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "B",
              "Fother_name": "",
              "Fsinger_id": "4545",
              "Fsinger_mid": "003LaMHm42u7qS",
              "Fsinger_name": "本兮",
              "Fsinger_tag": "",
              "Fsort": "65",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "H",
              "Fother_name": "",
              "Fsinger_id": "24833",
              "Fsinger_mid": "002mze3U0NYXOM",
              "Fsinger_name": "胡夏",
              "Fsinger_tag": "555",
              "Fsort": "66",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "M",
              "Fother_name": "MXD",
              "Fsinger_id": "28227",
              "Fsinger_mid": "003wWQBU0fHBcj",
              "Fsinger_name": "马旭东",
              "Fsinger_tag": "555",
              "Fsort": "67",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "W",
              "Fother_name": "Vai",
              "Fsinger_id": "38625",
              "Fsinger_mid": "001WcO2V0TLCv3",
              "Fsinger_name": "威仔",
              "Fsinger_tag": "",
              "Fsort": "68",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "",
              "Fsinger_id": "11707",
              "Fsinger_mid": "002xpOdd4Dh6pu",
              "Fsinger_name": "李易峰",
              "Fsinger_tag": "555",
              "Fsort": "70",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Y",
              "Fother_name": "",
              "Fsinger_id": "7485",
              "Fsinger_mid": "004FtTNW2b0tJi",
              "Fsinger_name": "雨宗林",
              "Fsinger_tag": "555",
              "Fsort": "71",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "G",
              "Fother_name": "Claire Guo",
              "Fsinger_id": "11626",
              "Fsinger_mid": "0043Zxw10txf5O",
              "Fsinger_name": "郭静",
              "Fsinger_tag": "555",
              "Fsort": "72",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "Chris Lee",
              "Fsinger_id": "4615",
              "Fsinger_mid": "002ZOuVm3Qn20Y",
              "Fsinger_name": "李宇春",
              "Fsinger_tag": "555",
              "Fsort": "73",
              "Ftrend": "1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Angela Zhang",
              "Fsinger_id": "224",
              "Fsinger_mid": "002raUWw3PXdkT",
              "Fsinger_name": "张韶涵",
              "Fsinger_tag": "555",
              "Fsort": "74",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "M",
              "Fother_name": "MMD",
              "Fsinger_id": "943468",
              "Fsinger_mid": "003rJfMG3PPqWd",
              "Fsinger_name": "萌萌哒天团",
              "Fsinger_tag": "",
              "Fsort": "75",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "6",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "F",
              "Fother_name": "打倒男孩",
              "Fsinger_id": "4868",
              "Fsinger_mid": "003CKb192ggBqi",
              "Fsinger_name": "Fall Out Boy (打倒男孩)",
              "Fsinger_tag": "645",
              "Fsort": "76",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "6",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "R",
              "Fother_name": "蕾哈娜",
              "Fsinger_id": "6966",
              "Fsinger_mid": "002MiBdR19HQWx",
              "Fsinger_name": "Rihanna (蕾哈娜)",
              "Fsinger_tag": "710",
              "Fsort": "77",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "6",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "T",
              "Fother_name": "烟民二人组",
              "Fsinger_id": "156095",
              "Fsinger_mid": "004ABIFV1EZUAj",
              "Fsinger_name": "The Chainsmokers (烟民二人组)",
              "Fsinger_tag": "",
              "Fsort": "78",
              "Ftrend": "-1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "X",
              "Fother_name": "Ann",
              "Fsinger_id": "23800",
              "Fsinger_mid": "001oNMzI3WznzG",
              "Fsinger_name": "夏婉安",
              "Fsinger_tag": "",
              "Fsort": "79",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "",
              "Fsinger_id": "968571",
              "Fsinger_mid": "0042kZuh1dgLre",
              "Fsinger_name": "周二珂",
              "Fsinger_tag": "",
              "Fsort": "80",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "8",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "T",
              "Fother_name": "",
              "Fsinger_id": "947788",
              "Fsinger_mid": "000ndQx82fsq8Z",
              "Fsinger_name": "Tez Cadey",
              "Fsinger_tag": "",
              "Fsort": "81",
              "Ftrend": "0",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "6",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "E",
              "Fother_name": "艾米纳姆",
              "Fsinger_id": "4880",
              "Fsinger_mid": "000yDAjj2TE9j8",
              "Fsinger_name": "Eminem (艾米纳姆)",
              "Fsinger_tag": "645,647",
              "Fsort": "82",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "Hins Cheung",
              "Fsinger_id": "219",
              "Fsinger_mid": "003AfDK34H82GU",
              "Fsinger_name": "张敬轩",
              "Fsinger_tag": "541,555",
              "Fsort": "83",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "17",
              "Findex": "Q",
              "Fother_name": "",
              "Fsinger_id": "1042260",
              "Fsinger_mid": "0020IaUo4Vgsjk",
              "Fsinger_name": "齐一",
              "Fsinger_tag": "",
              "Fsort": "84",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "H",
              "Fother_name": "",
              "Fsinger_id": "1043567",
              "Fsinger_mid": "004QoDUs3jfOC6",
              "Fsinger_name": "韩安旭",
              "Fsinger_tag": "",
              "Fsort": "85",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "Sam Lee",
              "Fsinger_id": "38",
              "Fsinger_mid": "002seUhN1Akj7J",
              "Fsinger_name": "李圣杰",
              "Fsinger_tag": "555,562",
              "Fsort": "86",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Z",
              "Fother_name": "",
              "Fsinger_id": "63938",
              "Fsinger_mid": "000SJp6n49rDgl",
              "Fsinger_name": "张赫宣",
              "Fsinger_tag": "",
              "Fsort": "87",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "2",
              "Fattribute_3": "5",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "9",
              "Fother_name": "防弹少年团",
              "Fsinger_id": "162691",
              "Fsinger_mid": "001TpDgn4SxyJn",
              "Fsinger_name": "방탄소년단 (防弹少年团)",
              "Fsinger_tag": "536,678,663,676",
              "Fsort": "88",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "Richael Liu",
              "Fsinger_id": "161444",
              "Fsinger_mid": "003bQEFA3KrvLI",
              "Fsinger_name": "刘瑞琦",
              "Fsinger_tag": "555",
              "Fsort": "89",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "7",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "A",
              "Fother_name": "阿黛尔",
              "Fsinger_id": "12578",
              "Fsinger_mid": "003CoxJh1zFPpx",
              "Fsinger_name": "Adele (阿黛尔)",
              "Fsinger_tag": "644",
              "Fsort": "90",
              "Ftrend": "1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "S",
              "Fother_name": "",
              "Fsinger_id": "1011983",
              "Fsinger_mid": "001t94rh4OpQn0",
              "Fsinger_name": "双笙",
              "Fsinger_tag": "",
              "Fsort": "91",
              "Ftrend": "1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "T",
              "Fother_name": "Escape Plan",
              "Fsinger_id": "15514",
              "Fsinger_mid": "001Yxpxc0OaUUX",
              "Fsinger_name": "逃跑计划",
              "Fsinger_tag": "544,569",
              "Fsort": "92",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "2",
              "Fattribute_3": "5",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "B",
              "Fother_name": "",
              "Fsinger_id": "1190986",
              "Fsinger_mid": "003DBAjk2MMfhR",
              "Fsinger_name": "BLACKPINK",
              "Fsinger_tag": "",
              "Fsort": "93",
              "Ftrend": "0",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Y",
              "Fother_name": "Jackson",
              "Fsinger_id": "198135",
              "Fsinger_mid": "001IoTZp19YMDG",
              "Fsinger_name": "易烊千玺",
              "Fsinger_tag": "",
              "Fsort": "94",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "6",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "O",
              "Fother_name": "猫头鹰之城",
              "Fsinger_id": "12926",
              "Fsinger_mid": "002a1DuK4evNsR",
              "Fsinger_name": "Owl City (猫头鹰之城)",
              "Fsinger_tag": "644",
              "Fsort": "95",
              "Ftrend": "1",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "T",
              "Fother_name": "",
              "Fsinger_id": "6370",
              "Fsinger_mid": "000QG95i2rHlOf",
              "Fsinger_name": "谭晶",
              "Fsinger_tag": "",
              "Fsort": "96",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "C",
              "Fother_name": "Sean Chen",
              "Fsinger_id": "22926",
              "Fsinger_mid": "004EyqQS2hMS6V",
              "Fsinger_name": "陈翔",
              "Fsinger_tag": "555",
              "Fsort": "97",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "Andy Lau",
              "Fsinger_id": "163",
              "Fsinger_mid": "003aQYLo2x8izP",
              "Fsinger_name": "刘德华",
              "Fsinger_tag": "555",
              "Fsort": "98",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "3",
              "Fattribute_3": "7",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "O",
              "Fother_name": "单向组合",
              "Fsinger_id": "24561",
              "Fsinger_mid": "001FXn5P0kkWfV",
              "Fsinger_name": "One Direction (单向组合)",
              "Fsinger_tag": "645",
              "Fsort": "99",
              "Ftrend": "0",
              "Ftype": "2",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "C",
              "Fother_name": "Tanya Chua",
              "Fsinger_id": "112",
              "Fsinger_mid": "000hNnWC3kko2c",
              "Fsinger_name": "蔡健雅",
              "Fsinger_tag": "541,555",
              "Fsort": "100",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "F",
              "Fother_name": "Christine Fan",
              "Fsinger_id": "4351",
              "Fsinger_mid": "003vyG9q2klWs4",
              "Fsinger_name": "范玮琪",
              "Fsinger_tag": "541,555,558",
              "Fsort": "101",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "2",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "X",
              "Fother_name": "LALA Xu",
              "Fsinger_id": "16244",
              "Fsinger_mid": "002LZVMH0zc8F4",
              "Fsinger_name": "徐佳莹",
              "Fsinger_tag": "541,555,569",
              "Fsort": "102",
              "Ftrend": "1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "1",
              "Fgenre": "0",
              "Findex": "J",
              "Fother_name": "J Sound",
              "Fsinger_id": "44018",
              "Fsinger_mid": "001m7JoC1IVL44",
              "Fsinger_name": "金南玲",
              "Fsinger_tag": "",
              "Fsort": "103",
              "Ftrend": "-1",
              "Ftype": "1",
              "voc": "0"
            }, {
              "Farea": "0",
              "Fattribute_3": "1",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "L",
              "Fother_name": "Hacken Lee",
              "Fsinger_id": "235",
              "Fsinger_mid": "003nS2v740Lxcw",
              "Fsinger_name": "李克勤",
              "Fsinger_tag": "555",
              "Fsort": "104",
              "Ftrend": "-1",
              "Ftype": "0",
              "voc": "0"
            }, {
              "Farea": "1",
              "Fattribute_3": "3",
              "Fattribute_4": "0",
              "Fgenre": "0",
              "Findex": "Q",
              "Fother_name": "",
              "Fsinger_id": "40798",
              "Fsinger_mid": "000H4xDG3heHtr",
              "Fsinger_name": "齐晨",
              "Fsinger_tag": "555",
              "Fsort": "105",
              "Ftrend": "1",
              "Ftype": "0",
              "voc": "0"
            }], "per_page": 100, "total": 552503, "total_page": 5526
          },
          "message": "succ",
          "subcode": 0
        },
        obj: {
          A: ['A', 'A1', 'A', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'],
          B: ['B', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          C: ['C', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          D: ['D', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          E: ['E', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          F: ['F', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          G: ['G', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          H: ['H', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          I: ['I', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          J: ['J', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          K: ['K', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          L: ['L', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          M: ['M', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          M: ['N', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          O: ['O', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          P: ['P', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          Q: ['Q', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          R: ['R', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          S: ['S', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          T: ['T', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          U: ['U', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          V: ['V', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          W: ['W', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          X: ['X', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          Y: ['Y', 1, 2, 3, 4, 5, 6, 7, 8, 9],
          Z: ['Z', 1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        current: [],
        secondList: [],
        carBrand: '不限',
        carModel: '不限',
        carYearType: '不限'
      }
    },
    mounted() {
      this.current = this.list.data.list
    },
    methods: {
//根据字母过滤符合车辆品牌
      fliterList(item) {
        this.showFirst=true;
        this.showSecond=false;
        this.current = this.list.data.list.filter((items) => {
          if (item == 'qb') {
            return true
          }
          if (items.Findex == item) {
            return true
          } else {
            return false
          }
        })

      },
      showThirf(key) {
        this.secondList = this.obj[key]
      },

      //吧li里面的值传给文本框
      getCarBrand(data) {
        this.carBrand = data.Fsinger_name;
      },
      getCarModel(data) {
        this.carModel = data;
      },
      getCarYear(data) {
        this.carYearType = data;
      },
      //向父组件传递数据
      passData() {
        this.$emit('passToParent', this.carBrand, this.carModel, this.carYearType,this.showSecond)
      },


    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .content, .casWrapper {
    height: 100%;
    position: relative;
  }

  .list {
    width: 40px;
    position: absolute;
    left: 0;
    top: 0;
    background: #A1CBF6;
    z-index: 100;
    color: white;
  }

  ul {
    list-style: none;

  }

  .list ul li {
    line-height: 24px;
    text-align: center;
  }

  .list ul li:hover {
    background-color: #1163AD;
  }

  .first, .second {
    position: absolute;
    left: 40px;
    top: 0;
    width: 230px;
    height: 648px;
    overflow-y: auto;
    background: #ffffff;
    transition: all .3s;
    z-index: 99;
    color: #D6D9DE;
  }

  .firstItem:hover {
    color: black;
  }

  .second {
    left: 270px;
    z-index: 98
  }

  .fade-enter-active, .fade-leave-active {
    transform: translate3d(0, 0, 0);
  }

  .fade-enter, .fade-leave-to {
    transform: translate3d(-100%, 0, 0);
  }

  .first ul, .second ul {
    padding: 28px 0 0 0;
  }

  .first ul li, .second ul li {
    line-height: 32px;
    text-align: center;
    border-bottom: 1px solid #d4d4d4;
    border-right: 1px solid #d4d4d4;
  }

</style>
