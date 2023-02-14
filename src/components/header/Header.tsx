import { ReactNode } from 'react'
import { HeaderStyled } from './Header.styled'
import homeImg from '../../assets/background/home.jpg'

interface HeaderType {
  children: ReactNode
}

export function Header({ children }:HeaderType) {
  return (
    <HeaderStyled Url={homeImg}>
      <main className='pageContent'>
        {children}
      </main>
    </HeaderStyled>
  )
}