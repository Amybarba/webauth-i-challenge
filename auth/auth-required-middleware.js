const users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');

module.eports = (req, res, next) => {
    // look for credentials 
    const { usernane, password } = req.headers
    // validate that they exist 
    if (!(username && password)) {
        res.status(401).json({ message: "Invalid credentials" });
    } else {
        // find the user in the database 
        users.findBy({ username })

        .first()
        .then(_user => {
            if (_user && bcrypt.compareSync(password, _user.password)) {
                next()
            } else {
                res.status(401).json({ message: "Invalid Credentials" })
            }
        })
        .catch((err) => { res.status(500).json({ message: err }) })
    }
}