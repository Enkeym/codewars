/* const evenOrOdd = (function () {
  // Define the function that checks if a number is even or odd
  function checkEvenOrOdd(n) {
    return Math.abs(n) % 2 === 0 ? 'Even' : 'Odd'
  }

  // Create the main function
  function mainFunction(n) {
    return checkEvenOrOdd(n)
  }

  // Create a Proxy to handle property access
  const proxy = new Proxy(mainFunction, {
    // Handle function calls
    apply: function (target, thisArg, argumentsList) {
      const n = argumentsList[0]
      return target(n)
    },
    // Handle property access
    get: function (target, prop, receiver) {
      const n = parseInt(prop)
      if (!isNaN(n)) {
        return checkEvenOrOdd(n)
      } else {
        return Reflect.get(target, prop, receiver)
      }
    }
  })

  return proxy
})() */

const target = function (n) {
  return n % 2 ? 'Odd' : 'Even'
}
const handler = {
  get(target, prop) {
    return target(prop)
  }
}
const evenOrOdd = new Proxy(target, handler)
