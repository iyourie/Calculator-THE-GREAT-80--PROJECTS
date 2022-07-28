//variable (input)
let inp = document.querySelector('input')
//variables (operators)
let plus = document.querySelectorAll('.op')[0]
let mul = document.querySelectorAll('.op')[1]
let dev = document.querySelectorAll('.op')[2]
let min = document.querySelectorAll('.op')[3]
let operations = document.querySelectorAll('.op')
let eq = document.querySelectorAll('button')[8]
let clear = document.querySelectorAll('button')[0]
let clearAll = document.querySelectorAll('button')[4]
//variable (numbers)
let btns = document.querySelectorAll('.num')
//variables (arrays)
let sec = [];
let cl = []
//User can see a display showing the current number entered 
btns.forEach(x => {
    x.onclick = () => {
        cl.push(x.textContent)
        if (inp.value.length >= 8) {
            alert("please don't enter more than 8 digits")
        } else {
            inp.value = Number(cl.join(''))
        }
    }
})
//plus operation
plus.onclick = () => {
    sec.push(Number(inp.value));
    cl.length = 0;
    inp.value = ''
    //result of the operation
    eq.onclick = () => {
        sec.push(Number(inp.value))
        let red = sec.reduce((x, y) => {
            return x + y
        })
        if (String(red).split('').length > 8) {
            inp.value = 'error 404'
        } else {
            inp.value = red
        }
        cl.length = 0
        sec.length = 0
    }
}
//minus operation
min.onclick = () => {
    sec.push(Number(inp.value));
    cl.length = 0;
    inp.value = ''
    //result of the operation
    eq.onclick = () => {
        sec.push(Number(inp.value))
        let red = sec.reduce((x, y) => {
            return x - y
        })
        if (String(red).split('').length > 8) {
            inp.value = 'error 404'
        } else {
            inp.value = red
        }
        cl.length = 0
        sec.length = 0
    }
}
//multiplication operation
mul.onclick = () => {
    sec.push(Number(inp.value));
    cl.length = 0;
    inp.value = ''
    //result of the operation
    eq.onclick = () => {
        sec.push(Number(inp.value))
        let red = sec.reduce((x, y) => {
            return x * y
        })
        if (String(red).split('').length > 8) {
            inp.value = 'error 404'
        } else {
            inp.value = red
        }
        cl.length = 0
        sec.length = 0
    }
}
//devide operation
dev.onclick = () => {
    sec.push(Number(inp.value));
    cl.length = 0;
    inp.value = ''
    //result of the operation
    eq.onclick = () => {
        sec.push(Number(inp.value))
        let red = sec.reduce((x, y) => {
            return x / y
        })
        if (String(red).split('').length > 8) {
            inp.value = 'error 404'
        } else {
            inp.value = red
        }
        cl.length = 0
        sec.length = 0
    }
}
//clear button
clear.onclick = () => {
    cl.pop()
    inp.value = Number(cl.join(''))
}
//clear all button
clearAll.onclick = () => {
    cl.length = 0
    inp.value = Number(cl.join(''))
}