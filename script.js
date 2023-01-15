let spencer
spencer = window.open("https://box-testing-account.github.io/Spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');

setInterval(function(){ 
  if(spencer.closed){
    console.log("Tab is closed");
    spencer = window.open("https://box-testing-account.github.io/Spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');
  }else{
    console.log("Tab is open")
  }
}, 50);
