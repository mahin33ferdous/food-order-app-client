import React, { useEffect, useRef, useState } from 'react';
import { useCart, useDispatchCart } from '../../context/ContextReducer';

const Card = ({filterItems}) => {
    let dispatch=useDispatchCart();
    let {_id,name,options,img}=filterItems
    //console.log(options,Object.keys(options[0]))
    let priceOption=Object.keys(options[0])
    let data=useCart();

   
   const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  const handleOptions =async  (e) => {
    await setSize(e.target.value);
    //console.log(size)
  }
 // console.log(size)
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  
  useEffect(() => {
    setSize(priceRef.current.value)
    
   
  }, [])
  
 
  let finalPrice=qty * parseInt(options[0][size]);  //price will be calculated......................use option[0][size] instead of option[0]
//   console.log(qty)
//   console.log(size)
//   console.log(options[0][size])
//   console.log(finalPrice)
 

    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", id: _id, name: name,price: finalPrice, qty: qty, size: size })
        console.log(data)
          }
        

    return (
        <div>
                  <div className="card mt-3 m-2" style={{"width": "18rem","maxHeight":"360px"}}>
                <img src={img} className="card-img-top" alt="..." style={{height:"120px", objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success' onChange={handleQty}>
                            {
                                Array.from(Array(6),(e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>
                                            {i+1}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 w-0 bg-success rounded' ref={priceRef}   onChange={handleOptions}>
                          {
                            priceOption.map((opt)=>{
                                return <option key={opt} value={opt}>{opt}</option>//half full
                            })
                          }
                        </select>
                        <div className='d-inline h-1oo fs-5'>
                        {finalPrice}tk
                        </div>
                        <hr></hr>
                        <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;