import {
  _TextBlock,
    _TextContent,
} from './styles'

const TextBlock = ({content}) => {
  return (
    <_TextBlock>
      <_TextContent>
        {content}
      </_TextContent>
    </_TextBlock>
  )
}

export default TextBlock