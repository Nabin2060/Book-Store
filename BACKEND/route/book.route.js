import express from 'express';
import { getBook } from '../controller/book.controller.js';
// route/index.js
// export { default as bookRoutes } from './book.route.mjs';


const router = express.Router();

router.get("/",getBook);

export default router;