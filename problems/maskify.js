function maskify(cc) {
  if (cc.length <= 4) {
    return cc
  }

  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}

console.log(maskify('4556364607935616'))
//console.log(maskify('64607935616'))
//console.log(maskify('1'))
//console.log(maskify(''))
//console.log(maskify('Skippy'))
//console.log(maskify('Nananananananananananananananana Batman!'))
