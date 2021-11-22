import React from 'react'

export const CardEntry = () => {
    /*<div class="col-6">
        <p>Annual Plan</p>
        <p>$59.99/year</p>
    </div> */
    return (
        <div class="container-fluid mb-4">
            <div class="row">
                <div class="col-2">
                    <img
                        className='img-fluid'
                        style={{borderRadius:'10px'}}
                        src='../images/icon-music.svg'
                    />
                </div>
                <div className='col-6'>
                    <div class="col-6">
                        <p className='fw-bold mb-1'>Annual Plan</p>
                        <p className='text-muted'>$59.99/year</p>
                    </div>
                </div>
                <div class="col-4">
                    <p
                    className='btn btn-link fw-bold'
                    >
                        Change
                    </p>
                </div>
            </div>

        </div>
    )
}
