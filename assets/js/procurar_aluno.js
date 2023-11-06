const x = document.querySelector(".ham");
const y = document.querySelector(".nav-menu");

x.addEventListener("click", () => {
    x.classList.toggle('active');
    y.classList.toggle('active');
})

const SEARCHBAR = document.getElementById('searchbar');
const TABLE_BODY = document.getElementById('table_body');

SEARCHBAR.addEventListener('keyup', () => {
    let expressao = SEARCHBAR.value.toLowerCase();

    let linhas = TABLE_BODY.getElementsByTagName('tr')

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoDALinha = linhas[posicao].innerHTML;

        if (true === conteudoDALinha.includes(expressao)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display ='none';
        }
    }
})
