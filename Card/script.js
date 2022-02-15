const uid = document.getElementById('custId');
const pass = document.getElementById('pwd');
const b1 = document.getElementById('b1');
//server database: https://nusstore.glitch.me/cust
function postToServer(e){ 
  e.preventDefault();  // prevent browser refresh
  
  let postData = {
    custId: uid.value,
    pwd: pass.value,  
  };
     
  let postDataJSON = JSON.stringify(postData); 
  addData(postDataJSON);    
}

function addData(postData){ //add cust details to server/database
     $.ajax({
             type: "POST",
             url: "https://nusstore.glitch.me/login",
             data: postData,
             contentType: "application/json",   
             crossDomain: true,
             dataType: "text",   
             
             success: function (data, status, jqXHR){
               if (data == "true") {
                 window.location.href = "welcome.html"; //if success, run welcome.html
               }
               else {
                 var text = "<p>Try Again</p>";
                 $(".mypanel").html(text);
               }
             },
               
             error: function (jqXHR, status) {
               alert("fail " + status.code);
             },
     });
}

function getFromServer(){ //GET_items
    $.getJSON('https://nusstore.glitch.me/items', mydata);
}

function mydata(data){   
  var text = "<p>";
  data.forEach(function(item){  //Display in CARD layout
      text = text + `<div class="col-md-4 mt-4 mt-sm-0 card-container">
      <div class="card text-center product p-3 pt-3 border-0 h-100 rounded-0">
        <img class="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-glasses.jpg" alt="">
        
        <div class="card-body p-4 py-0 h-xs-440p">
          <h5 class="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">Name: ${item.name}</h5>
          <p class="Price">Price: $${item.price}</p>
        </div>
        
        <p class="btn w-100 px-4 mx-auto">
          <input type="submit" class="btn btn-dark btn-lg w-100" name="add-button" value="Buy Now">
        </p>
      </div>
    </div>`;    
  });

  $(".mypanel").html(text);
}

b1.addEventListener('click', postToServer); //run postToServerfunction when click 

