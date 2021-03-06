import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import FileInputComponent from 'react-file-input-previews-base64'
import { useEffect, useState } from 'react';



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
  setIDNumber,
  setMainId,
  mainAge,
  setMainAge
  })=>{
    const armsOfServiceType = [
      'SA Army', 
      'SA Air Force',
      'SA Military Health Services',
      'SA Navy',
      'Reserve Force',
      'Civilian Force'
    ]
    const [showNext,setShowNext] = useState(false)
    const [error, setError] = useState('')

    const validateID = (id) => {
      if (id) {
        return typeof(id) != "boolean" && !isNaN(id)
      }
    }

    const requiredSubmitted = () =>{
      if(!validateID(IDNumber)){
        setError('You have not given a valid Id number')
        setShowNext(false)
      }else{
        if(armsOfService != ''){
          if(rankTitle != ''){
            if(fullNames != ''){
              if(surname != ''){
                if(IDNumber != ''){
                  setShowNext(true)
                  setError('Please check that all info is correct then click next')
                }else{
                  setError('You have not submitted your ID number')
                }
              }else{
                setError('You have not submitted your Surname')
              }
            }else{
              setError('You have not submitted your Full Names')
            }
          }else{
            setError('You have not submitted your Rank Title')
          }
        }else{
          setError('You have not submitted your Arms of Service')
        }
      }
    }

    
    
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
          <Form.Select onChange={(e)=>setArmsOfService(e.target.value)}>
            <option>Choose Arms of Service</option>
            <option>{armsOfServiceType[0]}</option>
            <option>{armsOfServiceType[1]}</option>
            <option>{armsOfServiceType[2]}</option>
            <option>{armsOfServiceType[3]}</option>
            <option>{armsOfServiceType[4]}</option>
            <option>{armsOfServiceType[5]}</option>
          </Form.Select>
      </Form.Group>
      <Form.Group className='mb-2' controlId='formForceNumber'>
        <Form.Label className='Label' >*Rank Title</Form.Label>
        <Form.Select onChange={(e)=>setRankTitle(e.target.value)}>
          {armsOfService == 'SA Army' && <>
            <option>Choose Rank Title</option>
            <option>2Lt</option>
            <option>Brig Gen</option>
            <option>Capt</option>
            <option>CO</option>
            <option>Col</option>
            <option>Cpl</option>
            <option>CWO</option>
            <option>DR</option>
            <option>GEN</option>
            <option>L-Cpl</option>
            <option>Lt</option>
            <option>Lt Col</option>
            <option>Lt Gen</option>
            <option>Maj</option>
            <option>Maj Gen</option>
            <option>MCWO</option>
            <option>MWO</option>
            <option>Mr</option>
            <option>Ms</option>
            <option>Pte</option>
            <option>S-Sgt</option>
            <option>SCWO</option>
            <option>Sgt</option>
            <option>SWO</option>
            <option>W01</option>
            <option>W02</option>
          </>
          }
          {armsOfService == 'SA Navy' && <>
            <option>Choose Rank Title</option>
            <option>2Lt</option>
            <option>AB</option>
            <option>ADM</option>
            <option>CAPT (SAN)</option>
            <option>CDR</option>
            <option>CPO</option>
            <option>CWO</option>
            <option>DR</option>
            <option>ESN</option>
            <option>LS</option>
            <option>Lt</option>
            <option>Lt CDR</option>
            <option>MCWO</option>
            <option>MID</option>
            <option>Mr</option>
            <option>Ms</option>
            <option>MWO</option>
            <option>PO</option>
            <option>R ADM</option>
            <option>R ADM (Jnr Grade)</option>
            <option>SCWO</option>
            <option>SEA</option>
            <option>SLT</option>
            <option>SWO</option>
            <option>V ADM</option>
            <option>W01</option>
            <option>W02</option>
          </>
          }{
            armsOfService == 'Civilian Force' ? <>
            <option>Choose Rank Title</option>
              <option>Mr</option>
              <option>Dr</option>
              <option>Ms</option>
              <option>Prof</option>
              <option>Rev</option>
            </>
          : <>
          <option>Choose Rank Title</option>
            <option>2Lt</option>
            <option>Brig Gen</option>
            <option>Capt</option>
            <option>CO</option>
            <option>Col</option>
            <option>Cpl</option>
            <option>CWO</option>
            <option>DR</option>
            <option>GEN</option>
            <option>L-Cpl</option>
            <option>Lt</option>
            <option>Lt Col</option>
            <option>Lt Gen</option>
            <option>Maj</option>
            <option>Maj Gen</option>
            <option>MCWO</option>
            <option>MWO</option>
            <option>Mr</option>
            <option>Ms</option>
            <option>Pte</option>
            <option>S-Sgt</option>
            <option>SCWO</option>
            <option>Sgt</option>
            <option>SWO</option>
            <option>W01</option>
            <option>W02</option>
          </>}
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-2' controlId='formForceNumber'>
        <Form.Label className='Label' >*Full Names</Form.Label>
        <Form.Control className='Control' type='text' placeholder={fullNames} onChange={(e)=>setFullNames(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='surname'>
        <Form.Label className='Label' >*Surname</Form.Label>
        <Form.Control className='Control' type='text' placeholder={surname} onChange={(e)=>setSurname(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='mainAge'>
        <Form.Label className='Label' >*Age (yymmdd)</Form.Label>
        <Form.Control className='Control' type='text' placeholder={mainAge} onChange={(e)=>setMainAge(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-2' controlId='IDNumber'>
        <Form.Label className='Label' >*ID Number</Form.Label>
        <Form.Control className='Control' type='text' placeholder={IDNumber} onChange={(e)=>setIDNumber(e.target.value)} />
      </Form.Group>
            

        <FileInputComponent
            labelText="Upload ID"
            labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
            multiple={true}
            callbackFunction={(file_arr)=>{setMainId(file_arr[0].base64)}}
            accept="image/*" 
            imagePreview={true}
            buttonComponent={<Button variant='secondary w-50'><span style={{ color: 'white', fontWeight: 600}}> Click to Select</span></Button>}
            imageContainerStyle={{textAlign: 'center'}}
             />
      </Form>
      <div style={{textAlign: 'center', padding: '5vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
      
      <div style={{textAlign: 'center'}}>
        <Link to='/instructions'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginLeft: '20vw', marginBottom: '10vh' }}>BACK</Button>
        </Link>
        
        {showNext &&<Link to='/2'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '10vh' }}>NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Submit</Button>}
      </div>
    </div>
  )
}
export default One