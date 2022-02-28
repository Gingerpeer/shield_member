import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import FileInputComponent from 'react-file-input-previews-base64'
import { useState } from 'react';

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
          pbIdData,
          setPbIdData,
          nlTitle,
          setNlTitle,
          nlFullNames,
          setNlFullNames,
          nlSurname,
          setNlSurname,
          nlIDNumber,
          setNlIDNumber,
          nlCellNumber,
          setNlCellNumber,
          nlIdData,
          setNlIdData,
          pbLandline,
          setPbLandline,
          pbRelationship,
          setPbRelationship,
          nlLandline,
          setNlLandline,
          nlRelationship,
          setNlRelationship
}) =>{
  const [showNext,setShowNext] = useState(false)
    const [error, setError] = useState('')


    const validateID = (id) => {
      if (id) {
        var ex = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
      } else {
        // some other validation here
        var ex = /^[0-9]{1,}$/;
      }
    
      let theIDnumber = id
      if (ex.test(theIDnumber) == false) {
        // alert code goes here
        setError("Please supply a valid ID number");
        return false;
      }
      // here you would normally obviously
      // return true;
      // but for the sake of this Codepen:
      return true;
    }


    const checkCellNumber = (number) =>{
      if(number.charAt(0) === '0'){
        if(number.length > 10){
          setError('Please give a valid cell number')
          return false
        }else if(number.length < 10){ 
          setError('Please give a valid cell number')
          return false
      }else{
        console.log('Your number is exactly ten')
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
const checkEmail = (email)=>{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return (true)
  }
    setError("You have entered an invalid email address!")
    return (false)
}



    const requiredSubmitted = () =>{
  if(pbFullNames != ''){
    if(pbSurname != ''){
      if(pbID != ''){
        if(checkCellNumber(pbCellNumber)){
          
            setShowNext(true)
            setError('Please check that all info is correct then click next')
        }else{
          setError('Please give a valid cell number')
        }
       }else{
        setError('You have not submitted your Beneficiary ID Number')
      }
    }else{
      setError('You have not submitted your Beneficiary Surname')
    }
  }else{
    setError('You have not submitted your Primary Beneficiary Names')
  }
    }
  return(
    <div className="page">
    <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>5. Primary Beneficiary Details</h6>
    <Form style={{marginBottom: '5vh'}}>
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
      
      <Form.Group className='mb-2' controlId='pbLandline'>
          <Form.Label className='Label' >*Primary Beneficiary Landline</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbID} onChange={(e)=>setPbLandline(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='pbRelationship'>
          <Form.Label className='Label' >*Primary Beneficiary Relationship</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbID} onChange={(e)=>setPbRelationship(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>

      <Form.Group className='mb-2' controlId='pbID'>
          <Form.Label className='Label' >*Primary Beneficiary ID or Date of Birth</Form.Label>
          <Form.Control className='Control' type='text' placeholder={pbID} onChange={(e)=>setPbID(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      <FileInputComponent
                labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setPbIdData(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
             />

      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>6. Next in Line Beneficiary Details</h6>

        <Form.Group className='mb-2' controlId='nlTitle'>
          <Form.Label className='Label' >Next in Line Beneficiary Title</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlTitle} onChange={(e)=>setNlTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='nlFullNames'>
          <Form.Label className='Label' >Next in Line Beneficiary Full Names</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlFullNames} onChange={(e)=>setNlFullNames(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='nlSurname'>
          <Form.Label className='Label' >Next in Line Beneficiary Surname</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlSurname} onChange={(e)=>setNlSurname(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='nlIDNumber'>
          <Form.Label className='Label' >Next in Line Beneficiary ID or Date of Birth</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlIDNumber} onChange={(e)=>setNlIDNumber(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      
          <Form.Group className='mb-2' controlId='nlLandline'>
            <Form.Label className='Label' >Next in Line Beneficiary Landline</Form.Label>
            <Form.Control className='Control' type='text' placeholder={nlCellNumber} onChange={(e)=>setNlLandline(e.target.value)} style={{ marginTop: '20px' }} />
          </Form.Group>
          <Form.Group className='mb-2' controlId='nlRelationship'>
              <Form.Label className='Label' >Next in Line Beneficiary Relationship</Form.Label>
              <Form.Control className='Control' type='text' placeholder={nlCellNumber} onChange={(e)=>setNlRelationship(e.target.value)} style={{ marginTop: '20px' }} />
          </Form.Group>
      <Form.Group className='mb-2' controlId='nlCellNumber'>
          <Form.Label className='Label' >Next in Line Beneficiary Cell Number</Form.Label>
          <Form.Control className='Control' type='text' placeholder={nlCellNumber} onChange={(e)=>setNlCellNumber(e.target.value)} style={{ marginTop: '20px' }} />
      </Form.Group>
      <FileInputComponent
                labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setNlIdData(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
             />
      </Form>

      <div style={{textAlign: 'center', padding: '2vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
      <div style={{textAlign: 'center'}}>
        <Link to='/4'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw', marginBottom: '10vh'  }}>BACK</Button>
        </Link>
        {showNext && <Link to='/6'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '10vh'  }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Submit</Button>}
    </div>
    </div>
  )
}
export default Five