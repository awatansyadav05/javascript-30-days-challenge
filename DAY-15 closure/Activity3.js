//task5
const functionArray=[];
for(let i =0;i<5; i++)
{
  functionArray.push(
    (function(index){
      return function(){
        console.log(index);
      }
    })(i)
  )
}

for(let j=0; j<functionArray.length; j++)
{
  functionArray[j]();

}

