import React from 'react'
import '../style/swipebuttons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'


const SwipeButtons = () => {
    return(
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <ReplayIcon fontSize='large'/>  
            </IconButton>
            <IconButton className='swipeButtons__closeIcon'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__starRateIcon'>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__favoriteIcon'>
                <FavoriteIcon fontSize='large'/>    
            </IconButton>
            <IconButton className='swipeButtons__flashOnIcon'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
                  
  
            

        </div>
    )
}

export default SwipeButtons