function saturdayFun(activity = 'roller-skate') {
    return `On Saturday, let's ${activity}!`;
  }
  
  function mondayWork(task = 'go to the office') {
    return `On Monday, let's ${task}!`;
  }
  
  function wrapAdjective(flair = '*') {
    return function (adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage
  console.log(saturdayFun()); // Output: On Saturday, let's roller-skate!
  console.log(saturdayFun('go hiking')); // Output: On Saturday, let's go hiking!
  
  console.log(mondayWork()); // Output: On Monday, let's go to the office!
  console.log(mondayWork('work from home')); // Output: On Monday, let's work from home!
  
  const encouragingPromptFunction = wrapAdjective('!!!');
  console.log(encouragingPromptFunction()); // Output: You are *special*!
  console.log(encouragingPromptFunction('amazing')); // Output: You are !!!amazing!!!
  