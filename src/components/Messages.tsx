import React, {useEffect, useRef} from 'react'
import {styled} from  '@mui/system'
import MessageHeader from './MessageHeader'
import {useDispatch, useSelector}     from "react-redux";
import {RootState} from "../store/reducers";
import DUMMY_MESSAGES from "../DUMMYDATA";
import Message from "./Message";

const MainContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'calc(100% - 60px)',
    overflow: 'auto',
    alignItems: 'center',

})

const Messages = () => {
  const {chosenChatDetails} = useSelector((state: any )=> state.chat)

  return (
    <MainContainer>
      <MessageHeader name={chosenChatDetails?.username} />
        {DUMMY_MESSAGES.map((message: any, index: number) => {
          return (
            <Message
              key={message._id}
              message={message}
            />
          )
        })}
    </MainContainer>
  )
}

export default Messages