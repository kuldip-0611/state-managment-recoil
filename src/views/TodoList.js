import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useRecoilState } from 'recoil';
import { todoAppState } from '../atoms';
import { Button } from 'react-bootstrap';


const TodoList = ({ item, index }) => {
    const [data, setData] = useRecoilState(todoAppState)
    const handleDelete = (index) => {
        const temp = [...data]
        // temp.splice(index, 1)
        temp.splice(index, 1)
        setData(temp)



    }

    return (
        <div >
            <ListGroup>
                <ListGroupItem
                    href="#"
                    tag="a"
                    className='d-flex justify-content-around align-items-center'
                >
                    {item}
                    <Button onClick={() => handleDelete(index)}> <AiFillDelete /></Button>
                </ListGroupItem>

            </ListGroup>

        </div>
    )
}

export default TodoList
