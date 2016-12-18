import time
import numpy as np
start = time.time()

# 10^n > (n+1)*10^5 => n = 6
cache = [np.power(i, 5) for i in xrange(0, 10)]
sum = 0;
for n in xrange(10, 1000000):
    s = 0
    k = n
    while k > 0:
        s += cache[k % 10]
        k /= 10
    if n == s:
        sum += n

end = time.time()
print("Sum is {0},  {2} s".format(sum, 0, end - start))
