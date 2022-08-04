//router
// const { comment } = require("./api");
const withAuth = require("../utils/auth");
const { Comment } = require("../models");
const router = require('express').Router();
//Comment from models
//withAuth

//post that creates a comment

router.post('/', withAuth, async (req,res) => {
    try{
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.json(newComment);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
