import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carousal from '../../components/Carousel/Carousal';
import Card from '../../components/Card/Card';

const Home = () => {

    
    const[foodItem,setfoodItem]=useState([])
    const [category,setCategory]=useState([])
    const[search,setSearch]=useState("")
   


    const loadData=async()=>{
        let response= await fetch("http://localhost:5000/api/fooddata",{//..........forgot to give await
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        });
        response=await response.json();
        //console.log(response[0],response[1])
        setfoodItem(response[0]);
        setCategory(response[1]);

    }

    useEffect(()=>{
        loadData();
    },[])
    return (
        <div>
            <div><Navbar /></div>

           <div>
           <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <form class="d-flex">
        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button class="btn btn-success text-white" type="submit"onClick={() => { setSearch('') }}>X</button>
      </form>
    </div>
    <div className="carousel-item active" style={{"maxHeight":"760px"}}>
      <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=all" style={{"object-fit":"cover","maxHeight":"760px" , "filter":"brightness(30%)"}} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item" style={{"maxHeight":"760px"}}>
      <img src="https://images.deliveryhero.io/image/fd-bd/LH/jeha-hero.jpg" style={{"object-fit":"cover","maxHeight":"760px", "filter":"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" style={{"maxHeight":"760px"}} >
      <img src="https://c.ndtvimg.com/2020-07/ds980vng_pizza_625x300_07_July_20.jpg" style={{"object-fit":"cover","maxHeight":"760px" , "filter":"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
           </div>
            

            <div className='m-3 container row gx-5'>
                {
                    category!==[]
                    ? category.map((data)=>{
                     return( 
                       <div key={data._id} className='row'>
                         <div className='fs-3 m-3'>
                            {data.CategoryName}
                             </div>
                             <hr/>

                             {

                                foodItem!==[]
                                ?foodItem.filter(
                                    (items) =>(items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())) ).map(filterItems=>{
                                     //faced problem with toLowerCase->toLowerCase()   
                                    return(
                                        <div key={filterItems._id}  className='col-12 col-md-6 col-lg-3'>
                                        <div>{filterItems.name}</div>
                                       <Card 
                                        filterItems={filterItems}
                                        
                                       ></Card>
                                        
                                        
                                    
                                    
                                         
                                       
                                
                                </div>    
                                    ) 
                                  

                                })

                                :
                                ""
                              }   

                              

                          


                          </div>
                     )
                     
                     
                    
 
                    }):
                    ""
                }
                </div>
                      
            <div><Footer /></div>

        </div>
    );
};

export default Home;