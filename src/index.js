function clone() {
    const _copy = (obj1, obj2) => {
        const _obj = Object.assign({}, obj1)
        for (let i in obj2) {
            if (typeof _obj[i] === typeof obj2[i]) {
                if (typeof obj2[i] !== 'object') {
                    _obj[i] = obj2[i]
                } else {
                    _obj[i] = _copy(_obj[i], obj2[i])
                }
            } else {
                _obj[i] = obj2[i]
            }
        }
        return _obj;
    }

    const _args = Object.assign({}, arguments)
    let _len = Object.keys(_args).length
    while (_len-- > 0) {
        _args[_len - 1] = _copy(_args[_len - 1], _args[_len])
    }
    return _args[0]
}

module.exports = clone