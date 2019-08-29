import React, { useRef, useEffect } from 'react'
import anime from 'animejs'
import { MdClose } from 'react-icons/md'
import * as S from './styles'

export default ({ children, onClose, direction = 'right' }) => {
  const sidebar = useRef()

  function handleClose() {
    anime({
      targets: sidebar.current,
      duration: 250,
      easing: 'easeInOutExpo',
      ...(direction === 'right' && { right: '-280px' }),
      ...(direction === 'left' && { left: '-280px' }),
      complete: () => {
        onClose()
      },
    })
  }

  useEffect(() => {
    if (!sidebar.current) return

    anime({
      targets: sidebar.current,
      duration: 250,
      easing: 'easeInOutExpo',
      ...(direction === 'right' && { right: '0' }),
      ...(direction === 'left' && { left: '0' }),
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebar])

  return (
    <>
      <S.Sidebar ref={sidebar} direction={direction}>
        <S.Close onClick={handleClose}>
          <MdClose />
        </S.Close>
        {children}
      </S.Sidebar>
      <S.Fullscreen backgroundColor="black" opacity={0.3} />
    </>
  )
}
