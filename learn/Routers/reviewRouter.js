// const reviewModel = require('../models/reviewModel');
const express = require('express');
const reviewRouter = express.Router();
const { prtectRoute } = require('../controller/authController');
const {getAllReviews,getReview,updateReview,deleteReview,createView,top3Reviews} = require('../controller/reviewController');

reviewRouter.route('/all')
    .get(getAllReviews);



reviewRouter
    .route('/top3')
    .get(top3Reviews);


reviewRouter
    .route('/:id')
    .get(getReview);


reviewRouter.use(prtectRoute);
reviewRouter
    .route('/crud/:plan')
    .post(createView);

reviewRouter
    .route('/crud/:id')
    .patch(updateReview)
    .delete(deleteReview);

module.exports = reviewRouter;