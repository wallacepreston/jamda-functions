'use strict'

// prop :: (String, Object) -> *
const prop = (key, obj) => {
    return obj[key]
}

// equals :: (*, *) -> Boolean
const equals = (item1, item2) => {
    return item1 === item2
}

// gte :: (Number, Number) -> Boolean
const gte = (arg1, arg2) => {
    return arg1 >= arg2
}

// both :: (Function, Function, *) -> Boolean
const both = (func1, func2, arg) => {
    return func1(arg) && func2(arg)
}

// flip :: (Function, *, *) -> *
const flip = (funcToFlip, arg1, arg2) => {
    return funcToFlip(arg2, arg1)
}

// map :: (Function, Array) -> Array
const map = (func, arr) => {
    return arr.map(elem => {
        return func(elem)
    })
}

// filter :: (Function, Array) -> Array
const filter = (func, arr) => {
    return arr.filter(elem => {
        return func(elem)
    })
}

// sort :: (Function, Array) -> Array
const sort = undefined

// descend :: (Function, *, *) -> Number
const descend = undefined

// pick :: ([String], Object) -> Object
const pick = undefined

// uniqBy :: (Function, Array) -> Array
const uniqBy = undefined

// pipe :: (...Functions) -> Function
const pipe = undefined

// We curry everything for you. For extra-hard mode, implement curry yourself.
// http://ramdajs.com/docs/#curry
const { curry } = require('ramda')

module.exports = {
    prop: prop && curry(prop),
    equals: equals && curry(equals),
    gte: gte && curry(gte),
    map: map && curry(map),
    filter: filter && curry(filter),
    uniqBy: uniqBy && curry(uniqBy),
    sort: sort && curry(sort),
    descend: descend && curry(descend),
    both: both && curry(both),
    pick: pick && curry(pick),
    flip: flip && curry(flip),
    pipe,
}
