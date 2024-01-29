'use client' // Error components must be Client Components
import { useEffect } from 'react'

import {
  _ErrorPageWrapper,
  _ErrorPageContent,
  _ErrorPageTitle,
  _ErrorPageDescription,
  _ErrorPageButton
} from 'src/_styles/error'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <_ErrorPageWrapper>
      <_ErrorPageContent>
        <_ErrorPageTitle>Whoa there!</_ErrorPageTitle>
        <_ErrorPageDescription>Something seems to have gone a little pear shaped. Don&apos;t fret, we&apos;re on it and will have the lights back up lickety-split.</_ErrorPageDescription>
        <_ErrorPageButton onClick={ () => reset() } >
          Try again
        </_ErrorPageButton>
      </_ErrorPageContent>
    </_ErrorPageWrapper>
  )
}