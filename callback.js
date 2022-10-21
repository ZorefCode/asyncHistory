
function getFirst(callback) {
    setTimeout(function () {
        callback('First')
    }, 100)
}
function getSecond(callback) {
    setTimeout(function () {
        callback('Second')
    }, 10)
}
function getThird(callback) {
    setTimeout(function () {
        callback('Third')
    }, 1)
}

getFirst(function (res) {
    console.log(res)
    getSecond(function (res) {
        console.log(res)
        getThird(function (res) {
            console.log(res)
        })
    })
})
