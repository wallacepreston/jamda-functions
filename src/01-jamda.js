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
const sort = (comparatorFunc, arrToSort) => {
    const arrToReturn = arrToSort.slice(0);
    return arrToReturn.sort(comparatorFunc)
}

// descend :: (Function, *, *) -> Number
const descend = (func, arg1, arg2) => {
    const result1 = func(arg1)
    const result2 = func(arg2)
    if (result1 === result2) return 0
    else if (result1 < result2) return 1
    return -1
    
}

// pick :: ([String], Object) -> Object
const pick = (arrOfStr, objToCopy) => {
    // create new object newObj
    //map over array
    //set newObj at current element equal to objToCopy at current element
    // return newObj
    let newObj = {}
    arrOfStr.map(str => {
        newObj[str] = objToCopy[str]
    })
    return newObj
}

// uniqBy :: (Function, Array) -> Array
const uniqBy = (func, arr) => {
    
}

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
