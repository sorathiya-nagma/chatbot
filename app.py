from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


# Rule-based chatbot function
# The chatbot checks the user's message for predefined
# keywords and returns a suitable response.
def chatbot_response(message):

    # Convert the message to lowercase so that
    # "Hello", "HELLO", and "hello" are treated the same.
    message = message.lower().strip()

    # Check for greetings
    if "hello" in message or "hi" in message or "hey" in message:
        return "Hello! 👋 How can I help you?"

    # Check if the user is asking about the chatbot's name
    elif "your name" in message or "who are you" in message:
        return "I am a simple Rule-Based Chatbot."

    # Check for a common question
    elif "how are you" in message:
        return "I'm doing great! 😊 Thanks for asking."

    # Check if the user asks for help
    elif "help" in message:
        return "Sure! You can greet me or ask me a simple question."

    # Check for thanks
    elif "thank" in message or "thanks" in message:
        return "You're welcome! 😊"

    # Check for goodbye
    elif "bye" in message or "goodbye" in message:
        return "Goodbye! 👋 Have a great day!"

    # Check for common greetings
    if "good morning" in message:
        return "Good morning! 🌅 Have a wonderful day!"

    elif "good afternoon" in message:
        return "Good afternoon! ☀️ How can I help you?"

    elif "good evening" in message:
        return "Good evening! 🌆 How are you doing?"

    elif "good night" in message:
        return "Good night! 🌙 Sleep well!"

    elif "hello" in message or "hi" in message or "hey" in message:
        return "Hello! 👋 How can I help you?"

    # Fallback response for unknown input
    else:
        return "Sorry, I don't understand that. Please try another question."


# Display the chatbot webpage
@app.route("/")
def home():
    return render_template("index.html")


# Receive the user's message from the webpage
@app.route("/chat", methods=["POST"])
def chat():

    # Get the message sent by JavaScript
    data = request.get_json()

    user_message = data.get("message", "")

    # Send the message to our rule-based chatbot
    response = chatbot_response(user_message)

    # Send the chatbot response back to the webpage
    return jsonify({
        "response": response
    })


# Start the Flask application
if __name__ == "__main__":
    app.run(debug=True)