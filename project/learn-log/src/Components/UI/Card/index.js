import "./index.css"

const Card = (props) => {
  const { children } = props

  return <div className={`card ${props.className}`}>{children}</div>
}

export default Card
