const arr = Array.from({ length: 1000 }, () => 1)
const arr2 = Array.from({ length: 1e6 }, () => 1)
let sum = 0
let sum2 = 0
let sum3 = 0
let sum4 = 0

console.info('== REDUCE ==')
console.time('reduce 1000')
const _ = arr.reduce((acc: number, s: number) => acc + s, 0)
console.timeEnd('reduce 1000')

console.time('reduce 1e6')
const __ = arr2.reduce((acc: number, s: number) => acc + s, 0)
console.timeEnd('reduce 1e6')

console.info('\n== FOR OF ==')
console.time('for of 1000')
for (const val of arr) {
  sum += val
}
console.timeEnd('for of 1000')

console.time('for of 1e6')
for (const val of arr2) {
  sum2 += val
}
console.timeEnd('for of 1e6')

console.info('\n== FOR IN ==')
console.time('for in 1000')
for (const idx of arr) {
  sum3 += arr[idx]
}
console.timeEnd('for in 1000')

console.time('for in 1e6')
for (const idx of arr2) {
  sum4 += arr2[idx]
}
console.timeEnd('for in 1e6')
