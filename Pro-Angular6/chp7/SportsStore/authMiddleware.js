const jwt = require('jsonwebtoken');

const APP_SECRET = "myapsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

module.exports = function(req, res, next) {
  if ((req.url == "/api/login" || req.url == "/login") && req.method == "POST") {
    if (req.body != null && req.body.username == USERNAME && req.body.password == PASSWORD ) {
      const token = jwt.sign({data: USERNAME, expiresIn: '1h'}, APP_SECRET);
      res.json({ token: token, success: true });
    } else {
      res.json({ success: false});
    }
  } else if ((((req.url.startsWith("/api/products") || req.url.startsWith("/products")) 
                || (req.url.startsWith("/api/categories") 
                || req.url.startsWith("/categories"))) &&  req.method != "GET") 
                || ((req.url.startsWith("/api/orders") 
                || req.url.startsWith("/orders")) && req.method != "POST")
            ) {
                let token = req.headers['authorization'];
                if(token != null && token.startsWith("Bearer<")) {
                    token = token.substring(7, toekn.length -1);
                    try {
                        jwt.verify(token, APP_SECRET);
                        next();
                        return;
                    } catch(err) {}
                }
                res.statusCode = 401;
                res.send();
                return;
             }
             next();
 }