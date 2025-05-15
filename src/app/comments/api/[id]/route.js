export async function PATCH(request,{params})
{
    const id = parseInt (params.id)
    const body = await request.json();
    console.log(id);
    const index = comments.findIndex((comment)=>
    comment.id === id)
    comments[index] = {
       text: body.text 
    }
    return Response.json({
        message: "comment updated",

        comments
    })
}

export async function DELETE(request,{params})
{
    const newComments = comments.filter((c)=>
    c.id !== parseInt(params.id))
    return Response.json({
        message: "comment deleted",
        comments: newComments
    })
}

const comments = [
    {
        id: 1,
        text: "Comment 1"
    },
    {
        id: 2,
        text: "Comment 1"
    },
    {
        id: 3,
        text: "Comment 3"
    },
    {
        id: 4,
        text: "Comment 4"
    }
]