import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const {id}=useParams();
    const {data:blog,isPending,error}=useFetch("http://localhost:8000/blogs/"+id);
    const history=useHistory();

    const handleClick = () =>{
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method:"DELETE"
        })
        .then(()=>{
            history.push("/");
        })
    }
    return ( 
        <div className="blog-details">
            <center><h1>{error}</h1></center><br />
            {isPending && <center><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="35" alt="" /></center>}

            {blog && 
            
            <article>
                <h2>{blog.title}</h2><br />
                <p> {blog.overview}</p>
                <button onClick={handleClick}>Delete</button>
            </article>}
        </div>
     );
}
 
export default BlogDetail;