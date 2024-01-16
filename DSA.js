//Q.1 in-place

const removeElement = function (nums, val) {
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[count] = nums[i];
        count++;
      }
    }
    return count;
  };
  
  console.log(removeElement([1, 2, 2, 3], 2));
  console.log(removeElement([1, 0, 3, 2, 3, 0, 4, 4], 4));


//Q.2 pallindrome

const isPalindrome = function (num) {
    const str = "" + num;
    console.log(str);
  
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] === str[right]) {
        left += 1;
        right -= 1;
      } else {
        return false;
      }
    }
  
    return true;
  };
  
  console.log(isPalindrome(2112));
  console.log(isPalindrome(2345));


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

//Q.4 string pallindrome

const isPalindromeStr = function (str) {
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] === str[right]) {
        left += 1;
        right -= 1;
      } else {
        return false;
      }
    }
  
    return true;
  };
  
  console.log(isPalindromeStr("arra"));
  console.log(isPalindromeStr("awdiz"));
  

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

//Q.6 remove duplicate
const removeDuplicate = function (nums) {
    let result = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (!result.includes(nums[i])) {
        result.push(nums[i]);
      }
    }
  
    return result;
  };
  
  console.log(removeDuplicate([1, 3, 4, 3, 5, 2, 4, 5, 3]));
  console.log(removeDuplicate([7, 6, 8, 4, 7, 2, 7, 5, 6]));

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

//Q.8 number is prime or not
function prime(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const result = prime(5);
  console.log(result);
  
  console.log(prime(78));
  console.log(prime(13));

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

//Q.11 find missing number
const findMissingNumber = function (nums) {
    nums.push(0);
    const noDuplicates = [...new Set(nums)];
  
    const n = noDuplicates.length;
  
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
  
    for (let i = 0; i < noDuplicates.length; i++) {
      actualSum = actualSum + noDuplicates[i];
    }
  
    return expectedSum - actualSum;
  };
  
  console.log(findMissingNumber([3, 0, 1]));
  console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
  console.log(findMissingNumber([0, 1, 2]));
  console.log(findMissingNumber([2, 4, 1, 3, 6, 7, 8]));

  //Q.12 occurrence of word
  const needleAndHaystack = function (haystack, needle) {
    if (haystack.includes(needle)) {
      return haystack.indexOf(needle);
    } else {
      return -1;
    }
  };
  
  console.log(needleAndHaystack(`sadbutsad`, "sad"));
 

//Q.13 find target
const findTarget = function (nums, target) {
    if (nums.includes(target)) {
      const start = nums.indexOf(target);
      const last = start + 1;
      return [start, last];
    } else {
      return [-1, -1];
    }
  };
  
  console.log(findTarget([5, 7, 7, 8, 8, 10], 8));
  console.log(findTarget([1, 3, 5, 6], 5));
  


//Q.14 combination

const generateParenthesis = function (n) {
    const result = [];
    generateParentheses(result, "", 0, 0, n);
    return result;
  };
  const generateParentheses = (result, current, open, close, n) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (open < n) {
      generateParentheses(result, current + "(", open + 1, close, n);
    }
    if (close < open) {
      generateParentheses(result, current + ")", open, close + 1, n);
    }
  };
  
  console.log(generateParenthesis(4));
  console.log(generateParenthesis(3));
  console.log(generateParenthesis(2));

  //Q.15 remove duplicate character
  const removeDuplicateCharacter = function (str) {
    const arr = str.split("");
    const set = [...new Set(arr)];
  
    let newStr = "";
    for (let i = 0; i < set.length; i++) {
      newStr = newStr + set[i];
    }
  
    return newStr;
  };
  
  console.log(removeDuplicateCharacter(`awdiiz`));

    