import Next from "../components/Next"

const Information = () =>{
  
  return(
    <div className="page">
      <h6 style={{fontWeight: '600', marginTop: '25px'}}>Instructions</h6>
      <ol>
        <li>Please complete the form below.</li>
        <li>Fields marked with an * are mandatory.</li>
        <li>Click submit sign in boxes provided if applicable.</li>
        <li>Upload required identification documents when prompted.</li>
      </ol>
      <h6 style={{fontWeight: '600', marginTop: '25px'}}>Documentation that may be required</h6>
      <ol type='a'>
        <li>Your Identification.</li>
        <li>Your Beneficiaries Identification.</li>
        <li>Your spouse’s Identification.</li>
        <li>Marriage Certificate or Equivalent.</li>
        <li>Your Children’s Identification or Unabridged Birth Certificate.</li>
      </ol>
      <p style={{fontWeight: '600 '}}>Note: The above mentioned documentation can be uploaded at any time after you have uploaded your information, by using this link: *insert link here*</p>
      <Next/>
    </div>
  )
}
export default Information