import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';

const Five = ({
          pbTitle,
          setPbTitle,
          pbFullNames,
          setPbFullNames,
          pbSurname,
          setPbSurname,
          pbID,
          setPbID,
          pbCellNumber,
          setPbCellNumber,
          nlTitle,
          setNlTitle,
          nlFullNames,
          setNlFullNames,
          nlSurname,
          setNlSurname,
          nlIDNumber,
          setNlIDNumber,
          nlCellNumber,
          setNlCellNumber
}) =>{
  return(
    <div className="page">
    <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>5. Primary Beneficiary Details</h6>
    <Form style={{marginBottom: '10vh'}}>
        <Form.Group className='mb-2' controlId='pbTitle'>
          <Form.Label className='Label' >*Primary Beneficiary Title</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbTitle} onChange={(e)=>setPbTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='pbFullNames'>
          <Form.Label className='Label' >*Primary Beneficiary Full Names</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbFullNames} onChange={(e)=>setPbFullNames(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='pbSurname'>
          <Form.Label className='Label' >*Primary Beneficiary Surname</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbSurname} onChange={(e)=>setPbSurname(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>

      <Form.Group className='mb-2' controlId='pbCellNumber'>
          <Form.Label className='Label' >*Primary Beneficiary Cell Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbCellNumber} onChange={(e)=>setPbCellNumber(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>

      <Form.Group className='mb-2' controlId='pbID'>
          <Form.Label className='Label' >*Primary Beneficiary ID</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbID} onChange={(e)=>setPbID(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      
      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>6. Next in Line Beneficiary Details</h6>

        <Form.Group className='mb-2' controlId='nlTitle'>
          <Form.Label className='Label' >*Next in Line Beneficiary Title</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlTitle} onChange={(e)=>setNlTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='nlFullNames'>
          <Form.Label className='Label' >*Next in Line Beneficiary Full Names</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlFullNames} onChange={(e)=>setNlFullNames(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='nlSurname'>
          <Form.Label className='Label' >*Next in Line Beneficiary Surname</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlSurname} onChange={(e)=>setNlSurname(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='nlIDNumber'>
          <Form.Label className='Label' >*Next in Line Beneficiary ID</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlIDNumber} onChange={(e)=>setNlIDNumber(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>

      <Form.Group className='mb-2' controlId='nlCellNumber'>
          <Form.Label className='Label' >*Next in Line Beneficiary Cell Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlCellNumber} onChange={(e)=>setNlCellNumber(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      </Form>


      <div style={{textAlign: 'center'}}>
        <Link to='/4'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        <Link to='/6'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>
    </div>
    </div>
  )
}
export default Five