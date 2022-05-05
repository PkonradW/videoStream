import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import ChatRoom from '../ChatRoom/ChatRoom';
import VideoPlayer from '../videoPlayer/videoPlayer';
import 'antd/dist/antd.css';
import './Room.css';
import { PageHeader } from 'antd';
import 'react-banner/dist/style.css'
import { Link } from "react-router-dom";
import useChat from "../../Use/useChat";




const Room = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
	const { roomId, name } = { ...props.match.params};
	const { messages, sendMessage } = useChat(roomId);

  return (
    <>
		<div>
				<PageHeader
					className="site-page-header"
					onBack={showDrawer}
					title="Bob"
					subTitle={props.match.params.roomId}
					extra={[
						<Link key="3" to="/">Change Room</Link>,
					]}
					avatar={{ src: 'https://i.imgur.com/KEYfj7M.png' }}
				/>
		</div>
			<div>
				<VideoPlayer { ...props.match.params}/>
			</div>
      <Drawer title="Chat" placement="left" onClose={onClose} visible={visible} >
				<ChatRoom name={name} messages={messages} sendMessage={sendMessage}/>
      </Drawer>
    </>
  );
};

export default Room;