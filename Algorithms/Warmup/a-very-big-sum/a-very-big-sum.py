# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(raw_input())
nums = raw_input().split()
sum = 0
for i in range(n):
    sum += int(nums[i])
print sum

