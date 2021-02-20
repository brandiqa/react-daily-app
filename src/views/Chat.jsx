import React from "react"
import Header from "../components/Header"
import DailyIframe from "@daily-co/daily-js"

const Chat = () => {
  let iframe = window.DailyIframe.createFrame('#app')
  // let iframe = document.querySelector("#my_frame")
  let callFrame = DailyIframe.wrap(iframe)
  callFrame.join({ url: 'https://brandiqa.daily.co/hello' })

  return (
    <React.Fragment>
      <Header title="Chat" />
      <main>
        <p>Chat Interface</p>
      </main>
    </React.Fragment>
  )
}

export default Chat
