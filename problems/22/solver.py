# Merge sort the array in ith index
# Split the array into groups grouped by the ith index
# For each group, we repeat the above start with i + 1
import time
import string
start = time.time()
f = open('data', 'r')
values = dict(zip(list(string.ascii_uppercase), range(1, 27)))
names = [s.replace('\"', '') for s in f.read().rstrip().split(',')]

def word_val(word):
    sum = 0
    for c in word:
        sum += values[c]
    return sum

def compare(a, b, i):  # a < b -> -1
    if i < len(a) and i < len(b):
        return values[a[i]] - values[b[i]]
    elif len(a) < len(b):
        return -1
    else:
        return 1

def merge_sort(ary, i):
    if (len(ary) == 1):
         return ary
    return merge(merge_sort(ary[:int(len(ary) / 2)], i), merge_sort(ary[int(len(ary)/2):], i),  i)

def merge(a1, a2, i):
    i_1 = 0
    i_2 = 0
    a3 = []
    while i_1 < len(a1) and i_2 < len(a2):
        result = compare(a1[i_1], a2[i_2], i)
        if result < 0:
            a3.append(a1[i_1])
            i_1 += 1
        elif result > 0:
            a3.append(a2[i_2])
            i_2 += 1
        else: # equal or i >= len(a1) and len(a2)
            a3.append(a1[i_1])
            a3.append(a2[i_2])
            i_1 += 1
            i_2 += 1

    if i_1 < len(a1):
        a3.extend(a1[i_1:])
    elif i_2 < len(a2):
        a3.extend(a2[i_2:])
    return a3

def group_sort(names, i):
    if len(names) == 1:
        return names

    sorted_names = merge_sort(names, i)
    interval_a = 0
    interval_b = interval_a + 1
    while interval_b < len(sorted_names):
        if i >= len(sorted_names[interval_a]):
            interval_a += 1
            interval_b = interval_a
        elif i >= len(sorted_names[interval_b]):
            interval_b += 1
        if sorted_names[interval_b][i] == sorted_names[interval_a][i]:
            interval_b += 1
        else:
            sorted_names[interval_a:interval_b] = group_sort(sorted_names[interval_a:interval_b], i + 1)
            interval_a = interval_b
            interval_b = interval_a + 1

    sorted_names[interval_a:interval_b] = group_sort(sorted_names[interval_a:interval_b], i + 1) # handle the last segment

    return sorted_names




result = group_sort(names, 0)
sum = 0
for i in range(0, len(result)):
    sum += word_val(result[i]) * (i + 1)

end = time.time()
print("sum is {0},  {1} s".format(sum, end - start))
