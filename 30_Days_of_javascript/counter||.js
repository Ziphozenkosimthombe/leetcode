/**
    Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

    The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.
*/


const createCounter = (init) => {
    let originalValue = inti

    return{
        increment: function(){
            return init += 1
        },
        reset: function(){
            init = originalValue
            return init
        },
        decrement: function(){
            return init -= 1
        }
    }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */