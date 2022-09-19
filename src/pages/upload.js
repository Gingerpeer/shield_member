import { useState } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import FileInputComponent from 'react-file-input-previews-base64'
import axios from 'axios'

const Upload = () =>{
  const [idNumber,setIdNumber] = useState('')
  const [documents,setDocuments] = useState('')
  const [documents2,setDocuments2] = useState('')
  const [documents3,setDocuments3] = useState('')
  const [documents4,setDocuments4] = useState('')
  const [documents5,setDocuments5] = useState('')
  const [documents6,setDocuments6] = useState('')
  const [documents7,setDocuments7] = useState('')
  const [documents8,setDocuments8] = useState('')
  const [amountDocs,setAmountDocs] = useState('')

  const [error,setError] = useState('')
  const [showThank,setShowThank] = useState(false)

  const validateID = (id) => {
    if (id) {
      return typeof(id) != "boolean" && !isNaN(id)
    }
  }
  const postToApi = async () =>{
    var config = {
              method: 'post',
              url: 'https://apiv2.msgl.ink/',
              headers: {
                'content-type': 'application/json'
              },
              data: {
                idNumber,
                documents,
                documents2,
                documents3,
                documents4,
                documents5,
                documents6,
                documents7,
                documents8
            }
            };

  await axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
            
  }
  const submit = ()=>{
    if(!validateID(idNumber)){
      setError('You have not given a valid Id number')
    }else{
      setError('')
      if(amountDocs === ''){
        setError('You have not selected an amount of documents that you will be uploading')
      }else if(amountDocs !== ''){
        setError('')
        if(documents === ''){
          setError('You have not uploaded any documents')
        }else if(documents !== ''){
          setError('')

          postToApi()

          setShowThank(true)
        }
      }
      
    }
  }
  return(
    <div className="page">
      {!showThank &&<div><h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Upload Additional Documents</h6>
      <Form>
        <Form.Group>
          <Form.Label>Please enter I.D. Number to upload additional supporting documents</Form.Label>
          <Form.Control placeholder='Id Number' onChange={(e)=>setIdNumber(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Amount of documents to be uploaded</Form.Label>
          <Form.Select onChange={(e)=>setAmountDocs(e.target.value)}>
            <option>Choose between 1 - 8</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Form.Select>
        </Form.Group>
        {amountDocs === '' &&<FileInputComponent
            // labelText="Upload ID"
            labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
            multiple={true}
            callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
            accept="image/*" 
            imagePreview={true}
            buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
            imageContainerStyle={{textAlign: 'center'}}
             />}
        {amountDocs === '1' &&<FileInputComponent
            // labelText="Upload ID"
            labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
            multiple={true}
            callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
            accept="image/*" 
            imagePreview={true}
            buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
            imageContainerStyle={{textAlign: 'center'}}
             />}
             {amountDocs === '2' &&<div>
                <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments2(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
             </div>}
             {amountDocs === '3' &&<div>
                <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments2(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments3(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
             </div>}
             {amountDocs === '4' &&<div>
                <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments2(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments3(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments4(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
             </div>}
             {amountDocs === '5' &&<div>
                <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments2(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments3(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments4(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments5(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
             </div>}
             {amountDocs === '6' &&<div>
                <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments2(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments3(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments4(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments5(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
                    <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments6(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
             </div>}
             {amountDocs === '7' &&<div>
                <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments2(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments3(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments4(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments5(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
                    <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments6(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
                    <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments7(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
             </div>}
             {amountDocs === '8' &&<div>
                <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments2(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments3(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                // labelText="Upload ID"
                labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                multiple={true}
                callbackFunction={(file_arr)=>{setDocuments4(file_arr[0].base64)}}
                accept="image/*" 
                imagePreview={true}
                buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                imageContainerStyle={{textAlign: 'center'}}
                  />
                  <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments5(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
                    <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments6(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
                    <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments7(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
                    <FileInputComponent
                  // labelText="Upload ID"
                  labelStyle={{fontSize:14, marginRight: '14px', fontWeight: '600'}}
                  multiple={true}
                  callbackFunction={(file_arr)=>{setDocuments8(file_arr[0].base64)}}
                  accept="image/*" 
                  imagePreview={true}
                  buttonComponent={<Button variant='secondary w-100'><span style={{ color: 'white', fontWeight: 600}}>Click to Upload Additional I.D Documents</span></Button>}
                  imageContainerStyle={{textAlign: 'center'}}
                    />
             </div>}
      </Form>
      <div style={{textAlign: 'center', padding: '5vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
      <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', marginBottom: '10vh', marginTop: '2vh' }} onClick={()=> submit()} >SUBMIT</Button>
      </div>}
      {showThank &&<h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Thank you for your submission</h6>}
    </div>
  )
}

export default Upload