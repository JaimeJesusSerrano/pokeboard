import styled from 'styled-components'

export const BoardWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 40px;
  width: 100%;
`

export const Item = styled.div`
  margin: 4px 0 4px 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: calc(100% - 32px);
  overflow-y: hidden;
`
