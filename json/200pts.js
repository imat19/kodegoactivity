1. For each of the exercises below, assume you are starting with the following programming object.


let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


Write the command to add the language "Go" to the end of the languages array.

  programming.languages.push("Go"));
Change the difficulty to the value of 7.
programming.difficulty = 7;  
Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
Write the command to add a new key called isFun and a value of true to the programming object.
  programming.isFun = true;
Using a loop, iterate through the languages array and console.log all of the languages.
  programming.languages.forEach(languages => console.log(languages));
Using a loop, console.log all of the keys in the programming object.
  for(const key in programming) {
  console.log(`${key}`);
}
Using a loop, console.log all of the values in the programming object.
  for(const key in programming) {
  console.log(`${key}: ${programming[key]}`);
}

2. Write the Javascript code to create the following object and follow the instructions carefully.

Create an object to hold information on your favorite movie.It should have properties for title(a string), year_released(a number), and cast(an array of strings).
On separate lines(one console.log statement for each), log the movie information so it looks like:
The Avengers
Year Released: 2012
Cast:
Robert Downey Jr.
Chris Evans
Chris Hemsworth
Scarlett Johansonn
Mark Ruffalo


let avengers = {
  title: "The Avengers",
  year_released: 2012,
  cast: [
    "Robert Downey Jr.",
    "Chris Evans",
    "Chris Hemsworth.",
    "Scarlett Johansonn."
  ]
};
for (const key in avengers) {
  console.log(`${key}: ${avengers[key]}`)




  3. Write the Javascript code to create the following object and follow the instructions carefully.

Create an array of objects, where each object describes a book and has properties for the title(a string), author(a string), and alreadyRead(a boolean indicating if you read it yet).
Iterate through the array of books.For each book, console.log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
let book = {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      alreadyRead: true
    };
  if (this.alreadyRead = false) {
    console.log("You Need to read " + book.title);
  }
  else {
    console.log("You Need to read The Lord of the Rings")
  }




  4. Write the Javascript code to create the following object and follow the instructions carefully.

Create an object that represents a dog.It should have properties for tiredness, hunger, lonliness and happiness
Next, write methods that increase and decrease those properties.Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
    Last, write a method that prints out the dog's status in each area.



  let dog = {
    tiredness: 5,
    hunger: 10,
    lonliness: 0,
    happiness: 0
  };
  let pet = 0;

  function addFEED(feed) {
    newFeed = dog.hunger - feed;
    return newFeed;
  }
  console.log("My Dog Hunger is" + " " + addFEED(10))

  function addSleep(sleep) {
    newSleep = dog.tiredness - sleep;
    return newSleep;
  }
  console.log("My Dog tiredness is" + " " + addSleep(5))

  function addPet(pet) {
    newPet = dog.happiness + dog.lonliness + pet;
    return newPet;
  }
  console.log("My Dog pet is" + " " + addPet(20))





  // 1. Tower of Hanoi

  function enqueue(queue, item) {
    queue.push(item);
  }

  function dequeue(queue) {
    return queue.shift();
  }

  const students = [
    { name: "John Doe", batch_code: "WD31" },
    { name: "Barack Obama", batch_code: "WD30" },
    { name: "James Reid", batch_code: "WD31" },
    { name: "Sam Fried", batch_code: "WD31" },
    { name: "Donald Trump", batch_code: "WD29" },
    { name: "Elon Musk", batch_code: "WD30" },
    { name: "Bryl Lim", batch_code: "WD29" },
    { name: "Morgan Freeman", batch_code: "WD29" },
    { name: "Tony Stark", batch_code: "WD30" },
  ];

  const wd29 = [];

  const wd30 = [];

  const wd31 = [];

  for (let x = 0; x < students.length; x++) {
    if (students.batch_code === "WD31") {
      wd29 = ["students"]
    } else if
      (students.batch_code === "WD31") { }
  } else if
    (students.batch_code === "WD31") { }
  else {
    console.log(`Invalid input`)

  }

