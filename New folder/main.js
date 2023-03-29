function Plus() {
    var a = parseInt(document.getElementById('inp').value)
    var d = a + 1
    document.getElementById('digit').innerHTML = d
    document.getElementById('inp').value=d
    console.log(d);

}

function Minus() {
    var a = parseInt(document.getElementById('inp').value)
    var d = a - 1
    document.getElementById('digit').innerHTML = d
    document.getElementById('inp').value=d
    console.log(d);
}
function Sahe(){
    var r= parseInt(document.getElementById('radius').value)
    var s= Math.pow(r,2)*Math.PI
    document.getElementById('tag').innerHTML = s.toFixed()
    console.log(s);
}