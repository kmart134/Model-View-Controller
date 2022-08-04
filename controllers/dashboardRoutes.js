//require roter, Post(from models), withAuth

const { post } = require("./api");
const withAuth = require("../utils/auth");
const { Post } = require("../models");
const router = require('express').Router();

//get route that uses withAuth - uses finadAll on post, where user id
//render all-posts-admin with dashboard layout

router.get('/', withAuth, async (req,res) => {
    try{
        const postData = await Post.findAll({
            where:{
                userId: req.session.userId,
            },
        })

        const posts = postData.map((posts) => post.get({plain: true}));
        res.render('all-posts-admin', {
            layout: 'dashboard', 
            posts,})
    } catch(err){res.redirect('login'); 
}
})

//get route for rendering the new post page, also using withAuth -findAll
//render new-posts, with dashboard layout

router.get('/new', withAuth, async (req,res) =>{
    res.render('new-post',{
        layout: 'dashboard',
    });
})



//get route for editing a post, using withAuth - findbyPK
router.get('edit/:id', withAuth, async (req, res) => {
    try{
        const postData = await Post.findByPK(req.params.id);
        if(postData){
            const post = postData.get({plain:true});
            res.render('edit-post', {
                layout: 'dashboard', 
                post,
            })
        } else {
            res.status(404).end();
        }
        //await to post your data
    } catch (err) {
        res.redirect('login')
        //through error with redirect to login page
    }
});

module.exports = router;