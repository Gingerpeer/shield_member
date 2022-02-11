import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';

// still need to work out monthly premium 


const Three = ({
  unitName,
  setUnitName,
  unitSwitchBoardNumber,
  setUnitSwitchBoardNumber,
  maritalStatus,
  setMaritalStatus,
  monthlyPremium,
  setMonthlyPremium,
  spouseTitle,
  setSpouseTitle,
  spouseFullNames,
  setSpouseFullNames,
  spouseSurname,
  setSpouseSurname,
  spouseID,
  setSpouseID
  })=>{
  return(
    <div className="page">
      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>3. Unit Contact Details</h6>
      <Form style={{marginBottom: '30vh'}}>
        <Form.Group className='mb-2' controlId='unitName'>
          <Form.Label className='Label' >*Unit Name</Form.Label>
          <Form.Control className='Control' type='text' placeholder={unitName} onChange={(e)=>setUnitName(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='unitSwitchBoardNumber'>
          <Form.Label className='Label' style={{maxWidth: '70px'}} >*Unit Switchboard Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={unitSwitchBoardNumber} onChange={(e)=>setUnitSwitchBoardNumber(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      </Form>
      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Membership Type</h6>
        <p style={{
          textAlign: 'center',
          fontWeight: '600'
        }}>*Monthly Premium: R{monthlyPremium}</p>
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Marital Status</h6>
      <Form>
      <Form.Group className='mb-2' controlId='maritalStatus'>
        <Form.Label className='Label' >*Marital Status</Form.Label>
        <Form.Control className='Control' type='text' placeholder={maritalStatus} onChange={(e)=>setMaritalStatus(e.target.value)} />
      </Form.Group>
      
      <Form.Group className='mb-2' controlId='spouseTitle'>
        <Form.Label className='Label' >*Title</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseTitle} onChange={(e)=>setSpouseTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='spouseFullNames'>
        <Form.Label className='Label' >*Full Names</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseFullNames} onChange={(e)=>setSpouseFullNames(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='spouseSurname'>
        <Form.Label className='Label' >*Surname</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseSurname} onChange={(e)=>setSpouseSurname(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='spouseID'>
        <Form.Label className='Label' >*ID Number</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseID} onChange={(e)=>setSpouseID(e.target.value)} />
      </Form.Group>
      </Form>
      <div style={{textAlign: 'center'}}>
        <Link to='/2'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        <Link to='/4'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>
      </div>
    </div>
  )
}
export default Three