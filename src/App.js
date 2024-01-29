import React, { useRef, useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Disclaimer from "./components/Disclaimer";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print"
import Information1 from "./components/Information1";
import Information2 from "./components/Information2";
import Private from "./components/Private";


function App() {
  const [showInvoice,setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description,setDescription] = useState("")
  const [quantity,setQuantity] = useState("")
  const [price,setPrice] = useState("")
  const [amount,setAmount] = useState("")
  const [dateReceipt,setDateReceipt] = useState("")
  const [list,setList] = useState([])
  const [total,setTotal] = useState(0)
  const componenRef = useRef()

  const handlePrint =()=>{
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      {showInvoice ? (
        <>
        <ReactToPrint trigger={()=> <button className="mb-5 mx-2 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all-duration-300">Print / Download</button>}
        content={()=>componenRef.current}/>
        
        <div ref={componenRef} className="p-5">
          <Header handlePrint={handlePrint}/>
          <div className="flex justify-between mb-10">
            <div><Information1/></div>
            <div><Information2/></div>
          </div>
          <div className="flex justify-between mb-10">
            <div >
              <MainDetails clientName={clientName} address={address} city={city} zip={zip} gender={gender}/>
            </div>
            <div >
              <ClientDetails clientName={clientName} invoiceNumber={invoiceNumber} invoiceDate={invoiceDate}/>
            </div>
            
          </div>
        
            <Private dateReceipt={dateReceipt}/>
          <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal}/>

          <Notes notes={notes}/>
          <Disclaimer/>  
          <Footer/>
  
  <button onClick={()=>setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all-duration-300">
    Edit Information
  </button>
        </div></>
      ):(
        <>
        {/* name,address,email,phone,bank name,bank account number,website ,client name,client address,invoice number,invoice date,due date,notes*/}
        
        <div className="flex flex-col justify-center">
        <article className="md:grid grid-cols-3 gap-10 mb-5">
        <div className="flex flex-col">
        <label htmlFor="gender">Select</label>
        <input className="mb-2"
              type="text" 
              name="gender" 
              id="gender" 
              placeholder="---" 
              autoComplete="off"
              value={gender}
              onChange={(e)=> setGender(e.target.value)}
        />
        </div >
        <div className="flex flex-col">
        <label htmlFor="clientName">Client's name</label>
        <input className="mb-2"
              type="text" 
              name="clientName" 
              id="clientName" 
              placeholder="Enter your client name" 
              autoComplete="off"
              value={clientName}
              onChange={(e)=> setClientName(e.target.value)}
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="address">Client's address</label>
        <input className="mb-2"
              type="text" 
              name="address" 
              id="address" 
              placeholder="Enter your address" 
              autoComplete="off"
              value={address}
              onChange={(e)=> setAddress(e.target.value)}
        />
        </div>
        </article>

        <article className="md:grid grid-cols-3 gap-10 mb-5">
        <div className="flex flex-col">
        <label htmlFor="zip">Enter your zip code</label>
        <input className="mb-2"
              type="number" 
              name="zip" 
              id="zip" 
              placeholder="Enter your zip code" 
              autoComplete="off"
              value={zip}
              onChange={(e)=> setZip(e.target.value)}
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="city">Enter your city</label>
        <input className="mb-2"
              type="text" 
              name="city" 
              id="city" 
              placeholder="Enter your city" 
              autoComplete="off"
              value={city}
              onChange={(e)=> setCity(e.target.value)}
        />
        </div>
        
        </article>

        <article className="md:grid grid-cols-3 gap-10">
        <div className="flex flex-col">
        <label htmlFor="invoiceNumber">Invoice number</label>
        <input className="mb-2"
              type="text" 
              name="invoiceNumber" 
              id="invoiceNumber" 
              placeholder="Enter invoice number" 
              autoComplete="off"
              value={invoiceNumber}
              onChange={(e)=> setInvoiceNumber(e.target.value)}
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="invoiceNumber">Invoice date</label>
        <input className="mb-2"
              type="date" 
              name="invoiceNumber" 
              id="invoiceDate" 
              placeholder="Enter invoice date" 
              autoComplete="off"
              value={invoiceDate}
              onChange={(e)=> setInvoiceDate(e.target.value)}
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="dateReceipt">Date receipt</label>
        <input className="mb-2"
              type="date" 
              name="dateReceipt" 
              id="dateReceipt" 
              placeholder="Enter your bank name" 
              autoComplete="off"
              value={dateReceipt}
              onChange={(e)=> setDateReceipt(e.target.value)}
        />
        </div>
        
        </article>
        {/*This is our table form */}
        <article>
          <TableForm 
          description={description} 
          setDescription={setDescription}
          price={price} 
          setPrice={setPrice}
          amount={amount} 
          setAmount={setAmount}
          quantity={quantity} 
          setQuantity={setQuantity}
          list={list}
          setList={setList}
          total={total} setTotal={setTotal}
          
          />
        </article>

        <label htmlFor="notes">Enter notes</label>
        <textarea 
              
              name="notes" 
              cols="30"
              rows="10"
              id="notes" 
              placeholder="Additional notes to the client" 
              autoComplete="off"
              value={notes}
              onChange={(e)=> setNotes(e.target.value)}
        />


        <button onClick={()=>setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all-duration-300">Preview invoice</button>
        </div>
        <div className="flex flex-col justify-center">
        
        </div>
        </>
      )}
      
      </main>
    </>
  );
}

export default App;
