function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
//con la propiedad .netx se van recorriendo los yield por lo que en cada ocasión nos da un valor diferente

function* iterate(array){
    for (let value of array) {
        yield value
    }
}

const it = iterate(['oscar', 'dante', 'ana', 'lucia', 'juan'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //como no hay siguiente valor arroja undefined