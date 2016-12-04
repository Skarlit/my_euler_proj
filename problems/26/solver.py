import math
import time
import numpy as np
start = time.time()

class CyclicSeq:
    def __init__(self, d):
        self.n = 1
        self.d = d
        self.seq = []

    def get(self, i):
        if i < len(self.seq):
            return self.seq[i]
        else:
            for j in range(len(self.seq), i + 1):
                s = self._compute_j_dec()
                if s != -1:
                    self.seq.append(s)
            # print(self.seq)
            return s

    def _compute_j_dec(self):
         if self.n == 0:
             return -1
         if self.n < self.d:
             self.n *= 10
             s = 0
         else:
            s = int(self.n / self.d)
            self.n = 10 * (self.n % self.d)
         return s

def floyd(d):
    num = CyclicSeq(d)
    start_idx = 0

    # detect cycle
    tortoise = start_idx
    hare = start_idx + 1
    while num.get(tortoise) != num.get(hare):
        tortoise += 1
        hare += 2
        if num.get(tortoise) == -1 or num.get(hare) == -1:
            return 0

    print(tortoise, hare)
    print(num.seq)
    # find
    tortoise = start_idx
    hare += 1
    mu = 0
    while num.get(tortoise) != num.get(hare):
        tortoise += 1
        hare += 1
        mu += 1

    lam = 1
    hare = tortoise + 1
    while num.get(tortoise) != num.get(hare):
        hare += 1
        lam += 1

    return lam



    # return (period, cycle_seq)


max_period = 0
max_num = 0
for i in range(1, 1000):
    p = floyd(i)
    print(p, i)
    if p > max_period:
        max_period = p
        max_num = i

# print(floyd(29))


end = time.time()
print("num with max period {0} is {1},  {2} s".format(max_period, max_num, end - start))
