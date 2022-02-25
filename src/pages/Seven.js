import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import SignaturePad from 'react-signature-pad-wrapper';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Seven = ({signature, setSignature, monthlyPremium}) =>{
  
  const history = useNavigate()
  // Forms to be signed here
  const myRef = useRef(null)
  const saveCanvasToState = async ()=>{
    await setSignature(myRef.current.toDataURL()) 
    history('/document')
  }
  const clearSignature = async () => {
    await myRef.current.clear()
  }
  useEffect( () => {
    // signature = myRef.current.toDataURL()
    
  }, [myRef, saveCanvasToState,  setSignature, signature, clearSignature])
  
  
  return(
    <div className="page">
    <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Your Monthly Premium is R{monthlyPremium}</h6>
    <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Do you agree? Sign below in agreement</h6>
    <p style={{margin: '0', textAlign: 'center'}}>*Please sign Here</p>
      <div style={{border: 'black solid 2px'}}><SignaturePad ref={myRef}  /></div>
      <Button variant='danger' onClick={clearSignature} style={{marginTop: '2vh'}} >Clear</Button>
      <div style={{textAlign: 'center'}}>
        <Link to='/checkInfo'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '3vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        
          <Button variant='danger w-25' onClick={saveCanvasToState} style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '3vw', marginRight: '20vw' }} >Submit</Button>
          </div>
          
        
    </div>
  )
}
export default Seven