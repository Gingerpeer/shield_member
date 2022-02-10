import Continue from "../components/Continue"

const Home = () => {
  return(
    <div className='Home'>
      <h6 style={{fontWeight: '600', marginTop: '25px'}}>Personal Information</h6>
      
      <p>In South Africa, the Protection of Personal Information Act 4 of 2013 (POPIA) has been enacted to regulate the processing of Personal Information. When entering into this policy you provide us with information that may be protected by legislation including but not limited to POPIA.  We will take all reasonable steps to protect the information you provide us securely and confidentially.</p>					
      
      <p>I confirm that my information and all information supplied by me, maybe processed and that I have the legal right to supply the necessary information in this application and the legal right to give consent to process the personal/sensitive/special information.	</p>				
      
      <p>By opting to continue you consent to the use of the information supplied by you for the following reasons:</p>

      <ul>
        <li>Army Foundation membership</li>
        <li>All insurance cover being applied for	</li>
        <li>Any processing required for the insurance product being applied for.</li>
      </ul>	
      <Continue/>
    </div>
  )
}
export default Home