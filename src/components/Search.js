import { Button, Form, FormControl } from 'react-bootstrap'

export default function Search() {
  return (
    <div style={{ margin:"auto" , width :'500px' }}>
        <Form style={{display:'flex' ,}} >
            <FormControl type = 'text' style={{ margin:'0px 10px' }}  />
            <Button>Search</Button>
        </Form>
    </div>
  )
}
