export interface initialGlobalStateType {
  transitionState: string,
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  konami: boolean,
  pageTheme: string
}

export const initialGlobalState:initialGlobalStateType = {
  transitionState: 'exiting',
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  konami: false,
  pageTheme: 'brand_1'
}
