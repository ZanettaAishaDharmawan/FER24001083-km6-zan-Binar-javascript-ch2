var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function sortBooksByTitleAuthorID(books) {
  // validasi input
  if (!Array.isArray(books)) {
    return "Input is not an array.";
  } else if (books.length === 0) {
    return "List kosong";
  } else if (books === undefined) {
    return "Parameter salah";
  }

  // Check if the array contains objects
  if (!books.every((item) => typeof item === "object")) {
    return "Array contains non-object elements.";
  }

  return books.sort((a, b) => {
    // Jika judul berbeda, urutkan berdasarkan judul
    if (a.title !== b.title) {
      return a.title.localeCompare(b.title);
    }

    // Jika judul sama, urutkan berdasarkan penulis
    if (a.author !== b.author) {
      return a.author.localeCompare(b.author);
    }

    // Jika judul dan penulis sama, urutkan berdasarkan library ID
    return a.libraryID - b.libraryID;
  });
}

console.log(sortBooksByTitleAuthorID(library));
