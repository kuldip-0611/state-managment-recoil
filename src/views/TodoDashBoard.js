import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { todoAppState } from '../atoms';
import TodoList from './TodoList';

const TodoDashBoard = () => {
    const [task,setTask] = useState('');
    const [addTask,setTasks] = useRecoilState(todoAppState); 

    const handleClick = ()=>{
        if(task === ''){
            return addTask;
        }
        else{
            setTasks([...addTask,task])
            setTask('')

        }
       
          
    }
    return (
        <div>
            <div className='container bg-dark rounded text-light mt-5'>
                <div className='row'>
                    <div className='col ' style={{ 'borderRight': '1px solid white' }}>
                        <span>{addTask.length}</span>
                        <p>TOTAL TASKS </p>

                    </div>
                    
                </div>
            </div>
            <div className='container'>

                <ListGroup as="ol" numbered className='mt-5'>
                   {
                     addTask.map((item,index)=> <TodoList item={item} index={index} key={index} />)
                   }
                   
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
