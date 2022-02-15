import Table from 'react-bootstrap/Table'
const PayrollDeductionScript = ({signature}) =>{
  return(
    <div className='page' id='payrollDeductionScript'>
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#0f0f0f', marginBottom: '25px'}}>SA Army Foundation</h6>
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#0f0f0f', marginBottom: '25px'}}>Payroll Deduction Member Application Form</h6>
          <p>
          Good day,
            <br/>
          My name is {/* Representative Full name */}______ , I am appointed as the authorised agent of Maxi Forces Financial Services (Pty) Ltd in terms of section 13 of the Financial Advisory and Intermediary Services Act.
            <br/>
          I am registered to give advice and perform intermediary services on the following product:
            <br/>
          Long-term Category A - family protection plan 
            <br/>
          And only scripted intermediary services in terms of:
            <br/>
          Long-term B1-A - Group Life Cover and Credit Life Insurance.
            <br/>
          <em>Please Note I am not authorised to give advice on Group Life and Credit Life policies.</em>
          </p>
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
          <p><em>* The Disability cover if claimed reduces the Group Life cover (accelerated benefit)</em></p>
          <p><em>** Full Time Student</em></p>
          
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
          <p>This Policy has no surrender, loan or paid–up values.</p>
          <p>Kindly refer to the Policy Schedule and Statutory Notice that will be e-mailed by the Insurer, Shield Life® Ltd to you on your provided e-mail address as indicated on this form. The Policy Wording and Statutory Notice is also available on the SA Army Foundation website www.saarmyfoundation.co.za</p>
          <p style={{fontWeight: '800'}}>Declaration:</p>
          <p>Maxi Forces Financial Services have adopted the Six Treating Customers Fairly objectives set out by the regulator and strives to ensure that sales practices and techniques used by the representatives are not misleading, false, inappropriate or will not result in unfair treatment of our members.</p>
          <p>By signing this script, you the client, confirm that the agent has not deviated from the script or supplemented the script with content not included in this script and therefore not by the FSP.</p>

          <img src={signature} style={{maxWidth: '200px', marginRight: '60vw'}} alt='Main Member Signature' />
          <p style={{margin: 0, float: 'left'}}>______________________</p>
          <br/>
          <br/>
          <p style={{margin: 0, float: 'left'}}>Main Member</p>
          <br/>
          <p style={{margin: 0, float: 'left'}}>Signature</p>
          <br/>
          <p style={{margin: 0, float: 'right' }}>______________________</p>
          <br/>
          <p style={{margin: 0, float: 'right' }}>Representative</p>
          <br/>
          <p style={{margin: 0, float: 'right' }}>Signature</p>
          <br/>
          <br/>
          <p style={{fontWeight: '600'}}><em>Important contact details i.r.t. the SA Army Foundation or the Insurer:</em></p>
          <p style={{fontWeight: '600'}}>Tel: (012) 675 9435/16/76 or 0861 777 353</p>
          <p style={{fontWeight: '600'}}>Fax: 086 502 7142</p>
          <p style={{fontWeight: '600'}}>Email: queries@sa-armyfoundation.co.za</p>
        </div>
        )}
        export default PayrollDeductionScript