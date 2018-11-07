function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log("prime numbers upto 100:"+arr); 
}
display(100);

output:
C:\Users\Sowmya Sudhireddy\3D Objects\javascript assignment> node primenumbers.js
prime numbers upto 100:3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
