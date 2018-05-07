'use strict'

// prop :: (String, Object) -> *
const prop = undefined

// equals :: (*, *) -> Boolean
const equals = undefined

// gte :: (Number, Number) -> Boolean
const gte = undefined

// both :: (Function, Function, *) -> Boolean
const both = undefined

// flip :: (Function, *, *) -> *
const flip = undefined

// map :: (Function, Array) -> Array
const map = undefined

// filter :: (Function, Array) -> Array
const filter = undefined

// sort :: (Function, Array) -> Array
const sort = undefined

// descend :: (Function, *, *) -> Boolean
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
