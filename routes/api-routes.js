const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const homeController = require("../controllers/homeController");
const checkAuth = require("../middleware/check-auth"); // verify token for Api request
var multer = require("multer");
var path = require('path')

// --------------multer file upload settings -------------
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now()  +  path.extname(file.originalname));
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
router.post("/auth/login", authController.logIn);


/* =============Admin Routes============= */
router.post("/admin/user", adminController.addNewUser);
router.get("/admin/user", adminController.getUsers);


router.post("/admin/blogimages",
multer({ storage: fileStorageWithoutChangnigName }).any(), adminController.blogContent);

router.post("/admin/blog",
multer({ storage: fileStorage }).any(),
  adminController.addBlog);

  router.post("/admin/media",
  multer({ storage: fileStorage }).any(),
    adminController.addMedia);

router.post("/admin/group",
multer({ storage: fileStorage }).fields([{name: 'image', maxCount: 1}]),
 adminController.addGroup);
router.delete("/admin/group", adminController.removeGroup);

router.post("/admin/event",
multer({ storage: fileStorage }).any(), adminController.addEvent);
router.delete("/admin/event", adminController.removeEvent);
router.get("/admin/contact", adminController.getContactRequests);
router.get("/admin/contact-read", adminController.readContactRequests);
router.get("/admin/subscribers", adminController.getSubscribers);





/* =============Main Routes============= */

router.post("/main/contact", homeController.addContactRequest);
router.get("/main/blog", homeController.getBlogs);
router.get("/main/blog-details", homeController.getBlogById);
router.get("/main/group", homeController.getGroups);
router.get("/main/event", homeController.getEvents);
router.get("/main/media", homeController.getMedia);
router.get("/main/event-details", homeController.getEventById);
router.post("/main/news-letter", homeController.addNewsLetter);



module.exports = router
