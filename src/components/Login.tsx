import React from 'react'
import { Container } from '../App'
import { OutreachButton } from './styles/ButtonVariants.styled'

interface Ilogin {
  show?: boolean;
  click: any;
}

const Login :React.FC<Ilogin> = ({show, click}) => {
  return (
    <div>
        {!show ? <Container>
            <OutreachButton onClick={click}>Login</OutreachButton>
        </Container> : null}
    </div>
  )
}

export default Login