const express = require('express');
const multer = require('multer');
const UploadConfig = require('./config/upload');

const PostController = require('./controller/PostController')
const LikeController = require('./controller/LikeController')

const routes = new express.Router();
const upload = multer(UploadConfig);

routes.post('/posts', upload.single('image'),PostController.store);
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store);

routes.post('/posts/:id/delete', PostController.delete);

module.exports = routes;
