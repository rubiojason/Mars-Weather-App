function func1() {
    var data = 'this is the fucking data'
    return {
        radio: 'hello'
    }
}

function func2() {
    var data2 = func1()
    console.log(data2.radio)
}

func2()
