function pipe(...functions) {
    return function (arg) {
        return functions.reduce((acc, fn) => fn(acc), arg);
    }
}