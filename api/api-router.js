const router = require('express').Router();

// Nested Routers 
// The router is exported from this file 
// See router statement above and export statement below 
// they are bound in server.js to the /api 

// Routers are exported from nested auth auth-router 
// and user user-router.js  and then bound sub routes auth and users 
// below in the router use statements below 

// router.use does the same thing as server .use 
// it adds a router and middleware function for the root url 
// in the server the root url is '/' 
// the router exported from this file the root url is /api and it is bound to the 
// the url in server .js 

// The subroutes below are subroutes to this routers root URL, which is /api 
// So authRouter is bound to /api/auth and usersRouter is bound to /api/users 
// - Sean Kirby 

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

// /api/auth 
router.use('/auth', authRouter);
// /api/users 
router.use('/users', usersRouter);

// /api 
router.get('/', (req, res) => {
    res.json({ api: "API Working" });
});

module.exports = router;