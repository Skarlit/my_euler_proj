#include <iostream>
#include <chrono>
#include <ctime>

const int weights[10] = {1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000};

inline int rev(int n, int digits) {
  int rev_n = 0;
  for(int i = 0; i < digits; i++)
    rev_n += (n / weights[i] % 10 ) * weights[digits - i - 1];
  return rev_n;
}

inline bool odd( int n) {
  while (n > 0) {
    if (n % 2 == 0)
      return false;
    n /= 10;
  }
  return true;
}

int main() {
  int num = 0;
  std::clock_t c_start = std::clock();
  for(int i = 0; i < 10; i++) {
    int lim = weights[i];
    for( int n = weights[i - 1]; n < lim; n++) {
      if (n % 10 == 0) continue;
        int rev_n = rev(n, i);
      if (odd(rev_n + n))
        num += 1;
    }
  }
  std::clock_t c_end = std::clock();
  std::cout << "Num is " << num << ", time is " << 1000.0 * (c_end-c_start) / CLOCKS_PER_SEC  << std::endl;
  return 0;
}
