import styled from 'styled-components'

export const Padder = styled.div`
  ${props => props.size === 'small' && `padding: 1rem 0`};
  ${props => props.size === 'regular' && `padding: 2rem 0`};
  ${props => props.size === 'big' && `padding: 3rem 0`};
`
