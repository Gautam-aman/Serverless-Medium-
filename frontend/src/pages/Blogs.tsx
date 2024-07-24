import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/appbar"
import { useBlogs } from "../hooks"



export const Blogs =()=>{

    const {loading , blogs} = useBlogs();
    if (loading){
        return <div>
            loading..
        </div>
    }
    
    return  <div>
        <Appbar/>
        <div className="flex justify-center">
        <div className=" max-w">
            {blogs.map(blog => <BlogCard authorName={blog.author.name || "Anonymous"} publishedDate="29 may" title={blog.title} content={blog.content} id={blog.id} />)}
        <BlogCard  authorName="aman" title="kishan" content="hey i am aman" publishedDate="29 may 2024" id={3}></BlogCard>
     </div>
    </div>
    </div>
    
}