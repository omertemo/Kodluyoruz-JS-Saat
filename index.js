function myFunction() {
  const name = prompt("Lütfen adınızı giriniz: ");
  document.getElementById("myName").innerHTML = name;
}


function showTime(){
  var date = new Date();
  var saat = date.getHours(); // 0 - 23
  var dakika = date.getMinutes(); // 0 - 59
  var saniye = date.getSeconds(); // 0 - 59
  var today = date.toLocaleDateString("tr-TR", { weekday: 'long' });  

  // Saat, dakika ve saniyenin her zaman çift hane görünebilmesi için ternany ifade
  saat = (saat < 10) ? "0" + saat : saat;
  dakika = (dakika < 10) ? "0" + dakika : dakika;
  saniye = (saniye < 10) ? "0" + saniye : saniye;
  
  var time = saat + ":" + dakika + ":" + saniye + " " + today;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();