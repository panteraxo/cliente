import React from 'react'

export default function ClientDetails({clientName,invoiceDate,invoiceNumber}) {
  return (
    <>
    
    <section className="flex flex-col justify-between">
  <h2 className="text-xl font-bold mb-2">RECHNUNG</h2>
  <p className="flex justify-between mb-1">
    <span>Rechnung:</span>
    <span>{invoiceNumber}</span>
  </p>
  <p className="flex justify-between mb-1">
    <span>Kundennummer:</span>
    <span>{clientName}</span>
  </p>
  <p className="flex justify-between mb-1">
    <span>Datum:</span>
    <span>{invoiceDate}</span>
  </p>
</section>

      
    </>
  )
}
