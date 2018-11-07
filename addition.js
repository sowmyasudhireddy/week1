function addition(arr){
    var number1=Number(arr[0]);
    var number2=Number(arr[1]);
    console.log('sum of '+number1+'and'+number2+'is',(number1+number2));
}
addition(process.argv.slice(2));

outpuy:
 C:\Users\Sowmya Sudhireddy\3D Objects\javascript assignment> node addition.js 2 3
sum of 2and3is 5
