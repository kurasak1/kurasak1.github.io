function Myfunction() {
    var name = prompt("vozrast")
    if(name>= 18){
        window.location.href = 'https://tetris.com/play-tetris';
    }else {
        alert(name)
    }
    }