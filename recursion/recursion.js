/* function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

console.log(factorial(5)) */

function fibonacci(n) {
  // Базовые случаи: fib(0) = 0, fib(1) = 1
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  }
  // Рекурсивный случай: fib(n) = fib(n-1) + fib(n-2)
  else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

// Пример использования
console.log(fibonacci(6))
