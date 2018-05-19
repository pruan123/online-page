1.//tabs切换


function tab(item) {
    var tabs = ["tab1", "tab2"];
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] == item) {
            document.getElementById(tabs[i]).style.display = "block";
        } else {
            document.getElementById(tabs[i]).style.display = "none";
        }
    }
}

2.//阻止冒泡

function stopBubbling(e) {
    e = window.event || e;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

3.//点击除了本身以外的div
function closeDialog(e) {
    if (document.getElementsByClassName('list')[0].style.display == '') {
        var casWrapper = document.getElementsByClassName('casWrapper')[0]
        //判断事件是否实在这个div里触发的
        if (!casWrapper.contains(e.target)) {
            this.showFirst = false;
            this.showSecond = false;
        }
    }

}

4.//vue过滤器的使用


      fliterList(item) {
//过滤list
        this.current = this.list.data.list.filter((items) => {

//回调是过滤条件
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

5.完整的获取当前的日期时间
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

6. 获取一周之前的时间和当前时间

    //获取当前日期时间
    getCurrentDate() {
      let date = new Date();
      let seperator1 = "-";
      let seperator2 = ":";
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      let hours = date.getHours();
      let minutes = date.getMinutes()
      let seconds = date.getSeconds();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
      }
      if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
      }
      if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + hours + seperator2 + minutes
        + seperator2 + seconds;
      return currentdate;
    },

//当前时间减一周(判断平年润年和月份
    getWeekDay() {
      let currentTime = this.getCurrentDate();
      let weekDate = currentTime.split(' ')[0];
      let weekTime = currentTime.split(' ')[1];

      let year = Number(weekDate.split('-')[0]);
      let month = Number(weekDate.split('-')[1])
      let day = Number(weekDate.split('-')[2])

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }

      if (day <= 7) {
        let newMonth="0"+(month-1)
        if ((month-1) != 2) {
          switch (month-1) {
            case 1:
              return year + '-' + newMonth + '-' + (day-7+31) + ' ' + weekTime;
            case 3:
              return year + '-' + newMonth + '-' + (day-7+31) + ' ' + weekTime;
            case 5:
              return year + '-' + newMonth + '-' + (day-7+31) + ' ' + weekTime;
            case 7:
              return year + '-' + newMonth + '-' + (day-7+31) + ' ' + weekTime;
            case 8:
              return year + '-' + newMonth + '-' + (day-7+31) + ' ' + weekTime;
            case 10:
              return year + '-' + (month-1) + '-' + (day-7+31) + ' ' + weekTime;
            case 12:
              return year + '-' + (month-1) + '-' + (day-7+31) + ' ' + weekTime;
            case 4:
              return year + '-' + newMonth + '-' + (day-7+30) + ' ' + weekTime;
            case 6:
              return year + '-' + newMonth + '-' + (day-7+30) + ' ' + weekTime;
            case 9:
              return year + '-' + newMonth + '-' + (day-7+30) + ' ' + weekTime;
            case 11:
              return year + '-' + (month-1) + '-' + (day-7+30) + ' ' + weekTime;
          }
        } else {
            if(year%4==0){
              return year + '-' + newMonth + '-' + (day-7+29) + ' ' + weekTime;
            }else{
              return year + '-' + newMonth + '-' + (day-7+28) + ' ' + weekTime;
            }
        }
      } else {
        let newDay = day - 7
        if (newDay >= 0 && newDay <= 9) {
          newDay = "0" + newDay;
        }
        return year + '-' + month + '-' + newDay + ' ' + weekTime
      }
    },

//自创骚气的tabs切换
      changeItem(event) {
        let Item = document.getElementsByClassName('detialTitleItem')
        for (let i = 0; i < Item.length; i++) {
            if(event.srcElement.isEqualNode(Item[i])){
                Item[i].style.backgroundColor = '#ffffff',
                Item[i].style.color = '#E7BA3A',
                Item[i].style.borderTop = '1px solid#E7BA3A'
                Item[i].style.borderBottom = 'none'
            }else {
                Item[i].style.backgroundColor = '#F8F8F8',
                Item[i].style.color = '',
                Item[i].style.borderTop = 'none'
                Item[i].style.borderBottom = '1px solid #E8E7E7'
            }
        }
      },
//点击其他地方关闭tabs的点击样式
      searchList(event){
        this.changeItem(event)
      },