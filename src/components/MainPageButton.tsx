import { Button } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import React from 'react'

const MainPageButton = () => {
  return (
    <Button>
        <GroupsIcon style={{
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            margin: 0,
            padding: 0,
            minWidth: 0,
            marginTop: "10px",
            color: "#fff",
            backgroundColor: "#5865F2",
            


        }} />
    </Button>
  )
}

export default MainPageButton