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
//