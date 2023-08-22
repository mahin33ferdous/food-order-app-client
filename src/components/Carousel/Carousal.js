import React, { useState } from 'react';

const Carousal = ({}) => {
  const[search,setSearch]=useState("")
  
    return (
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
    );
};

export default Carousal;