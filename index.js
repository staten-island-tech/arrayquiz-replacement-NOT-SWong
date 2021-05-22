const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
const wroteIn = books.map( (books) => books.authorFirst + " " + books.authorLast + ` wrote ` + `"` + books.name + `"` + ` in ` + books.publishDate);
console.log(wroteIn);
//Sort books from oldest to most recent
const ordered = books.sort((a,b) => (a.publishDate > b.publishDate ? 1 : -1));
console.table(ordered);
//sort books alphabetically
const alphabetical = books.sort((a,b) => {
  let fa = a.name.toLowerCase();
  let fb = b.name.toLowerCase();
  return fa < fb ? -1 : fa > fb ? 1 : 0;
});
//Find who wrote War and Peace
const WnP = books.find(names => {
  if (names.name === "War and Peace") {
    return true;
  }
});
console.log(WnP.authorFirst + ` ` + WnP.authorLast);
//how many books were written before 1900?
const prior = books.filter(books => {
  if (books.publishDate < 1900) {
    return true;
  }
});
console.log(prior.length);
//was there at least one book published within the last 100 years?
const within = books.filter((books) => books.publishDate > 1921);
console.log(within);
//was every book published within the last 100 years?
const every = books.every(function (book) {
  const currentYear = new Date().getFullYear();
  if (currentYear - book.publishDate <= 100) {
    return true;
  }
});
console.log(every);