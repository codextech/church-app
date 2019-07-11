const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const homeController = require("../controllers/homeController");
var multer = require("multer");


// --------------multer file upload settings -------------
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});


const fileStorageWithoutChangnigName = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// -------------------------------------------------------




/* =============User Auth Routes============= */
router.post("/login", authController.logIn);


/* =============Admin Routes============= */
router.post("/admin/add-user", adminController.addNewUser);


router.post("/admin/blogimages",
multer({ storage: fileStorageWithoutChangnigName }).any(), adminController.blogContent);

router.post("/admin/blog",
multer({ storage: fileStorage }).any(),
  adminController.addBlog);

router.post("/admin/group", adminController.addGroup);
router.delete("/admin/group", adminController.removeGroup);

router.post("/admin/event",
multer({ storage: fileStorage }).any(), adminController.addEvent);
router.delete("/admin/event", adminController.removeEvent);





/* =============Main Routes============= */

router.post("/main/contact", homeController.addContactRequest);
router.get("/main/blog", homeController.getBlogs);
router.get("/main/blog-details", homeController.getBlogById);
router.get("/main/group", homeController.getGroups);
router.get("/main/event", homeController.getEvents);
router.get("/main/event-details", homeController.getEventById);
router.post("/main/news-letter", homeController.addNewsLetter);



module.exports = router
