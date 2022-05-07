import React, { ReactNode } from 'react'

import * as S from './styled'

interface ParamTypes {
  children: ReactNode | ReactNode[]
}

const SectoinTitle = ({ children }: ParamTypes): JSX.Element => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default SectoinTitle
