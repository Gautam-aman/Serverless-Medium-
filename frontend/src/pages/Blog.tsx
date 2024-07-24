import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
export const Blog = ()=>{
    const id = useParams()
    const {loading, blog} = useBlog({
        id :Number(id)
    });
    if (loading){
        return <div>
            Loading...
        </div>
    }
return <div className="grid grid-cols-12">

    <div className=""></div>
    <div></div>

</div>
}