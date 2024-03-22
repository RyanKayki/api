async function mostrar() {
    const apiUrl = "http://127.0.0.1:8080/getall"
    const btnestoque = document.getElementById('btn-estoque')
    const slidesestoque = document.getElementById('slide-estoque')

    try {
        const consulta = await fetch(apiUrl)

        if (!consulta.ok) {
            console.log("A API não está funcionando")
            return
        }
        let dados = await consulta.json()
        console.log(dados)
        loading(dados)
        btnestoque.style.display = 'none'
        slidesestoque.style.display = 'none'


        setTimeout(() => {
            atualizaLista(dados)
        }, 2000)

    } catch (error) {
        console.error('Erro ao obter dados da API:', error)
    }
}

function atualizaLista(dados) {
    const produtos = document.getElementById('produtos')

    produtos.innerHTML = ''

    if (dados && dados.length > 0) {
        for (const produto of dados) {
            const produtoCard = `
            <div class="col-12 col-sm-6 col-lg-3 md-4 mb-5">
                <div class="card" style="width: 18rem; box-shadow: 3px 3px 12px;">
                    <img src="bg.png" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <div style="border: solid 1px;"></div><br>
                        <div class="row d-flex">
                        <h5 class="card-text pt-1" style="color: red; width: 48%; font-size: 19px;">Valor: $${produto.valor.toFixed(2)}</h5>
                        <button class="btn" style="background-color: #2b4a4ebb; width: 48%; color: #fff;">Comprar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"> <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg></button>
                        </div>
                    </div>
                </div>
            </div>`

            produtos.innerHTML += produtoCard
        }
    } else {
        console.error('Os dados da API estão vazios ou em formato incorreto.')
    }
}


function loading(dados) {
    const produtos = document.getElementById('produtos')

    produtos.innerHTML = ''

    if (dados && dados.length > 0) {
        for (const produto of dados) {
            const produtoCard = `
            <div class="col-12 col-sm-6 col-lg-3 md-4 mb-5">
                <div class="card card-text placeholder-glow" style="width: 18rem;">
                    <div class="card" style="width: 18rem; box-shadow: 3px 3px 12px;">
                        <div class="card" aria-hidden="true">
                            <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-4"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>`

            produtos.innerHTML += produtoCard
        }
    } else {
        console.error('Os dados da API estão vazios ou em formato incorreto.')
    }
}   




