function processData(input) {
    //Enter your code here
     _input_array = input.split('\n');
    var n = parseInt(_input_array[_input_current_line].trim(), 10);
    var sum = 0;
    _input_current_line += 1;
    var _nums = _input_array[_input_current_line].trim();
    var nums = _nums.split(" ");
    for(var i = 0; i<n; i++){
        sum += parseInt(nums[i]);
    }
    return sum;
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
_input_array = '';
_input_current_line = 0;
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var solution = processData(_input);
    console.log(solution);
});

