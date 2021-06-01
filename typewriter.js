const typewriter = function(sentence) {
  let i = 50;
  
  for (const char of sentence) {
    setTimeout(() => {process.stdout.write(char)}, i);
    i += 50;
  }
  setTimeout(() => {console.log('\n')}, 50 * sentence.length);
};

typewriter("hello my little friend");
