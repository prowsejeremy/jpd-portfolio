import Link from 'next/link'

import {
  _ErrorPageWrapper,
  _ErrorPageContent,
  _ErrorPageTitle,
  _ErrorPageDescription
} from 'styles/error'
 
export default function NotFound() {
  return (
    <_ErrorPageWrapper>
      <_ErrorPageContent>
        <_ErrorPageTitle>404</_ErrorPageTitle>
        <_ErrorPageDescription>Hmm, now how did you end up here? One of us has made a wrong turn along the way 👀<br/><Link href="/">lets get you home!</Link></_ErrorPageDescription>
      </_ErrorPageContent>
    </_ErrorPageWrapper>
  )
}