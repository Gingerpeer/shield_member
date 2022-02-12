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
    <Form style={{marginBottom: '30vh'}}>
        <Form.Group className='mb-2' controlId='pbTitle'>
          <Form.Label className='Label' >*Primary Beneficiary Title</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbTitle} onChange={(e)=>setPbTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='pbFullNames'>
          <Form.Label className='Label' >*Primary Beneficiary Full Names</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbFullNames} onChange={(e)=>setPbFullNames(e.target.value)} style={{ marginTop: '20px' }} />
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