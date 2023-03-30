

  // Bài 7
let shoper =['Jeans','T-Shirt','Socks'];
let input = prompt("Hi threre, welcome to shop admin panel,what do you want (C,R,U,D)");

if(input.toLowerCase()==='c'){
   let inputNewItems = prompt ('Enter the name of the new item');
    shoper.push(inputNewItems)
   alert('done');
   console.log(shoper);
}
else if(input.toLowerCase()==='r'){
for (i=0;i<shoper.length;i++){
    console.log(i+1,shoper[i]);
  }
}
else if (input.toLowerCase()==='u'){
    let inputNumber = prompt('Enter the posltion you want to update');
    let inputUpdate = prompt('Enter the new name');
    inputNumber=shoper.splice(inputNumber-1,1,inputUpdate);
     alert('done');
    console.log(shoper);
}
else if(input.toLowerCase()==='d'){
    let inputNumberdelete = prompt('Enter the positition to delete');
    alert('done')
    inputNumberdelete = shoper.splice(inputNumberdelete-1,1)
     console.log(shoper)
    }
    
//////Bai 8
// let languages = ['HTML','CSS','Basic of Javascript','node package manager','git'];
// Boolean(languages)
// console.log(languages);
// let input = prompt('Enter  your command(New,Delete,Update,Compelete)');
// let inputNewItems = prompt('Enter new task:');




