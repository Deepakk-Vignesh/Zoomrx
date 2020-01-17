
class Member {

	constructor(name) {
		this._name = name;
	}

	get name(){
		return this._name;
	}

}

class Student extends Member{
	requestBook(bookId){
		Librarian.requestList.push(new bookRequest(Librarian.studentList.indexOf(this),bookId));
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

class bookRequest{
	constructor(studentId,bookId){
		this._bookId = bookId;
		this._requesterId = studentId;
	}

	get bookId(){
		return this._bookId;
	}

	get requesterId(){
		return this._requesterId;
	}

	get Details(){
	        return `requesterName : ${Librarian.studentList[this.requesterId].name}
borrowedBookDetails : ${Librarian.bookList[this.bookId].Details}`;
	}

}

class rentBookOrder {

	constructor(borrowerId,bookId) {
		this._bookId = bookId;
		this._borrowerId = borrowerId;
		Librarian.bookList[bookId].count--;
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
}

class Librarian extends Member {
	static bookList = [];
	static rentedList = [];
	static studentList = [];
	static requestList = [];

	createRentOrder(studentId,bookId){
		if(Librarian.bookList[bookId].count > 0){
			Librarian.rentedList.push(new rentBookOrder(studentId,bookId));
		}
	}

	closeOrder(orderId){
		Librarian.bookList[Librarian.rentedList[orderId].bookId].count++;
		Librarian.rentedList.splice(orderId,1);
	}

	addBook(){
		Librarian.bookList.push(new Book(prompt("Enter Book's Name:"),prompt("Enter Edition:"),prompt("Enter Author's Name:"),Number(prompt("Enter Count:"))));
	}

	getAvailableBooks(){
		return Librarian.bookList.filter((currentBook) => {
			if(currentBook.count > 0)
				return currentBook.Details;
		}
	);
	}

	addStudent(name){
		Librarian.studentList.push(new Student(prompt("Enter Student's Name:")));
	}

	getRentedBookDetails(){
		return Librarian.rentedList.map((currentOrder) => currentOrder.Details);
	}

	getRequestDetails(){
		return Librarian.requestList.map((currentRequest) => currentRequest.Details);
	}

	acceptRequest(requestId){
		this.createRentOrder(Librarian.requestList[requestId].requesterId,Librarian.requestList[requestId].bookId);
		Librarian.requestList.splice(requestId,1);
	}

}

librarianObject=new Librarian("abc");
librarianObject.addStudent();
librarianObject.addBook(0);
librarianObject.createRentOrder(0,0);
Librarian.studentList[0].requestBook(0);
librarianObject.closeOrder(0);
librarianObject.getAvailableBooks();
librarianObject.getRequestDetails();
librarianObject.acceptRequest(0);
librarianObject.closeOrder(0);
librarianObject.getAvailableBooks();
