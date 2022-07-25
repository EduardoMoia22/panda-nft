import logo from '../../assets/logo.svg'
import { Button } from '../ui/Button/Button'
import { Container } from './Container'

export function Header(){
  return(
    <header>
      <Container>
        <nav className='h-14 flex items-center justify-between mt-10'>
          <img src={logo} alt="Panda NFT" />
          
          <ul className='flex items-center justify-center gap-8'>
            <li>
              <a>
                Home
              </a>
            </li>
            <li>
              <a>
                Discorver
              </a>
            </li>
            <li>
              <a>
                Docs
              </a>
            </li>
            <li>
              <a>
                Blog
              </a>
            </li>
            <li>
              <a>
                About Us
              </a>
            </li>
            <li>
              <a>
                Contact Us
              </a>
            </li>
          </ul>

          <Button>
            Connect Wallet
          </Button>
        </nav>
      </Container>
    </header>
  )
}