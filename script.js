function display(value) {
    document.getElementById('view').value+=value;
    console.log(value);
}

function hitung() {
    let angkaSatu = document.getElementById('view').value;
    let angkaDua = eval(angkaSatu);
    document.getElementById('view').value = angkaDua;
    console.log(angkaDua);
}


function clr() {
    document.getElementById('view').value = '';
}