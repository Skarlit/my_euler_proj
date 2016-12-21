import time
import numpy as np
start = time.time()

sum = 0
target = {}
weights = [10**i for i in xrange(0, 10)]

def process(A):
  # think of i, j as divider with constraint 1 < i < 7, i+1 < j < 8
  # Note that a * b is between j - 1 to j digits long and c has 9 - j digits long,
  # so we have 9 - j < j - 1 ,  hence we skip if j > 5
  # now we know j < 6,  we then know i < 5
    for i in xrange(1, 5):
        for j in xrange(i + 1, 6):
            a = 0
            b = 0
            c = 0
            for ka in xrange(0, i):
                a += A[ka] * weights[i - 1 - ka]
            for kb in xrange(i, j):
                b += A[kb] * weights[j - 1 - kb]
            for kc in xrange(j, 9):
                c += A[kc] * weights[9 - 1 - kc]

            if ( a * b == c):
                target[c] = 1
                # print a, b, c

def heaps_algorithm(n, A):
    if n == 1:
        process(A)
    else:
        for i in xrange(0, n - 1):
            heaps_algorithm(n - 1, A)
            if n % 2 == 0:
                A[i], A[n-1] = A[n-1], A[i]
            else:
                A[0], A[n-1] = A[n-1], A[0]

        heaps_algorithm(n - 1, A)

heaps_algorithm(9, [1,2,3,4,5, 6, 7, 8, 9])
for num in target:
    sum += num

end = time.time()
print("Sum is {0},  {2} s".format(sum, 0, end - start))
