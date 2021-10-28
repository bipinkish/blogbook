import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title,setTitle]=useState("");
    const [plot,setPlot]=useState("");
    const [overview,setOverview]=useState("");
    const [rating,setRating]=useState("");
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();
    
    function handleSubmit(e){
        e.preventDefault();
        const blog={title,plot,overview,rating};
        setIsPending(true);

        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            console.log("Successfully Posted..");
            history.push("/");
        })
        
        
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog !</h2>
            <form onSubmit={handleSubmit}>
            <label>Title : </label>
            <input 
            type="text" value={title} required onChange={(e)=>setTitle(e.target.value)} />
            <label>Plot : </label>
            <textarea value={plot} required onChange={(e)=>setPlot(e.target.value)}/>
            <label>Overview : </label>
            <textarea value={overview} required onChange={(e)=>setOverview(e.target.value)}/>
            <label>Rating : </label>
            <input value={rating} type="text" required onChange={(e)=>setRating(e.target.value)} />
            {!isPending&&<button>Add Blog</button>}
            {isPending&&<button disabled><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="13" alt="" /></button>}
            </form>
        </div>
     );
}
 
export default Create;