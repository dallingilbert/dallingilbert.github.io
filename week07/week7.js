// creating a counter function that utilizes inner and outer functions
function counter(start){
    let i = start;
    return function() {
        return i++;
    }
}

const count = counter(1);
console.log(count());

// demonstrating an example of inner and outer function scope
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside); // second
        console.log(inside); // third
    }
    console.log(outside); // first console log
    inner();
}

outer();
// inner();
// if we try to run inner on it's own we will get an error b/c the
// function is not declared in it's own scope