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

(async()=>{
    console.log(await getFirst());
    console.log(await getSecond());
    console.log(await getThird());
})()
