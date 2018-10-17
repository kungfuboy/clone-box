const clone = require('../src/index.js')

const obj1 = {
  a: 0,
  b: {
    i: 6,
    j: {
      k: {
        f: '8'
      }
    }
  },
  h: 9
}
const obj2 = {
  a: 1,
  b: {
    c: {
      d: 2,
      e: {
        f: 3,
        g: [4, 5, 6, 7]
      }
    }
  }
}
const result = {
  a: 1,
  b: {
    i: 6,
    j: {
      k: {
        f: '8'
      }
    },
    c: {
      d: 2,
      e: {
        f: 3,
        g: [4, 5, 6, 7]
      }
    }
  },
  h: 9
}

test('深度递归合并', () => {
  expect(clone(obj1, obj2)).toEqual(result)
})