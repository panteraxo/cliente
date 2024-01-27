import React from 'react'

export default function MainDetails({clientName,address,gender,zip,city}) {
  return (
    <>
    
    <section className="flex flex-col items-start justify-start">
        <p>{gender}</p>
        <p>{clientName}</p>
        <p>{address}</p>
        <p>{zip}{city}</p>
      </section>
     
    </>
  )
}
