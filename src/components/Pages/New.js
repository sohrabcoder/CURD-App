import React,{ useEffect, useState } from 'react'
import axios from 'axios';

const New = () => {
const [produt , setProducts] = useState()
    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
        .then((res) => {
            console.log(res,"rty")
            setProducts(res.data.products)
        })
        .catch((err) => {
            console.log(err,"err")
        })
    },[])
    console.log(produt,"produt")

   
  return (
    <div>
      <div className="container1">
        <table className="table border shadow">
          <thead >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {produt && produt.map((pro, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{pro.brand}</td>
                  <td>{pro.category}</td>
                  <td>{pro.price}</td>
                </tr>
               ))} 
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default New