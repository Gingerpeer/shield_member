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
      'Capitec',
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
              }else{
                setError('You have not supplied a Account Number')
              }
            }else{
              setError('You have not Indicated an Account Type')
            }
          }else{
            setError('You have not submitted a Bank')
          }
        }
      }
        useEffect(()=>{
          if(paymentMethod == 'Payroll'){
            setDebitOrder(false)
          }
          if(paymentMethod == 'DebitOrder'){
            setDebitOrder(true)
          }
        },[paymentMethod,setPaymentMethod])
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
        <div className='page' id='paymentTerms' >
          {!debitOrder && <p style={{
            textAlign: 'center',
            fontWeight: '600'
          }}>
          I authorise the Accountant of the Department of Defence to deduct the monthly payments from my salary as per the above authority provided and remit it to the SA Army Foundation of which I am a member,  each and every month and continuing until cancelled by me in writing or until I substitute it with a new authorisation.  I have read and accepted the terms and conditions as set out below.
          <br/>
          <br/>
          <em style={{
            textAlign: 'center',
            fontWeight: '900'
          }}>Terms & conditions</em>
          <br/>
          <br/>
          I accept that the authority may be cancelled by me by giving 31 (thirty one) days notice in writing.
          <br/>
          I understand that should I cancel the authority after the 31-day period, I shall not be entitled to any refund of amounts which have been withdrawn while this authority was in force, if such amounts were legally owing to you.
          Should the premium rate be adjusted by the SA Army Foundation as a result of a general decrease/increase in subscription or should I request the SA Army Foundation to decrease/increase the premium for certain reason, I confirm that the adjusted premium may be deducted.
          I acknowledge that this Authority may be ceded or assigned to a third party for collection purposes.
          </p>}
        </div>
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
          {debitOrder && <p style={{
            textAlign: 'center',
            fontWeight: '600'
          }}>
          I authorise the SA Army Foundation to deduct the monthly payments from this account as per the above authority provided. I have read and accepted the debit order terms and conditions as set out below.
          <br/>
          <br/>
          <em style={{
            textAlign: 'center',
            fontWeight: '900'
          }}>Terms & conditions</em>
          <br/>
          <br/>
          I instruct and authorise the SA Army Foundation to draw against my nominated bank account (or any other bank or branch to which I may transfer my account) the
          <br/>
          amount necessary for the payment of the monthly premium due in respect of my membership, on the day nominated by me each and every month and continuing until cancelled by me in writing or until I substitute it with a new authorisation.
          I accept that the authority may be cancelled by me by giving 31 (thirty one) days notice in writing.
          I understand that should I cancel the authority after the 31-day period, I shall not be entitled to any refund of amounts which have been withdrawn while this authority was in force, if such amounts were legally owing to you.
          I understand that the withdrawals hereby authorised will be processed through a computerised system provided by the South African Banking Industry and that the details of each withdrawal will be printed on my bank statement.
          I agree that in the event that the payment date falls on a Saturday, Sunday or recognised South African public holiday, the payment day will automatically be the first preceding business day. 
          I agree that should there be insufficient funds in my account to meet the obligation, the SA Army Foundation  are entitled  to track my account and re-present the instruction for payment as soon as sufficient funds are available in my account. Such will contain the SA Army Foundation as reference which shall enable me to match the withdrawals with this Membership agreement.
          I agree to pay any bank charges relating to this debit order instruction. 
          Should the premium rate be adjusted by the SA Army Foundation as a result of a general decrease/increase in subscription or should I request the SA Army Foundation to decrease/increase the premium for certain reason, I confirm that the adjusted premium may be deducted from my bank account.
          I acknowledge that this Authority may be ceded or assigned to a third party for collection purposes.
          </p>}
        <div style={{textAlign: 'center', padding: '5vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
        <Link to='/5'>
          <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '10vw', marginLeft: '20vw' }}>BACK</Button>
        </Link>
        {showNext && <Link to='/7'>
          <Button variant='danger w-25' onClick={()=>console.log(bankingDetailsDO)} style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw' }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Accept</Button>}
      </div>
    </div>
  )
}
export default Six