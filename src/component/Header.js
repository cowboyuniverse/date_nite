import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MessageIcon from '@material-ui/icons/Message';
import logo from '../style/date-nite5.png'
import '../style/header.css'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import { Link, useHistory} from "react-router-dom";

const Header = (props) => {
    const history = useHistory();
    return(
        <div className='header'>
            {props.backButtonProfile ? (
                <IconButton onClick={()=>history.replace(props.backButtonProfile)}>
                    <ArrowBackIosIcon className='header__icon' fontSize='large'/>
                </IconButton>  
            ):(
                <Link to='/profile'> 
                    <IconButton>
                        <AccountBoxIcon className='header__icon' fontSize='large'/>
                    </IconButton>     
                </Link>
            )}  


 
            <Link to='/'>
                <IconButton>
                    <h2> <img src={logo} className='App-logo' alt='logo'/></h2>
                </IconButton>
            </Link>


            {props.backButton ? (
                <IconButton onClick={()=>history.replace(props.backButton)}>
                    <ArrowBackIosIcon className='header__icon' fontSize='large'/>
                </IconButton>  
            ):(
                <Link to='/chat'>
                <IconButton>
                    <MessageIcon className='header__icon' fontSize='large'/>
                </IconButton>
            </Link>
            )}  
       
 
   
        </div>
    )
}

export default Header


{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p> */}