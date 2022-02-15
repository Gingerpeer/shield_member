import { useState } from 'react'
import PayrollDeductionScript from '../components/PayrollDeductionScript'
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

  const postToApi = () =>{
    console.log('Posting to api...')
  }

  
  return(
    <div className="page">
      {payrollScript && <PayrollDeductionScript signature={signature} />}
        

        <div style={{textAlign: 'center'}}>
            <Button variant='danger w-50' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', marginTop: '10vw' }} onClick={(e)=> {setPayrollScript(false)}}>
            Agree to the above
            </Button>
        </div>
    </div>
  ) 
}
export default Document
