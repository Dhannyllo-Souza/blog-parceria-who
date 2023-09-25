function search() {
    let input = document.getElementById('searchbar').value
    input = pesquisar.toLowerCase()
    let x = document.getElementByIdClassName('doctor')

    for(i = 0; i < x.length; i++)
    if(!x[i].innerHTML.toLowerCase().includes(input)){
        x[i].style.display = "nome"
    }
    }else{
        x[i].style.display = "link"
}
