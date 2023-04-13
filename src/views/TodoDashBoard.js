import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const TodoDashBoard = () => {
    const [task,setTask] = useState('');

    const handleClick = ()=>{
        console.log(task)
    }
    return (
        <div>
            <div className='container bg-dark rounded text-light mt-5'>
                <div className='row'>
                    <div className='col ' style={{ 'borderRight': '1px solid white' }}>
                        <span>1</span>
                        <p>TASKS COMPLETE</p>

                    </div>
                    <div className='col'>
                        <span>2</span>
                        <p>TASKS REMAINING</p>
                    </div>
                </div>
            </div>
            <div className='container'>

                <ListGroup as="ol" numbered className='mt-5'>
                    <ListGroup.Item as="li" className='bg-dark text-light'>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item as="li" className='bg-dark text-light'>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item as="li" className='bg-dark text-light'>Cras justo odio</ListGroup.Item>
                </ListGroup>

            </div>
            <div className='container mt-5'>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Tasks"
                    className="mb-3 "
                >
                    <Form.Control as="textarea" placeholder="Leave a comment here" value={task} onChange={(e)=>setTask(e.target.value)}  />
                </FloatingLabel>
                <Button className='bg-dark' onClick={handleClick}>Add Task </Button>
                
            </div>

        </div>
    )
}

export default TodoDashBoard
