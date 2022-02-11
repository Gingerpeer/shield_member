import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Form, Row, Col}  from 'react-bootstrap'


const Four = ({
  childrenAmount,
  setChildrenAmount,
  childTitle,
  setChildTitle,
  childFullNames,
  setChildFullNames,
  childSurname,
  setChildSurname,
  childID,
  setChildID,
  childTitle2,
  setChildTitle2,
  childFullNames2,
  setChildFullNames2,
  childSurname2,
  setChildSurname2,
  childID2,
  setChildID2,
  childTitle3,
  setChildTitle3,
  childFullNames3,
  setChildFullNames3,
  childSurname3,
  setChildSurname3,
  childID3,
  setChildID3,
  childTitle4,
  setChildTitle4,
  childFullNames4,
  setChildFullNames4,
  childSurname4,
  setChildSurname4,
  childID4,
  setChildID4,
  childTitle5,
  setChildTitle5,
  childFullNames5,
  setChildFullNames5,
  childSurname5,
  setChildSurname5,
  childID5,
  setChildID5,
  childTitle6,
  setChildTitle6,
  childFullNames6,
  setChildFullNames6,
  childSurname6,
  setChildSurname6,
  childID6,
  setChildID6,
}) =>{
  return(
    <div className="page">
    <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>4. Dependant Children U21</h6>
      <Form className='Form'>
        <Form.Group as={Row} className='mb-3' controlId='childrenAmount'>
          <Form.Label className='Label' column sm='2'>*Amount of Children</Form.Label>
          <Col sm='10'>
            <Form.Control className='Control' type='text' placeholder={childrenAmount} onChange={(e)=>setChildrenAmount(e.target.value)}  />
          </Col>
        </Form.Group>
        </Form>
        {/*
            Children Details to follow
        */}
        {childrenAmount == 1 && 
          <div style={{marginTop: '10vh'}}>
            <Form className='Form'>
              <Form.Group as={Row} className='mb-3' controlId='childTitle'>
                <Form.Label className='Label' sm='2' >*Title </Form.Label>
                <Col sm='10'>
                  <Form.Control className='Control' type='text' placeholder={childTitle} onChange={(e)=>setChildTitle(e.target.value)} />
                </Col>
                
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames'>
                <Form.Label className='Label'>*Full Names</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames} onChange={(e)=>setChildFullNames(e.target.value)} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname'>
                <Form.Label className='Label'>*Surname</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname} onChange={(e)=>setChildSurname(e.target.value)} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID'>
                <Form.Label className='Label'>*ID</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID} onChange={(e)=>setChildID(e.target.value)} />
              </Form.Group>
            </Form>
          </div>
        }
        {childrenAmount == 2 && 
          <div style={{marginTop: '10vh'}}>
            <Form className='Form'>
              <Form.Group className='mb-3' controlId='childTitle'>
                <Form.Label className='Label'>*Title</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle} onChange={(e)=>setChildTitle(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames'>
                <Form.Label className='Label'>*Full Names</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames} onChange={(e)=>setChildFullNames(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname'>
                <Form.Label className='Label'>*Surname</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname} onChange={(e)=>setChildSurname(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID'>
                <Form.Label className='Label'>*ID</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID} onChange={(e)=>setChildID(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle2'>
                <Form.Label className='Label'>*Title</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle2} onChange={(e)=>setChildTitle2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames2'>
                <Form.Label className='Label'>*Full Names</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames2} onChange={(e)=>setChildFullNames2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname2'>
                <Form.Label className='Label'>*Surname</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname2} onChange={(e)=>setChildSurname2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID2'>
                <Form.Label className='Label'>*ID</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID2} onChange={(e)=>setChildID2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
            </Form>
            </div>
        }
      
      
      <div style={{textAlign: 'center'}}>
        <Link to='/3'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw' }}>BACK</Button>
        </Link>
        <Link to='/5'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>
    </div>
    </div>
  )
}
export default Four