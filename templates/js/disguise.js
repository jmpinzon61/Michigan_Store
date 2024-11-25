document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    const chatBody = document.querySelector(".chatbox-body");
    const minimizeButtons = document.getElementById('minimize-btn');
    const chatboxContain = document.querySelector('.chatbox');

    function addMessage(role, text) {
        const message = document.createElement("div");
        message.classList.add("message", role);

        const currentTime = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });

        message.innerHTML = `
        <p>${text}</p>
        <small>${currentTime}</small>
    `;
        chatBody.appendChild(message);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    sendButton.addEventListener("click", () => {
        const messageText = inputField.value.trim();
        if (messageText) {
            addMessage("user", messageText);
            inputField.value = "";

            setTimeout(() => {
                addMessage("support", "Hello. I need help with my order");
            }, 1000);
        }
    });

    const closeButton = document.getElementById('close-btn');
    const chatboxContainer = document.getElementById('chatbox-close');

    closeButton.addEventListener("click", () => {
        chatboxContainer.classList.add('hidden');
    });

    const minimizeButton = document.getElementById('minimize-btn');
    const chatbotBody = document.querySelector('.chatbox-body');

    minimizeButton.addEventListener("click", () => {
        chatboxContainer.classList.toggle('minimized');
    });
});