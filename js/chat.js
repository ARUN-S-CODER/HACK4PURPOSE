// chat.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Chat page loaded and ready.');

    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const sendMessageButton = document.getElementById('send-message-button');

    sendMessageButton.addEventListener('click', function() {
        const messageText = chatInput.value;
        if (messageText.trim() !== '') {
            addMessage('sent', messageText);
            chatInput.value = '';
            // Simulate receiving a message after a delay (for demonstration purposes)
            setTimeout(() => {
                addMessage('received', 'This is a reply message.');
            }, 1000);
        }
    });

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessageButton.click();
        }
    });

    function addMessage(type, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.innerHTML = `
            ${text}
            <span class="timestamp">${new Date().toLocaleTimeString()}</span>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
