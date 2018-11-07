var i;
var fib=[];
fib[0]=0;
fib[1]=1;
for(i=2;i<=10;i++){
    fib[i]=fib[i-2]+fib[i-1];
    console.log(fib[i]);
}

output:
C:\Users\Sowmya Sudhireddy\3D Objects\javascript assignment> node fibonocci.js
1
2
3
5
8
13
21
34
55
