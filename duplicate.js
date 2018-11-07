var arr=process.argv.slice(2);
for(var i=0;i<arr.length;i++)
{
    for(j=1;j<=arr.length;j++)
    {
        if(i!=j && arr[i]==arr[j])
        {
            console.log('duplicate element is:'+ arr[i]);
        }
    }
}