win2=window.open("https://box-testing-account.github.io/Spencer")

function reloadwin2(){
    if (!win2.closed) {
        win2=window.open("https://box-testing-account.github.io/Spencer")
    }
    else{
        return
    setTimeout("reloadwin2()",1000)
    }
}
reloadwin2()
