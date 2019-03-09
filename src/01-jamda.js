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
    //pass through matcher func
    //if whatever is returned is NOT in the array, the return is added to the array, and the item itself is added to another array
    let returns = []
    let arrToReturn = []
    arr.map(elem => {
        if (!returns.includes(func(elem))) {
            returns.push(func(elem))
            arrToReturn.push(elem)
        }
    })
    return arrToReturn
}

// pipe :: (...Functions) -> Function
const pipe = (...funcs) => (
    //return a function that can be called with any number of arguments, passing them through the first function, then the result is passed through all remaining functions, left-to-right
    (...args) => {
        // call the first function, with the arguments passed in
        const firstReturn = funcs[0](...args)
        // we only need all but the first function now
        const restOfFuncs = funcs.slice(1)
        // loop over the functions, and call each one, passing in the result of the previous function call. Start with the result of calling the first function with all the arguments passed in.
        return restOfFuncs.reduce((accumulator, currFunc) => currFunc(accumulator), firstReturn)
    }
)

// const concatWithSpace = (...strings) => strings.join(' ')
// const toUpper = s => s.toUpperCase()
// const yell = s => s + '!'
// const resume = s => '...' + s
// const resumeShoutingSomeWords = pipe(
//     concatWithSpace, // first func can take any number of args
//     resume, // all other funcs are unary
//     toUpper,
//     yell,
//     yell,
//     yell,
// )
// resumeShoutingSomeWords('well', 'done')

//example of pipe function
// pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

//map over the functions (using rest operator?)
//run the first function, passing in the arguments (using rest operator?)
//run the first function's return through the rest of the functions.


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
