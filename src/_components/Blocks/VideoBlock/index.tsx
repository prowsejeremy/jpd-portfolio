import {
  _VideoWrapper,
    _Video,
} from './styles'

const VideoBlock = ({src}:{src:string}) => {
  return (
    <_VideoWrapper>
      <_Video autoPlay muted loop controls={false}>
        <source src={src} type='video/mp4' />
      </_Video>
    </_VideoWrapper>
  )
}

export default VideoBlock