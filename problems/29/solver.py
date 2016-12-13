import time
start = time.time()
import numpy as np

numbers = [True for i in xrange(0, 101)] # True means prime
for i in xrange(2, 101):
  if numbers[i]:
      fac = 2
      while i * fac <= 100:
          numbers[i * fac] = False
          fac += 1
  else:
      continue

primes = [i for i in xrange(2, 101) if numbers[i]]
factors = [{} for i in xrange(0, 101)]
for n in xrange(2, 101):
    for p in primes:
        if p <= n:
            dup = n
            while dup > 1 and dup % p == 0:
                if p in factors[n]:
                    factors[n][p] += 1
                else:
                    factors[n][p] = 1
                dup /= p

prime_logs = {p: np.log(p) for p in primes}
s = set()
for b in xrange(2, 101):
    for a in xrange(2, 101):
        sum = 0
        for p in factors[a]:
            sum += b * factors[a][p] * prime_logs[p]
        if sum not in s:
            s.add(sum)

end = time.time()
print("Number of unique power is {0},  {2} s".format(len(s), 0, end - start))
