const controllers ={
    home: (req,res) => {
        return res.render('home');
    },
    register: (req,res) => {
        return res.render('register')
    },
    login: (req,res) => {
        return res.render('login')
    },
    compras: (req,res) => {
        return res.render('compras')
    },
    footer: (req,res) => {
        return res.render('footer')
    },
    listado: (req,res) => {
        return res.render('listado')
    }
}

module.exports = controllers;