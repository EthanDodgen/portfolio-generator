const profileDataArgs = process.argv.slice(2, process.argv.length)//process is a global object(like window or document), argv is an array that holds anything typed into the command line, .slice() returns brand new array based on process.argv starting at the third index,
console.log(profileDataArgs)

const printProfileData = profileDataArr => {
  //This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  //Is the same as this...
  profileDataArr.forEach((profileItem) => {//.forEach() accepts a function as an argument and executes that function on each element of the array, using the value of the element at that iteration as its argument
    console.log(profileItem)
  });
};
  
printProfileData(profileDataArgs);


