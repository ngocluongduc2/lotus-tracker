use std::time::{SystemTime, UNIX_EPOCH};

fn median(mut v: Vec<i64>) -> f64 {
    v.sort_unstable();
    let n = v.len();
    if n % 2 == 1 {
        v[n / 2] as f64
    } else {
        (v[n / 2 - 1] as f64 + v[n / 2] as f64) / 2.0
    }
}

fn main() {
    let nums = vec![7, 2, 9, 4, 5, 1];
    let ts = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();
    println!("unix_ts={}", ts);
    println!("nums={:?}", nums);
    println!("median={}", median(nums));
}
