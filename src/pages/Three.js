import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import FileInputComponent from 'react-file-input-previews-base64'
import { useState } from 'react';

// still need to work out monthly premium 


const Three = ({
  unitName,
  setUnitName,
  unitSwitchBoardNumber,
  setUnitSwitchBoardNumber,
  maritalStatus,
  setMaritalStatus,
  spouseTitle,
  setSpouseTitle,
  spouseFullNames,
  setSpouseFullNames,
  spouseSurname,
  setSpouseSurname,
  spouseID,
  setSpouseID,
  setSpouseIdFile
  })=>{
    const [showNext,setShowNext] = useState(false)
    const [error, setError] = useState('')
    const requiredSubmitted = () =>{
            if(unitName != ''){
              if(unitSwitchBoardNumber != ''){
                if(maritalStatus != ''){
                  setShowNext(true)
                  setError('Please Check that all info is correct then click next')
                }else{
                  setError('You have not submitted your Marital Status')
                }
              }else{
                setError('You have not submitted your Unit Switchboard Number')
              }
            }else{
              setError('You have not submitted your Unit Name')
            }
          }
  return(
    <div className="page">
      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>3. Unit Contact Details</h6>
      <Form style={{marginBottom: '10vh'}}>
        <Form.Group className='mb-2' controlId='unitName'>
          <Form.Label className='Label' >*Unit Name</Form.Label>
          <Form.Control className='Control' type='text' placeholder={unitName} onChange={(e)=>setUnitName(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='unitSwitchBoardNumber'>
          <Form.Label className='Label' style={{maxWidth: '70px'}} >*Unit Switchboard Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={unitSwitchBoardNumber} onChange={(e)=>setUnitSwitchBoardNumber(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      </Form>
      
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Marital Status</h6>
      <Form>
      <Form.Group className='mb-2' controlId='maritalStatus'>
        <Form.Label className='Label' >*Marital Status</Form.Label>
        <Form.Select onChange={(e)=>setMaritalStatus(e.target.value)} >
          <option>Single</option>
          <option>Married</option>
        </Form.Select>
      </Form.Group>
      
      {maritalStatus == 'Married' &&<><Form.Group className='mb-2' controlId='spouseTitle'>
        <Form.Label className='Label' >*Spouse Title</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseTitle} onChange={(e)=>setSpouseTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='spouseFullNames'>
        <Form.Label className='Label' >*Spouse Full Names</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseFullNames} onChange={(e)=>setSpouseFullNames(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='spouseSurname'>
        <Form.Label className='Label' >*Spouse Surname</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseSurname} onChange={(e)=>setSpouseSurname(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='spouseID'>
        <Form.Label className='Label' >*Spouse ID Number</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseID} onChange={(e)=>setSpouseID(e.target.value)} />
      </Form.Group>

          <FileInputComponent
              labelText="Upload ID"
              labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
              multiple={true}
              callbackFunction={(file_arr)=>{setSpouseIdFile(file_arr[0].base64)}}
              accept="image/*" 
              imagePreview={true}
              buttonComponent={<Button variant='info w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
              imageContainerStyle={{textAlign: 'center'}}
             />
      </>}
      </Form>
      <h6 style={{color: 'red', fontWeight: 'bold',float: 'left'}}>{error}</h6>
      <div style={{textAlign: 'center'}}>
        <Link to='/2'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        {showNext && <Link to='/4'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Submit</Button>}
      </div>
    </div>
  )
}
export default Three