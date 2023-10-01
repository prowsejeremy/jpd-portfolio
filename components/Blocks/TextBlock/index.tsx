import {
  _TextBlock,
    _TextContent,
} from './styles'

const TextBlock = ({content}:{content:string}) => {
  return (
    <_TextBlock>
      <_TextContent dangerouslySetInnerHTML={{__html: content}} />
    </_TextBlock>
  )
}

export default TextBlock