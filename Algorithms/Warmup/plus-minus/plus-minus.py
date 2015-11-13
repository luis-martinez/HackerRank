# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(raw_input())
nums = raw_input().split()
positive = 0
negative = 0
zero = 0
for i in range(n):
    if (int(nums[i]) > 0):
        positive += 1
    elif (int(nums[i]) < 0):
        negative += 1
    else:
        zero += 1

print round(float(positive)/n, 3)
print round(float(negative)/n, 3)
print round(float(zero)/n, 3)

