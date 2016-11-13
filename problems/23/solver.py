import math
import time
start = time.time()
# find all abundant numbers
def divisors_sum(n):
    sum = 1
    i = 2
    while n / i > i:
        if n % i == 0:
            sum += i
            sum += n / i
        i += 1

    if n / i == i:
        sum += i

    return sum

abundants = []
for i in range(2, 28123 + 1):
    if divisors_sum(i) >  i:
        abundants.append(i)

# # subtract all possible sum of pairs of abundant number
total_sum = (1 + 28123) * 28123 / 2
not_sum_of_abundants = {}
for i in range(len(abundants) - 1):
    for j in range(i, len(abundants)):
        s = abundants[i] + abundants[j]
        if s > 28123:
            break
        elif s not in not_sum_of_abundants:
            total_sum -= s
            not_sum_of_abundants[s] = True

end = time.time()
print("sum is {0},  {1} s".format(total_sum, end - start))
