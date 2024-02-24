import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  // 'https://fakestoreapi.com/products/1'

  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setFake(jsonData);
  }
  fakestore();
  return (
    <>
      <h2>Fake API Store</h2>
      <div className="container">
        {
          fake.map((vlaues) => {
            return(
            <>
              <div className="box">
                <div className="content">
                  <h5>{vlaues.title}</h5>
                  <p>{vlaues.description}</p>
                </div>
                <img src={vlaues.image}  alt="" />
              </div>
            </>
            )
          })
        }

      </div>
    </>
  )
}

export default App;