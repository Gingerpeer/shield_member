import { useState, useEffect } from 'react'
import axios from 'axios'
import  jsPdf  from 'jspdf'
// styles
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

const Document1 = ({
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
signature,
base64Data,
setBase64Data,
bankingDetailsDO,
setBankingDetailsDO,
idParams
}) =>{
  const date = Date.now()
  const d = new Date(parseInt(date,10))
  const timeStamp = d.toString('MM/dd/yy HH:mm:ss')
  const [memberType,setMemberType] = useState('Single')
  const [approved,setApproved] = useState(false)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [objData, setObjData] = useState('')
  const [data,setData] = useState([])
  const [sendEmail,setSendEmail] = useState('')
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
    doc.text('Signature of Representative',135,75)
    doc.setFont('Helvetica','bold')
    doc.text('Important contact details i.r.t. the SA Army Foundation or the Insurer:',15,85)
    doc.setFont('Helvetica','normal')
    doc.text('Tel: (012) 675 9435/16/76 or 0861 777 353',15,90)
    doc.text('Fax: 086 502 7142',15,95)
    doc.text('Email: queries@sa-armyfoundation.co.za',15,100)
    doc.addPage()
    doc.setFont('Helvetica','bold')
    doc.setTextColor('#444')
    doc.setFontSize(16)
    doc.text('SA Army Foundation',75,21)
    doc.text('Payroll Deduction Member Application Form',42,31)
    doc.setFontSize(9)
    doc.setFont('Helvetica','normal')
    doc.setTextColor('red')
    doc.text('Please Note:', 15, 40)
    doc.setTextColor('#444')
    doc.text('In terms of the Financial Intelligence Centre Amendment Act 1 of 2017 and to enhance the on-boarding and claims',15,45)
    doc.text('processes, we will require a copy of the following documentation to accompany this application:',15,50)
    doc.text('1. Identification of the person apply (ID book/card or Driver License)',15,55)
    doc.text('2. Identification of the nominated beneficiary , if available (ID book/card or Driver License)',15,60)
    doc.setFont('Helvetica','italic')
    doc.text('if applicable;',15,65)
    doc.setFont('Helvetica','normal')
    doc.text('3. Identification of each spouse covered under this application (ID book/card or Driver License)',15,70)
    doc.text('4. Marriage Certificate or equivalent',15,75)
    doc.text('5. Identification of each dependent child covered under this application (ID book/card or Birth Certificate)',15,80)
    doc.setFont('Helvetica','bold')
    doc.setFontSize(11)
    doc.text('1. Legislation information and requirements:',15,90)
    doc.setFont('Helvetica','normal')
    doc.setFontSize(9)
    doc.text('This policy is governed by South African Law and any legal action in relation to this policy is subject to the',15,95)
    doc.text('jurisdiction of the South African Courts.',15,100)
    doc.setFillColor('#FFEFED')
    doc.rect(15,105,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Personal Information',85,108.5)
    doc.rect(15,110,166,53,'S')
    doc.setFont('Helvetica','normal')
    doc.text('In South Africa, the Protection of Personal Information Act 4 of 2013 (PoPIA) has been enacted to regulate the',17,115)
    doc.text('processing of Personal Information. When entering into this policy you provide us with information that may be',17,120)
    doc.text('protected by legislation including but not limited to PoPIA.  We will take all reasonable steps to protect the',17,125)
    doc.text('information you provide us securely and confidentially.',17,130)
    doc.text('I hereby confirm that my information and all information supplied by me may be processed for the following reasons.',17,135)
    doc.text('I hereby confirm that I have the legal right to supply the necessary information in this application and the legal',17,140)
    doc.text('right to give consent to process the personal / sensitive  / special information for the following reasons:',17,145)
    doc.text('ü Army Foundation membership',17,150)
    doc.text('ü All Insurance cover being applied for',17,155)
    doc.text('ü Any processing required for the Insurance product being applied for',17,160)
    doc.setFillColor('#FFEFED')
    doc.rect(15,165,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Sharing of Insurance Information',75,168.5)
    doc.rect(15,170,166,100,'S')
    doc.setFont('Helvetica','normal')
    doc.text('The South African Regulatory bodies require insurers to share information with the regulatory body regarding',17,175)
    doc.text('policies and claims. In addition, insurers share information with each other regarding policies and claims with the',17,180)
    doc.text('view to prevent fraudulent claims and obtain material information regarding the assessment of risks proposed',17,185)
    doc.text('for insurance. By reducing the incidents of fraud and assessing risks fairly, future premium increases may be limited.',17,190)
    doc.text('This is done in the public interest and in the interest of all current and potential policyholders.',17,195)
    doc.text('By the insurer accepting or renewing this insurance, you or any other person that is represented',17,200)
    doc.text('herein, gives consent to the said information being disclosed to any other insurance company or its agent.',17,205)
    doc.text('You also similarly give consent to the sharing of information in regards to past insurance policies and',17,210)
    doc.text('claims that you have made. You also acknowledge that information provided by yourself or your',17,215)
    doc.text('representative may be verified against any legally recognised sources or databases.',17,220)
    doc.text('By insuring or renewing your insurance you hereby not only consent to such information sharing, but',17,225)
    doc.text('also waive any rights of confidentiality with regards to underwriting or claims information that you',17,230)
    doc.text('have provided or that has been provided by another person on your behalf.',17,235)
    doc.text('In the event of a claim, the information you have supplied with your application, together with the',17,240)
    doc.text('information you supply in relation to the claim, will be made available to other insurers participating',17,245)
    doc.text('in the sharing of insurance information.',17,250)
    doc.text('As a member of the SA Army Foundation, you and your dependants personal information may be shared with the',17,255)
    doc.text('employer. This will be limited to information that is relevant to you and/or your dependants’ application or',17,260)
    doc.text('information that is required for the ongoing servicing of your membership.',17,265)
    doc.addPage()
    doc.setFillColor('#FFEFED')
    doc.rect(15,15,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Member Due Diligence',75,18.5)
    doc.rect(15,20,166,60,'S')
    doc.setFont('Helvetica','normal')
    doc.text('As part of our responsibilities as an Accountable Institution in terms of the Financial Intelligence Centre',17,25)
    doc.text('Amendment Act 1 of 2017, we are required to gather the following member information prior to concluding',17,30)
    doc.text('the transaction. The nature and purpose of this transaction is to secure Group Life and Funeral cover.',17,35)
    doc.text('What is the source of Funds?',17,40)
    doc.setFont('Helvetica','bold')
    doc.text('Other: _____________',140,40)
    doc.setFont('Helvetica','normal')
    doc.text('I do hereby declare that the source of the funds that I expect to use in concluding transactions with',17,45)
    doc.text('Shield Life® Ltd originates from the sources indicated above. I further confirm that these funds are',17,50)
    doc.text('derived from legitimate sources.',17,55)
    doc.addImage(signature, 'png', 25,55,35,35)
    doc.text('____________________________',20,75)
    doc.text('Signature of Main Member',25,79)
    doc.text(`Date: ${timeStamp}`,72,77)
    doc.setFont('Helvetica','bold')
    doc.setFontSize(11)
    doc.text('2. Compulsory personal information:',15,87)
    // General Details
    doc.setFontSize(9)
    doc.setFillColor('#FFEFED')
    doc.rect(15,90,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('General Details',85,93.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,95,166,5,'S')
    doc.text('Force No:',17.5,99)
    doc.text(forceNumber,44,99)
    doc.rect(15,95,24,5,'S')
    doc.text('Surname:',93,99)
    doc.text(surname,119,99)
    doc.rect(90,95,24,5,'S')
    doc.rect(15,100,166,5,'S')
    doc.text('Rank/Title:',17.5,104)
    doc.text(rankTitle,44,104)
    doc.rect(15,100,24,5,'S')
    doc.text('ID Number:',93,104)
    doc.text(IDNumber,119,104)
    doc.rect(90,100,24,5,'S')
    doc.rect(15,105,166,5,'S')
    doc.text('Full Names:',17.5,109)
    doc.text(fullNames,44,109)
    doc.rect(15,105,24,5,'S')
    doc.text('Marital Status:',93,109)
    doc.text(maritalStatus,119,109)
    doc.rect(90,105,24,5,'S')
    // electronic Contact details
    doc.setFillColor('#FFEFED')
    doc.rect(15,110,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Electronic Contact Details',78,113.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,115,166,5,'S')
    doc.text('Cell Number:',17.5,119)
    doc.text(cellNumber,44,119)
    doc.rect(15,115,24,5,'S')
    doc.text('Home Email Address:',93,119)
    doc.text(emailAddress,129,119)
    doc.rect(90,115,35,5,'S')
    doc.rect(15,120,166,5,'S')
    doc.text('Landline Number:',17.5,124)
    doc.text(landlineNumber,55,124)
    doc.rect(15,120,35,5,'S')
    doc.text('Free Email Address:',93,124)
    doc.text(`${fullNames}@myarmyfoundation.co.za`,129,124)
    doc.rect(90,120,35,5,'S')
    // arms of service
    doc.setFillColor('#FFEFED')
    doc.rect(15,125,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Arms of Service',85,128.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,130,166,5,'S')
    doc.text('Unit:',17.5,134)
    doc.text(unitName,44,134)
    doc.rect(15,130,24,5,'S')
    doc.text('Unit Switchboard No:',93,134)
    doc.text(unitSwitchBoardNumber,129,134)
    doc.rect(90,130,35,5,'S')
    // Physical Address
    doc.setFillColor('#FFEFED')
    doc.rect(15,135,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Physical Address',85,138.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,140,166,5,'S')
    doc.text('Street and Numbers:',17.5,144)
    doc.text(`${streetNumber} ${streetName}`,55,144)
    doc.rect(15,140,35,5,'S')
    doc.text('Suburb:',93,144)
    doc.text(suburb,129,144)
    doc.rect(90,140,24,5,'S')
    doc.rect(15,145,166,5,'S')
    doc.text('Street Code:',17.5,149)
    doc.text(postalCode,55,149)
    doc.rect(15,150,166,5,'S')
    doc.text('Is the postal address the same as the Residential address?  If no, please complete:',17.5,154)
    doc.setFont('Helvetica','bold')
    doc.text('Yes',150,154)
    doc.setFont('Helvetica','normal')
    // Postal Address
    doc.setFillColor('#FFEFED')
    doc.rect(15,155,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Postal Address',85,158.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,160,166,5,'S')
    doc.text('Postal Number:',17.5,164)
    doc.text(`${streetNumber} ${streetName}`,55,164)
    doc.rect(15,160,35,5,'S')
    doc.text('Suburb:',93,164)
    doc.text(suburb,129,164)
    doc.rect(90,160,24,5,'S')
    doc.rect(15,165,166,5,'S')
    doc.text(`Postal Code: ${postalCode}`,17.5,169)
    // 3. Compulsory Beneficiary Information
    doc.setFont('Helvetica','bold')
    doc.setFontSize(11)
    doc.text('3. Compulsory Beneficiary Information',15,177)
    // header block
    doc.setFontSize(9)
    doc.setFillColor('#FFEFED')
    doc.rect(15,180,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Details of Primary Beneficiary (adult over the age of 18  - person responsible for funeral)',30,183.5)
    doc.setFont('Helvetica','normal')
    // blocks see through
    doc.rect(15,185,166,5,'S')
    doc.rect(15,185,35,5,'S')
    doc.rect(90,185,24,5,'S')
    doc.rect(15,190,166,5,'S')
    doc.rect(15,190,35,5,'S')
    doc.rect(90,190,24,5,'S')
    doc.rect(15,195,166,5,'S')
    doc.rect(15,195,35,5,'S')
    doc.rect(90,195,24,5,'S')
    // text
    doc.text('ID Number:',17.5,189)
    doc.text(pbID,55,189)
    doc.text('Cell Number',93,189)
    doc.text(pbCellNumber,129,189)
    doc.text('Full Names:',17.5,194)
    doc.text(pbFullNames,55,194)
    doc.text('Landline No:',93,194)
    doc.text(landlineNumber,129,194)
    doc.text('Surname:',17.5,199)
    doc.text(pbSurname,55,199)
    doc.text('Relationship',93,199)
    doc.text('',129,199)
    // Details of Next-in-line Beneficiary (adult over the age of 18) *
    // header block
    doc.setFontSize(9)
    doc.setFillColor('#FFEFED')
    doc.rect(15,200,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Details of Next-in-line Beneficiary (adult over the age of 18)',50,203.5)
    doc.setFont('Helvetica','normal')
    // blocks see through
    doc.rect(15,205,166,5,'S')
    doc.rect(15,205,35,5,'S')
    doc.rect(90,205,24,5,'S')
    doc.rect(15,210,166,5,'S')
    doc.rect(15,210,35,5,'S')
    doc.rect(90,210,24,5,'S')
    doc.rect(15,215,166,5,'S')
    doc.rect(15,215,35,5,'S')
    doc.rect(90,215,24,5,'S')
    // text
    doc.text('ID Number:',17.5,209)
    doc.text(nlIDNumber,55,209)
    doc.text('Cell Number',93,209)
    doc.text(nlCellNumber,129,209)
    doc.text('Full Names:',17.5,214)
    doc.text(nlFullNames,55,214)
    doc.text('Landline No:',93,214)
    doc.text(landlineNumber,129,214)
    doc.text('Surname:',17.5,219)
    doc.text(nlSurname,55,219)
    doc.text('Relationship',93,219)
    doc.text('',129,219)
    doc.setFontSize(7)
    doc.setFont('Helvetica','italic')
    doc.text('* Please note:  The next-in-line beneficiary will only receive the benefit payment if the primary beneficiary is predeceased',15,223)
    doc.setFont('Helvetica','normal')
    // 4. Main member immediate family members information, if applicable:
    doc.setFont('Helvetica','bold')
    doc.setFontSize(11)
    doc.text('4. Main member immediate family members information, if applicable:',15,233)
    // Details of Spouse
    // header block
    doc.setFontSize(9)
    doc.setFillColor('#FFEFED')
    doc.rect(15,235,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Details of Spouse',40,238.5)
    doc.text('Details of Additional Spouse',110,238.5)
    doc.setFont('Helvetica','normal')
    // blocks see through
    doc.rect(15,240,166,5,'S')
    doc.rect(15,240,35,5,'S')
    doc.rect(90,240,35,5,'S')
    doc.rect(15,245,166,5,'S')
    doc.rect(15,245,35,5,'S')
    doc.rect(90,245,35,5,'S')
    doc.rect(15,250,166,5,'S')
    doc.rect(15,250,35,5,'S')
    doc.rect(90,250,35,5,'S')
    // text
    doc.text('Name & Surname:',17.5,244)
    doc.text('ID Number:',17.5,249)
    doc.text('Contact Number',17.5,254)
    doc.text(`${spouseFullNames} ${spouseSurname}`,55,244)
    doc.text(spouseID,55,249)
    doc.text(altCellNumber,55,254)
    doc.text('Name & Surname:',93,244)
    doc.text('ID Number:',93,249)
    doc.text('Contact Number',93,254)
    // Details of Children (under the age of 21 years; 26 years if full time student)
    doc.addPage()
    // header block
    doc.setFontSize(9)
    doc.setFillColor('#FFEFED')
    doc.rect(15,15,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Details of Children (under the age of 21 years; 26 years if full time student)',43,18.5)
    doc.setFont('Helvetica','normal')
    // blocks see through
    doc.rect(15,20,166,5,'S')
    doc.rect(15,25,166,5,'S')
    doc.rect(15,25,35,5,'S')
    doc.rect(90,25,35,5,'S')
    doc.rect(15,30,166,5,'S')
    doc.rect(15,30,35,5,'S')
    doc.rect(90,30,35,5,'S')
    doc.rect(15,35,166,5,'S')
    doc.rect(15,35,35,5,'S')
    doc.rect(90,35,35,5,'S')
    doc.rect(15,40,166,5,'S')
    doc.rect(15,40,35,5,'S')
    doc.rect(90,40,35,5,'S')
    doc.rect(15,45,166,5,'S')
    doc.rect(15,45,35,5,'S')
    doc.rect(90,45,35,5,'S')
    doc.rect(15,50,166,5,'S')
    doc.rect(15,50,35,5,'S')
    doc.rect(90,50,35,5,'S')
    doc.rect(15,55,166,5,'S')
    doc.rect(15,55,35,5,'S')
    doc.rect(90,55,35,5,'S')
    doc.rect(15,60,166,5,'S')
    doc.rect(15,60,35,5,'S')
    doc.rect(90,60,35,5,'S')
    doc.rect(15,65,166,5,'S')
    doc.rect(15,65,35,5,'S')
    doc.rect(90,65,35,5,'S')
    doc.rect(15,70,166,5,'S')
    doc.rect(15,70,35,5,'S')
    doc.rect(90,70,35,5,'S')
    doc.rect(15,75,166,5,'S')
    doc.rect(15,75,35,5,'S')
    doc.rect(90,75,35,5,'S')
    doc.rect(15,80,166,5,'S')
    doc.rect(15,80,35,5,'S')
    doc.rect(90,80,35,5,'S')
    // text
    doc.setFont('Helvetica','italic')
    doc.text('Legitimate children of the member can be included as indicated / noted on the persol system.',35,23.5)
    doc.setFont('Helvetica','normal')
    // left col
    doc.text('Name & Surname:',17.5,29)
    doc.text('Date of Birth:',17.5,34)
    doc.text('Gender:',17.5,39)
    doc.text('Age:',17.5,44)
    doc.text('Name & Surname:',17.5,49)
    doc.text('Date of Birth:',17.5,54)
    doc.text('Gender:',17.5,59)
    doc.text('Age:',17.5,64)
    doc.text('Name & Surname:',17.5,69)
    doc.text('Date of Birth:',17.5,74)
    doc.text('Gender:',17.5,79)
    doc.text('Age:',17.5,84)
    // left col state
    doc.text(`${childFullNames} ${childSurname}`,55,29)
    doc.text(childID,55,34)
    doc.text(childTitle,55,39)
    doc.text(childID,55,44)
    doc.text(`${childFullNames2} ${childSurname2}`,55,49)
    doc.text(childID2,55,54)
    doc.text(childTitle2,55,59)
    doc.text(childID2,55,64)
    doc.text(`${childFullNames3} ${childSurname3}`,55,69)
    doc.text(childID3,55,74)
    doc.text(childTitle3,55,79)
    doc.text(childID3,55,84)
    // right col
    doc.text('Name & Surname:',93,29)
    doc.text('Date of Birth:',93,34)
    doc.text('Gender:',93,39)
    doc.text('Age:',93,44)
    doc.text('Name & Surname:',93,49)
    doc.text('Date of Birth:',93,54)
    doc.text('Gender:',93,59)
    doc.text('Age:',93,64)
    doc.text('Name & Surname:',93,69)
    doc.text('Date of Birth:',93,74)
    doc.text('Gender:',93,79)
    doc.text('Age:',93,84)
    // right col state
    doc.text(`${childFullNames4} ${childSurname4}`,129,29)
    doc.text(childID4,129,34)
    doc.text(childTitle4,129,39)
    doc.text(childID4,129,44)
    doc.text(`${childFullNames5} ${childSurname5}`,129,49)
    doc.text(childID5,129,54)
    doc.text(childTitle5,129,59)
    doc.text(childID5,129,64)
    doc.text(`${childFullNames6} ${childSurname6}`,129,69)
    doc.text(childID6,129,74)
    doc.text(childTitle6,129,79)
    doc.text(childID6,129,84)
    // 5. Compulsory membership details:
    doc.setFont('Helvetica','bold')
    doc.setFontSize(11)
    doc.text('5. Compulsory membership details:',15,93)
    doc.setFontSize(9)
    // Membership Details
    doc.setFillColor('#FFEFED')
    doc.rect(15,95,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Membership Details',77,99)
    doc.setFont('Helvetica','normal')
    doc.rect(15,100,166,15,'S')
    // text 
    doc.text('Membership type',78,105)
    doc.text(`${memberType} ${childrenAmount > 0 ? childrenAmount : ''}`,77,110)
    doc.text(`R${monthlyPremium}`,87,114)
    // 6. Deduction details:
    doc.setFont('Helvetica','bold')
    doc.setFontSize(11)
    doc.text('6. Deduction details:',15,123)
    doc.setFontSize(9)
    // Stop Order (Persol deduction) Mandate
    doc.setFillColor('#FFEFED')
    doc.rect(15,125,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.text('Stop Order (Persol deduction) Mandate',60,129)
    doc.setFont('Helvetica','normal')
    doc.rect(15,130,83,5,'S')
    doc.rect(15,135,83,5,'S')
    doc.rect(15,140,83,5,'S')
    doc.rect(15,145,83,5,'S')
    doc.rect(98,130,83,5,'S')
    doc.rect(98,135,83,5,'S')
    doc.rect(98,140,83,5,'S')
    doc.rect(98,145,83,5,'S')
    // text
    doc.text('Full Names & Surname', 16.5,134)
    doc.text('ID Number:',16.5,139)
    doc.text('Rank/Title',16.5,144)
    doc.text('Start date:',16.5,149)
    doc.text('Force No:',100,134)
    doc.text('Unit',100,139)
    doc.text('Payslip reference:',100,144)
    doc.text('End date:',100,149)
    doc.text(`- ${fullNames} ${surname}`,50,134)
    doc.text(`- ${IDNumber}`,33,139)
    doc.text(`- ${rankTitle}`,33,144)
    doc.setFontSize(6)
    doc.text(timeStamp,33,149)
    doc.setFontSize(9)
    doc.text(forceNumber,116.5,134)
    doc.text(unitName,116.5,139)
    doc.text('ARMY FND: FUNDS',126.5,144)
    doc.text('until I formally cancel this Policy',116.5,149)
    doc.rect(15,150,166,23,'S')
    doc.text('I authorise the Accountant of the Department of Defence to deduct the monthly payments from my salary as per',16,155)
    doc.text('the above authority provided and remit it to the SA Army Foundation of which I am a member,  each and every',16,160)
    doc.text('month and continuing until cancelled by me in writing or until I substitute it with a new authorisation.',16,165)
    doc.text('I have read and accepted the terms and conditions as set out below.',16,170)
    // Terms & Conditions 
    doc.rect(15,175,166,65,'S')
    doc.setFont('Helvetica','bold')
    doc.text('Terms & Conditions',16.5,180)
    doc.setFont('Helvetica','normal')
    doc.text('I accept that the authority may be cancelled by me by giving 31 (thirty one) days notice in writing.',16.5,185)
    doc.text('I understand that should I cancel the authority after the 31-day period, I shall not be entitled to any',16.5,190)
    doc.text('refund of amounts which have been withdrawn while this authority was in force, if such amounts were legally',16.5,195)
    doc.text('owing to you.Should the premium rate be adjusted by the SA Army Foundation as a result of a general',16.5,200)
    doc.text('decrease/increase in subscription or should I request the SA Army Foundation to decrease/increase the',16.5,205)
    doc.text('premium for certain reason, I confirm that the adjusted premium may be deducted.I acknowledge that',16.5,210)
    doc.text('this Authority may be ceded or assigned to a third party for collection purposes.',16.5,215)
    // signature
    doc.addImage(signature, 'png', 25,210,35,35)
    doc.text('____________________________',20,230)
    doc.text('Signature of Main Member',25,235)
    doc.text(`Date: ${timeStamp}`,72,235)
    doc.addPage()
    // 7. Declaration
    doc.setFont('Helvetica','bold')
    doc.setFontSize(11)
    doc.text('7. Declaration',15,15)
    doc.setFontSize(8)
    doc.rect(15,18,166,135,'S')
    doc.text('By signing this declaration I, the undersigned, consent that my personal information may be transmitted to any third-party',16,22)
    doc.text('service provider (Premium Collection Agencies; Consumer Profile Bureau, etc.) that may be appointed to perform ',16,27)
    doc.text('functions relating to my policy on behalf of the SA Army Foundation and the Insurer.',16,32)
    doc.text('I hereby consent that my personal information may be used for marketing purposes *:',16,37)
    doc.text("* Marketing means the marketing of SA Army Foundation's new or enhance offerings promoted by the SA Army",16,42)
    doc.text("Foundation; Maxi Forces Financial Services (Pty) Ltd (the broker) and/or Shield Life® Ltd (the Insurer).",16,47)
    doc.text('I understand that without the above consent my policy will not be processed and the SA Army Foundation',16,52)
    doc.text('will not be liable for any claim that may arise. I understand that the cover will only start when my',16,57)
    doc.text('application has been accepted and I have paid the first premium.I have given all information correctly',16,62)
    doc.text('and understand that if any information is found to be untrue, my benefit may not be paid or my policy',16,67)
    doc.text('could be cancelled. I also agree to notify the Insurer in writing on the applicable form, of any changes',16,72)
    doc.text('to the information I have provided. I authorise the Insurer to communicate with me regarding my policy',16,77)
    doc.text('via Short Message System ("SMS"); WhatsApp; and/or email.',16,82)
    //
    doc.text('It is your responsibility as owner of the policy to make sure that Shield Life® Ltd always has up-to-date',16,87)
    doc.text('contact information for you and anyone that can benefit on this contract.  Where Shield Life® Ltd becomes',16,92)
    doc.text('aware that there are benefits due to be paid out on the policy, we will always first try to contact you',16,97)
    doc.text('or your beneficiaries at the last address provided to us.  If we are not able to contact you at this address,',16,102)
    doc.text('we have to take other reasonable steps to try find the person that is entitled to the policy benefits.',16,107)
    doc.text('In order to do this, we may have to appoint external tracing agents.  By signing this application, you agree',16,112)
    doc.text('that Shield Life® Ltd can give the external tracing agents access to your personal information in order to be',16,117)
    doc.text('able to do any tracing.  It is also important to note that, if we have to appoint tracing agents,',16,122)
    doc.text('a tracing and management fee may be deducted by us form the benefit payable.',16,127)
     // signature
     doc.addImage(signature, 'png', 25,127,35,35)
     doc.text('____________________________',20,145)
     doc.text('Signature of Main Member',25,150)
     doc.text(`Date: ${timeStamp}`,72,150)
    // member due diligence
    doc.setTextColor('red')
    doc.setFontSize(8)
    doc.text('Representative confirmation and declaration:',16,158)
    doc.setTextColor('#444')
    doc.setFillColor('#FFEFED')
    doc.rect(15,160,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.setFontSize(9)
    doc.text('Member Due Diligence',80,163.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,165,166,90,'S')
    doc.setFontSize(8)
    doc.text('Have the identity of the member been verified by you the representative?',18,170)
    doc.text('Does the member have a rank of General; Lieutenant General; Admiral or Vice Admiral (DPIP)?',18,175)
    doc.text('Is the member a close family member or closely associated to a DPIP or FPPO?',18,180)
    doc.text('If yes, please provide details on the relation or association: ____________________________',18,185)
    doc.text('DPIP = Domestic Prominent Influential Persons',18,190)
    doc.text('FPPO = Foreign Prominent Public Officials',18,195)
    doc.text('I, the undersigned hereby certify as follow:',18,200)
    doc.text('1.I have personally scanned in the normal course of business the documentation on the date of',18,205)
    doc.text('signature hereof by means of digital image capturing.',18,210)
    doc.text('2.  All the documentations scanned were original documents and each scan resulted in a true,',18,215)
    doc.text('complete and unaltered image of the original document.',18,220)
     // signature
     doc.text('Full name _______________________',20,230)
     doc.text('Branch ___________________________',77,230)
     doc.text('____________________________',20,245)
     doc.text('Signature of Representative',25,250)
     doc.text(`Date: ${timeStamp}`,72,250)
     doc.addPage()
     // Maxi Forces Financial Service (Pty) Ltd
          // Record of Information
     doc.setFontSize(11)
     doc.setTextColor('red')
     doc.text('The following does not form part of the application form but are information that needs to be communicated',11,15)
     doc.text('to new members.',90,20)
     doc.setTextColor('#444')
     doc.setFontSize(16)
     doc.setFont('Helvetica','bold')
     doc.text('Maxi Forces Financial Service (Pty) Ltd',55,30)
     doc.text('Record of Information',77,37)
     doc.setFont('Helvetica','normal')
     doc.setFontSize(9)
     doc.text('Only information, and not advice, is provided in respect of the SA Army Foundation Group Scheme policy.',15,45)
     doc.text('Should you require advice in any way, please contact the Insurer for assistance 0861 777 353.',15,50)
     doc.text('You have chosen to apply for the SA Army Foundation membership that includes the Group Scheme benefits',15,55)
     doc.text('underwritten by Shield Life® Ltd as stated in the script.',15,60)
     doc.setFontSize(11)
     doc.text('To be completed by main member:',15,70)
     doc.setFillColor('#FFEFED')
    doc.rect(15,75,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.setFontSize(9)
    doc.text('I have selected this plan for the following reasons:',60,78.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,80,166,15,'S')
    doc.setFontSize(8)
    doc.text('Other: _______________________',110,90)
    // pre-existing funeral cover
    doc.setFillColor('#FFEFED')
    doc.rect(15,95,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.setFontSize(9)
    doc.text('Pre-existing funeral cover',75,98.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,100,166,30,'S')
    doc.text('In order for the Insurer to determine whether a waiting period is applicable, you the potential member',20,105)
    doc.text('must confirm the following: Have you recently, more than 31 days before signature date, cancelled a',20,110)
    doc.text('funeral policy with another Insurer? If yes, did you complete a waiting period under that previous',20,115)
    doc.text('funeral policy? Waiver of waiting period only applicable on claim stage, if proper evidence of',20,120)
    doc.text('pre-existing funeral cover where the waiting periods have been completed, can be provided.',20,125)
    doc.setFillColor('#FFEFED')
    doc.rect(15,135,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.setFontSize(9)
    // additional information
    doc.text('Additional Information',77,138.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,140,166,145,'S')
    doc.text('Without in any way limiting and subject to the other provisions of the Services Agreement/Mandate,',20,145)
    doc.text('Maxi Forces Financial Services (Pty) Ltd accepts responsibility for the lawful actions of their',20,150)
    doc.text('representatives (as defined in the Financial Advisory and Intermediary Service Act) in rendering',20,155)
    doc.text('financial services within the course and scope of their employment.  All our agents are authorised',20,160)
    doc.text('representatives of Maxi Forces Financial Services (Pty) Ltd and some agents may be rendering services',20,165)
    doc.text('under supervision and will inform you accordingly.Benefits:The main insured and spouse will be covered',20,170)
    doc.text('in the event of Death and Disability, where applicable.  Children will be covered in the event of Death,',20,175)
    doc.text('and Disability, where applicable.  Children will be covered in the event of Death, where applicable.In',20,180)
    doc.text('return for payment of a monthly or annual premium, your cover amount will be paid based on the following:',20,185)
    doc.text('#  The insured event occurs within the period of membership;',20,190)
    //
    doc.text('# The event giving rise to a claim is covered in terms of the exclusions and/or the terms and conditions',20,195)   
    doc.text('of the policy wording;#  The truth and accuracy of the information at the time of application;',20,200)  
    doc.text('# You provide us with all the required documents as set on the claim form provided; and ',20,205)  
    doc.text('# The claim is reported within the prescribed periods stipulated in your policy wording.',20,210)   
    //
    doc.text('The benefit payable will be based on the following:#  In the event of Death, due to accidental, violent,',20,215)
    doc.text('external and visible means, the benefit will be payable to the nominated beneficiary.',20,220)
    doc.text('#  In the event of Death, due to natural causes, after the expiry of the initial waiting period,',20,225)
    doc.text('the benefit will be payable to the main member or nominated beneficiary.',20,230)     
    //
    doc.text('Surrender Value:The Membership and all benefits that is included in the membership has no surrender, loan',20,235) 
    doc.text('or paid up values.Exclusions:Claims will not be paid if: Any loss or expense of whatsoever nature directly',20,240)
    doc.text('caused by, resulting from, or in connection with the willing participation by the Principal Member or and',20,245)
    doc.text('Dependant in any of the following against the lawful military or police forces of South Africa: Civil War;',20,250)
    doc.text('Revolution; Insurrection; Invasion; Overthrow of the legally constituted government; Military. or usurped',20,255)
    doc.text('power and Civil commotion assuming the proportions of, or amounting to, an uprising against an established',20,260)
    //
    doc.text('government. This Group Scheme benefits also excludes any loss or expense of whatsoever nature directly caused',20,265)         
    doc.text('by, resulting from in connection with any of the following:1. Use of nuclear, biological or chemical weapons,',20,270) 
    doc.text('or any radioactive contamination;2. Attacks on or sabotage of facilities;3. The member committing any act',20,275)
    doc.text('or deed in violation of criminal or military law; 4. Martial law or loot, sack or pillage therewith;',20,280)
    //
    doc.addPage()
    doc.rect(15,10,166,35,'S')
    doc.text('5. Confiscation or nationalisation or requisition or destruction of or damage to property by or under the',20,15)
    doc.text('order of any government or public or local authority. 6. Intentional self – inflicted injury, suicide or a',20,20)
    doc.text('suicide attempt (whether sane or insane) within 12 months from the Entry Date 7. Discontinuance of the',20,25)
    doc.text('payment of premiums or part thereof in respect of a Principal Member.',20,30)
    doc.text('Full Exclusions available in your Policy Document which will be sent to you.',20,35)
    doc.text('Waiting Periods',20,40)
    doc.setFillColor('#FFEFED')
    doc.rect(15,45,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.setFontSize(9)
    // additional information
    doc.text('Cover',50,48.5)
    doc.text('Waiting Period',125,48.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,50,83,5,'S')
    doc.rect(98,50,83,5,'S')
    doc.rect(15,55,83,10,'S')
    doc.rect(98,55,83,10,'S')
    doc.rect(15,65,83,5,'S')
    doc.rect(98,65,83,5,'S')
    // text
    doc.text('Life and Disability Cover:',20,54)
    doc.text('Funeral Cover (if no previous',20,59)
    doc.text('waiting periods have been completed)',20,63)
    doc.text('Accidental Death:',20,69)
    doc.setFontSize(7)
    doc.text('Natural Causes - 3 months from first successful premium collection',100,54)
    doc.text('Natural Causes - 6 months from first successful premium collection;',100,59)
    doc.text('Suicide - 12 months from first successful premium collection',100,63)
    doc.text('Immediately from first successful premium collection',100,69)
    doc.setFontSize(9)
    doc.setFillColor('#FFEFED')
    doc.rect(15,75,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.setFontSize(9)
    doc.text('Compliance with the requirements of the FAIS Code of Conduct',50,78.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,80,166,70,'S')
    doc.text('I understand that only group scheme cover is provided.',20,85)
    doc.text('I know that the accuracy and completeness of the information provided remains my responsibility, and not',20,90)
    doc.text('disclosing the correct information could result in claims not being paid and loss of benefits and premiums.',20,95)
    doc.text('I have seen and read a copy of Maxi Forces Financial Services (Pty) Ltd Statutory disclosure.',20,100)
    doc.text('I confirm that only information, and not advice, has been provided to me.',20,105)
    doc.text('I understand that there is no refund of premiums in the event of cancellation, except when exercising',20,110)
    doc.text('the 31 days cooling off right. I have not been coerced or induced in any way in the exercising of any.',20,115)
    doc.text('of my rights. I confirm that the application form and/or any other documents (including this document)',20,120)
    doc.text('was fully completed before I signed it, and all information is to the best of my knowledge',20,125)
    doc.text('both true and correct. I confirm that I have received this record of transaction. I understand',20,130)
    doc.text('that if payment of my premium is unsuccessful, my policy benefits are at risk and it is my',20,135)
    doc.text("responsibility to notify the Insurer as to how to collect arrear premiums. If I don’t, my",20,140)
    doc.text('policy may lapse and I will lose my cover and all premiums. Less than 1% fees is received as remuneration.',20,145)
    doc.setFontSize(9)
    doc.setFillColor('#FFEFED')
    doc.rect(15,150,166,5, 'FD')
    doc.setFont('Helvetica','bold')
    doc.setFontSize(9)
    doc.text('Declaration',87,153.5)
    doc.setFont('Helvetica','normal')
    doc.rect(15,155,166,30,'S')
    // text
    doc.text(`I, ${fullNames} ${surname} declare that the information in respect of the Group Scheme benefits has`,20,160)
    doc.text('provided to me, including the cover amounts, waiting periods, premiums and when claims will not be paid.',20,165)
     // signature
     doc.addImage(signature, 'png', 25,160,35,35)
     doc.text('____________________________',20,175)
     doc.text('Signature of Main Member',25,180)
     doc.text(`Date: ${timeStamp}`,72,180)
     doc.addPage()
     // Statutory Notice
     doc.setFontSize(16)
     doc.setFont('Helvetica','bold')
     doc.text('Statutory Notice',77,15)
     doc.setFontSize(8)
     doc.setFont('Helvetica','normal')
     doc.text('This notice does not form part of the Insurance Contract nor any other document, but you have the right to the following information',17,20)
     doc.setFontSize(9)
     doc.setFillColor('#FFEFED')
     doc.rect(15,25,166,5, 'FD')
     doc.setFont('Helvetica','bold')
     doc.setFontSize(9)
     doc.text('Broker details:',87,28.5)
     doc.setFont('Helvetica','normal')
     // left col
     doc.rect(15,30,83,5,'S')
     doc.text('Broker Name: Maxi Forces Financial Services (Pty) Ltd',16,34)
     doc.rect(15,35,83,5,'S')
     doc.text('FSP number: 1966',17,39)
     doc.rect(15,40,83,5,'S')
     doc.text('Registration number: 1995/004244/07',16,44)
     doc.rect(15,45,83,5,'S')
     doc.text('Tel: 0861 222 303',16,49)
     doc.rect(15,50,83,5,'S')
     doc.text('Authorised Category Products: Long-term Insurance:',16,54)
     doc.rect(15,55,83,5,'S')
     doc.text('A,B1,B1-A,B2,B2-A Short-term Insurance: Personal',16,59)
     doc.rect(15,60,83,5,'S')
     doc.text('Lines (PL),PL A1',16,64)
     doc.rect(15,65,83,5,'S')
     doc.text('Complaints: Must be in writing and will be attended',16,69)
     doc.rect(15,70,83,5,'S')
     doc.text('to within',16,74)
     doc.rect(15,75,83,5,'S')
     doc.rect(15,80,83,5,'S')
     doc.rect(15,85,83,5,'S')
     doc.rect(15,90,83,5,'S')
     doc.rect(15,95,83,5,'S')
     // right col
     doc.rect(98,30,83,5,'S')
     doc.text('Address: 1293 South Street,Maxi Building,centurion,0157',100,34)
     doc.rect(98,35,83,5,'S')
     doc.text('Email: info@maxiforces.co.za',100,39)
     doc.rect(98,40,83,5,'S')
     doc.text('Compliance Officers: Moonstone Compliance (Pty) Ltd',100,44)
     doc.rect(98,45,83,5,'S')
     doc.text('represented by Mr Francois Meintjies',100,49)
     doc.rect(98,50,83,5,'S')
     doc.text('Tel: (021) 883 8000',100,54)
     doc.rect(98,55,83,5,'S')
     doc.text('Fax: (021) 880 0688',100,59)
     doc.rect(98,60,83,5,'S')
     doc.text('E-mail: fm@moonstone.co.za',100,64)
     doc.rect(98,65,83,5,'S')
     doc.text('PO Box 1221, Die Board, Stellenbosch, 7673',100,69)
     doc.rect(98,70,83,5,'S')
     doc.text('Legal & contractual relationship Intermediary Agreement',100,74)
     doc.rect(98,75,83,5,'S')
     doc.text('PI cover: Professional Indemnity Cover is in place.',100,79)
     doc.rect(98,80,83,5,'S')
     doc.text('Conflict of interest: The Conflict of Interest Management',100,84)
     doc.rect(98,85,83,5,'S')
     doc.text('Policy can be obtained upon written request:',100,89)
     doc.rect(98,90,83,5,'S')
     doc.text('compliance@maxiforces.co.za',100,94)
     doc.rect(98,95,83,5,'S')
     // Policy holder details
     doc.setFontSize(9)
     doc.setFillColor('#FFEFED')
     doc.rect(15,100,166,5, 'FD')
     doc.setFont('Helvetica','bold')
     doc.setFontSize(9)
     doc.text('Policy holder details:',82,103.5)
     doc.setFont('Helvetica','normal')
     // left col
     doc.rect(15,105,83,5,'S')
     doc.text('Policy holder name: SA Army Foundation',16,109)
     doc.rect(15,110,83,5,'S')
     doc.text('Registration number: 056-121-NPO',16,114)
     doc.rect(15,115,83,5,'S')
     doc.text('FSP number: 6995',16,119)
     // Right col
     doc.rect(98,105,83,5,'S')
     doc.text('Address: 31 Superdrive Avenue, Clubview, 0157',100,109)
     doc.rect(98,110,83,5,'S')
     doc.text('Tel: (012) 675 9400',100,114)
     doc.rect(98,115,83,5,'S')
     doc.text('Website www.armyfoundation.co.za',100,119)
     // Insurer details
     doc.setFontSize(9)
     doc.setFillColor('#FFEFED')
     doc.rect(15,120,166,5, 'FD')
     doc.setFont('Helvetica','bold')
     doc.setFontSize(9)
     doc.text('Insurer details:',87,123.5)
     doc.setFont('Helvetica','normal')
     // left col
     doc.rect(15,125,83,5,'S')
     doc.text('Insurer name: Shield Life® Ltd',16,129)
     doc.rect(15,130,83,5,'S')
     doc.text('FSP number: 47477',16,134)
     doc.rect(15,135,83,5,'S')
     doc.text('Reg number: 2016/249174/06',16,139)
     doc.rect(15,140,83,5,'S')
     doc.text('FSP Authorised Category I products:',16,144)
     doc.rect(15,145,83,5,'S')
     doc.text('Long-term Insurance: A, B1, B1-A',16,149)
     doc.rect(15,150,83,5,'S')
     doc.text('Short-term Insurance: Personal Lines (PL), PL A1',16,154)
     doc.rect(15,155,83,5,'S')
     doc.text('Participatory interest in a collective investment scheme',16,159)
     doc.rect(15,160,83,5,'S')
     doc.text('Life Insurer approved class and sub-classes of business:',16,164)
     doc.rect(15,165,83,5,'S')
     doc.text('Risk: Individual and Group Death, Individual and Group',16,169)
     doc.rect(15,170,83,5,'S')
     doc.text('Disability-Lump sumFuneral: Individual, Group Credit Life',16,174)
     doc.rect(15,175,83,5,'S')
     doc.text('Conflict of interest:The Conflict of Interest Policy can be',16,179)
     doc.rect(15,180,83,5,'S')
     doc.text('obtained upon written request from the compliance officer.',16,184)
     // Right col
     doc.rect(98,125,83,5,'S')
     doc.text('Website: www.shieldlife.co.za',100,129)
     doc.rect(98,130,83,5,'S')
     doc.text('Professional Indemnity Insurance: Professional Indemnity',100,134)
     doc.rect(98,135,83,5,'S')
     doc.text('Cover & Fidelity Cover are in place. ',100,139)
     doc.rect(98,140,83,5,'S')
     doc.text('Compliance: The Compliance Department can be access',100,144)
     doc.rect(98,145,83,5,'S')
     doc.text('through our website www.shieldlife.co.za or e-mail',100,149)
     doc.rect(98,150,83,5,'S')
     doc.text('compliance@shieldlife.co.za',100,154)
     doc.rect(98,155,83,5,'S')
     doc.text('Complaints:',100,159)
     doc.rect(98,160,83,5,'S')
     doc.text('The Complaints Policy can be access through our website',100,164)
     doc.rect(98,165,83,5,'S')
     doc.text('www.shieldlife.co.za or ',100,169)
     doc.rect(98,170,83,5,'S')
     doc.text('e-mail complaints@shieldlife.co.za',100,174)
     doc.rect(98,175,83,5,'S')
     doc.text('',100,179)
     doc.rect(98,180,83,5,'S')
     doc.text('',100,184)
     // Other important contact details
     doc.setFontSize(9)
     doc.setFillColor('#FFEFED')
     doc.rect(15,185,166,5, 'FD')
     doc.setFont('Helvetica','bold')
     doc.setFontSize(9)
     doc.text('Other important contact details:',75,188.5)
     doc.setFont('Helvetica','normal')
      // left col
      doc.rect(15,190,83,5,'S')
      doc.text('Claims procedure:',16,194)
      doc.rect(15,195,83,5,'S')
      doc.text('All claims enquiries should be address to:',16,199)
      doc.rect(15,200,83,5,'S')
      doc.text(' The Claims Department: Shield Life',16,204)
      doc.rect(15,205,83,5,'S')
     doc.setFont('Helvetica','bold')
      doc.text('PO Box 7309, Centurion, 0046 Tel:  0861 277 873',16,209)
      doc.rect(15,210,83,5,'S')
      doc.text('Email:  claims@shieldlife.co.za',16,214)
      doc.rect(15,215,83,5,'S')
     doc.setFont('Helvetica','normal')
      doc.text('The Authority (For market conduct matters):',16,219)
      doc.rect(15,220,83,5,'S')
      doc.text('For Complaints on the Insurer that are not',16,224)
      doc.rect(15,225,83,5,'S')
      doc.text('resolved to your satisfaction by the',16,229)
      doc.rect(15,230,83,5,'S')
      doc.text('product supplier, please contact:',16,234)
      doc.rect(15,235,83,5,'S')
      doc.text('The Financial Sector Conduct Authority',16,239)
      doc.rect(15,240,83,5,'S')
     doc.setFont('Helvetica','bold')
      doc.text('PO Box 35655, Menlo Park, 0102',16,244)
      doc.rect(15,245,83,5,'S')
      doc.text('Tel: (012) 428 8000, Fax: (012) 347 0221',16,249)
      doc.rect(15,250,83,5,'S')
      doc.text('Email: info@fsca.co.za',16,254)
     doc.setFont('Helvetica','normal')
      // Right col
      doc.rect(98,190,83,5,'S')
      doc.text('The FAIS Ombud (For advice/policy related',100,194)
      doc.rect(98,195,83,5,'S')
      doc.text('matters): The FAIS Ombud',100,199)
      doc.rect(98,200,83,5,'S')
     doc.setFont('Helvetica','bold')
      doc.text('PO Box 74571, Lynnwood Ridge, 0040',100,204)
      doc.rect(98,205,83,5,'S')
      doc.text('Tel:  086 066 3247 or Tel:  (012) 762 5000',100,209)
      doc.rect(98,210,83,5,'S')
      doc.text('Fax: (012) 348 3447',100,214)
      doc.rect(98,215,83,5,'S')
      doc.text('Email:  info@faisombud.co.za',100,219)
      doc.rect(98,220,83,5,'S')
      doc.text('www.faisombud.co.za',100,224)
      doc.rect(98,225,83,5,'S')
     doc.setFont('Helvetica','normal')
      doc.text('The Long-term Insurance Ombud (For Claims/',100,229)
      doc.rect(98,230,83,5,'S')
      doc.text('service related matters):',100,234)
      doc.rect(98,235,83,5,'S')
      doc.text('Ombudsman for Long-term Insurance',100,239)
      doc.rect(98,240,83,5,'S')
     doc.setFont('Helvetica','bold')
      doc.text('Private Bag X45, Claremont, Cape Town, 0102',100,244)
      doc.rect(98,245,83,5,'S')
      doc.text('Tel: 0860 103 236 or (021) 657 5000 www.ombud.co.za',100,249)
      doc.rect(98,250,83,5,'S')
      doc.text('Fax: (021) 674 0951 Email: info@ombud.co.za',100,254)
     doc.setFont('Helvetica','normal')
      doc.addPage()
      // important contact details
     doc.setFontSize(9)
     doc.setFillColor('#FFEFED')
     doc.rect(15,15,166,5, 'FD')
     doc.setFont('Helvetica','bold')
     doc.setFontSize(9)
     doc.text('Important contact details:',80,18.5)
     doc.setFont('Helvetica','normal')
     doc.setFontSize(7)
     // left col
     doc.rect(15,20,83,5)
     doc.text('Premium obligations: The obligations that you assume as premium',16,24)
     doc.rect(15,25,83,5)
     doc.text('payer is indicated in the Insurance Contract. Ensure that you',16,29)
     doc.rect(15,30,83,5)
     doc.text('are fully aware of these obligations.',16,34)
     doc.rect(15,35,83,5)
     doc.text('Premium payments: The due date of premiums and consequences of',16,39)
     doc.rect(15,40,83,5)
     doc.text('non-payment is set out in the conditions of the insurance contract.',16,44)
     doc.rect(15,45,83,5)
     doc.text('Commencement of Insurance: Cover will be active from the first day',16,49)
     doc.rect(15,50,83,5)
     doc.text('of the month in which we receive the first premium. Premiums are ',16,54)
     doc.rect(15,55,83,5)
     doc.text('payable monthly or annually.  A period of thirty (30) days grace',16,59)
     doc.rect(15,60,83,5)
     doc.text('is allowed for payment of each premium due and payable.',16,64)
     doc.rect(15,65,83,5)
     doc.text('Expiry of Insurance cover: All benefits and premiums will cease',16,69)
     doc.rect(15,70,83,5)
     doc.text('to be payable upon the events as described in the policy wording.',16,74)
     doc.rect(15,75,83,5)
     doc.text('Premium & Benefit increase: Policy & Benefit increase are subject',16,79)
     doc.rect(15,80,83,5)
     doc.text('to decisions made by the SA Foundation Board of Control and',16,84)
     doc.rect(15,85,83,5)
     doc.text('Shield Life® Ltd. Incorrect information provided:',16,89)
     doc.rect(15,90,83,5)
     doc.text('Decisions made by Shield Life® Ltd as the insurer, in respect of',16,94)
     doc.rect(15,95,83,5)
     doc.text('insurance or claim, may be influenced by the failure to provide correct',16,99)
     doc.rect(15,100,83,5)
     doc.text('or full information by the insured. Remuneration: Commission will',16,104)
     doc.rect(15,105,83,5)
     doc.text('not exceed the statutory commission as defined by the',16,109)
     doc.rect(15,110,83,5)
     doc.text('Life Insurance Act Cooling off rights: Cooling.',16,114)
     doc.rect(15,115,83,5)
     doc.text(' off rights may be exercised within 31 days after inception',16,119)
     doc.rect(15,120,83,5)
     doc.text('of the membership, where no benefit has been paid or claimed.',16,124)
     doc.rect(15,125,83,5)
     doc.text('A written cancellation form must be completed and send to Shield Life® Ltd.',16,129)
     doc.rect(15,130,83,5)
     doc.text('Cooling off rights can not be exercised if other legislation prohibit it.',16,134)
     // right col
     doc.rect(98,20,83,5)
     doc.text('Insurance Contract understanding: Ensure you understand what benefits',100,24)
     doc.rect(98,25,83,5)
     doc.text('exclusions are applicable to your Insurance Contract.  Make sure you are ',100,29)
     doc.rect(98,30,83,5)
     doc.text('acquainted with: # what is not covered, #  what is restricted and',100,34)
     doc.rect(98,35,83,5)
     doc.text('# If there are any special clauses. # You will be informed of any material',100,39)
     doc.rect(98,40,83,5)
     doc.text('changes to the above mentioned information. # This disclosure notice',100,44)
     doc.rect(98,45,83,5)
     doc.text('serves to provide you with the information in writing if any information',100,49)
     doc.rect(98,50,83,5)
     doc.text('was given to you orally. #  The reason for your claim to be rejected will',100,54)
     doc.rect(98,55,83,5)
     doc.text('always be communicated to you in writing.#  In case of the insurer',100,59)
     doc.rect(98,60,83,5)
     doc.text('cancelling your policy, this will be done in writing to your last',100,64)
     doc.rect(98,65,83,5)
     doc.text('known address or per SMS. #  You will always be entitled to a copy',100,69)
     doc.rect(98,70,83,5)
     doc.text("of your policy, free of charge.# For instructions to access, verify,",100,74)
     doc.rect(98,75,83,5)
     doc.text("or object to personal information processed by Shield Life, please",100,79)
     doc.rect(98,80,83,5)
     doc.text("view our privacy notice on: www.shieldlife.co.za Should any of my",100,84)
     doc.rect(98,85,83,5)
     doc.text("dependants or I have any concerns about the processing of our personal",100,89)
     doc.rect(98,90,83,5)
     doc.text("information, we may raise the matter with Shield Life's Information",100,94)
     doc.rect(98,95,83,5)
     doc.text('Officer at:privacy@shieldlife.co.za',100,99)
     doc.rect(98,100,83,5)
     doc.text('',100,104)
     doc.rect(98,105,83,5)
     doc.text('',100,109)
     doc.rect(98,110,83,5)
     doc.text('',100,114)
     doc.rect(98,115,83,5)
     doc.text('',100,119)
     doc.rect(98,120,83,5)
     doc.text('',100,124)
     doc.rect(98,125,83,5)
     doc.text('',100,129)
     doc.rect(98,130,83,5)
     doc.text('',100,134)
     // Treating Customers Fairly (TCF) Principles
     doc.setFontSize(16)
     doc.setFont('Helvetica','bold')
     doc.text('Treating Customers Fairly (TCF) Principles',40,145)
     doc.setFont('Helvetica','normal')
     doc.setFontSize(7)
     doc.text('Shield Life® Ltd subscribe to the following 6 TCF principles during product creation to meet your requirements and expectation:',25,150)
     doc.rect(15,155,33,35)
     doc.rect(15,155,166,35)
     // text
     doc.setFontSize(9)
     doc.text('Culture',20,160)
     doc.text("Consumers are confident that fair treatment is central to our Company's culture",60,160)
     doc.text('Right Product',20,165)
     doc.text("Consumers have Products & Services that meet their needs",60,165)
     doc.text('Informed',20,170)
     doc.text("Consumers received communication that is clear and in understandable language",60,170)
     doc.text('Suitable Advice',20,175)
     doc.text("Consumers receive suitable advice aimed at their circumstances",60,175)
     doc.text('Meet Expectations',20,180)
     doc.text("Consumers receive Products & Services that will meet their expectations",60,180)
     doc.text('Excellent Service',20,185)
     doc.text("Consumers experience no post-sale barriers",60,185)
     doc.addPage()
     // Army Foundation Membership Information
     doc.setFontSize(16)
     doc.setFont('Helvetica','bold')
     doc.text('Army Foundation Membership Information',40,15)
     doc.setFont('Helvetica','normal')
     doc.setFontSize(7)
     doc.text('We would like to take this opportunity to give you an update on all the benefits that are currently available to you as a member.',25,20)
     doc.setFontSize(9)
     doc.setFillColor('#FFEFED')
     doc.rect(15,30,166,10, 'FD')
     doc.setFont('Helvetica','bold')
     doc.setFontSize(9)
     doc.text('Death, Disability, Accidental and Funeral cover',20,33.5)
     doc.text('underwritten by Shield Life® Ltd',30,38.5)
     doc.text('Rainbow Holiday Club',123,33.5)
     doc.text('administrated by Club Leisure',115,38.5)
     doc.setFont('Helvetica','normal')
     doc.rect(15,30,83,65)
     doc.rect(98,30,83,65)
     // text left col
     doc.setFontSize(7)
     doc.text('You are covered for up to R110 000 for the principal member and',18,45)		
     doc.text('up to R70 000 for your spouse in the event of death Principal',18,50)
     doc.text('Member and Spouse cover includes: Death and disability cover of',18,55)		
     doc.text('R40 000 and Funeral Cover of R30 000. Accidental Death cover for',18,60)
     doc.text('the Principal Member of R40 000. Funeral Cover for Children',18,65)
     doc.text('R10 000 – R20 000 age dependent.*Disability Cover up to',18,70)
     doc.text('R40 000* T&C Apply*If a claim was received and approved for',18,75)
     doc.text('disability, the Life Cover will cease for the Claimant of',18,80)
     doc.text('the Disability.The above amounts is Membership type dependent',18,85)
     doc.text('and T&C Apply',18,90)
     //text right col
     doc.text('The Club provides members with a unique monthly savings opportunity',100,45)
     doc.text('to ensure that members have enough funds available when they want',100,50)
     doc.text("to go on holiday. The member' monthly *savings accumulates in",100,55)
     doc.text('their own Vacation Fund until they are ready to go on holiday.',100,60)
     doc.text('The Club provides 3 options:Silver: R121.00 savings per month ',100,65)
     doc.text('Gold: R181.50 savings per month	Platinum: R302.51 savings per',100,70)
     doc.text('month As a member of Army Foundation, you can apply for membership',100,75)
     doc.text('at your nearest SA Army Foundation branch.',100,80)
     doc.setFontSize(9)
     doc.setFillColor('#FFEFED')
     doc.rect(15,85,166,10, 'FD')
     doc.setFont('Helvetica','bold')
     doc.setFontSize(9)
     doc.text('Funeral Service Benefit Plan',35,88.5)
     doc.text('in partnership with AVBOB Funeral Services',20,93.5)
     doc.text('SA Army Foundation Resorts',120,90.5)
     doc.setFont('Helvetica','normal')
     doc.rect(15,95,83,65)
     doc.rect(98,95,83,65)
     // text left col
     doc.text('You have the following benefits:',18,100)
     doc.text('# Preferential prices for funeral products & services',18,105)
     doc.text('# Customised comprehensive AVBOB Funeral Service',18,110)
     doc.text('Offering.',18,115)
     doc.text('# Transport of deceased within SA borders',18,120)
     doc.text('# Assistance & support with funeral arrangements &',18,125)
     doc.text('funeral conducting',18,130)
     doc.text('# Free telephonic bereavement counselling',18,135)
     doc.text('# After hours service',18,140)
     doc.text('* T&C Apply',18,145)
     // text right col
     doc.text('You have all year access to discounted rates',100,100)
     doc.text('on holidays at the following Army Foundation.',100,105)
     doc.text('resorts',100,110)
     doc.text('# Kruger Park Lodge - Hazyview',100,115)
     doc.text('# Santana Resort – Margate (KZN)',100,120)
     doc.text('# Flamboyant – ST Lucia (KZN)',100,125)
     doc.text('# Rhemardo - Mokgopong',100,130)
     doc.text('* T&C Apply',100,135)
     // next row
     doc.setFontSize(9)
     doc.setFillColor('#FFEFED')
     doc.rect(15,150,166,10, 'FD')
     doc.setFont('Helvetica','bold')
     doc.setFontSize(9)
     doc.text('Adopt A Student Bursary Program',30,156)
     doc.text('Housing',132,156)
     doc.setFont('Helvetica','normal')
     doc.rect(15,160,83,25)
     doc.rect(98,160,83,25)
     doc.text('Provides comprehensive financial aid ',18,165)
     doc.text('to the children of contributing members.',18,170)
     doc.text('* T&C Apply',18,175)
     doc.text('As a member of Army Foundation, you can apply',100,165)
     doc.text('for a rental property at a discounted price',100,170)
     doc.text('in Clubview, Centurion.	',100,175)
     doc.text('* T&C Apply',100,180)
      // next row
      doc.setFontSize(9)
      doc.setFillColor('#FFEFED')
      doc.rect(15,190,166,10, 'FD')
      doc.setFont('Helvetica','bold')
      doc.setFontSize(9)
      doc.text('Mobile Products',40,196)
      doc.text('Financial Assistance',125,196)
      doc.setFont('Helvetica','normal')
      doc.rect(15,200,83,40)
      doc.rect(98,200,83,40)
      doc.text('Available Product Include:',22,205)
      doc.text('# Post-paid airtime from R50 to R300 p.m.',18,210)
      doc.text('and pay for it later.',18,215)
      doc.text('# SA Army Foundation cell phone app and',18,220)
      doc.text('email services is included in',18,225)
      doc.text('your membership.	',18,230)
      doc.text('* T&C Apply as per mobile criteria',18,235)
      doc.text('You may qualify for payday loans up to',105,205)
      doc.text('R2 500 and personal loans up to R30 000.',105,210)
      doc.text('You can also get access to your personal',105,215)
      doc.text('credit report.',105,220)
      doc.text('* T&C Apply as per loan criteria',105,225)
      // next row
      doc.setFontSize(9)
      doc.setFillColor('#FFEFED')
      doc.rect(15,231,166,10, 'FD')
      doc.setFont('Helvetica','bold')
      doc.setFontSize(9)
      doc.text('Gratuity at Retirement',40,238)
      doc.text('SA Army Foundation Memorial Plaques',110,238)
      doc.setFont('Helvetica','normal')
      doc.rect(15,241,83,20)
      doc.rect(98,241,83,20)
      doc.text('Available to employees of the DOD and',18,245)
      doc.text('contributing member for at least 10 years.',18,250)
      doc.text('* T&C Apply ',18,255)
      doc.text('Available to the next of kin for those',105,245)
      doc.text('members who have passed during their term.',105,250)
      doc.text('of service.',105,255)
      doc.text('* T&C Apply',105,260)
      doc.addPage()
      doc.setFontSize(9)
      doc.setFillColor('#FFEFED')
      doc.rect(15,15,166,5, 'FD')
      doc.setFont('Helvetica','bold')
      doc.setFontSize(9)
      doc.text('Important notice',87,18.5)
      doc.setFont('Helvetica','normal')
      doc.rect(15,20,166,10)
      doc.text('When membership is cancelled, the Extended Family Benefit and/or Rainbow Savings is automatically',20,24)
      doc.text('cancelled due to it being rider benefits of membership.',60,29)
      doc.setFillColor('#FFEFED')
      doc.rect(15,30,166,5, 'FD')
      doc.setFont('Helvetica','bold')
      doc.setFontSize(9)
      doc.text('Declaration',90,33.5)
      doc.setFont('Helvetica','normal')
      doc.rect(15,35,166,35)
      doc.text(`I ${fullNames} ${surname} have received and understand the information of the above products`,17,40)
      doc.text('forms part of the SA Army Foundation Membership',17,45)
      // signature
     doc.addImage(signature, 'png', 25,40,35,35)
     doc.text('____________________________',20,60)
     doc.text('Signature of Main Member',25,65)
     doc.text(`Date: ${timeStamp}`,72,65)
     
    // to download pdf
    if(type == 'download'){
      doc.save('Membership_Application.pdf')
      // view pdf
    }else if(type == 'view'){
      window.open(doc.output('bloburl'))
    }else if(type == 'save'){
      var output = doc.output()
      var base64 = btoa(output)
      setBase64Data(`data:application/pdf;base64,${base64}`)
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
    
  const postToApi = async (data) =>{
    console.log('Posting to api...',data)
    // axios.post('localhost:5000/').then(res => console.log(res))
  }

  // if approved send state to backend
  if(approved){
      postToApi(data)
  }
// send email
const email = async (email,data) =>{
  console.log(`Sending email to: ${email} with the following data: ${data}`)
}

useEffect(()=>{
  if(maritalStatus == 'Married'){
    setMemberType('Married')
    if(childrenAmount > 0){
      setMemberType('Married + Children')
    }
  }
  else if(childrenAmount > 0){
    setMemberType('Single + Children')
  }
  if(base64Data == ''){
    pdfPayrollDeductionScript('save')
    
  }
  if(base64Data != ''){
    if(data.length == 0){
      setData({
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
        signature,
        base64Data,
        bankingDetailsDO,
        idParams
      })
  }
  
  }
  
},[memberType,setMemberType,maritalStatus,base64Data,data,setData])
  return(
    <div className="page">
      {approved &&<div className='page'>
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Thank you very much. We will be in contact shortly</h6>

        <div style={{textAlign: 'center'}}>
        <p>While you wait you are welcome to download the agreements</p>
            <Button variant='danger w-50' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none' }} onClick={(e)=> {pdfPayrollDeductionScript('download')}}>
                Download Agreement
            </Button>
        </div>
      </div>}
      {!approved && <div style={{overflow:'scroll',height:600}}>
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>You can view your application now by clicking the button bellow</h6>
        <p>Please note that your application is not completed until you have clicked the "I Accept the Terms of this Agreement" button</p>
          <Button variant='danger w-50' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none' }} onClick={(e)=>pdfPayrollDeductionScript('view')}>View Pdf</Button>
          <Button variant='danger w-75' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none',marginTop: "5vh" }} onClick={(e)=>setApproved(true)}>I Accept the Terms of this Agreement</Button>
        </div>}
        <iframe src={objData} />
    </div>
  ) 
}
export default Document1
