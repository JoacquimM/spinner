
function spinnerDoodle(){
  const symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  ',  '\n  ']
  let timeWait = 100
  
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {
      process.stdout.write(symbols[i]);
    }, timeWait += 300);
  }
}

  spinnerDoodle();



//----------------------------------------------------------------
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|  '); 
// }, 900);

// //----------------------------------------------------------------


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|  '); 
// }, 1900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\n  '); 
// }, 2100);