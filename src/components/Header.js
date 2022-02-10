// imports 
import MFLogo from '../assets/images/MF_Financial_Services.svg'
import SAArmyLogo from '../assets/images/SA_Army.svg'
import ShieldLogo from '../assets/images/ShieldLife.svg'
// styles

export default function Header(){
  return(
    <div style={{marginTop: '5vh'}} className='Header'>
      <img src={MFLogo} alt='MF Financial Services Logo' />
      <img src={SAArmyLogo} alt='MF Financial Services Logo' />
      <img src={ShieldLogo} alt='MF Financial Services Logo' />
      <h1 style={{color: '#BB1A1B'}}>SA Army Foundation</h1>
      <h2>New Membership</h2>
    </div>
  )
}