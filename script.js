let spencer = window.open("https://box-testing-account.github.io/Spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');
setInterval(() => {
    localStorage.getItem("activated") === "true" && (spencer.closed && (spencer = window.open("https://box-testing-account.github.io/Spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0')),null) || (window.close(),null)
}, 50);
