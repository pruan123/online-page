//tabs切换


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

//阻止冒泡

function stopBubbling(e) {
    e = window.event || e;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

//点击除了本身以外的div
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

//vue过滤器的使用


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