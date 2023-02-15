
import { BackgroundImage, BackgroundGradient } from './style'
import backgroundImage from '../../assets/fundo.svg'

function Background({children}) {
  return (
    <BackgroundImage bgImage={backgroundImage}>
        <BackgroundGradient>{children}</BackgroundGradient>
    </BackgroundImage>
  )
}

export default Background