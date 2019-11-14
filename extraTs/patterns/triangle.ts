export default function triangle(a){
  let space=a-1;
  let star=1;

  let str="";
   for(let i=0;i<a;i++){
      for(let j=1;j<=space;j++){
          str=str+ " " ;
      }
      space--;

      for(let k=1;k<=star;k++){
          str=str+ "* ";
      }
      star++;

   str=str+"\n";
  }

  console.log(str);
}
//triangle(5);
