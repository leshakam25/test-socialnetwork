import React from "react";
import classes from "./../Dialogs.module.css";

function Chat(props) {
  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={classes.chat}>
      <div className={classes.chatWindow}></div>
      <div className={classes.chatFoot}>
        <input className={classes.inputData} ref={newMessage} type="text" />
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
