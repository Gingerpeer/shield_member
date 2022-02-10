import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Continue = () =>{
  return(
    <div>
      <h6 style={{fontWeight: '600', marginBottom: '0', textAlign: 'center', color: '#1B1B1B'}}>Continue?</h6>
      <Link to='/no'><Button variant='secondary w-25 m-3' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none' }}>NO</Button></Link>
      <Link to='/instructions'><Button variant='danger w-25 m-3' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none' }} >YES</Button></Link>
    </div>
  )
}
export default Continue