const myLibrary = []

function displayBooks(){
    const displayContainer = document.getElementById("libraryDisplay");
    displayContainer.innerHTML = '';

    myLibrary.forEach((book) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <p><strong>Title: </strong>${book.title}</p>
            <p><strong>Author: </strong>${book.author}</p>
            <p><strong>No. Of pages: </strong>${book.noOfPages}</p>
            <p><strong>Status: </strong>${book.status}</p>
        `;
        displayContainer.appendChild(item);

    });
}

function Book(title, author, noOfPages, status){
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.status = status;
}

function addBookToLibrary(){
    const book1 = new Book("India", "Adi", "232", false);
    myLibrary.push(book1);
    const book2 = new Book("Bharat", "Adithya", "232", false);
    myLibrary.push(book2);
}

function savingBookInfo(){
    const titleInfo = document.getElementById("title");
    const authorInfo = document.getElementById("author");
    const noOfPagesInfo = document.getElementById("noOfPages");
    const statusInfo = document.getElementById("status");

    const book = new Book(titleInfo.value, authorInfo.value, noOfPagesInfo.value, statusInfo.value);
    myLibrary.push(book);
}

function displayDialogBox(){
    const newBookBtn = document.getElementById("newBookBtn");
    const dialog = document.getElementById("dialogBox");
    const dialogCancel = document.getElementById("cancel");
    const dialogSubmit = document.getElementById("submit");
    
    
    newBookBtn.addEventListener("click", () => {
        dialog.showModal();
    })

    dialogCancel.addEventListener("click", () => {
        dialog.close();
    })

    dialogSubmit.addEventListener("click", () =>{
        savingBookInfo();
        dialog.close();
        displayBooks();
    });
};

document.addEventListener("DOMContentLoaded", () => {
    addBookToLibrary();
    displayBooks();
    displayDialogBox();
});
