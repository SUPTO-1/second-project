import { getPosts } from "@/Service/getApi";
export const generateMetadata = async ({params}) =>
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postDate = await res.json();
    return{
        title:`${postDate.title} | Next Js`,
        description: `${postDate.body}`,
    }
}
const page = async ({params}) => {
    const detailsPosts = await getPosts();
    const singlePost = detailsPosts.find(post => post.id == params.id);
    console.log(singlePost)
    return (
        <div className="p-24 border-2">
            <h1>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
            <p>{singlePost.id}</p>
        </div>
    );
};

export default page;