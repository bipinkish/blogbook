import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {   

    const {data:blogs,isPending,error}=useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">

            <center><h1>{error}</h1></center><br />
            {isPending && <center><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="35" alt="" /></center>}

            {blogs&&<BlogList blogs={blogs} title="Top Web Series of All Time [2021 Updated]"/>}
            
        </div>
     );
}
 
export default Home;