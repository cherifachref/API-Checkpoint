import React from 'react';
import { Button,Card } from 'react-bootstrap';

function Card01({name,email,avatar}) {
  return (
  <div >
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
  </div>
  )
  
}

export default Card01;
