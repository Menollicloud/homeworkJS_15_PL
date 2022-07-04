const uno = {
    x: 10,
    y: 20,
};

const dos = {
    z: 30,
};

const tres = {
    x: 10,
};

const сuatro = {
    x: 20,
    y: 30,
};

function assignObjects(obj1, obj2) {
    let newObj = Object.assign({}, obj1, obj2);
    return newObj;            
}

console.log(assignObjects(uno, dos));
console.log(assignObjects(tres, сuatro));