let arr="";
function doubleit()
{
    let str=document.getElementById('T').value;
    for(let i=0;i<str.length;i++){
        arr=arr+str[i];
        arr=arr+str[i];
    }
    console.log(arr);
    alert(arr);
}