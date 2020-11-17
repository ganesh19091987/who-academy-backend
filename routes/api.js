var express = require('express');
var router = express.Router();

var studentController = require('../controllers/student');
var authorController = require('../controllers/author');
var courseController = require('../controllers/course');

// Student

router.get('/students', studentController.get);
router.get('/student/:id', studentController.getById);
router.post('/student', studentController.add);
router.put('/student', studentController.update);

// Author

router.get('/authors',authorController.get);
router.get('/author/:id', authorController.getById);
router.post('/author', authorController.add);
router.put('/author', authorController.update);

// Course

router.get('/courses', courseController.get);
router.get('/course/:id', courseController.getById);
router.post('/course', courseController.add);
router.put('/course', courseController.update);

module.exports = router;