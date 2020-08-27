import React from 'react'

/* eslint-disable */
export default function SmallLogo(props) {
  let { style, classes } = props
  // const rect1Styles = {
  //   {fill:url(#Naamloos_verloop_4)}.cls-2{fill:#fff}.cls-3{fill:#72be89}
  // }

  if (!style) {
    style = { fill: '#F52727', height: '1.3em' }
  }

  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 52 85'
      height='38px'
      className={classes}
    >
      <defs>
        <linearGradient
          id='Naamloos_verloop_4' 
          x1='0.1'
          y1='42.51'
          x2='52.67'
          y2='42.51'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#3c529f'/>
          <stop offset='1' stopColor='#201e42'/>
        </linearGradient>
      </defs>
      <title>Logo-smallArtboard 1</title>
      <rect x='0.1' y='0.1' width='52.57' height='84.82' fill='transparent' />
      <path d='M13.84,28.55c1.67,0,2.5.88,2.5,2.63V65.13a6.87,6.87,0,0,0,2.38,5.14c1.19,1.25,3.16,1.88,5.89,1.88.08,0,.42,0,1-.13a1,1,0,0,0,.5.13c.09,0,.13,0,.13-.13l.63.13h.25q5.76,0,7.51-3.63a6.28,6.28,0,0,0,1-2.64q-.14-14-.13-21.42V32.31c0-2.25.42-3.38,1.25-3.38,0-.15.42-.27,1.26-.38,1.58.17,2.38.8,2.38,1.88a8.48,8.48,0,0,1,.12,1.51V65.26q0,6.17-5.76,10Q32.35,77,27,77H26a1.36,1.36,0,0,1-.63-.12,3.75,3.75,0,0,1-.87.12q-9.18,0-12.41-8a12.28,12.28,0,0,1-.62-3.76V31.06C11.46,29.39,12.25,28.55,13.84,28.55Z' fill='#ffffff'/>
      <rect fill='#72be89' x='-0.55' y='34.63' width='53.07' height='4.98' rx='1.44' ry='1.44' transform='translate(63.11 11.13) rotate(90)'/>
    </svg>
  )
}

