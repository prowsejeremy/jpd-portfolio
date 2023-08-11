import {
  _Button
} from './styles'

type ButtonPropTypes = {
  text: string;
  action?: Function;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export default function BasicButton({text, action, type='button'}:ButtonPropTypes) {
  return (
    <_Button onClick={() => action && action()} type={type}>{text}</_Button>
  )
}