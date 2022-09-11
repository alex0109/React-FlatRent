import React from 'react'
import { Link } from 'react-router-dom'

import { Box, List, ListItem, ListItemButton, 
    ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';


const FuncDrawer = (props) => {
    const side = props.side
  return (
    <Box
        sx={{ width: side === 'top' || side === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={props.toggleDrawer(side, false)}
        onKeyDown={props.toggleDrawer(side, false)}
        >
        <List>
            <Link to='/'>
                <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CodeIcon />
                            </ListItemIcon>
                        <ListItemText>Title</ListItemText>
                        </ListItemButton>
                </ListItem>
            </Link>
        </List>
    </Box>
  )
}

export default FuncDrawer