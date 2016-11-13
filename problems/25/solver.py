import math
import time
import numpy as np
start = time.time()

frac_index = (999* np.log(10) + 0.5 * np.log(5)) / np.log ((1 + np.sqrt(5)) / 2)
index = np.round(frac_index, decimals=0)

end = time.time()
print("index is {0},  {1} s".format(index, end - start))
