import { useState } from 'react'
import axios from 'axios'
import  jsPdf  from 'jspdf'
// styles

import Button from 'react-bootstrap/Button'
const Document = ({
forceNumber,
armsOfService,
rankTitle,
fullNames,
surname,
IDNumber,
mainID,
cellNumber,
altCellNumber,
landlineNumber,
emailAddress,
streetNumber,
streetName,
complexName,
unitNumber,
suburb,
town,
postalCode,
unitName,
unitSwitchBoardNumber,
maritalStatus,
monthlyPremium,
spouseTitle,
spouseFullNames,
spouseSurname,
spouseID,
spouseIdFile,
childrenAmount,
childTitle,
childFullNames,
childSurname,
childID,
childTitle2,
childFullNames2,
childSurname2,
childID2,
childTitle3,
childFullNames3,
childSurname3,
childID3,
childTitle4,
childFullNames4,
childSurname4,
childID4,
childTitle5,
childFullNames5,
childSurname5,
childID5,
childTitle6,
childFullNames6,
childSurname6,
childID6,
childrenIds,
pbTitle,
pbFullNames,
pbSurname,
pbID,
pbCellNumber,
pbIdData,
setPbIdData,
nlTitle,
nlFullNames,
nlSurname,
nlIDNumber,
nlCellNumber,
nlIdData,
setNlIdData,
paymentMethod,
signature
}) =>{
  const [payrollScript,setPayrollScript] = useState(true)
  const representativeName = 'Dave Macdonald'
  // type here can either be download or post
  const pdfPayrollDeductionScript = async (type) =>{
    var doc = new jsPdf()
    // add image
    
    doc.setFont('Helvetica','bold')
    doc.setTextColor('#444')
    doc.setFontSize(16)
    doc.text('SA Army Foundation',75,21)
    doc.text('Payroll Deduction Member Application Form Script',35,31)
    doc.setFontSize(9)
    doc.setFont('Helvetica','normal')
    doc.text('Good day,', 15, 40)
    doc.text(`My name is ${representativeName}, I am appointed as the authorised agent of Maxi Forces Financial Services (Pty) Ltd `, 15, 45)
    doc.text('in terms of section 13 of the Financial Advisory and Intermediary Services Act.', 15,50)
    doc.text('I am registered to give advice and perform intermediary services on the following product:', 15,55)
    doc.text('Long-term Category A - family protection plan', 18,65)
    doc.text('And only scripted intermediary services in terms of:', 18,70)
    doc.text('Long-term B1-A - Group Life Cover and Credit Life Insurance.', 18, 75)
    doc.setFont('Helvetica','italic')
    doc.text('Please Note I am not authorised to give advice on Group Life and Credit Life policies.',15,85)
    doc.setFont('Helvetica','normal')
    doc.text('Product Specifications Group Scheme:',15,95)
    doc.line(15,96,72,96,'S')
    doc.setFont('Helvetica','bold')
    doc.text('Cover:',15,105)
    doc.setFillColor('#FFEFED')
    doc.rect(15,110,180,10, 'FD')
    doc.rect(15,110,36,57, 'S')
    doc.text('Insured:',25,117)
    doc.rect(51,110,36,57, 'S')
    doc.text('Life',65,117)
    doc.rect(87,110,36,57, 'S')
    doc.text('Disability*',97,117)
    doc.rect(123,110,36,57, 'S')
    doc.text('Funeral',133,117)
    doc.rect(159,110,36,57, 'S')
    doc.text('Accidental Death',161,117)
    doc.setFont('Helvetica','normal')
    doc.setFontSize(9)
    // first col
    doc.text('Main Member',17,125)
    doc.text('Spouse',17,130)
    doc.text('Children',17,135)
    doc.text('Stillborn to 11 months',17,140)
    doc.text('1 to 10 years',17,145)
    doc.text('11 to 21 years',17,150)
    doc.text('(26 years **)',17,155)
    doc.text('Fully Disabled Children',17,160)
    doc.text('(older than 21)',17,165)
    doc.text('* The Disability cover if claimed reduces the Group Life cover (accelerated benefit).',17,172)
    doc.text('** Full Time Student',17,177)
    // second col
    doc.text('R40,000',63,125)
    doc.text('R40,000',63,130)
    doc.text('n/a',67,140)
    doc.text('n/a',67,145)
    doc.text('n/a',67,150)
    doc.text('n/a',67,160)
    // third col
    doc.text('R40,000',99,125)
    doc.text('R40,000',99,130)
    doc.text('n/a',103,140)
    doc.text('n/a',103,145)
    doc.text('n/a',103,150)
    doc.text('n/a',103,160)
    // fourth col
    doc.text('R30,000',135,125)
    doc.text('R30,000',135,130)
    doc.text('R10,000',135,140)
    doc.text('R15,000',135,145)
    doc.text('R20,000',135,150)
    doc.text('R20,000',135,160)
    // fifth col
    doc.text('R40,000',171,125)
    doc.text('n/a',175,130)
    doc.text('n/a',175,140)
    doc.text('n/a',175,145)
    doc.text('n/a',175,150)
    doc.text('n/a',175,160)
    // Waiting Periods (if applicable)
    doc.setFont('Helvetica','bold')
    doc.setFontSize(9)
    doc.text('Waiting Periods (if applicable)',17,185)
    doc.setFillColor('#FFEFED')
    doc.rect(15,190,180,10, 'FD')
    doc.text('Cover',45,196)
    doc.text('Waiting Period',130,196)
    doc.rect(15,190,180,40, 'S')
    doc.rect(15,200,180,10, 'S')
    doc.rect(15,210,180,10, 'S')
    doc.rect(15,220,180,10, 'S')
    doc.rect(85,190,110,40, 'S')
    doc.setFont('Helvetica','normal')
    doc.setFontSize(9)
    // col 1
    doc.text('Life and Disability Cover:',35,206)
    doc.text('Funeral Cover:',40,216)
    doc.text('Accidental Death:',39,226)
    // col 2
    doc.text('Natural Causes - 3 months from first successful premium collection',90,206)
    doc.text('Natural Causes - 6 months from first successful premium collection;',90,214)
    doc.text('Suicide - 12 months from first successful premium collection',92,218)
    doc.text('Immediately from first successful premium collection',95,226)
    doc.setFontSize(9)
    doc.text('This Policy has no surrender, loan or paid – up values.',15,236)
    doc.text('Kindly refer to the Policy Schedule and Statutory Notice that will be e-mailed by the Insurer, Shield Life® Ltd',15,241)
    doc.text('to you on your provided e-mail address as indicated on this form.  The Policy Wording and Statutory Notice',15,246)
    doc.text('is also available on the SA Army Foundation website www.saarmyfoundation.co.za',15,251)
    doc.addPage()
    doc.setFont('Helvetica','bold')
    doc.text('Declaration:',15,15)
    doc.setFont('Helvetica','normal')
    doc.text('Maxi Forces Financial Services have adopted the Six Treating Customers Fairly objectives set out by the regulator',15,20)
    doc.text('and strives to ensure that sales practices and techniques used by the representatives are not misleading, false,',15,25)
    doc.text('inappropriate or will not result in unfair treatment of our members.',15,30)
    doc.text('By signing this script, you the client, confirm that the agent has not deviated from the script or supplemented',15,35)
    doc.text('the script with content not included in this script and therefore not by the FSP.',15,40)
    doc.addImage(signature, 'png', 18,50,35,35)
    doc.line(15,70,60,70,'S')
    doc.text('Signature of Main Member',18,75)
    // signature representative
    doc.line(125,70,180,70,'S')
    doc.text('Signature of Main Member',135,75)
    doc.setFont('Helvetica','bold')
    doc.text('Important contact details i.r.t. the SA Army Foundation or the Insurer:',15,85)
    doc.setFont('Helvetica','normal')
    doc.text('Tel: (012) 675 9435/16/76 or 0861 777 353',15,90)
    doc.text('Fax: 086 502 7142',15,95)
    doc.text('Email: queries@sa-armyfoundation.co.za',15,100)
    // 
    // doc.setDrawColor('#f5f5f5')
    //   doc.setFillColor('#f5f5f5');
    //   doc.roundedRect(5,132,200,6,2,2, 'FD')


    
    // to download pdf
    if(type == 'download'){
      doc.save('test.pdf')
    }else{
        // send pdf in base64
    var output = doc.output()
    var base64 = btoa(output)
    var user = this.$cookies.get('user')
    var getReportId = window.location.href.split("=")
    var reportId = getReportId[1]
    // post base64 to server
    var data = `<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Header><userAuth xmlns="http://tempuri.org/"><authCode>g5q8hd563g67ja72f54snh</authCode></userAuth></soap12:Header><soap12:Body><EmailReport xmlns="http://tempuri.org/"><token>${user.token}</token><reportid>${reportId}</reportid><pdfbase64>${base64}</pdfbase64></EmailReport></soap12:Body></soap12:Envelope>`
      
    var config = {
              method: 'post',
              url: 'https://apiv2.firstcheck.co.za/firstcheck.asmx?op=EmailReport',
              headers: {
                'Content-Type': 'text/xml'
              },
              data: data
            };

  var sentReport = await this.$axios(config)
            .catch(function (error) {
              console.log(error);
            });
            console.log(sentReport)
            
          }
    }
    
  const postToApi = async () =>{
    console.log('Posting to api...')
    axios.post('localhost:5000/').then(res => console.log(res))
  }
//timeStamp
  
  return(
    <div className="page">
      
    <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Thank you very much. We will be in contact shortly</h6>

        <div style={{textAlign: 'center'}}>
        <p>While you wait you are welcome to download the agreements</p>
            <Button variant='danger w-50' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none' }} onClick={(e)=> {pdfPayrollDeductionScript('download')}}>
                Download Agreement
            </Button>
        </div>
    </div>
  ) 
}
export default Document
