const n=4;
// for(let i=n;i>0;i--){
//     for(let j=0;j<i;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

for(let i=n;i>0;i--){
    let str="";
    for(let j=0;j<i;j++){
        str+="* ";
    }
    console.log(str);
}


