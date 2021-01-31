function fun(){
  var amount = Number(document.getElementById('amount').value);
  var item = document.getElementById('item_input').value;


  switch (item) {
    case "Travelling":
      if(typeof(Storage) !== "undefined"){
        if(localStorage.Travelling){
          localStorage.Travelling = Number(localStorage.Travelling)+amount;
        }
        else{
          localStorage.Travelling=amount;
        }
      }
      else{
        alert("Your browser does not support web storage");
      }
      break;
    case "Food":
      if(typeof(Storage) !== "undefined"){
        if(localStorage.Food){
          localStorage.Food = Number(localStorage.Food)+amount;
        }
        else{
          localStorage.Food=amount;
        }
      }
      else{
        alert("Your browser does not support web storage");
      }
      break;
    case "Stationary":
      if(typeof(Storage) !== "undefined"){
        if(localStorage.Stationary){
          localStorage.Stationary = Number(localStorage.Stationary)+amount;
        }
        else{
          localStorage.Stationary=amount;
        }
      }
      else{
        alert("Your browser does not support web storage");
      }
      break;
    case "Mobile or Internet":
      if(typeof(Storage) !== "undefined"){
        if(localStorage.Mobile){
          localStorage.Mobile = Number(localStorage.Mobile)+amount;
        }
        else{
          localStorage.Mobile=amount;
        }
      }
      else{
        alert("Your browser does not support web storage");
      }
      break;
    case "Others":
      if(typeof(Storage) !== "undefined"){
        if(localStorage.Others){
          localStorage.Others = Number(localStorage.Others)+amount;
        }
        else{
          localStorage.Others=amount;
        }
      }
      else{
        alert("Your browser does not support web storage");
      }
      break;
  }
}

document.getElementById('Travelling').innerHTML = localStorage.Travelling;
document.getElementById('Food').innerHTML = localStorage.Food;
document.getElementById('Stationary').innerHTML = localStorage.Stationary;
document.getElementById('Mobile').innerHTML = localStorage.Mobile;
document.getElementById('Others').innerHTML = localStorage.Others;
document.getElementById('total_amount').innerHTML=Number(localStorage.Travelling)+Number(localStorage.Food)+Number(localStorage.Stationary)+Number(localStorage.Mobile)+Number(localStorage.Others);


function re(){
  localStorage.Travelling="0";
  localStorage.Food="0";
  localStorage.Stationary="0";
  localStorage.Mobile="0";
  localStorage.Others="0";
  document.getElementById('total_amount').innerHTML=0;
  document.getElementById('Travelling').innerHTML = localStorage.Travelling;
  document.getElementById('Food').innerHTML = localStorage.Food;
  document.getElementById('Stationary').innerHTML = localStorage.Stationary;
  document.getElementById('Mobile').innerHTML = localStorage.Mobile;
  document.getElementById('Others').innerHTML = localStorage.Others;
}
