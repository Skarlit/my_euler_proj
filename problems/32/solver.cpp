#include <iostream>
#include <stdlib.h>
#include <chrono>
#include <ctime>
#include <set>
#include <iomanip>

const int WEIGHTS[] = {1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000};
const int COL_LEN = 8;
std::set<int>* s = new std::set<int>();

inline void process(int* ary) {
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
          s->insert(c);
          std::cout<<a <<","<<b<<","<<c<<std::endl;
      }

    }
  }
}

inline void heaps_algorithm(int n, int* ary) {
  if (n == 1) {
    process(ary);
  } else {
    for(int i = 0; i < n - 1; i++) {
      heaps_algorithm(n - 1, ary);
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
    heaps_algorithm(n - 1, ary);
  }
}

int main() {
  std::clock_t c_start = std::clock();
  int* ary = (int *) malloc(9 * sizeof(int));
  for(int i = 0; i < 9; i++) {
    ary[i] = i + 1;
  }
  heaps_algorithm(9, ary);

  int sum = 0;
  for(std::set<int>::iterator it = s->begin(); it!= s->end(); ++it)
    sum += *it;

  std::clock_t c_end = std::clock();
  std::cout << "sum is: " << sum
    << ", time is " << 1000.0 * (c_end-c_start) / CLOCKS_PER_SEC  << std::endl;
  return 0;
}
