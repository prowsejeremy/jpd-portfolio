import {initialGlobalStateType} from 'lib/Store/initialState'

type GlobalActions =
  | {type: 'setTransitionState'; value: string}
  | {type: 'isMobile'; value: boolean}
  | {type: 'isTablet'; value: boolean}
  | {type: 'isDesktop'; value: boolean}
  | {type: 'setTheme'; value: boolean}
  | {type: 'setKonami'; value: boolean}
  | {type: 'setPageTheme'; value: string}


export const reducer = (state: initialGlobalStateType, action: GlobalActions) => {
  switch (action.type) {
    case 'setTransitionState':
      return { ...state, transitionState: action.value }
    case 'isMobile':
      return { ...state, isMobile: action.value }
    case 'isTablet':
      return { ...state, isTablet: action.value }
    case 'isDesktop':
      return { ...state, isDesktop: action.value }
    case 'setTheme':
      return { ...state, theme: action.value }
    case 'setKonami':
      return { ...state, konami: action.value }
    case 'setPageTheme':
      return {...state, pageTheme: action.value}
    default:
      throw new Error('Unexpected action')
  }
}
