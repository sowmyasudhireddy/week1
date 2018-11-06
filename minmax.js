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