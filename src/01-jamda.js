'use strict'

// we curry your functions for you… for extra-hard mode, implement curry
// yourself (or make all your functions curried to begin with)
const { curry } = require('ramda')

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
