function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;

}

function pop() {
  return this.dataStore[--this.top];

}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;

}

function clear() {

  this.top = 0;
}

function isPalindrom(word) {
  if (word.length > 0) {
    var a = new Stack();
    for (var i = 0; i <= word.length - 1; i++) {
      a.push(word[i]);
    }
    var reWord = '';
    while (a.length() > 0) {
      reWord += a.pop();
    }
    console.log(reWord);
  }
  if (word == reWord) {
    console.log(word + ' its a Palindrome');

  } else {
    console.log(word + ' its not a Palindrome');
  }

}

isPalindrom('s');
