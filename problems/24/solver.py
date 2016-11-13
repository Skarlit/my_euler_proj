import time
import math
start = time.time()

def n_th_perm(target):
    avaiable_digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    j = 9
    indices = []

    while target > 0:
        fac = math.factorial(j)
        indices.append(int(target / fac))
        target = target % fac
        j -= 1

    num = []
    for idx in indices:
        num.append(avaiable_digits[idx])
        del avaiable_digits[idx]

    result = num + avaiable_digits
    return ''.join(str(x) for x in result)

# permutation starts from 0 in this case
result = n_th_perm(1000000 - 1)

end = time.time()
print("perm is {0},  {1} s".format(result, end - start))
