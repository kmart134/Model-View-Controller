//SELECT certain elements from page using query selectores 
//then, grab those values and use a fetch to send them over

const { json } = require("sequelize/types")

const commentHandler = async function(event){
    event.preventDefault()
    const postId = document.querySelector('input[name = "post-id"]').value
    const body = document.querySelector('textarea[name="comment-body"]').value 

    if(body){
        await fetch('/api/comment', {
            method:'POST',
            body: JSON.stringify({
                postId, body
            })
        })
    }
}