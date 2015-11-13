# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(raw_input())
sum = 0
for i in range(n):
    nums = raw_input().split()
    sum += int(nums[i]) - int(nums[n-i-1])
print abs(sum)

