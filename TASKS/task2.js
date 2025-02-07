const data = {
    "schools": [
        {
            "name": "Green Valley High School",
            "address": "123 Main St, Green City",
            "students": [
                {
                    "id": 1,
                    "name": "John Doe",
                    "grade": 10,
                    "subjects": ["Math", "Science", "History"]
                },
                {
                    "id": 2,
                    "name": "Jane Smith",
                    "grade": 12,
                    "subjects": ["English", "Biology", "Art"]
                }
            ]
        },
        {
            "name": "Blue Mountain High School",
            "address": "456 Elm St, Blue City",
            "students": [
                {
                    "id": 3,
                    "name": "Alice Johnson",
                    "grade": 11,
                    "subjects": ["Math", "Physics", "Chemistry"]
                },
                {
                    "id": 4,
                    "name": "Bob Brown",
                    "grade": 9,
                    "subjects": ["History", "Geography", "English"]
                }
            ]
        }
    ],
    "libraries": [
        {
            "name": "Central Library",
            "location": "Downtown",
            "books": [
                {
                    "title": "To Kill a Mockingbird",
                    "author": "Harper Lee",
                    "genres": ["Fiction", "Drama"]
                },
                {
                    "title": "1984",
                    "author": "George Orwell",
                    "genres": ["Dystopian", "Science Fiction"]
                }
            ]
        },
        {
            "name": "Community Library",
            "location": "Westside",
            "books": [
                {
                    "title": "Pride and Prejudice",
                    "author": "Jane Austen",
                    "genres": ["Romance", "Fiction"]
                },
                {
                    "title": "The Great Gatsby",
                    "author": "F. Scott Fitzgerald",
                    "genres": ["Tragedy", "Historical Fiction"]
                }
            ]
        }
    ]
};

// //   What is the name of the first school in the list?
// //   (Answer: "Green Valley High School")
// var firstSchoolName=data.schools[0].name;
// console.log(firstSchoolName);

// //   What is the address of Blue Mountain High School?
// //   (Answer: "456 Elm St, Blue City")
// var addr=data.schools.find(school=>school.name=== "Blue Mountain High School")?.address;
// var addr=data.schools.find(school=>school.name=== "Blue Mountain High School")?.address;
// console.log(addr);


// //   How many students are there in Green Valley High School?
// //   (Answer: 2)
// var totalstudent=data.schools.reduce((school,total)=>school.stu+total,0);
// console.log(totalstudent);

  
// //   Which subjects does John Doe study?
// //   (Answer: ["Math", "Science", "History"])
  
// //   What is the grade of Alice Johnson?
// //   (Answer: 11)
  
// //   About Libraries and Books
// //   What is the location of the Central Library?
// //   (Answer: "Downtown")
  
// //   Name the books available in the Community Library.
// //   (Answer: ["Pride and Prejudice", "The Great Gatsby"])
  
// //   Who is the author of the book "1984"?
// //   (Answer: "George Orwell")
  
// //   What genres does "To Kill a Mockingbird" belong to?
// //   (Answer: ["Fiction", "Drama"])
  
// //   Which library has the book "The Great Gatsby"?
// //   (Answer: "Community Library")



































// // 1. What is the name of the first school in the list?
// const firstSchoolName = data.schools[0].name;
// console.log("First School Name:", firstSchoolName);

// // 2. What is the address of Blue Mountain High School?
// const blueMountainAddress = data.schools[1].address;
// console.log("Blue Mountain High School Address:", blueMountainAddress);

// // 3. How many students are there in Green Valley High School?
// const numberOfStudentsGreenValley = data.schools[0].students.length;
// console.log("Number of Students in Green Valley High School:", numberOfStudentsGreenValley);

// // 4. Which subjects does John Doe study?
// const johnDoeSubjects = data.schools[0].students[0].subjects;
// console.log("John Doe's Subjects:", johnDoeSubjects);

// // 5. What is the grade of Alice Johnson?
// const aliceJohnsonGrade = data.schools[1].students[0].grade;
// console.log("Alice Johnson's Grade:", aliceJohnsonGrade);

// // --------------------------------------------------------------

// // Libraries and Books:

// // 6. What is the location of the Central Library?
// const centralLibraryLocation = data.libraries[0].location;
// console.log("Central Library Location:", centralLibraryLocation);

// // 7. Name the books available in the Community Library.
// const communityLibraryBooks = data.libraries[1].books.map(book => book.title);
// console.log("Books in Community Library:", communityLibraryBooks);

// // 8. Who is the author of the book "1984"?
// const book1984Author = data.libraries[0].books.find(book => book.title === "1984").author;
// console.log("Author of '1984':", book1984Author);

// // 9. What genres does "To Kill a Mockingbird" belong to?
// const toKillAMockingbirdGenres = data.libraries[0].books.find(book => book.title === "To Kill a Mockingbird").genres;
// console.log("Genres of 'To Kill a Mockingbird':", toKillAMockingbirdGenres);

// // 10. Which library has the book "The Great Gatsby"?
// const greatGatsbyLibrary = data.libraries.find(library => library.books.some(book => book.title === "The Great Gatsby")).name;
// console.log("Library that has 'The Great Gatsby':", greatGatsbyLibrary);
