import Button from 'react-bootstrap/Button'
import './TextButton.css'

function TextButton(props) {
  return (
    <Button variant='outline-primary' 
            size='lg'
            onClick={props.onClick}>
      {props.text}
    </Button>
  )
}

export default TextButton