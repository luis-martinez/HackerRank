function processData(input) {
    //Enter your code here
    _input_array = input.split('\n');
    var n = parseInt(_input_array[_input_current_line].trim(), 10);
    var solution = 0;
    var _nums;
    var nums;
    var position = 0;
    _input_current_line += 1;
    for (var i = 0; i<n; i++){
        _nums = _input_array[_input_current_line].trim();
        nums = _nums.split(" ");
        position = nums.length-i-1;
        solution += parseInt(nums[i]) - parseInt(nums[position]);
        _input_current_line += 1;
    }
    return Math.abs(solution);
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

