import express from 'express';
import {  viewAboutById, viewTeam, viewTestimonial,viewServices, viewServicesByid, contacts, viewWeAchieved, viewClient, viewStory, viewBlog, viewBlogByid, viewJob, viewJobByid, applyJob, viewProject, viewProjectById, getAllMainServicesCategories, getMainServicesById, viewExperianceById, viewWhyDigiribById } from '../controllers/userController'; 
import { errorHandler } from '../error-handler';
import { uploadPdf } from '../middleware/uploadPdf';

const router = express.Router();

// Route for viewing an About record by ID
router.get('/about/:id', errorHandler(viewAboutById));
router.get('/experiance/:id', errorHandler(viewExperianceById));

router.get('/whyDigirib/:id', errorHandler(viewWhyDigiribById));

router.get('/testimonial', errorHandler(viewTestimonial));
router.get('/team', errorHandler(viewTeam));

router.get('/servives', errorHandler(viewServices));

router.get('/servives/:id', errorHandler(viewServicesByid));
router.post('/contacts', errorHandler(contacts));
router.get('/viewWeAchieved', errorHandler(viewWeAchieved));
router.get('/viewClient', errorHandler(viewClient));

router.get('/viewStory', errorHandler(viewStory));
router.get('/viewBlog', errorHandler(viewBlog));
router.get('/blog/:id', errorHandler(viewBlogByid));

router.get('/job', errorHandler(viewJob));
router.get('/job/:id', errorHandler(viewJobByid));
router.post('/applyJob',uploadPdf.single('resume'), errorHandler(applyJob));

router.get('/projectname', errorHandler(viewProject));
router.get('/viewProjectById', errorHandler(viewProjectById));
router.get('/mainServicesCategory',errorHandler(getAllMainServicesCategories));
router.get('/mainServices/:id/:name', errorHandler(getMainServicesById));


export default router;
