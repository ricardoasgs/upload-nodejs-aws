const router = require("express").Router();

const postsRouter = require("./postRoutes");

router.use("/posts", postsRouter);

module.exports = router;
