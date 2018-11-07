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

output:
C:\Users\Sowmya Sudhireddy\3D Objects\javascript assignment> node duplicate.js 2 4 6 2 7
duplicate element is:2
