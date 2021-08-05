import React,{useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ({Movies,setMoviedata}) => {
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [rate, setRate] = useState(0)
    const [description, setDescription] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addmovie=()=>{
       const newmovie={Title:title, image:url, rating:Number(rate), description:description}
       setMoviedata([...Movies,newmovie])
       handleClose()
    }
    return (
        <div>
     <Button variant="primary" onClick={handleShow} style={{backgroundColor:'transparent', borderRadius:' 40% 10%', border:'solid white', padding:'10px',marginBottom:'10px', fontWeight:'bold',fontSize:'1.5rem'}}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
    <Form.Group >
    <Form.Label>Title</Form.Label>
    <Form.Control type="url" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
   </Form.Group>

   <Form.Group >
    <Form.Label>Url</Form.Label>
    <Form.Control type="text" placeholder="Url" onChange={(e)=>{setUrl(e.target.value)}}/>
   </Form.Group>

   <Form.Group >
    <Form.Label>rate</Form.Label>
    <Form.Control type="number" placeholder="rate" onChange={(e)=>{setRate(e.target.value)}}/>
   </Form.Group>

   <Form.Group >
    <Form.Label>description</Form.Label>
    <Form.Control type="text" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} />
   </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
