import { ReactNode } from 'react'
import { HeaderStyled } from './Header.styled'


interface HeaderType {
  children: ReactNode
  Url: string
  flex?: boolean
}

export function Header({ children, Url, flex = false }:HeaderType) {
  return (
    <HeaderStyled Url={Url} flex={flex}>
      <main className='pageContent'>
        {children}
      </main>
    </HeaderStyled>
  )
}