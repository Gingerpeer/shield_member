import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const CheckInfo = () => {
  return(
    <div className='page'>
        <p style={{fontWeight: '800'}}><u>Product Specification Group Scheme:</u></p>
        <p style={{fontWeight: '800'}}>Cover:</p>
        <Table size='sm'>
          <thead>
            <tr>
              <th>Insured:</th>
              <th>Life:</th>
              <th>Disability*:</th>
              <th>Funeral:</th>
              <th>Accidental Death:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main Member</td>
              <td>R40 000</td>
              <td>R40 000</td>
              <td>R30 000</td>
              <td>R40 000</td>
            </tr>      
            <tr>
              <td>Spouse</td>
              <td>R40 000</td>
              <td>R40 000</td>
              <td>R30 000</td>
              <td>N/A</td>
            </tr>     
            <tr>
              <td>Children</td>
            </tr>  
            <tr>
              <td>Stillborn to 11 months</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>R10 000</td>
              <td>N/A</td>
            </tr>   
            <tr>
              <td>1 to 10 years</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>R15 000</td>
              <td>N/A</td>
            </tr>   
            <tr>
              <td>11 to 21(26**) years</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>R20 000</td>
              <td>N/A</td>
            </tr> 
            <tr>
              <td>Fully Disabled Children (older than 21)</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>R20 000</td>
              <td>N/A</td>
            </tr> 
          </tbody>
        </Table>
        <p style={{textAlign: "left"}}><em>* The Disability cover if claimed reduces the Group Life cover (accelerated benefit)</em></p>
        <p style={{textAlign: "left"}}><em>** Full Time Student</em></p>
        
        <p style={{fontWeight: '800'}}>Waiting Periods (if applicable):</p>
        <Table size='sm'>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Waiting period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Life and Disability Cover:</td>
              <td>Natural Causes - 3 months from first successful premium collection</td>
            </tr>
            <tr>
              <td>Funeral Cover:</td>
              <td>Natural Causes - 6 months from first successful premium collection; <br/> Suicide - 12 months from first successful premium collection</td>
            </tr>
            <tr>
              <td>Accidental Death:</td>
              <td>Immediately from first successful premium collection</td>
            </tr>
          </tbody>
        </Table>
        <p style={{textAlign: "left"}}>This Policy has no surrender, loan or paid–up values.</p>
        <p style={{textAlign: "left"}}>Kindly refer to the Policy Schedule and Statutory Notice that will be e-mailed by the Insurer, Shield Life® Ltd to you on your provided e-mail address as indicated on this form. The Policy Wording and Statutory Notice is also available on the SA Army Foundation website www.saarmyfoundation.co.za</p>
        <p style={{fontWeight: '800'}}>Declaration:</p>
        <p style={{textAlign: "left"}}>Maxi Forces Financial Services have adopted the Six Treating Customers Fairly objectives set out by the regulator and strives to ensure that sales practices and techniques used by the representatives are not misleading, false, inappropriate or will not result in unfair treatment of our members.</p>
        <p style={{textAlign: "left"}}>By signing this declaration I, the undersigned, consent that my personal information may be transmitted to any third-party service provider (Premium Collection Agencies; Consumer Profile Bureau, etc.) that may be appointed to perform functions relating to my policy on behalf of the SA Army Foundation and the Insurer.					
				<br/>
        I hereby consent that my personal information may be used for marketing purposes *:					
        * Marketing means the marketing of SA Army Foundation's new or enhance offerings promoted by the SA Army Foundation; Maxi Forces Financial Services (Pty) Ltd (the broker) and/or Shield Life® Ltd (the Insurer).					
        <br/>
        I understand that without the above consent my policy will not be processed and the SA Army Foundation will not be liable for any claim that may arise.					
        I understand that the cover will only start when my application has been accepted and I have paid the first premium.					
        I have given all information correctly and understand that if any information is found to be untrue, my benefit may not be paid or my policy could be cancelled.  I also agree to notify the Insurer in writing on the applicable form, of any changes to the information I have provided.					
        <br/>
        I authorise the Insurer to communicate with me regarding my policy via Short Message System ("SMS"); WhatsApp; and/or email.					
        It is your responsibility as owner of the policy to make sure that Shield Life® Ltd always has up-to-date contact information for you and anyone that can benefit on this contract.  Where Shield Life® Ltd becomes aware that there are benefits due to be paid out on the policy, we will always first try to contact you or your beneficiaries at the last address provided to us.  If we are not able to contact you at this address, we have to take other reasonable steps to try find the person that is entitled to the policy benefits.  In order to do this, we may have to appoint external tracing agents.  By signing this application, you agree that Shield Life® Ltd can give the external tracing agents access to your personal information in order to be able to do any tracing.  It is also important to note that, if we have to appoint tracing agents, a tracing and management fee may be deducted by us form the benefit payable.					
        </p>
        <p style={{textAlign: "left", fontWeight: '800'}}>Important contact details i.r.t. the SA Army Foundation or the Insurer:</p>
        <p style={{textAlign: "left", fontWeight: '800'}}>Tel: (012) 675 9435/16/76 or 0861 777 353</p>
        <p style={{textAlign: "left", fontWeight: '800'}}>Fax: 086 502 7142</p>
        <p style={{textAlign: "left", fontWeight: '800'}}>Email: queries@sa-armyfoundation.co.za</p>
        <div style={{textAlign: 'center'}}>
        <p style={{fontWeight: '800', textAlign: 'center'}}><u>*I have read and understood this agreement and agree with the terms setout:</u></p>
          <Link to='/7' >
            <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', marginTop: '10vw',marginBottom: '5vh', textAlign: 'center' }}>I Agree</Button>
          </Link>
        </div>
   </div>
  )
}
export default CheckInfo