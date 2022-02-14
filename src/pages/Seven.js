import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import SignaturePad from 'react-signature-pad-wrapper';
import Signature_Pad from 'signature_pad';
import { Link } from 'react-router-dom';

const Seven = ({signature, setSignature}) =>{
  const myRef = useRef(null)
  const saveCanvasToState = async ()=>{
    await setSignature(myRef.current.toDataURL()) 
  }
  const clearSignature = async () => {
    console.log('Trying to clear signature')
    await myRef.current.clear()
  }
  useEffect( () => {
    // signature = myRef.current.toDataURL()
    // console.log(signature)
  }, [myRef, saveCanvasToState,  setSignature, signature, clearSignature])
  
  
 
  return(
    <div className="page">
      <SignaturePad ref={myRef} />
      <Button variant='danger' onClick={clearSignature} >Clear</Button>
      <div style={{textAlign: 'center'}}>
        <Link to='/6'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        
          <Button variant='danger w-25' onClick={saveCanvasToState} style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw' }} >Submit</Button>
        
    </div>
    </div>
  )
}
export default Seven