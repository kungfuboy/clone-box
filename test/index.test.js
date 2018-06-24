import test from 'ava'
import clone from '../src/index'

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
    h: 7
}
const obj2 = {
    a: 1,
    b: {
        c: {
            d: 2,
            e: {
                f: 3,
                g: [4, 5, 6]
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
                g: [4, 5, 6]
            }
        }
    },
    h: 7
}

test('两个对象合并', t => {
    // 断言
    t.is(clone(obj1, obj2), result)
})