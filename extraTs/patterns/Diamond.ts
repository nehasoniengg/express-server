export default function diamond(a){
  let space=(a/2)+1;
   let star=1;

 let str="";
for(let i=1;i<=a;i++){
for(let j=1;j<=space;j++){
str=str+" ";
}
for(let k=1;k<=star;k++){
 str=str+" *";
}
if(a/2>star){
 star++;
 space--;
}
else{
 star--;
 space++;
}
str=str+"\n";

}
console.log(str);

}
//diamond(5);
