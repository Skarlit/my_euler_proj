#include <iostream>
#include <chrono>
#include <ctime>

const int PRIME_SEARCH_RANGE = 997 * 997 + 999 * 997 + 997 + 1;
const bool NOT_PRIME = true;
const bool PRIME = false;

inline int f (int n, int a, int b) {
  return n*n + a * n + b;
}

int main() {
  std::clock_t c_start = std::clock();

  bool numbers[PRIME_SEARCH_RANGE] = {};
  int p;
  int fac;
  // Sieve prime
  for(int i = 2; i < PRIME_SEARCH_RANGE; i++) {
    if (numbers[i] == PRIME) {
      // prime
      p  = i;
      fac = 2;
      while(p * fac < PRIME_SEARCH_RANGE) {
        numbers[p * fac] = NOT_PRIME;
        fac++;
      }
    } else {
      continue;
    }
  }

  // search
  int n = 0, s = 0, max_a = -2000,  max_b = -2000,  max_n = -1;
  for(int b = 41; b <= 997; b+=2) {
    if (numbers[b] == NOT_PRIME)
      continue;
    for(int a = -999; a <= 999; a+=2) {
      n = 0;
      s = f(n, a, b);
      while(s > 0 && numbers[s] == PRIME && n < b) {
        n++;
        s = f(n, a, b);
      }
      if (n > max_n) {
        max_n = n;
        max_a = a;
        max_b = b;
      }
    }
  }

  std::clock_t c_end = std::clock();
  std::cout << "a is " << max_a << ", b is " << max_b << ", n is " << max_n << ", ab is " << max_a * max_b
    << ", time is " << 1000.0 * (c_end-c_start) / CLOCKS_PER_SEC  << std::endl;
  return 0;
}
