function processData(input) {
    //Enter your code here
    var time = input;
    var hours = parseInt(time.substr(0,2));
    if ((time.endsWith('PM')) && (hours == '12')){
        hours = 12;
    } else  if (time.endsWith('PM')) {
        hours += 12;
    }
    console.log(hours + time.substr(2,6));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

