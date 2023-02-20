import { ReactNode } from 'react'
import { HeaderStyled, headerType } from './Header.styled'


interface HeaderType  extends headerType {
  children: ReactNode
}

export function Header({ children, Url, flex = false, align='center', justify='center', hiddenX, hiddenY }:HeaderType) {
  return (
    <HeaderStyled
      Url={Url} flex={flex}
      align={align} justify={justify}
      hiddenX={hiddenX} hiddenY={hiddenY}
    >
      
      <main className='pageContent'>
        {children}
      </main>
    </HeaderStyled>
  )
}