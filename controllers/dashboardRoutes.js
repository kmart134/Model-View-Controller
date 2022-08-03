//require roter, Post(from models), withAuth

const { post } = require("./api");
const withAuth = require("../utils/auth");
const router = require('express').Router();

//get route that uses withAuth - uses finadAll on post, where user id
//render all-posts-admin with dashboard layout

//get route for rendering the new post page, also using withAuth -findAll
//render new-posts, with dashboard layout



//get route for editing a post, using withAuth - findbyPK
router.get('edit/:id', withAuth, async (req, res) => {
    try{
        const postData = await post.findByPK(req.params.id);
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
})
