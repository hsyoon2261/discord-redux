const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];
  //쿼리를 받을 곳 1.req.body 없으면 2.리퀘스트 쿼리 토큰 없으면 3.요청헤더로 이동하여

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    //Bearer띄어쓰기를 "" 로 치환
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};


module.exports = verifyToken;