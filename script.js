var spencer = window.open("https://box-testing-account.github.io/Spencer")

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible") {
      window.open("https://box-testing-account.github.io/Spencer")
    }
});

setInterval(function() {
   if(localStorage.getItem('tabIsOpen') === 'closed'){
        console.log("Another tab has been closed");
        spencer.close();
        window.open("https://box-testing-account.github.io/Spencer")
        // perform necessary actions here
   }
},10);


// Open a new browser window
//const openedWindow = window.open("https://box-testing-account.github.io/Spencer");
//if (opendedWindow.closed == 'false') {
//    console.log("it is open");
//} else {
//    const openedWindow = window.open("https://box-testing-account.github.io/Spencer");
// check if the window is in opened or closed state
//console.log(openedWindow.closed); // false
