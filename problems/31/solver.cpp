#include <iostream>
#include <chrono>
#include <ctime>
#include <iomanip>

const int ROW_LEN = 201;
const int COL_LEN = 8;

void print_matrix(int row, int col, int matrix[][COL_LEN], int coins[]) {
  int horizontal_padding = 6;
  for(int i = row - 1; i >= 0; i--) {
    std::cout << std::setfill(' ') << std::setw(3) << i << "|";
    for(int j = 0; j < col; j++) {
      std::cout<< std::setfill(' ') << std::setw(horizontal_padding) << matrix[i][j];
    }
    std::cout << std::endl;
  }
  std::cout << "    " ;
  for(int k = 0; k < col * horizontal_padding; k++) {
    std::cout << "_";
  }
  std::cout << std::endl;
  std::cout << "    " ;
  for(int k = 0; k < col; k++) {
    std::cout << std::setfill(' ') << std::setw(horizontal_padding) << coins[k];
  }
  std::cout << std::endl;
}

int main() {
  std::clock_t c_start = std::clock();

  int coins[] = {1, 2, 5, 10, 20, 50, 100, 200};
  int matrix[ROW_LEN][COL_LEN];

  for(int i = 0; i < ROW_LEN; i++) {
    for(int j = 0; j < COL_LEN; j++) {
      if (i < 2 || j == 0) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  for(int sum = 2; sum < ROW_LEN; sum++) {
    for(int j = 1; j < COL_LEN; j++) {
      int k = 0;
      while( sum - k * coins[j] >= 0 ) {
        matrix[sum][j] += matrix[sum - k * coins[j]][j - 1];
        k++;
      }
    }
  }

  print_matrix(ROW_LEN, COL_LEN, matrix, coins);
  std::clock_t c_end = std::clock();
  std::cout << "Ways of change for 200 is " << matrix[ROW_LEN - 1][COL_LEN - 1]
    << ", time is " << 1000.0 * (c_end-c_start) / CLOCKS_PER_SEC  << std::endl;
  return 0;
}
