import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  box-shadow: 0 0 5px #e4e4e4;
  padding: 10px;
  min-height: 200px;
`

export const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 2em;
`

export const List = styled.ul`
  border-top: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
`

export const UserWrapper = styled.li`
  padding: 20px;
  width: 50%;
  background: #fcfbf5;
  border-left: 4px solid #E8BD36;
  color: #8b6e11;
  &:hover {
    background: #ffefef;
  }
`

export const AddButton = styled.button``

export const RemoveBtn = styled.button``
