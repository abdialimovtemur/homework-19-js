// 1. Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.

function swapElements(arr, k) {
    arr.push(...arr.splice(k, 1, arr.pop()))
    console.log(arr)
}

// swapElements([1, 2, 3, 4, 5], 2); // [1, 2, 5, 4, 3]



// 2. Berilgan massiv ichidagi barcha elementlarni n marta takrorlang va yangi massiv qaytaring.

function repeatElements(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let g = 0; g < n; g++) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(repeatElements([1, 2, 3], 3)); // [1, 1, 1, 2, 2, 2, 3, 3, 3]



// 3. Berilgan massiv ichidagi juft indeksdagi elementlar yig'indisini toping.


function sumEvenIndexedElements(arr) {
    let coupleIndexTotal = 0
    let oddIndexTotal = 0
    arr.forEach((element, index) => {
        if (index % 2 == 0) {
            coupleIndexTotal = coupleIndexTotal + element
        } else {
            oddIndexTotal = oddIndexTotal + element
        }
    });
    console.log(`"juft indexdagi sonlar yig'indisi" ${coupleIndexTotal}`)
    console.log(`"toq indexdagi sonlar yig'indisi" ${oddIndexTotal}`)
}

// sumEvenIndexedElements([1, 2, 3, 4, 5, 6]); // 9 (1 + 3 + 5)





// 4. Berilgan massiv ichidagi barcha unikal (takrorlanmagan) elementlarni qaytaring.

function uniqueElements(arr) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
    
}

// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]




// 5. Berilgan massiv ichidagi barcha qatorlarni teskarisiga o'giring.

function reverseStringsInArray(arr) {
    let newArr = []
    arr.forEach(element => {
        newArr.push(element.split('').reverse().join(''))
    });
    console.log(newArr)
}

// console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']



// 6. Berilgan massiv ichidagi elementlarni n qadamga chapga ko'chiring.

function rotateArrayLeft(arr, n) {
    n = n % arr.length; 
    let leftPart = arr.slice(0, n);
    let rightPart = arr.slice(n); 
    return rightPart.concat(leftPart); 
}

// console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]