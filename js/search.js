// Captura dos dados na URL que foram enviados pela pesquisa
var searchInput = window.location.search
// console.log(searchInput)

// Coleta da parte que interessa a pesquisa, ou seja, excluindo os indentificadores e mantendo apenas o texto da busca
var input = searchInput.split('=')[1]
// console.log(input)

// Para evitar que a busca seja case sensitive, todas as letras ficarão maiúsculas
var filter = input.toUpperCase().replace("+", " ")
// console.log(filter)

// Esta parte exigiu estar em um escutador de eventos, pois a adição dos elementos na coleção HTML acontece após renderização
// Portanto para que todos os títulos de livros fossem colocados na coleção isto se fez necessário
document.addEventListener("DOMContentLoaded", () => {
    // Captura apenas dos títulos dos livros que foram renderizados no DOM
    var contents = document.getElementsByTagName('article')
    // console.log(contents)
    
    // 
    for (var index = 0; index < contents.length; index++) {
        var title = contents[index].getElementsByTagName('h4')[0].innerHTML;
        // console.log(title)

        if (title.toUpperCase().indexOf(filter) > -1) {
            addClass(contents[index], "show")
        } else {
            removeClass(contents[index], "show")
        }
    }
})

// Show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
