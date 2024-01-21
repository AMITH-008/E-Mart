import { Spinner } from "react-bootstrap";


const Loader = () => {
  return (
    <Spinner 
        animation="grow" 
        variant="success" 
        role="status"
        style={{
            width:"100px",
            height:"100px",
            margin:"auto",
            display:"block",
        }}
    />
  )
}

export default Loader;