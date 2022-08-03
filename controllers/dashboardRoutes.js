//require roter, Post(from models), withAuth

//get route that uses withAuth - uses finadAll on post
//render all-posts-admin with dashboard layout

//get route for rendering the new post page, also using withAuth -findAll
//render new-posts, with dashboard layout

//get route for editing a post, using withAuth - findbyPK

router.get('edit/:id', withAuth, async (req, res) => {
    try{
        //await to post your data
    } catch (err) {
        //through error with redirect to login page
    }
})
