//
const nameOne = "Traevon";
const nameTwo = "Vivica";

if (nameOne.length > nameTwo.length) {
    console.log(`${nameOne} is longer than ${nameTwo} by ${nameOne.length - nameTwo.length} characters.`);
  } else if (nameTwo.length > nameOne.length) {
    console.log(`${nameTwo} is longer than ${nameOne} by ${nameTwo.length - nameOne.length} characters.`);
  } else {
    console.log(`${nameOne} and ${nameTwo} are the same length.`);
  }  