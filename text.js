
function sensitive()
{
    const str=document.getElementById('T').value;
    const words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    for(let j=0;j< words.length;j++){
        if(j==0){
            words[i]=words[i][j].to
        }
    }
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
    alert(words);
    console.log(words);
}