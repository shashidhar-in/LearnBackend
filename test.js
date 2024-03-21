//const fs=require('fs');

// for(var i=0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 1);
// }

// for(let i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 1);
// }


// let greeting;
// greetign = {}; // Typo!
// console.log(greeting);
// function bark() {
//     console.log('Woof!');
//   }
  
//   bark.animal = 'dog';

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const member = new Person('Lydia', 'Hallie');
//   Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   console.log(member.getFullName());


// fs.writeFile('./test.txt', 'Hello, Node.js');
// fs.writeFileSync('./test.txt', 'Hello, Node.js s', (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// });


// const res=fs.readFileSync('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
// });

// fs.appendFile('./text.txt', 'Appended values', (err) => {
//     if (err) throw err;
//     console.log('The "Appended values" was appended to file!');
//   });
//   console.log(fs.readFileSync('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
// }));

// fs.unlinkSync('./test.txt');

// let arr=['s','h','a','n','k','a','r'];

// console.log(arr.sort().join(''));

const asyncCheck = async () => {
    let i = 0;
    // Function to perform iteration in chunks
    const doChunk = () => {
        if (i < 10000000000) {
            i++;
            // Continue the loop after allowing other tasks to process
            setTimeout(doChunk, 0);
        } else {
            console.log("done async");
        }
    };
    doChunk();
};

console.log("Sync1");
asyncCheck();
console.log('Sync2');