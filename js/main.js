// DOM Grabber
$ = (arg) => {
    if (arg[0] == '.') {
        return document.getElementsByClassName(arg.replace('.', ''))[0];
    } else if (arg[0] == '#') {
        return document.getElementById(arg.replace('#', ''));
    }
}

$('#btn-portfolio').onclick = ()=> {
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}