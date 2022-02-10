import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';



const One = ({
  forceNumber, 
  setForceNumber,
  armsOfService,
  setArmsOfService,
  rankTitle,
  setRankTitle,
  fullNames,
  setFullNames,
  surname,
  setSurname,
  IDNumber,
  setIDNumber
  })=>{
  return(
    <div className="page">
      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>1. Compulsory Personal Information</h6>
      <Form>
        <Form.Group className='mb-2' controlId='formForceNumber'>
          <Form.Label className='Label' >Force Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={forceNumber} onChange={(e)=>setForceNumber(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='formForceNumber'>
          <Form.Label className='Label' >*Arms of Service</Form.Label>
          <Form.Control className='Control' type='text' placeholder={armsOfService} onChange={(e)=>setArmsOfService(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='formForceNumber'>
        <Form.Label className='Label' >*Rank Title</Form.Label>
        <Form.Control className='Control' type='text' placeholder={rankTitle} onChange={(e)=>setRankTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='formForceNumber'>
        <Form.Label className='Label' >*Full Names</Form.Label>
        <Form.Control className='Control' type='text' placeholder={fullNames} onChange={(e)=>setFullNames(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='formForceNumber'>
        <Form.Label className='Label' >*Surname</Form.Label>
        <Form.Control className='Control' type='text' placeholder={surname} onChange={(e)=>setSurname(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='formForceNumber'>
        <Form.Label className='Label' >*ID Number</Form.Label>
        <Form.Control className='Control' type='text' placeholder={IDNumber} onChange={(e)=>setIDNumber(e.target.value)} />
      </Form.Group>
      </Form>
      <div style={{textAlign: 'center'}}>
        <Link to='/instructions'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '20vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        <Link to='/2'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '20vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>
      </div>
    </div>
  )
}
export default One