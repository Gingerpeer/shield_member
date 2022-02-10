// imports 
import MFLogo from '../assets/images/MF_Financial_Services.svg'
import SAArmyLogo from '../assets/images/SA_Army.svg'
import ShieldLogo from '../assets/images/ShieldLife.svg'
// styles

export default function Header(){
  return(
    <div style={{marginTop: '5vh'}} className='Header'>
      <img src={MFLogo} alt='MF Financial Services Logo' style={{padding: '16px'}} />
      <img src={SAArmyLogo} alt='MF Financial Services Logo' style={{padding: '16px'}} />
      <img src={ShieldLogo} alt='MF Financial Services Logo' style={{padding: '16px'}} />
      <h2 style={{color: '#BB1A1B', fontWeight: '700', marginTop: '25px'}}>SA Army Foundation</h2>
      <h5 style={{fontWeight: '600'}}>New Membership</h5>
    </div>
  )
}