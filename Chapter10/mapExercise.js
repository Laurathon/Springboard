//Question 1
new Set([1, 1, 2, 2, 3, 4]);
//answer
Set(4) {1, 2, 3, 4}

//Question 2 what does code return
[...new Set("referee")].join("")
//answer
"ref"

//Question 3, what does m look like after running code
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//answer
0: {Array(3) => true}
key: (3) [1, 2, 3]
value: true
1: {Array(3) => false}
key: (3) [1, 2, 3]
value: false

//Question 4 hasDuplicate. write funciton that accepts array and 
//returns true or false if contains a duplicate

function hasDuplicate(arr) {
  let aLength = arr.length;
  let b = new Set(arr);
  let c = b.size;
  console.log('alength is '+aLength+' c is '+c+ 'the set is' +b );
  return (c === aLength) ?false: true;
};

//Question 5 vowel count
//accepts a string and returns a map where keys are numbers
//and values are count of vowels in sting

function vowelCount (str){
  const vowelMap = new Map();
  let vowels = "aeiou";
  for (let char of str){
    let small= char.toLowerCase();
    if(vowels.indexOf(small) != -1){
      //check if in map
      if(vowelMap.has(small)){
        vowelMap.set(small, vowelMap.get(small)+1);
      }
      else{
        vowelMap.set(small,1);
      } //else
    } //if indexos
  } //for loop
  return vowelMap;
} //function

