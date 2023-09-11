function* createIdGenerator() {
    let i = 0;
    while (true) {
       yield i++;
    }
 }
 
 
 const idGenerator = createIdGenerator();
 
 console.log(idGenerator.next().value);
 console.log(idGenerator.next().value);
 console.log(idGenerator.next().value);


 function* newFontGenerator(startSize) {
   let fontSize = startSize;
   while (true) {
      const command = yield fontSize;
      if (command === "up") {
         fontSize += 2;
      } else if (command === "down") {
         fontSize -= 2;
      }
   }
}

const fontGenerator = newFontGenerator(14);

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);