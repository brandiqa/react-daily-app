import React, { useEffect } from "react"
import Header from "../components/Header"
import DailyIframe from "@daily-co/daily-js"

const Chat = () => {
  let iframe = document.querySelector("#my_frame")

  useEffect(() => {
    let callFrame = DailyIframe.wrap(iframe)
    callFrame.join({ url: 'https://brandiqa.daily.co/hello' })

   return function cleanup () {
     callFrame.leave()
   }
}, [iframe])

  return (
    <React.Fragment>
      <Header title="Chat" />
      <main className="mt-8">
      </main>
    </React.Fragment>
  )
}

export default Chat
