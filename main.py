from datetime import datetime
from statistics import mean

def moving_average(seq, window=3):
    return [round(mean(seq[i:i+window]), 2) for i in range(len(seq)-window+1)]

if __name__ == "__main__":
    data = [3, 8, 2, 5, 10, 4, 7]
    print("UTC:", datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"))
    print("Data:", data)
    print("MA(3):", moving_average(data, 3))
