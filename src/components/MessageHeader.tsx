import React from 'react';
import {styled} from '@mui/system';
import Avartar from "./Avartar";
import {Typography} from "@mui/material";


const MainContainer = styled('div')({
    width: '98%',
    display: 'flex',
      flexDirection: 'column',
    marginTop: '10px',


});

const MessageHeader: React.FC<{name?: string}> = ({name= ''}) => {
    return (
        <MainContainer>
            <Avartar username={name} large/>
            <Typography variant='h4' sx={{
                fontWeight: 'bold',
                color: 'white',
                marginLeft: '5px',
                marginRight: '5px',

            }}>{name}</Typography>
            <Typography sx={{
                color:"#b9bbbe",
                marginLeft: '5px',
                marginRight: '5px',
            }}>This is the beginning of your conversation</Typography>
        </MainContainer>
    );
};

export default MessageHeader;
