//HACKERRANK

// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true


function countApplesAndOranges(startHouse, endHouse, appleTree, orangeTree, applesArray, orangesArray) {
  // Write your code here
  let applesCount = 0;
  let orangesCount = 0;

  for(let index = 0; index < applesArray.length; index += 1){
    if((applesArray[index] + appleTree) >= startHouse && (applesArray[index] + appleTree) <= endHouse){
      applesCount += 1;
    }
  }

  for(let index = 0; index < orangesArray.length; index += 1){
    if((orangesArray[index] + orangeTree) <= endHouse && (orangesArray[index] + orangeTree) >= startHouse){
      orangesCount += 1;
    }
  }

  console.log(applesCount);
  console.log(orangesCount);
};

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
// 1
// 2