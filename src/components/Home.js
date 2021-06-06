import React, { useEffect,useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import axios from 'axios';
const Home = () => {

    const [list,setList] = useState();
    useEffect(()=>{
        const apiCall = async() =>{
        try
        {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=426e6ec5c6dbce7fdca81f72f75f8b54`) 
            setList(res?.data?.results)
            console.log(list);
        }
        catch(err)
            {
                console.log(err);
            }
        }
        apiCall();
    },[])
    return (
        <div>
              <Nav/>
            <div className="container">
            <div>
              <h2>Top Rated Movies</h2>
              </div>
                <div className="grid">
                    
                 {
                     list && 
                     list.map(
                         (e,index)=>{
                             return (
                                 <div>
                              <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} alt={`Title : ${e.title}`} key={index} className="img"/>
                                </div>
                             )
                         }
                     )
                    
                 }
                </div>
            </div>
           <Footer/>
        </div>
    )
}

export default Home
