import React from 'react'
import { CardEntry } from './CardEntry'
import '../styles/card-style.css'

export const Card = () => {
    return (
        <div
            className="card mx-auto mt-5 text-center w-50"
            style={{ width: "18rem", borderRadius: '20px' }}>
            <img
                src="../images/illustration-hero.svg"
                className="card-img-top"
                alt="..."
                style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
            />
            <div className="card-body">
                <h5 
                className="card-title mt-2 mb-3 fs-2 fw-bold"
                style={{color:'#1E1154'}}
                >
                    Order Summary</h5>
                <p className="card-text fw-light">You can now listen to millions of songs,
                    audiobooks,and podscasts on any device anywhere you like!
                </p>
                <CardEntry />
                <div className="d-grid gap-2 col-10 mx-auto">
                    <button type="button" class="btn btn-danger">Proceed to Payment</button>
                    <button className="btn btn-light" type="button">Cancel Order</button>
                </div>
            </div>
        </div>
    )
}
