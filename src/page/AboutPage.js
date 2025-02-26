import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const navigate = useNavigate()
    const goToHomePage=() => {
        navigate('/');
    }
  return (
    <div>
        <h1>aboutPage</h1>
        <button onClick={goToHomePage}>goToHomePage</button>
    </div>
  )
}

export default AboutPage