# Generator fun
import time
start = time.time()

def get_date():
    year = 1900
    month = 1
    day = 1
    dayStr = 1
    thirty_day_month = set([9, 4, 6, 11])
    while True:
        yield (year, month, day, dayStr)

        dayStr += 1
        if dayStr > 7:
            dayStr = 1

        day += 1
        # check day limit
        if month in thirty_day_month:
            if day > 30:
                day = 1
                month += 1
        elif month == 2:
            is_leap_year = (year % 100 == 0 and year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)
            if (is_leap_year and day > 29) or day > 28:
                day = 1
                month += 1
        elif month == 12 and day > 31:
            year += 1
            month = 1
            day = 1
        elif day > 31:
            month += 1
            day = 1

date_gen = get_date()
date_tuple = next(date_gen)
while date_tuple[0:3] != (1901, 1, 1):
    date_tuple = next(date_gen)

sunday_count = 0
while date_tuple[0:3] != (2000, 12, 31):
    if (date_tuple[3] == 7 and date_tuple[2] == 1):
        sunday_count += 1

    date_tuple = next(date_gen)

end = time.time()
print("sunday_count is {0},  {1} s".format(sunday_count, end - start))
