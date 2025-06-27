const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/about', (req, res) => {
    res.render('pages/about');
});

router.get('/projects', (req, res) => {
    res.render('pages/projects');
});

router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

router.get('/resume', (req, res) => {
    res.render('pages/resume');
});

module.exports = router;