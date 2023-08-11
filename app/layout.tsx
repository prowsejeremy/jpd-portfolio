import { Teko, Inter } from 'next/font/google'

import StyledComponentsRegistry from 'lib/helpers/registry'

import AppWrapper from 'components/AppWrapper'

const headingFont = Teko({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-heading'
})

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-body'
})

export default function RootLayout({children}:{children:React.ReactNode}) {

  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <StyledComponentsRegistry>
          <AppWrapper>
            {children}
          </AppWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
