import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';

const Six = ({setPaymentMethod,monthlyPremium,setMonthlyPremium,maritalStatus,childrenAmount,armsOfService}) =>{
  return(
    <div className="page">

      <div style={{textAlign: 'center'}}>
          <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Membership Type</h6>
            <p style={{
              textAlign: 'center',
              fontWeight: '600'
            }}>*Monthly Premium: R{monthlyPremium}</p>
        <Form>
          <Form.Group className='mb-2' controlId='paymentMethod'>
            <Form.Label className='Label'>
              Payment Method
            </Form.Label>
            <Form.Select onChange={(e)=>setPaymentMethod(e.target.value)} >
              <option>*Choose Payment Method</option>
              {armsOfService !== 'Reserve Force' &&<option value='Payroll'>Payroll</option>}
              <option value='DebitOrder'>Debit Order</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Link to='/5'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        <Link to='/7'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>
      </div>
    </div>
  )
}
export default Six