import time
import numpy as np
start = time.time()

sum = 0
denoms = []
nums = []

def gcd(a, b):
    if (a == b):
        return a
    else:
        if b > a:
            a, b = b, a
        return gcd(b, a - b)

def check(second_digit_denom, first_digit_denom, second_digit_num, first_digit_num, reduced_denom, reduced_num):
    new_denom = 10 * second_digit_denom + first_digit_denom
    new_num = 10 * second_digit_num + first_digit_num
    if (new_num < new_denom and new_num * reduced_denom == new_denom * reduced_num):
        print new_num, new_denom, "->", reduced_num, reduced_denom
        denoms.append(new_denom)
        nums.append(new_num)

for reduced_denom in xrange(2, 10):
    for reduced_num in xrange(1, reduced_denom):
        for add in xrange(1, 10):
            check(add,           reduced_denom, add,         reduced_num, reduced_denom, reduced_num)
            check(reduced_denom, add,           reduced_num, add,         reduced_denom, reduced_num)
            check(add,           reduced_denom, reduced_num, add,         reduced_denom, reduced_num)
            check(reduced_denom, add,           add,         reduced_num, reduced_denom, reduced_num)

denom_prod = reduce(lambda x, y: x * y, denoms)
num_prod = reduce(lambda x, y: x * y, nums)
reduced_denom = denom_prod / gcd(denom_prod, num_prod)

end = time.time()
print("Lowest denom is {0},  {2} s".format(reduced_denom, 0, end - start))
