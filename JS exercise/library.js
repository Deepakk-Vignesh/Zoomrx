
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
		Book.bookList[bookId].count = Number(Book.bookList.count-1);
	}

	get bookId(){
		return this._bookId;
	}

	get borrowerId(){
		return this._borrowerId;
	}

	get Details(){
	        return `borrowerName : ${Student.studentList[this.borrowerId].name}
borrowedBookDetails : ${Book.bookList[this.bookId].Details}`;
	}

	static getRentedBookDetails(){
		return rentBookOrder.rentedList.map((currentOrder) => currentOrder.Details);
	}
}

class Librarian{
	static bookList = [];
	static rentedList = [];
	static studentList = [];
	static createRentOrder(studentId,bookId){
		if(Book.bookList[bookId].count > 0){
			rentBookOrder.rentedList.push(new rentBookOrder(studentId,bookId));
		}
	}

	static closeOrder(orderId){
		Book.bookList[rentBookOrder.rentedList[orderId].bookId].count = Number(Book.bookList[rentBookOrder.rentedList[orderId].bookId].count + 1);
		rentBookOrder.rentedList.splice(orderId,1);
	}
	
	static addBook(){
		Book.bookList.push(new Book(prompt("Enter Book's Name:"),prompt("Enter Edition:"),prompt("Enter Author's Name:"),Number(prompt("Enter Count:"))));
	}

	static getAvailableBooks(){
		return Book.bookList.filter((currentBook) => {
			if(currentBook.count > 0)
				return currentBook.Details;
		}
	);
	}

	static addStudent(name){
		Student.studentList.push(new Student(prompt("Enter Student's Name:")));
	}
}
