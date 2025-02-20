import React from 'react'

const OutputDisplay = ({messages}) => {
  return (
   <>
   <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
   </>
  )
}

export default OutputDisplay