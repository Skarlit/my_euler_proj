#include <iostream>
#include <stdlib.h>
#include <chrono>
#include <ctime>
#include <set>
#include <iomanip>

const int WEIGHTS[] = {1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000};

inline void process(int* ary,  std::set<int> &s) {
  // think of i, j as divider with constraint 1 < i < 7, i+1 < j < 8
  // Note that a * b is between j - 1 to j digits long and c has 9 - j digits long,
  // so we have 9 - j < j - 1 ,  hence we skip if j > 5
  // now we know j < 6,  we then know i < 5
  for (int i = 1; i < 5; i++) {
    for(int j = i + 1; j < 6; j++) {
      int a = 0;
      int b = 0;
      int c = 0;
      for(int ka = 0; ka < i; ka++) {
        a += ary[ka] * WEIGHTS[i - 1 - ka];
      }
      for(int kb = i; kb < j; kb++) {
        b += ary[kb] * WEIGHTS[j - 1 - kb];
      }
      for(int kc = j; kc < 9; kc++) {
        c += ary[kc] * WEIGHTS[9 - 1 - kc];
      }
      if (a * b == c) {
          s.insert(c);
          //std::cout<<a <<","<<b<<","<<c<<std::endl;
      }

    }
  }
}

inline void heaps_algorithm(int n, int* ary, std::set<int> &s) {
  if (n == 1) {
    process(ary, s);
  } else {
    for(int i = 0; i < n - 1; i++) {
      heaps_algorithm(n - 1, ary, s);
      int tmp;
      if (n % 2 == 0) {
        tmp = ary[i];
        ary[i] = ary[n - 1];
        ary[n - 1] = tmp;
      } else {
        tmp = ary[0];
        ary[0] = ary[n-1];
        ary[n-1] = tmp;
      }
    }
    heaps_algorithm(n - 1, ary, s);
  }
}

int main() {
  std::clock_t c_start = std::clock();
  int* ary = (int *) malloc(9 * sizeof(int));
  for(int i = 0; i < 9; i++) {
    ary[i] = i + 1;
  }

  std::set<int> s = std::set<int>();
  heaps_algorithm(9, ary, s);

  int sum = 0;
  for(std::set<int>::iterator it = s.begin(); it!= s.end(); ++it)
    sum += *it;

  std::clock_t c_end = std::clock();
  std::cout << "sum is: " << sum
    << ", time is " << 1000.0 * (c_end-c_start) / CLOCKS_PER_SEC  << std::endl;
  return 0;
}
