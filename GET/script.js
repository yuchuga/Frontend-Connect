function getFromServer(e){
  e.preventDefault();       //when using eventlistener to stop browser refresh
  var querryStr =  "https://nusstore.glitch.me/findcust?custId=" + uid.value; //backend 
  console.log (querryStr);
  $.getJSON(querryStr, mydata);
  }

function mydata(data){
  console.log(data);
  var text =  `<p class="display-1"> custId: ${data.custId}, Pass: ${data.pwd},  Name: ${data.name}, Gender: ${data.gender} </p>`;
  $(".mypanel").html(text); //insert output into div class="mypanel"
};

b1.addEventListener('click', getFromServer); //call getFromServer function on button click