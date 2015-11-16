# Enter your code here. Read input from STDIN. Print output to STDOUT
time = raw_input()
hours = int(time[0:2])
if time[8:] == 'PM' and time[0:2] == '12':
    hours = 12
elif time[8:] == 'PM':
    hours += 12
print str(hours) + time[2:8]

