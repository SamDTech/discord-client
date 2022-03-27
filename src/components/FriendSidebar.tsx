import { styled } from '@mui/system'
import React from 'react'
import AddFriendButton from './AddFriendButton'

const MainContainer = styled('div')({
        width: "224px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#2f3136",
})

const FriendSidebar = () => {
  return (
    <MainContainer>
        <AddFriendButton />
    </MainContainer>
  )
}

export default FriendSidebar