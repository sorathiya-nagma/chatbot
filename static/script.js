const messageInput = document.getElementById("messageInput");
const chatArea = document.getElementById("chatArea");
const sendBtn = document.getElementById("sendBtn");
const welcome = document.getElementById("welcome");


// =============================
// Send Message
// =============================

async function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }


    // Remove welcome screen
    if (welcome) {
        welcome.style.display = "none";
    }


    // Add user message
    addMessage(message, "user");


    // Clear input
    messageInput.value = "";

    autoResize();


    // Disable button
    sendBtn.disabled = true;


    // Show typing indicator
    const typingElement = showTyping();


    try {

        const response = await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });


        const data = await response.json();


        // Remove typing indicator
        typingElement.remove();


        // Add chatbot response
        addMessage(data.response, "bot");


    } catch (error) {

        typingElement.remove();

        addMessage(
            "Sorry, something went wrong. Please try again.",
            "bot"
        );

        console.error(error);

    }


    sendBtn.disabled = false;

    messageInput.focus();
}


// =============================
// Add Message
// =============================

function addMessage(text, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.className = `message ${sender}-message`;


    const avatar = document.createElement("div");

    avatar.className = "message-avatar";

    avatar.textContent =
        sender === "user" ? "👤" : "🤖";


    const content = document.createElement("div");

    content.className = "message-content";

    content.textContent = text;


    messageDiv.appendChild(avatar);

    messageDiv.appendChild(content);


    chatArea.appendChild(messageDiv);


    scrollToBottom();
}


// =============================
// Typing Indicator
// =============================

function showTyping() {

    const messageDiv = document.createElement("div");

    messageDiv.className = "message bot-message";


    const avatar = document.createElement("div");

    avatar.className = "message-avatar";

    avatar.textContent = "🤖";


    const content = document.createElement("div");

    content.className = "message-content";


    const typing = document.createElement("div");

    typing.className = "typing";


    for (let i = 0; i < 3; i++) {

        const dot = document.createElement("span");

        typing.appendChild(dot);

    }


    content.appendChild(typing);

    messageDiv.appendChild(avatar);

    messageDiv.appendChild(content);

    chatArea.appendChild(messageDiv);


    scrollToBottom();


    return messageDiv;
}


// =============================
// Suggestion Buttons
// =============================

function sendSuggestion(message) {

    messageInput.value = message;

    sendMessage();
}


// =============================
// New Chat
// =============================

function newChat() {

    chatArea.innerHTML = "";

    const newWelcome = document.createElement("div");

    newWelcome.className = "welcome";

    newWelcome.id = "welcome";


    newWelcome.innerHTML = `
        <div class="welcome-icon">
            🤖
        </div>

        <h1>How can I help you?</h1>

        <p>
            I'm a rule-based chatbot powered by Python and Flask.
        </p>

        <div class="suggestions">

            <button onclick="sendSuggestion('Hello')">
                <span>👋</span>
                <div>
                    <strong>Say hello</strong>
                    <small>Start a conversation</small>
                </div>
            </button>

            <button onclick="sendSuggestion('What is Python?')">
                <span>🐍</span>
                <div>
                    <strong>Ask about Python</strong>
                    <small>Learn about Python</small>
                </div>
            </button>

            <button onclick="sendSuggestion('What is Flask?')">
                <span>🌐</span>
                <div>
                    <strong>Ask about Flask</strong>
                    <small>Learn about Flask</small>
                </div>
            </button>

            <button onclick="sendSuggestion('What is HTML?')">
                <span>💻</span>
                <div>
                    <strong>Ask about HTML</strong>
                    <small>Learn web development</small>
                </div>
            </button>

        </div>
    `;


    chatArea.appendChild(newWelcome);

    messageInput.value = "";

    messageInput.focus();
}


// =============================
// Clear Chat
// =============================

function clearChat() {

    newChat();

}


// =============================
// Enter Key
// =============================

function handleKeyDown(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

    }

}


// =============================
// Auto Resize Textarea
// =============================

messageInput.addEventListener("input", autoResize);


function autoResize() {

    messageInput.style.height = "auto";

    messageInput.style.height =
        Math.min(messageInput.scrollHeight, 120) + "px";
}


// =============================
// Scroll to Bottom
// =============================

function scrollToBottom() {

    chatArea.scrollTo({

        top: chatArea.scrollHeight,

        behavior: "smooth"

    });

}


// Focus input when page loads
messageInput.focus();