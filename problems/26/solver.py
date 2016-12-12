import time
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
                s = (int(self.n / self.d), self.n % self.d) # (multiple, remainder) pair
                self.n = s[1] * 10
                self.seq.append(s)
            return s

class SeqIterator:
    def __init__(self, i, num_seq):
        self.i = i
        self.num_seq = num_seq

    def val(self):
        return self.num_seq.get(self.i)

    def next(self, d=1):
        self.i += d

    def reset(self, i):
        self.i = i

def floyd(d):
    seq = CyclicSeq(d)

    tortoise = SeqIterator(1, seq)
    hare = SeqIterator(2, seq)
    while tortoise.val() != hare.val():
        tortoise.next()
        hare.next(2)

    # Fiind pos of 1st repetition mu
    mu = 0
    tortoise.reset(0)
    while tortoise.val() != hare.val():
        tortoise.next()
        hare.next()
        mu += 1

    # after they meet at mu beginning of cycle
    # step through to find the period lambda
    lam = 1
    hare.reset(tortoise.i + 1)
    while tortoise.val() != hare.val():
        hare.next()
        lam += 1

    return lam

max_period = 0
max_num = 0
for i in range(1, 1000):
    p = floyd(i)
    if p > max_period:
        max_period = p
        max_num = i

end = time.time()
print("num with max period {0} is {1},  {2} s".format(max_period, max_num, end - start))
