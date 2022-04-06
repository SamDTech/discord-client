import React from 'react';
import {styled} from "@mui/system";

interface IMessageProps {
    _id: string;
    content: string;
    sameAuthor: boolean,
    author: {
        username: string,
    },
    date: string,
    sameDay: boolean,

}

const MainContainer = styled('div')({
    width: '97%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',


});

const AvatarContainer = styled('div')({
    width: '70px',

});

const MessageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',

});

const MessageContent = styled('div')({
    color: "#dcddde"

});

const SameAuthorMessageContent = styled('span')({
    marginLeft: "70px"

});

const SameAuthorMessageText = styled('span')({
    marginLeft: "70px"

});


const Message: React.FC<{ message: IMessageProps }> = ({
                                                           message: {
                                                               _id, content, sameAuthor, author, date, sameDay
                                                           }
                                                       }) => {
    if (sameAuthor && sameDay) {
        return (
            <SameAuthorMessageContent>
                <SameAuthorMessageText>{content}</SameAuthorMessageText>
            </SameAuthorMessageContent>
        )
    }
    return (
        <div>
            message
        </div>
    );
};

export default Message;
