import React from 'react'

export default function Footer() {
  const year=new Date().getFullYear();
  return (
    <>
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col">
          <p className="text-center mb-0 text-light">&copy;{year}.All Rights Reserved.</p>
        </div>
      </div>
    </div>
    </>
  )
}
