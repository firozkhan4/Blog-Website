const express = require("express");
const router = express.Router();

// Define middleware functions for each route
const renderHome = (req, res) => res.render("home");
const renderAbout = (req, res) => res.render("about");
const renderContact = (req, res) => res.render("contact");
const renderLogin = (req, res) => res.render("login");
const renderProfile = (req, res) => res.render("profile");
const renderLogout = (req, res) => res.render("logout");
const renderSignup = (req, res) => res.render("signup");

// Assign middleware functions to routes
router.get("/", renderHome);
router.get("/about", renderAbout);
router.get("/contact", renderContact);
router.get("/login", renderLogin);
router.get("/profile", renderProfile);
router.get("/logout", renderLogout);
router.get("/signup", renderSignup);

module.exports = router;
