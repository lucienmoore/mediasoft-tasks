// Задача 1

function task1() {
    for (let i = 0; i < 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz')
        }
        else if (i % 5 === 0) {
            console.log('Buzz')
        }
        else if (i % 3 === 0) {
            console.log('Fizz')
        }
    }
}

task1()

// Задача 2

function task2(firstArray, secondArray) {
    let tempArray = []
    for (let i = 0; i < secondArray.length; i++) {
        tempArray.push({
            index: i,
            value: secondArray[i]
        }) 
    }
    tempArray.sort(function(a, b) {
        return a.value - b.value;
    });
    firstArray = tempArray.map(({index, value}) => {
        return firstArray[index]
    })
    return firstArray
}

console.log(task2([1, 4, 6], [11, 33, 22])) 