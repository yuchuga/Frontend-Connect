//$.getJSON(url, [data], [callback])

function postToServer(e){
  e.preventDefault();  //to prevent browser refresh
  let postData = { //Create JS Object
        custId: uid.value,
        pwd: pass.value,  
  }
     
  let postDataJSON = JSON.stringify(postData); //Convert JS Object to JSON
  addData(postDataJSON);    
};

//Post Function
function addData(postData){ //pass data in method
  $.ajax({
          type: "POST",
          url: "https://nusstore.glitch.me/login",
          data: postData, //data posted to this function
          contentType: "application/json", //content type of request
          crossDomain: true,
          dataType: "text", //reply datatype

          success: function (data, status, jqXHR) {
            if (data == true) {
              window.location.href = "welcome.html" 
            } 
            else {
              var text = "<p>Try Again</p>";
              $(".mypanel").html(text); //printed in mypanel
            }
            error: function (jqXHR, status) { //error handler
              alert('fail ' + status.code);   
            }
        })
};

b1.addEventListener('click', postToServer);




