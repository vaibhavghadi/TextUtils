import React from 'react'
import '../style/Alert.css'

export default function Alert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert" >
      <strong>Success ...... </strong> {props.dis}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> 
  )
}
