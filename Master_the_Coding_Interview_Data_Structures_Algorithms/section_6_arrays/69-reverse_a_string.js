function reverse(value){
    const str = value.split("");
    for(let i=0;i<str.length/2;i++){
        const temp = str[i];
        str[i]= str[str.length-1-i];
        str[str.length-1-i]= temp;
    }
    return str.join("");
}

console.log(reverse("hello"));