var popupBox= document.querySelector(".popup-box");
var overlay= document.querySelector(".popup-overlay");
var addButton= document.getElementById("plus");


function displayPopup(){
    popupBox.style.display ='block';
    overlay.style.display ='block';
}

var wishlistContainer= document.querySelector('.wishlist-container')
var wishlistTitle= document.getElementById('title')
var creator= document.getElementById('creator')
var textarea= document.getElementById('textarea')
var wishlistAddButton= document.getElementById('add-button')
var newDiv= document.querySelector('.additional-box')

wishlistAddButton.addEventListener('click', function(event){
    var div= document.createElement('div')
    div.setAttribute('class', 'container')
    div.innerHTML= `<h2>${wishlistTitle.value}</h2>
    <h5>${creator.value}</h5>
    <br>
    <p>${textarea.value}</p>
    <br>
    <button id='delete-btn' onclick= 'deleteWishlist(event)'>Delete</button>`
    wishlistContainer.append(div)
})

var deleteButton= document.getElementById('delete-btn')

function deleteWishlist(event){
    event.target.parentElement.remove()
}

var cancelButton= document.getElementById('cancel-button')

cancelButton.addEventListener('click', function(event){
    event.preventDefault()
    popupBox.style.display ='none';
    overlay.style.display ='none';
})
wishlistAddButton.addEventListener('click', function(event){
    event.preventDefault()
    overlay.style.display='none'
    popupBox.style.display='none'
    wishlistTitle.value=''
    creator.value=''
    textarea.value=''
})
