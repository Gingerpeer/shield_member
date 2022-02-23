import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Suburbs from '../components/Suburbs.json'
import TownsProvinces from '../components/TownsProvinces.json'
const Two = ({
  cellNumber, 
  setCellNumber,
  altCellNumber,
  setAltCellNumber,
  landlineNumber,
  setLandlineNumber,
  emailAddress,
  setEmailAddress,
  streetNumber,
  setStreetNumber,
  streetName,
  setStreetName,
  complexName,
  setComplexName,
  unitNumber,
  setUnitNumber,
  suburb,
  setSuburb,
  town,
  setTown,
  postalCode,
  setPostalCode
  })=>{
    const [showNext,setShowNext] = useState(false)
    const [error, setError] = useState('')
    const [towns, setTowns] = useState([])
    // logic to make towns and suburbs collaborate with provinces
    const townsArray = []
    // towns in provided data
    for(let i = 0; i < Suburbs.length; i++){
      townsArray.push(Suburbs[i].Town)
    }
    const uniqueTowns = Array.from(new Set(townsArray))
    // towns with provinces from https://raw.githubusercontent.com/dirkstrauss/SouthAfrica/master/SouthAfricanCities.json
    // function to see only towns in province
    // provinces
    const wc = []
    const ec = []
    const nc = []
    const nw = []
    const fs = []
    const gp = []
    const lp = []
    const kzn = []
    const mp = []
      for(let i = 0;i<TownsProvinces.length;i++){
        if(TownsProvinces[i].ProvinceName == "Western Cape"){
          wc.push(TownsProvinces[i].AccentCity)
        }
        if(TownsProvinces[i].ProvinceName == "Eastern Cape"){
          ec.push(TownsProvinces[i].AccentCity)
        }
        if(TownsProvinces[i].ProvinceName == "Northern Cape"){
          nc.push(TownsProvinces[i].AccentCity)
        }
        if(TownsProvinces[i].ProvinceName == "North West"){
          nw.push(TownsProvinces[i].AccentCity)
        }
        if(TownsProvinces[i].ProvinceName == "Free State"){
          fs.push(TownsProvinces[i].AccentCity)
        }
        if(TownsProvinces[i].ProvinceName == "Mpumalanga"){
          mp.push(TownsProvinces[i].AccentCity)
        }
        if(TownsProvinces[i].ProvinceName == "Gauteng"){
          gp.push(TownsProvinces[i].AccentCity)
        }
        if(TownsProvinces[i].ProvinceName == "KwaZulu Natal"){
          kzn.push(TownsProvinces[i].AccentCity)
        }
        if(TownsProvinces[i].ProvinceName == "Limpopo"){
          lp.push(TownsProvinces[i].AccentCity)
        }
      }
    console.log(fs)
    const requiredSubmitted = () =>{
      if(cellNumber != ''){
        if(streetNumber != ''){
          if(streetName != ''){
            if(suburb != ''){
              if(town != ''){
                if(postalCode != ''){
                  setShowNext(true)
                  setError('Please check that all info is correct then click next')
                }else{
                  setError('You have not submitted your Postal Code')
                }
              }else{
                setError('You have not submitted your Town')
              }
            }else{
              setError('You have not submitted your Suburb')
            }
          }else{
            setError('You have not submitted your Street Name')
          }
        }else{
          setError('You have not submitted your Street Number')
        }
      }else{
        setError('You have not submitted your Cell Number')
      }
    }
  return(
    <div className="page">
      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>2. Main Member Contact Details</h6>
      <Form>
        <Form.Group className='mb-2' controlId='cellNumber'>
          <Form.Label className='Label' >*Cell Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={cellNumber} onChange={(e)=>setCellNumber(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='altCellNumber'>
          <Form.Label className='Label' >Alt Cell Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={altCellNumber} onChange={(e)=>setAltCellNumber(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='landlineNumber'>
        <Form.Label className='Label' >Landline Number</Form.Label>
        <Form.Control className='Control' type='text' placeholder={landlineNumber} onChange={(e)=>setLandlineNumber(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='emailAddress'>
        <Form.Label className='Label' >Email Address</Form.Label>
        <Form.Control className='Control' type='text' placeholder={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='streetNumber'>
        <Form.Label className='Label' >*Street Number</Form.Label>
        <Form.Control className='Control' type='text' placeholder={streetNumber} onChange={(e)=>setStreetNumber(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='streetName'>
        <Form.Label className='Label' >*Street Name</Form.Label>
        <Form.Control className='Control' type='text' placeholder={streetName} onChange={(e)=>setStreetName(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='complexName'>
        <Form.Label className='Label' >Complex Name</Form.Label>
        <Form.Control className='Control' type='text' placeholder={complexName} onChange={(e)=>setComplexName(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='unitNumber'>
        <Form.Label className='Label' >Unit Number</Form.Label>
        <Form.Control className='Control' type='text' placeholder={unitNumber} onChange={(e)=>setUnitNumber(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-2' controlId='town'>
        <Form.Label className='Label' style={{
          
        }} >*Town</Form.Label>
        <Form.Control className='Control' type='text' placeholder={town} onChange={(e)=>setTown(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-2' controlId='suburb'>
        <Form.Label className='Label' >*Suburb</Form.Label>
        <Form.Control className='Control' type='text' placeholder={suburb} onChange={(e)=>setSuburb(e.target.value)} />
      </Form.Group>
      
      <Form.Group className='mb-2' controlId='postalCode'>
        <Form.Label className='Label' >*Postal Code</Form.Label>
        <Form.Control className='Control' type='text' placeholder={postalCode} onChange={(e)=>setPostalCode(e.target.value)} />
      </Form.Group>
      </Form>
      <div style={{textAlign: 'center', padding: '5vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
      <div style={{textAlign: 'center'}}>
        <Link to='/1'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw', marginBottom: '5vw' }}>BACK</Button>
        </Link>
        {showNext &&  <Link to='/3'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '5vw' }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Submit</Button>}
      </div>
    </div>
  )
}
export default Two