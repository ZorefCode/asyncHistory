
function getFirst() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('First')
        }, 100)
    })
}
function getSecond() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Second')
        }, 10)
    })
}
function getThird() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Third')
        }, 1)
    })
}

getFirst().then(res => {
    console.log(res)
    return getSecond()
}).then(res => {
    console.log(res)
    return getThird()
}).then(res => {
    console.log(res)
})

