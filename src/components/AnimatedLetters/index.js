import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span style={{fontFamily:'Abril Fatface',fontWeight:' bolder'}}>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
          
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
