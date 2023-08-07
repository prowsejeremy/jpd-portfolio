import React, { useEffect, useRef } from 'react'

import { isElementTypeInteractive } from './helpers'

import './styles.css'

const interactiveElements = [
  'button',
  'a',
  'select',
  'input',
  'textarea',
  'radio',
  'checkbox'
]

type boundingBox = {
  bottom: number,
  height:number,
  left:number,
  right:number,
  top:number,
  width:number,
  x:number,
  y:number
}

let outerBoundingBox:boundingBox
let innerBoundingBox:boundingBox

const CustomCursor = (
  {
    cursorColor='#ffffff',
    disableDefaultCursor=true
  }:
  {
    cursorColor?:string,
    disableDefaultCursor:boolean
  }
) => {

  const outerRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLElement>(null)

  const moveCursor = (x:number, y:number) => {
    
    const transformVal = `translate3D(calc(${x}px - 50%), calc(${y}px - 50%), 0)`

    if (outerRef.current !== null && innerRef.current !== null) {
      outerRef.current.style.transform = transformVal
      innerRef.current.style.transform = transformVal
    }
  }

  const handleMouseMove = (e:MouseEvent): void => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    moveCursor(mouseX, mouseY)
  }

  const handleMouseDown = (e:MouseEvent): void => {
    const element = e.target as HTMLElement
    
    if (isElementTypeInteractive(element, interactiveElements)) {
      outerRef.current?.classList.add('--click')
      innerRef.current?.classList.add('--click')
    }
  }

  const handleMouseUp = (): void => {
    outerRef.current?.classList.remove('--click')
    innerRef.current?.classList.remove('--click')
  }
  
  const handleMouseOver = (e:MouseEvent): void => {
    const element = e.target as HTMLElement
    
    if (isElementTypeInteractive(element, interactiveElements)) {
      outerRef.current?.classList.add('--hover')
      innerRef.current?.classList.add('--hover')
    } else {
      outerRef.current?.classList.remove('--hover')
      innerRef.current?.classList.remove('--hover')
    }
  }

  const handleMouseOut = (): void => {
    outerRef.current?.classList.remove('--hover')
    innerRef.current?.classList.remove('--hover')
  }

  useEffect(() => {
    if (outerRef.current !== null && innerRef.current !== null) {
      outerBoundingBox = outerRef.current.getBoundingClientRect()
      innerBoundingBox = innerRef.current.getBoundingClientRect()

      moveCursor(document.body.clientWidth/2, document.body.clientHeight/2)
    }
  }, [innerRef, outerRef])


  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    disableDefaultCursor ? document.body.classList.add('--remove-cursor') : document.body.classList.remove('--remove-cursor')
    document.documentElement.style.setProperty('--cursorColor', cursorColor);

    // destroy
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)

      document.body.classList.remove('--remove-cursor')
      document.documentElement.style.removeProperty('--cursorColor');
    }
    
  }, [typeof document !== 'undefined'])

  return (
    <>
      <span ref={outerRef} className='custom-cursor cursor-outer' />
      <span ref={innerRef} className='custom-cursor cursor-inner' />
    </>
  )
}

export default CustomCursor