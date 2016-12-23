#include <iostream>
#include <stdlib.h>
#include <chrono>
#include <ctime>
#include <set>
#include <iomanip>
#include <vector>
#include <queue>

const int LIMIT = 1000000;

int main() {
  std::clock_t c_start = std::clock();
  std::vector<int> *primes = new std::vector<int>();
  // sieve
  bool* is_prime = new bool[LIMIT];
  for(int i = 0; i < LIMIT; i++)
    is_prime[i] = true;

  for(int i = 2; i < LIMIT; i++) {
    if (is_prime[i]) {
      primes->push_back(i);
      for(int fac = 2; i * fac < LIMIT; fac++)
        is_prime[i * fac] = false;
    }
  }

  int size = (int) primes->size();
  int max_len = 0;
  int max_sum = 0;
  int sum;
  for(int i = 0; i < size - 1; i++) {
    sum = (*primes)[i];
    for(int j = i + 1; j < size; j++) {
      if (sum > LIMIT)
        break;
      if (is_prime[sum] && j - i + 1 > max_len) {
        max_sum = sum;
        max_len = j - i + 1;
      }
      sum += (*primes)[j];
    }
  }
  std::cout << "max prime " << max_sum << ", length is " << max_len << std::endl;
  std::clock_t c_end = std::clock();
  std::cout << "time is " << 1000.0 * (c_end-c_start) / CLOCKS_PER_SEC  << std::endl;
  return 0;
}
