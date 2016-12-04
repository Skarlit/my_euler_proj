import math
import time
import numpy as np
start = time.time()

weights = [10**i for i in xrange(10)]  #[1, 10, 100, 1000, .....]
print(weights)
reversible =set([])

def rev(n, digits):
    rev_n = 0
    for i in xrange(0, digits):
        rev_n += (n / weights[i] % 10) * weights[digits - i - 1]
    return rev_n

def odd_digits(n):
    while n > 0:
        if n % 2 == 0:
            return False
        n /= 10
    return True

num = 0
for i in xrange(1, 10):
    print(i)
    for n in xrange(weights[i - 1], weights[i]):
        if n % 10 == 0: #or n in reversible:
            continue
        rev_n = rev(n, i)
        if odd_digits(rev_n + n):
            num += 1
            # reversible.add(n)
            # reversible.add(rev_n)
            # print(n, rev_n, n + rev_n)

# num = len(reversible)
# print(reversible)

end = time.time()
print("num of reversible is {0},  {1} s".format(num, end - start))
