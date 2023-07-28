export interface initialGlobalStateType {
  transitionState: boolean,
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  konami: boolean
}

export const initialGlobalState:initialGlobalStateType = {
  transitionState: false,
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  konami: false
}
