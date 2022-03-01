import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
    const [province,setProvince] = useState('')
    
    const checkCellNumber = (number) =>{
      if(cellNumber.charAt(0) === '0'){
        if(cellNumber.length > 10){
          setError('Please give a valid cell number')
          return false
        }else if(cellNumber.length < 10){ 
          setError('Please give a valid cell number')
          return false
      }else{
        return true
    } 
  }
  if(cellNumber.charAt(0) === '2'){
    if(cellNumber.length > 11){
      setError('Please give a valid cell number')
      return false
    }else if(cellNumber.length < 11){ 
      setError('Please give a valid cell number')
      return false
  }else{
    console.log('Your number is exactly ten')
    return true
} 
}
}
const checkEmail = (email)=>{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return (true)
  }
    setError("You have entered an invalid email address!")
    return (false)
}
    const requiredSubmitted = () =>{
      if(cellNumber != ''){
        if(streetNumber != ''){
          if(streetName != ''){
            if(suburb != ''){
              if(town != ''){
                if(postalCode != ''){
                  if(checkCellNumber(cellNumber)){
                      if(checkCellNumber(altCellNumber)){
                        
                          setShowNext(true)
                          setError('Please check that all info is correct then click next')
              
                      }else{
                        setError('Please give a valid cell number')
                      }
                  }else{
                    setError('Please give a valid cell number')
                  }
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
        <Form.Control className='Control' type='email' placeholder={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)} />
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
      <Form.Group className='mb-2' controlId='province'>
      <Form.Label className='Label' style={{
        
      }} >*Province</Form.Label>
      <Form.Select onChange={(e)=>setProvince(e.target.value)}>
        <option>Choose Province</option>
        <option>Western Cape</option>
        <option>Eastern Cape</option>
        <option>Northern Cape</option>
        <option>North West</option>
        <option>Free State</option>
        <option>Mpumalanga</option>
        <option>Gauteng</option>
        <option>KwaZulu Natal</option>
        <option>Limpopo</option>
      </Form.Select>
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
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginLeft: '20vw', marginBottom: '5vw' }}>BACK</Button>
        </Link>
        {showNext &&  <Link to='/3'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '5vw' }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Submit</Button>}
      </div>
    </div>
  )
}
export default Two