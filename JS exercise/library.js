
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
		Librarian.bookList[bookId].count = Number(Librarian.bookList.count-1);
	}

	get bookId(){
		return this._bookId;
	}

	get borrowerId(){
		return this._borrowerId;
	}

	get Details(){
	        return `borrowerName : ${Librarian.studentList[this.borrowerId].name}
borrowedBookDetails : ${Librarian.bookList[this.bookId].Details}`;
	}

	static getRentedBookDetails(){
		return Librarian.rentedList.map((currentOrder) => currentOrder.Details);
	}
}

class Librarian{
	static bookList = [];
	static rentedList = [];
	static studentList = [];
	static createRentOrder(studentId,bookId){
		if(Librarian.bookList[bookId].count > 0){
			Librarian.rentedList.push(new rentBookOrder(studentId,bookId));
		}
	}

	static closeOrder(orderId){
		Librarian.bookList[Librarian.rentedList[orderId].bookId].count = Number(Librarian.bookList[Librarian.rentedList[orderId].bookId].count + 1);
		Librarian.rentedList.splice(orderId,1);
	}

	static addBook(){
		Librarian.bookList.push(new Book(prompt("Enter Book's Name:"),prompt("Enter Edition:"),prompt("Enter Author's Name:"),Number(prompt("Enter Count:"))));
	}

	static getAvailableBooks(){
		return Librarian.bookList.filter((currentBook) => {
			if(currentBook.count > 0)
				return currentBook.Details;
		}
	);
	}

	static addStudent(name){
		Librarian.studentList.push(new Student(prompt("Enter Student's Name:")));
	}
}
