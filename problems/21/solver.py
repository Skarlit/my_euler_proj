import math
import time

start = time.time()

cache = {}
def proper_divisor_sum(n):
    if n not in cache:
        cache[n] = 1
        root = math.sqrt(n)
        for i in range(2, int(root)): #end exclusive
            if n % i == 0:
                cache[n] += i
                cache[n] += int(n / i)
        if int(root) == root and n % root == 0:
            cache[n] += root

    return cache[n]

limit = 10000
amicable_set = set([])
for a in range(1, limit):
    b = proper_divisor_sum(a)
    if a == proper_divisor_sum(b):
        if a == 1 or b == 1 or a == b:
            continue
        amicable_set.add(a)
        amicable_set.add(b)

sum = 0
for num in amicable_set:
    sum += num

end = time.time()
print("sum is {0},  {1} s".format(sum, end - start))
