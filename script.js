let sum = " ";
while(true){
    let value =(prompt("Masukan sebuah huruf", ''));
    if(!value) break;

    sum+= value;
}

alert(`Sum : ` + sum)