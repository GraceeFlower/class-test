function printStar(num) {
  var arr = [];
  for(var i = 0; i < 5; i++) {
    num > i ? arr.unshift("★") : arr.push("☆");
  }
  console.log(arr.join(""));
}

var starLevel = 1;
printStar(starLevel);
// ★★★☆☆
//str.repeat(num)...

function printAsterisk(n) {
  var str = '';
  for(var i = n; i > 0; i--) {
    for(var j = 1; j <= i; j++) {
      str += (j == i ? '*' : '* ' );
    }
    console.log(str);
    str = '';
  }
}
printAsterisk(6);

// "* ".repeat(i).trim();
