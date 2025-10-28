import React, { useState, useEffect, useRef } from 'react'
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [threadId, setThreadId] = useState(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessages = [
        {
          text: "Hello! I'm your shopping assistant. How can I help you today?", 
          isAgent: true 
        }
      ]
      setMessages(initialMessages)
    }
  }, [isOpen, messages.length]) 

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])


  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  console.log(messages)
  
  const handleSendMessage = async (e) => {
    e.preventDefault()
    console.log(inputValue)

    const message = {
      text: inputValue, 
      isAgent: false,    
    }
    
    setMessages(prevMessages => [...prevMessages, message])
    setInputValue("")

    const endpoint = threadId ? `http://localhost:8000/chat/${threadId}` : 'http://localhost:8000/chat'

    try {
      
      const response = await fetch(endpoint, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue 
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('Success:', data)
      
      const agentResponse = {
        text: data.response,   
        isAgent: true,          
        threadId: data.threadId 
      }
      

      setMessages(prevMessages => [...prevMessages, agentResponse])
      setThreadId(data.threadId)
      console.log(messages)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className={`chat-widget-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <>
          {/* Chat header with title and close button */}
          <div className="chat-header">
            <div className="chat-title">
              {/* Robot icon */}
              <FaRobot />
              {/* Chat title text */}
              <h3>Shop Assistant</h3>
            </div>
            {/* Close button with X icon */}
            <button className="close-button" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          {/* Messages container */}
          <div className="chat-messages">
            {/* Map through messages array to render each message */}
            {messages.map((message, index) => (
              // Container for each message (key prop required for React lists)
              <div key={index}>
                {/* Message bubble with conditional CSS class for styling */}
                <div className={`message ${message.isAgent ? 'message-bot' : 'message-user'}`}>
                  {/* Display message text */}
                  {message.text}
                </div>
              </div>
            ))}

            {/* Invisible div at bottom for auto-scroll reference */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input form for sending messages */}
          <form className="chat-input-container" onSubmit={handleSendMessage}>
            {/* Text input field */}
            <input
              type="text"                          
              className="message-input"             
              placeholder="Type your message..."   
              value={inputValue}                   
              onChange={handleInputChange}         
            />
            {/* Send button */}
            <button
              type="submit"                       
              className="send-button"               
              disabled={inputValue.trim() === ''}   
            >
              {/* Paper plane icon for send button */}
              <FaPaperPlane size={16} />
            </button>
          </form>
        </>
      ) : (
        /* Chat toggle button (shown when chat is closed) */
        <button className="chat-button" onClick={toggleChat}>
          {/* Comment/chat icon */}
          <FaCommentDots />
        </button>
      )}
    </div>
  )
}

export default ChatWidget
