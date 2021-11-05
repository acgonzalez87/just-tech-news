const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
