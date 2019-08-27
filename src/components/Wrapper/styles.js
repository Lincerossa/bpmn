import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  ${props => props.size === 'small' && `max-width: 200px`};
  ${props => props.size === 'regular' && `max-width: 500px`};
  ${props => props.size === 'big' && `max-width: 900px`};
`
