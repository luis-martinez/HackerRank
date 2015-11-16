function processData(input) {
    //Enter your code here
    var n = parseInt(input);
    var tag = '';
    var space = '';
    for(var i = 0; i<n; i++){
        space = '';
        for(var j = n-i-1; j>0; j--){
            space += ' ';
        }
        tag += '#';
        console.log(space + tag);
    }    
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

