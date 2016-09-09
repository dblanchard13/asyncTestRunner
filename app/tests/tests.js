function generateDummyTest() {
  const delay = 2000 + Math.random() * 7000
  const testPassed = Math.random() > 0.5

  return function(callback) {
    setTimeout(function() {
      callback(testPassed)
    }, delay)
  }
}

const tests = [
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
  {run: generateDummyTest(), description: 'I never made it as a wise man'},
  {run: generateDummyTest(), description: 'Where is your boy tonight?'},
  {run: generateDummyTest(), description: 'Now do the Harlem shake'},
  {run: generateDummyTest(), description: 'From the windows to the wall!'},
  {run: generateDummyTest(), description: 'All the kids say, "it\'s the weekend"'},
  {run: generateDummyTest(), description: 'Panda panda panda panda'},
];

module.exports = tests