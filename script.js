let spencer
spencer = window.open("https://box-testing-account.github.io/Spencer", "_blank","menubar=no,toolbar=no,status=no,scrollbars=no");

//document.addEventListener("visibilitychange", function() {
//    if (document.visibilityState === "visible") {
//      window.open("https://box-testing-account.github.io/Spencer")
//    }
//});

setInterval(function(){ 
  if(spencer.closed){
    console.log("Tab is closed");
    spencer = window.open("https://box-testing-account.github.io/Spencer", "_blank","menubar=no,toolbar=no,status=no,scrollbars=no");
  }else{
    console.log("Tab is open")
  }
}, 100);

//setInterval(function() {
//   if(localStorage.getItem('tabIsOpen') === 'closed'){
//        console.log("Another tab has been closed");
//        spencer.close();
//        spencer = window.open("https://box-testing-account.github.io/Spencer");
//        // perform necessary actions here
//   } else {
//        window.onfocus = function() {
//            spencer = window.open("https://box-testing-account.github.io/Spencer");
//        };
//   };
//}, 100);

// Open a new browser window
//const openedWindow = window.open("https://box-testing-account.github.io/Spencer");
//if (opendedWindow.closed == 'false') {
//    console.log("it is open");
//} else {
//    const openedWindow = window.open("https://box-testing-account.github.io/Spencer");
// check if the window is in opened or closed state
//console.log(openedWindow.closed); // false
