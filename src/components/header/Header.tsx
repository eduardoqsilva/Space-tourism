import { ReactNode } from 'react'
import { HeaderStyled } from './Header.styled'


interface HeaderType {
  children: ReactNode
  Url: string
}

export function Header({ children, Url }:HeaderType) {
  return (
    <HeaderStyled Url={Url}>
      <main className='pageContent'>
        {children}
      </main>
    </HeaderStyled>
  )
}