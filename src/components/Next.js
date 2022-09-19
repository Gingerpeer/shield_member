import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Next = () =>{
  return(
    <div>
      <Link to='/'><Button variant='secondary w-25 m-3' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none' }}>BACK</Button></Link>
      <Link to='/1'><Button variant='danger w-25 m-3' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none' }} >NEXT</Button></Link>
    </div>
  )
}
export default Next