import { Menu, Table } from '@mui/material';
import Fade from '@mui/material/Fade';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Badge from '@mui/material/Badge';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector,useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { RMV } from '../redux/action';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const[totPrice,setTotPrice]=useState(0);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //to get cart details (redux -> useSelector hook)
    const carts = useSelector((state) => state.cardReducer.carts)
    var tot=0
    carts.map((item)=>{
        tot=tot+item.price*item.qty;
    })
    
    //Remove the item from cart
    const dispatch = useDispatch();
    const removeItem =(id)=>{
        dispatch(RMV(id));
    }




    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ width: "20px" }} src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000" alt="" />
                    </Navbar.Brand>
                    <div className='d-flex justify-content-beetween align-item-center'>
                        <div>
                            <Nav className="me-auto">

                                <NavLink to="/" className="text-light mt-2" style={{ textDecoration: "none" }}>Home</NavLink>
                            </Nav>


                        </div>
                        <div>
                            <Nav id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick} >
                                <Nav.Link href="#home">
                                    <Badge badgeContent={carts.length} color="primary">
                                        <ShoppingCartRoundedIcon />
                                    </Badge>


                                </Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </Container>
            </Navbar>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <div style={{ width: "370px", padding: "10px" }}>
                    <div className='me-auto' style={{ display: "flex", justifyContent: "end" }}>
                        <CloseIcon style={{ cursor: "pointer" }} onClick={() => { handleClose() }} />
                    </div>
                    <div>
                       
                        {
                        carts.length > 0 ?
                            <div>
                                <Table>
                                    <thead>
                                        <tr>
                                            <td>
                                                Image
                                            </td>
                                            <td>
                                                Name
                                            </td>
                                            <td>
                                                Price
                                            </td>
                                            <td>
                                                Action
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts.map((item) => {
                                                //
                                                return (
                                                    <tr className='p-3'>
                                                        <td>
                                                            <img style={{width:"80px",height:"80px",padding:"3px"}} src={item.url} alt="" />
                                                        </td>
                                                        <td>
                                                            <h6>{item.title}</h6>
                                                            <span>Qty : {item.qty}</span>
                                                        </td>
                                                        <td>
                                                            <h6>{item.qty*item.price}</h6>
                                                        </td>
                                                        <td>
                                                            <DeleteIcon style={{cursor:"pointer"}} onClick={()=>{removeItem(item.id)}} color='error'/>
                                                        </td>

                                                    </tr>
                                                );
                                            })
                                        }
                                        <div>
                                            <strong>Total Price : </strong><span className='text-success'>{tot}</span>
                                        </div>
                                    </tbody>

                                </Table>
                            </div> :

                            < div className='text-center'>
                                <span className='text-muted'> Your cart is empty!!</span>
                            </div>}

                    </div>
                </div>
            </Menu>

        </div>
    )
}

export default Header
