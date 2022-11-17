otherwindow=window.open("https://box-testing-account.github.io/Spencer")

function reopenotherwindow(){
    if (otherwindow.closed) {
        otherwindow=window.open("https://box-testing-account.github.io/Spencer")
    }
    else{
        return
    setTimeout("reopenotherwindow()",1000)
    }
}
reloadwin2()

// Open a new browser window
//const openedWindow = window.open("https://box-testing-account.github.io/Spencer");
//if (opendedWindow.closed == 'false') {
//    console.log("it is open");
//} else {
//    const openedWindow = window.open("https://box-testing-account.github.io/Spencer");
// check if the window is in opened or closed state
//console.log(openedWindow.closed); // false
