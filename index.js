function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key);
  };
}

const fib = memoize(n => (n < 2 ? n : fib(n - 1) + fib(n - 2)));

console.log("Fibonacci(10) =", fib(10));
console.log("Timestamp (UTC):", new Date().toISOString());
