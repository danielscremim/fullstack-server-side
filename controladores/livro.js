const { getTodosLivros, getLivroPorId } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        //throw new Error("teste")
        const livros = getTodosLivros(id)
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        //throw new Error("teste")
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro
}