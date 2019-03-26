var curIndex = 0;
//时间间隔 单位毫秒
var timeInterval = 3000;
var arr = new Array();
arr[0] = "A Gathering Place for Niche Groups ";
arr[1] = "Something Haven’t Seen but Really Interesting";
arr[2] = "Welcome to the little things on the Internet!";
setInterval(changeImg, timeInterval);

function changeImg() {
    var word = document.getElementById("change_word");
    if (curIndex == arr.length - 1) {
        curIndex = 0;
    } else {
        curIndex += 1;
    }
    word.innerHTML = arr[curIndex];
}