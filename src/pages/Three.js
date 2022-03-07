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
  setSpouseIdFile,
  spouseAge,
  setSpouseAge,
  spouseCell,
  setSpouseCell
  })=>{
    const [showNext,setShowNext] = useState(false)
    const [error, setError] = useState('')


    const checkCellNumber = (number) =>{
      if(number.charAt(0) === '0'){
        if(number.length > 10){
          setError('Please give a valid cell number')
          return false
        }else if(number.length < 10){ 
          setError('Please give a valid cell number')
          return false
      }else{
        return true
    } 
  }
  if(number.charAt(0) === '2'){
    if(number.length > 11){
      setError('Please give a valid cell number')
      return false
    }else if(number.length < 11){ 
      setError('Please give a valid cell number')
      return false
  }else{
    console.log('Your number is exactly ten')
    return true
} 
}
}
const validateID = (id) => {
  if (id) {
    return typeof(id) != "boolean" && !isNaN(id)
  }
}

    const requiredSubmitted = () =>{
                if(maritalStatus == 'Married'){
                  if(!validateID(spouseID)){
                    setError('You have not given a valid Id number')
                    setShowNext(false)
                  }else{
                  if(checkCellNumber(spouseCell)){
                    setShowNext(true)
                    setError('Please check that all info is correct then click next')
              }else{
                  setError('Please give a valid cell number')
                }
            }}else if(maritalStatus == 'Single'){
              setShowNext(true)
              setError('Please check that all info is correct then click next')
            }else{
                  setError('You have not submitted your Marital Status')
                }

              }
              
  return(
    <div className="page">
      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>3. Unit Contact Details</h6>
      <Form style={{marginBottom: '10vh'}}>
        <Form.Group className='mb-2' controlId='unitName'>
          <Form.Label className='Label' >Unit Name</Form.Label>
          <Form.Control className='Control' type='text' placeholder={unitName} onChange={(e)=>setUnitName(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='unitSwitchBoardNumber'>
          <Form.Label className='Label' style={{minWidth: '170px'}} >Unit Switchboard Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={unitSwitchBoardNumber} onChange={(e)=>setUnitSwitchBoardNumber(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      </Form>
      
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Marital Status</h6>
      <Form>
      <Form.Group className='mb-2' controlId='maritalStatus'>
        <Form.Label className='Label' >*Marital Status</Form.Label>
        <Form.Select onChange={(e)=>setMaritalStatus(e.target.value)} >
          <option>Choose Marital Status</option>
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
        <Form.Label className='Label' >*Spouse ID Number or Date of Birth</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseID} onChange={(e)=>setSpouseID(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='spouseAge'>
        <Form.Label className='Label' >*Spouse Age</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseAge} onChange={(e)=>setSpouseAge(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='spouseCell'>
        <Form.Label className='Label' >*Spouse Number</Form.Label>
        <Form.Control className='Control' type='text' placeholder={spouseCell} onChange={(e)=>setSpouseCell(e.target.value)} />
      </Form.Group>

          <FileInputComponent
              labelText="Upload ID"
              labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
              multiple={true}
              callbackFunction={(file_arr)=>{setSpouseIdFile(file_arr[0].base64)}}
              accept="image/*" 
              imagePreview={true}
              buttonComponent={<Button variant='secondary w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
              imageContainerStyle={{textAlign: 'center'}}
             />
      </>}
      </Form>
      <div style={{textAlign: 'center', padding: '5vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
      <div style={{textAlign: 'center'}}>
        <Link to='/2'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        {showNext && <Link to='/4'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw' }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Submit</Button>}
      </div>
    </div>
  )
}
export default Three