import time
import math
start = time.time()

target = 4
low = 0
hi = 1
i = 0
avaiable_digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
digit = avaiable_digits[0]
fixed_digits = []

while True:
    hi = low + math.factorial(len(avaiable_digits))
    print(low, hi)
    if hi > target:
        # push digit to fixed digit list
        fixed_digits.append(digit)
        avaiable_digits.remove(digit)
        i = 0
        digit = avaiable_digits[i]
    elif hi < target:
        # bump up the digit
        i += 1
        digit = avaiable_digits[i]
        low = hi
    else:
        # when hi hits the target. it means the remaining number in avaiable_digits should be at its highest permutation, e.g. the reverse of the array
        # avaiable_digits.reverse()
        break;

result = fixed_digits + avaiable_digits
end = time.time()
print(fixed_digits, avaiable_digits)
print("perm is {0},  {1} s".format(''.join(str(x) for x in result), end - start))
