import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import '../style/Navbar.css'



export default function Navbar(props) {


  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">TextUtils</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="nav nav-pills me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2"  aria-selected="true"  to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='back' >
                    <div className='bg-primary c1 mx-1 my-2' onClick={()=>props.back1('bg-primary')}></div>
                    <div className='bg-info c2 mx-1 my-2' onClick={()=>props.back1('bg-info')}></div>
                    <div className='bg-success c3 mx-1 my-2' onClick={()=>props.back1('bg-success')}></div>
                    <div className='bg-danger c4 mx-1 my-2' onClick={()=>props.back1('bg-danger')}></div>
                    <span className="badge text-bg-warning mx-3 my-1">Color Mode</span>
                    
                </div>

                <div className="form-check form-switch mx-5">
                    <input className="form-check-input mx-4 my-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=>props.check()} style={{cursor:'pointer'}}/>
                    <span className="badge text-bg-warning">Dark Mode</span>
                </div>
            
                <div className='search'>
                        <form role="search">
                            <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                        <button type="button" className="btn btn-warning mx-4">Search</button>
                </div>

            </div>
        </nav>
    </>
  
  )
}
