String.prototype.camelCase = function () {
  return this.split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}

console.log('hello case'.camelCase())
