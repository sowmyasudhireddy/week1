minmax(process.argv.slice(2));
function minmax(arr)
{
    var min=Number(arr[0]);
    var max=Number(arr[0]);
    for(var i=1;i<arr.length;i++)
    {
        var temp=Number(arr[i]);
        if(temp<min)
        min=temp;
        if(temp>max)
        max=temp;
    }
    console.log("max:"+max+",min:"+min);
}

output:
C:\Users\Sowmya Sudhireddy\3D Objects\javascript assignment> node minmax.js 5 1 7 4 9
max:9,min:1
