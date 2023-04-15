import React from 'react'
import Section1 from './Section1.jsx';
import './Home.css';


const Home = () => {
  return (
    <div >
    <Section1
        title="TESLA"
        description="Order Online for Touchless Deliver"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImgs="model-x.jpg"
        
    />
    <Section1
        title="HONDA"
        description="Order Online for Touchless Deliver"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
    />
    <Section1 id="id1"
    title="BMW"
    description="Order Online for Touchless Deliver"
    leftBtnText="Custom order"
    rightBtnText="Existing inventory"></Section1>
    </div>

  )
}

export default Home  