import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';



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
      <Form.Group className='mb-2' controlId='suburb'>
        <Form.Label className='Label' >*Suburb</Form.Label>
        <Form.Control className='Control' type='text' placeholder={suburb} onChange={(e)=>setSuburb(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='town'>
        <Form.Label className='Label' style={{
          
        }} >*Town</Form.Label>
        <Form.Control className='Control' type='text' placeholder={town} onChange={(e)=>setTown(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='postalCode'>
        <Form.Label className='Label' >*Postal Code</Form.Label>
        <Form.Control className='Control' type='text' placeholder={postalCode} onChange={(e)=>setPostalCode(e.target.value)} />
      </Form.Group>
      </Form>
      <div style={{textAlign: 'center'}}>
        <Link to='/1'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw', marginBottom: '5vw' }}>BACK</Button>
        </Link>
        <Link to='/3'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '5vw' }} >NEXT</Button>
        </Link>
      </div>
    </div>
  )
}
export default Two