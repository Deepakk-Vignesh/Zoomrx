let studentObjectArray = [];
let rentedBookArray = [];
let bookObjectArray = [];

class Student {

	constructor(name) {
		this._name = name;
	}

	get name(){
		return this._name;
	}

}

class Book {

	constructor(name,edition,author,count) {
		this._name = name;
		this._edition = edition;
		this._author = author;
		this._count = count;
	}

	get Details(){
		return `name : ${this._name}
		edition : ${this._edition}
		author : ${this._author}
		count : ${this._count}
		`;
	}

	get count(){
		return this._count;
	}

	set count(count){
		this._count = count;
	}
}

class rentBookOrder {

	constructor(borrowerId,bookId) {
		this._bookId = bookId;
		this._borrowerId = borrowerId;
		bookObjectArray[bookId].count = bookObjectArray[bookId].count-1;
	}

	get bookId(){
		return this._bookId;
	}

	get borrowerId(){
		return this._borrowerId;
	}

}

function addStudent(name){
	studentObjectArray.push(new Student(prompt("Enter Student's Name:")));
}

function addBook(){
	bookObjectArray.push(new Book(prompt("Enter Book's Name:"),prompt("Enter Edition:"),prompt("Enter Author's Name:"),prompt("Enter Count:")));
}

function borrowBook(studentId,bookId){
	if(bookObjectArray[bookId].count > 0){
		rentedBookArray.push(new rentBookOrder(studentId,bookId));
	}
}

function returnBook(orderId){
	bookObjectArray[rentedBookArray[orderId].bookId].count = bookObjectArray[rentedBookArray[orderId].bookId].count + 1;
	rentedBookArray.splice(orderId,1);
}

function getAvailableBooks(){
	return bookObjectArray.filter((currentBook) => {
		if(currentBook.count > 0)
			return currentBook.Details;
	}
);
}

function getRentedBookDetails(){
	return rentedBookArray.forEach((currentOrder) => console.log(currentOrder.Details));
}
