import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Form, Row, Col}  from 'react-bootstrap'
import FileInputComponent from 'react-file-input-previews-base64'


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
  setChildrenIds
}) =>{
  return(
    <div className="page">
    <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>4. Dependant Children U21</h6>
      <Form className='Form'>
        <Form.Group as={Row} className='mb-3' controlId='childrenAmount'>
          <Form.Label className='Label' column sm='2'>*Amount of Children</Form.Label>
          <Col sm='10'>
            <Form.Select className='Control' onChange={(e)=>setChildrenAmount(e.target.value)}>
              <option>Choose amount of Children</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Select>
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
                <Form.Label className='Label' sm='2' >*Child Title </Form.Label>
                <Col sm='10'>
                  <Form.Control className='Control' type='text' placeholder={childTitle} onChange={(e)=>setChildTitle(e.target.value)} />
                </Col>
                
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames'>
                <Form.Label className='Label'>*Child Full Names</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames} onChange={(e)=>setChildFullNames(e.target.value)} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname'>
                <Form.Label className='Label'>*Child Surname</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname} onChange={(e)=>setChildSurname(e.target.value)} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID'>
                <Form.Label className='Label'>*Child ID Number or Date of Birth</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID} onChange={(e)=>setChildID(e.target.value)} />
              </Form.Group>
              <FileInputComponent
                labelText="Upload All IDs"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setChildrenIds(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
             />
            </Form>
          </div>
        }
        {childrenAmount == 2 && 
          <div style={{marginTop: '10vh'}}>
            <Form className='Form'>
              <Form.Group className='mb-3' controlId='childTitle'>
                <Form.Label className='Label'>*Title First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle} onChange={(e)=>setChildTitle(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames'>
                <Form.Label className='Label'>*Full Names First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames} onChange={(e)=>setChildFullNames(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname'>
                <Form.Label className='Label'>*Surname First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname} onChange={(e)=>setChildSurname(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID'>
                <Form.Label className='Label'>*ID Number or Date of Birth First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID} onChange={(e)=>setChildID(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle2'>
                <Form.Label className='Label'>*Title Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle2} onChange={(e)=>setChildTitle2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames2'>
                <Form.Label className='Label'>*Full Names Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames2} onChange={(e)=>setChildFullNames2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname2'>
                <Form.Label className='Label'>*Surname Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname2} onChange={(e)=>setChildSurname2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID2'>
                <Form.Label className='Label'>*ID Number or Date of Birth Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID2} onChange={(e)=>setChildID2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <FileInputComponent
                labelText="Upload All IDs"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setChildrenIds(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='info w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
             />
            </Form>
            </div>
        }
        {childrenAmount == 3 && 
          <div style={{marginTop: '10vh'}}>
            <Form className='Form'>
              <Form.Group className='mb-3' controlId='childTitle'>
                <Form.Label className='Label'>*Title First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle} onChange={(e)=>setChildTitle(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames'>
                <Form.Label className='Label'>*Full Names First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames} onChange={(e)=>setChildFullNames(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname'>
                <Form.Label className='Label'>*Surname First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname} onChange={(e)=>setChildSurname(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID'>
                <Form.Label className='Label'>*ID Number or Date of Birth First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID} onChange={(e)=>setChildID(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle2'>
                <Form.Label className='Label'>*Title Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle2} onChange={(e)=>setChildTitle2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames2'>
                <Form.Label className='Label'>*Full Names Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames2} onChange={(e)=>setChildFullNames2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname2'>
                <Form.Label className='Label'>*Surname Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname2} onChange={(e)=>setChildSurname2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID2'>
                <Form.Label className='Label'>*ID Number or Date of Birth Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID2} onChange={(e)=>setChildID2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle3'>
              <Form.Label className='Label'>*Title Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle3} onChange={(e)=>setChildTitle3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames3'>
              <Form.Label className='Label'>*Full Names Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames3} onChange={(e)=>setChildFullNames3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname3'>
              <Form.Label className='Label'>*Surname Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname3} onChange={(e)=>setChildSurname3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID3'>
              <Form.Label className='Label'>*ID Number or Date of Birth Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID3} onChange={(e)=>setChildID3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <FileInputComponent
                labelText="Upload All IDs"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setChildrenIds(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='info w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
             />
            </Form>
            </div>
        }
        {childrenAmount == 4 && 
          <div style={{marginTop: '10vh'}}>
            <Form className='Form'>
              <Form.Group className='mb-3' controlId='childTitle'>
                <Form.Label className='Label'>*Title First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle} onChange={(e)=>setChildTitle(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames'>
                <Form.Label className='Label'>*Full Names First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames} onChange={(e)=>setChildFullNames(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname'>
                <Form.Label className='Label'>*Surname First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname} onChange={(e)=>setChildSurname(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID'>
                <Form.Label className='Label'>*ID Number or Date of Birth First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID} onChange={(e)=>setChildID(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle2'>
                <Form.Label className='Label'>*Title Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle2} onChange={(e)=>setChildTitle2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames2'>
                <Form.Label className='Label'>*Full Names Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames2} onChange={(e)=>setChildFullNames2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname2'>
                <Form.Label className='Label'>*Surname Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname2} onChange={(e)=>setChildSurname2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID2'>
                <Form.Label className='Label'>*ID Number or Date of Birth Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID2} onChange={(e)=>setChildID2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle3'>
              <Form.Label className='Label'>*Title Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle3} onChange={(e)=>setChildTitle3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames3'>
              <Form.Label className='Label'>*Full Names Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames3} onChange={(e)=>setChildFullNames3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname3'>
              <Form.Label className='Label'>*Surname Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname3} onChange={(e)=>setChildSurname3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID3'>
              <Form.Label className='Label'>*ID Number or Date of Birth Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID3} onChange={(e)=>setChildID3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childTitle4'>
              <Form.Label className='Label'>*Title Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle4} onChange={(e)=>setChildTitle4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames4'>
              <Form.Label className='Label'>*Full Names Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames4} onChange={(e)=>setChildFullNames4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname4'>
              <Form.Label className='Label'>*Surname Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname4} onChange={(e)=>setChildSurname4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID4'>
              <Form.Label className='Label'>*ID Number or Date of Birth Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID4} onChange={(e)=>setChildID4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <FileInputComponent
                labelText="Upload All IDs"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setChildrenIds(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='info w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
             />
            </Form>
            </div>
        }
        {childrenAmount == 5 && 
          <div style={{marginTop: '10vh'}}>
            <Form className='Form'>
              <Form.Group className='mb-3' controlId='childTitle'>
                <Form.Label className='Label'>*Title First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle} onChange={(e)=>setChildTitle(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames'>
                <Form.Label className='Label'>*Full Names First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames} onChange={(e)=>setChildFullNames(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname'>
                <Form.Label className='Label'>*Surname First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname} onChange={(e)=>setChildSurname(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID'>
                <Form.Label className='Label'>*ID Number or Date of Birth First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID} onChange={(e)=>setChildID(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle2'>
                <Form.Label className='Label'>*Title Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle2} onChange={(e)=>setChildTitle2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames2'>
                <Form.Label className='Label'>*Full Names Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames2} onChange={(e)=>setChildFullNames2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname2'>
                <Form.Label className='Label'>*Surname Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname2} onChange={(e)=>setChildSurname2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID2'>
                <Form.Label className='Label'>*ID Number or Date of Birth Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID2} onChange={(e)=>setChildID2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle3'>
              <Form.Label className='Label'>*Title Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle3} onChange={(e)=>setChildTitle3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames3'>
              <Form.Label className='Label'>*Full Names Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames3} onChange={(e)=>setChildFullNames3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname3'>
              <Form.Label className='Label'>*Surname Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname3} onChange={(e)=>setChildSurname3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID3'>
              <Form.Label className='Label'>*ID Number or Date of Birth Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID3} onChange={(e)=>setChildID3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childTitle4'>
              <Form.Label className='Label'>*Title Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle4} onChange={(e)=>setChildTitle4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames4'>
              <Form.Label className='Label'>*Full Names Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames4} onChange={(e)=>setChildFullNames4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname4'>
              <Form.Label className='Label'>*Surname Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname4} onChange={(e)=>setChildSurname4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID4'>
              <Form.Label className='Label'>*ID Number or Date of Birth Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID4} onChange={(e)=>setChildID4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childTitle5'>
              <Form.Label className='Label'>*Title Fifth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle5} onChange={(e)=>setChildTitle5(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames5'>
              <Form.Label className='Label'>*Full Names Fifth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames5} onChange={(e)=>setChildFullNames5(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname5'>
              <Form.Label className='Label'>*Surname Fifth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname5} onChange={(e)=>setChildSurname5(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID5'>
              <Form.Label className='Label'>*ID Number or Date of Birth Fifth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID5} onChange={(e)=>setChildID5(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <FileInputComponent
                labelText="Upload All IDs"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setChildrenIds(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='info w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
             />
            </Form>
            </div>
        }
        {childrenAmount == 6 && 
          <div style={{marginTop: '10vh'}}>
            <Form className='Form'>
              <Form.Group className='mb-3' controlId='childTitle'>
                <Form.Label className='Label'>*Title First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle} onChange={(e)=>setChildTitle(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames'>
                <Form.Label className='Label'>*Full Names First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames} onChange={(e)=>setChildFullNames(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname'>
                <Form.Label className='Label'>*Surname First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname} onChange={(e)=>setChildSurname(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID'>
                <Form.Label className='Label'>*ID Number or Date of Birth First Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID} onChange={(e)=>setChildID(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle2'>
                <Form.Label className='Label'>*Title Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childTitle2} onChange={(e)=>setChildTitle2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childFullNames2'>
                <Form.Label className='Label'>*Full Names Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childFullNames2} onChange={(e)=>setChildFullNames2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childSurname2'>
                <Form.Label className='Label'>*Surname Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childSurname2} onChange={(e)=>setChildSurname2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childID2'>
                <Form.Label className='Label'>*ID Number or Date of Birth Second Child</Form.Label>
                <Form.Control className='Control' type='text' placeholder={childID2} onChange={(e)=>setChildID2(e.target.value)} style={{marginTop:'10px'}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='childTitle3'>
              <Form.Label className='Label'>*Title Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle3} onChange={(e)=>setChildTitle3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames3'>
              <Form.Label className='Label'>*Full Names Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames3} onChange={(e)=>setChildFullNames3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname3'>
              <Form.Label className='Label'>*Surname Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname3} onChange={(e)=>setChildSurname3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID3'>
              <Form.Label className='Label'>*ID Number or Date of Birth Third Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID3} onChange={(e)=>setChildID3(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childTitle4'>
              <Form.Label className='Label'>*Title Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle4} onChange={(e)=>setChildTitle4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames4'>
              <Form.Label className='Label'>*Full Names Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames4} onChange={(e)=>setChildFullNames4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname4'>
              <Form.Label className='Label'>*Surname Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname4} onChange={(e)=>setChildSurname4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID4'>
              <Form.Label className='Label'>*ID Number or Date of Birth Fourth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID4} onChange={(e)=>setChildID4(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childTitle5'>
              <Form.Label className='Label'>*Title Fifth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle5} onChange={(e)=>setChildTitle5(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames5'>
              <Form.Label className='Label'>*Full Names Fifth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames5} onChange={(e)=>setChildFullNames5(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname5'>
              <Form.Label className='Label'>*Surname Fifth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname5} onChange={(e)=>setChildSurname5(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID5'>
              <Form.Label className='Label'>*ID Number or Date of Birth Fifth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID5} onChange={(e)=>setChildID5(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childTitle6'>
              <Form.Label className='Label'>*Title Sixth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childTitle6} onChange={(e)=>setChildTitle6(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childFullNames6'>
              <Form.Label className='Label'>*Full Names Sixth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childFullNames6} onChange={(e)=>setChildFullNames6(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childSurname6'>
              <Form.Label className='Label'>*Surname Sixth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childSurname6} onChange={(e)=>setChildSurname6(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='childID6'>
              <Form.Label className='Label'>*ID Number or Date of Birth Sixth Child</Form.Label>
              <Form.Control className='Control' type='text' placeholder={childID6} onChange={(e)=>setChildID6(e.target.value)} style={{marginTop:'10px'}} />
            </Form.Group>
            <FileInputComponent
                labelText="Upload All IDs"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setChildrenIds(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
             />
            </Form>
            </div>
        }
        
      
      
      <div style={{textAlign: 'center'}}>
        <Link to='/3'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '3vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        <Link to='/5'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '3vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>
    </div>
    </div>
  )
}
export default Four