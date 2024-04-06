import React from 'react'

const HomeComponent = () => {
  return (
    <main className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <img src='/THE-HACKSAW.svg' alt='Logo' width='500' height='500' className='d-inline-block align-text-top' />
          <p className="lead text-body mt-4">Spending too much time on manually computing cuts? Too many errors? Buying inventory more than needed? </p>
          <p className="lead text-body mt-4">Welcome to <span className='font-italic text-body-info'>THE-HACKSAW</span></p>
          <p>
            <a href="/compute" className="btn btn-primary my-2 me-4">Compute</a>
            <a href="/about" className="btn btn-secondary my-2">Learn More</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default HomeComponent