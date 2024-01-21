import { HeaderContainer } from './style'
import LogoSrc from '../../assets/LogoHeader.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoSrc} alt="CodeLogo" />
    </HeaderContainer>
  )
}
