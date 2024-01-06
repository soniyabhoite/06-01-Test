//Q.2 pallindrome

function pallindrome()
    {
          var num=121
          var temp=num
          var rem=0
          var rev=0
          while(num>0)
          {
           
               rem=num%10
               rev=rem*10
               num=num/10
          }
          console.log(rev)
          if(temp==rev)
          {
            console.log(temp,"is pallindrome")
          }
          else{
            console.log(temp,"is not pallindrome")
          }
       

    }

pallindrome()


//Q.3 calculate sum

function calculateSum()
{
   var array=[1,2,3,4,5]
   var sum=0
   for(var i=0;i<array.length;i++)
   {
       sum=sum+array[i]
   }
   console.log("sum of array element :" ,sum)
}
calculateSum()

//Q.5 reverse array

function reverseArray()
{
    var array=[1,2,3,4,5]
    var rev_array=[]
    var j=0
    for(var i=array.length-1;i>=0;i--)
    {
      
        rev_array[j++]=array[i]
        
    }
   console.log(rev_array)
}

reverseArray()


//Q.7 factorial

function factorial()
{
    var num=3
    var fact=1
    for(var i=num;i>=1;i--)
    {
        fact=fact*i
    }
    console.log("factorial of",num,":",fact)
}

factorial()


//Q.9 factorial using while
function factorial_using_while()
{
    var num=4
    var original_num=num
    var fact=1
    var temp=0
    while(num>=1)
    {
        temp=num
        fact=fact*temp
        num=num-1
    }
    console.log("factorial of",original_num,":",fact)
}

factorial_using_while()


//Q.10 sorted_array
function sort_array()
{
    var array=[2,3,1,4,5]
    var new_array=array.sort()
    console.log("sorted array",new_array)

}

sort_array()

//Q.13 


    