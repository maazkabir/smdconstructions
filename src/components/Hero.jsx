import styled from 'styled-components'

const Hero = styled.section`
  position: relative;
  ${'' /* to make the background go into header on desktop */}
  margin-top: -9rem;
  overflow: hidden;
  margin-bottom: ${props => (props.single ? '4rem' : '6rem')};
  @media (max-width: ${props => props.theme.breakpoints.m}), (max-device-width: ${props => props.theme.breakpoints.m}) {
    ${props => (props.single ? '40vw' : '60vw')};
    ${'' /* Yo make the header go down in mobile */}
    margin-top: 1rem !important;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}), (max-device-width: ${props => props.theme.breakpoints.s}) {
    ${props => (props.single ? '300px' : '400px')};
    ${'' /* Yo make the header go down in mobile */}
    margin-top: 1rem !important;

  }
  @media (max-width: ${props => props.theme.breakpoints.xs}),
    (max-device-width: ${props => props.theme.breakpoints.xs}) {
    height: 400px;
    margin-top: -7rem;
  }
`

export default Hero
