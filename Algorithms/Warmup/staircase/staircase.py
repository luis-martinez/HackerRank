# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(raw_input())
tag = '';
space = '';
for i in range(0, n):
    space = ''
    j = n-i-1
    while j > 0:
        space += ' '
        j -= 1
    tag += '#'
    print space + tag

