const {Router} = require ("express")

const router = Router()

router.get('/', (req, res) => {
    res.send("Testando a rota default")
})

module.exports = router