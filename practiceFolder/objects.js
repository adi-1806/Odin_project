function Book(title, author, noOfPages, status){
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.status = status;
    this.info = function(){
        return (`The ${title} by ${author}, ${noOfPages} pages, ${status}.`)
    }
};

const book1 = new Book('Hobbit', 'J.R.R Tolkien', '295', 'not read yet')

console.log(book1.info());