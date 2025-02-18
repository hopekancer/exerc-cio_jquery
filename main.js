$(document).ready(function() {

let inputTarefaValue = ``
const lista = $(`#lista`)
const novoItem = $(`<li style="display: none;"></li>`)

    $(`form`).on(`submit`, function(e) {
        e.preventDefault()
        inputTarefaValue = $(`#input-tarefa`).val()
        $(`<li>
            <a href="#">${inputTarefaValue}</a>
        </li>`).appendTo(lista)
        $(`#input-tarefa`).val(``)
    })

    lista.on('click', 'li a', function(e) {
        e.preventDefault(); // Evita que o link redirecione
        $(this).toggleClass('riscado'); // Alterna a classe 'riscado'
    });
    
})
