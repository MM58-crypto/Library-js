
let mylibrary = [];
let bookobj = {};
// constructor
function Book(title,author,pages,read){
  bookobj._title =  title;
  bookobj._author =  author;
  bookobj._pages =  pages;
  bookobj._read =  read;

  return bookobj
}
// each card = 1 book ( a card displays a book's details)
 /*
  for (let x = 0; x < 256; x++) {
    let cards = document.createElement('div');
    cards.setAttribute('id','card');
    document.getElementById('cardfield').appendChild(cards);
  } */
 //Book.prototype

function addbooktolib() {
  //temporary
/*  let title = prompt("Please enter the book's title")
  let author = prompt("Author's name")
  let pages = prompt("Enter the number of pages")
  let read = prompt("Have you read this book or not?")
  let book = Book(title,author,pages,read) */
  let authorval = document.getElementById('authorid').value;
  let titleval = document.getElementById('titleid').value;
  let pagesval = document.getElementById('pagesid').value;
  //let readval = document.getElementById('readid').value;

  let book = Book(authorval,titleval,pagesval/*,readval */)

  mylibrary.push(book)
//  displaybook();
}

function onform() {
  document.getElementById("formid").style.display = "block";
}
/* once the add button is clicked the book details will be
displayed on the page
 */

const btn = document.querySelector("#display");
//btn.addEventListener('click',displaybook);

// clearing the form after submitting
btn.addEventListener('click', () => {
  const clearform = document.getElementById('formid');
  //clearform.submit();
  clearform.reset();
});

function closeform() {
 document.getElementById("formid").style.display = "none";
}

function displaybook () {
  for(let i = 0; i < mylibrary.length; i++) {

    let bookdisplay = `
    <li> <b>Title:</b> ${bookobj._title}</li>
    <li> <b>Author:</b> ${bookobj._author}</li>
    <li> <b>Pages:</b> ${bookobj._pages}</li>
    <li> <b>Read</b><input type="checkbox" id="readid"></li>
    `;
    let cards = document.createElement('div');
    cards.setAttribute('id','card');
    document.getElementById('cardfield').appendChild(cards);

    const remove_btn = document.createElement('button');
    remove_btn.setAttribute('id','rm');
    remove_btn.textContent = 'Remove';

    remove_btn.addEventListener('click',() => {
      var relem = document.getElementById('card');
      // to remove an element using js
      relem.parentNode.removeChild(relem);
    });

    let list = document.createElement('ul');
    list.innerHTML = bookdisplay;
    cards.appendChild(list);
    cards.appendChild(remove_btn);
    //console logging is temporary
  //  console.log(mylibrary[i])
  }


}
