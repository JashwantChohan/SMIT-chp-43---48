// 1. Show an alert box on click on a link.

// function showAlert(event){
//     event.preventDefault()
//     alert("You click the link!")
//     console.log("clicked")
// }


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// function showAlert(event) {
//     event.preventDefault()
//     alert("Thank you for purchasing a phone from us")
//     console.log("clicked")
// }

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 


// function deleteRow(btn){
//     btn.parentElement.parentElement.remove();
//     console.log(`row deleted`)
 
// }

// <!-- ===============Q4=============== -->

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// function imgOver(){
//    document.getElementById("img1").src = "https://images.pexels.com/photos/24024088/pexels-photo-24024088/free-photo-of-elegant-facade-of-store.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
// }

// function imgOut(){
//     document.getElementById("img1").src = "https://images.pexels.com/photos/31477151/pexels-photo-31477151/free-photo-of-blossoming-cherry-blossom-tree-in-seoul-s-historic-palace.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
// }


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

let count = 0
let result = document.getElementById("count")

function add(){
   count++
   result.textContent = count
}

function subract(){
   count--
   result.textContent = count
}
