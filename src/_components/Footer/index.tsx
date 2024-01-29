import {
  _FooterWrapper,
    _FooterItems,
      _FooterLink
} from './styles'

export default function Footer() {

  return (
    <_FooterWrapper>
      <_FooterItems>
        <_FooterLink href='mailto:prowsejeremy@gmail.com' target='_blank'>EMAIL</_FooterLink>
        <_FooterLink href='https://linkedin.com/in/prowsejeremy' target='_blank'>LINKEDIN</_FooterLink>
        <_FooterLink href='https://github.com/prowsejeremy' target='_blank'>GITHUB</_FooterLink>
      </_FooterItems>
    </_FooterWrapper>
  )
}
