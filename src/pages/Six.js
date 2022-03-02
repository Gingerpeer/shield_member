import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Six = ({paymentMethod, setPaymentMethod,monthlyPremium,armsOfService,bankingDetailsDO,
  setBankingDetailsDO}) =>{
  const [showNext,setShowNext] = useState(false)
    const [error, setError] = useState('')
    const [debitOrder,setDebitOrder] = useState(false)
    const [bankName,setBankName] = useState('')
    const [accountType,setAccountType] = useState('')
    const [accountNumber,setAccountNumber] = useState('')

    const banksArray = [
      'ABSA',
      'Captitec',
      'Bidvest',
      'FNB',
      'SBSA (Standard)',
      'Nedbank',
      'African Bank Ltd',
      'Tyme Bank',
      'Ubank'
    ]
    const requiredSubmitted = () =>{
      var branch = ''
      if(paymentMethod == 'Payroll'){
        setShowNext(true)
        setError('Please check that all info is correct then click next')
      }else if(paymentMethod == 'DebitOrder'){
        setDebitOrder(true)
      }
      if(bankName != ''){
         if(bankName == 'ABSA'){
            branch = '632005'
          }
          if(bankName == 'Capitec'){
            branch = '470010'
          }
          if(bankName == 'Bidvest'){
            branch = '462005'
          }
          if(bankName == 'FNB'){
            branch = '250655'
          }
          if(bankName == 'SBSA (Standard)'){
            branch = '051001'
          }
          if(bankName == 'Nedbank'){
            branch = '198765'
          }
          if(bankName == 'African Bank Ltd'){
            branch = '430000'
          }
          if(bankName == 'Tyme Bank'){
            branch = '678910'
          }
          if(bankName == 'Ubank'){
            branch = '431010'
          }
        if(accountType != ''){
          if(accountNumber != ''){
              
              setError('Please check that all info is correct then click next')
              setShowNext(true)
              setBankingDetailsDO([
                {"Bank":bankName},
                {"Account Type":accountType},
                {"Account Number":accountNumber},
                {"Branch Code":branch} 
              ])
          }
        }
      }
        }
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
              {armsOfService !== 'Reserve Force' &&<option value='Payroll'>Payroll</option>}
              <option value='DebitOrder'>Debit Order</option>
            </Form.Select>
          </Form.Group>
        </Form>
        {debitOrder && <Form>
          <h6 style={{color: '#444', fontWeight: 'bold',textAlign: 'center'}}>Banking Details</h6>
          <Form.Group className='mb-2' controlId='bankName'>
              <Form.Label className='Label'>Bank Name</Form.Label>
              <Form.Select onChange={(e)=>setBankName(e.target.value)}>
                <option>Choose Bank</option>
                <option>{banksArray[0]}</option>
                <option>{banksArray[1]}</option>
                <option>{banksArray[2]}</option>
                <option>{banksArray[3]}</option>
                <option>{banksArray[4]}</option>
                <option>{banksArray[5]}</option>
                <option>{banksArray[6]}</option>
                <option>{banksArray[7]}</option>
                <option>{banksArray[8]}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-2' controlId='accountType'>
              <Form.Label className='Label'>Account Type</Form.Label>
              <Form.Control className='Control' type='text' onChange={(e)=>setAccountType(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-2' controlId='accountNumber'>
              <Form.Label className='Label'>Account Number</Form.Label>
              <Form.Control className='Control' type='text' onChange={(e)=>setAccountNumber(e.target.value)} />
            </Form.Group>
          </Form>}
        <div style={{textAlign: 'center', padding: '5vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
        <Link to='/5'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        {showNext && <Link to='/checkInfo'>
          <Button variant='danger w-25' onClick={()=>console.log(bankingDetailsDO)} style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Submit</Button>}
      </div>
    </div>
  )
}
export default Six