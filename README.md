# 🤖 Rule-Based Chatbot

A simple web-based chatbot developed using **Python and Flask**. The chatbot responds to user messages using predefined rules and keywords with basic `if-elif-else` logic.

## 📌 Project Overview

This project demonstrates how a basic rule-based chatbot works.

The chatbot receives a message from the user, checks the message for predefined keywords, and returns an appropriate response. If no matching rule is found, the chatbot provides a fallback response.

## ✨ Features

* 👋 Common greetings
* 🌅 Good morning response
* ☀️ Good afternoon response
* 🌆 Good evening response
* 🌙 Good night response
* 🤖 Questions about the chatbot
* 😊 Common conversation responses
* 👋 Goodbye responses
* ❓ Fallback response for unknown input
* 💬 Interactive chat interface
* 📱 Responsive user interface

## 🛠️ Technologies Used

* **Python** — Chatbot logic
* **Flask** — Web framework and backend
* **HTML** — Webpage structure
* **CSS** — User interface styling
* **JavaScript** — Interactive chat functionality

## ⚙️ How It Works

The chatbot follows a simple rule-based approach:

```text
User enters a message
        ↓
Flask receives the message
        ↓
Python converts the message to lowercase
        ↓
Predefined keywords are checked
        ↓
Matching rule found?
      /       \
    Yes        No
     ↓          ↓
Response     Fallback
     ↓          ↓
       User receives response
```

The chatbot uses `if-elif-else` conditions to decide which response to return.

For example:

```python
if "hello" in message:
    return "Hello! How can I help you?"

elif "good morning" in message:
    return "Good morning! Have a wonderful day!"

else:
    return "Sorry, I don't understand that."
```

## 📂 Project Structure

```text
chatbot/
│
├── app.py
│
├── README.md
│
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/chatbot.git
```

### 2. Open the project folder

```bash
cd chatbot
```

### 3. Install Flask

```bash
py -m pip install flask
```

### 4. Run the application

```bash
py app.py
```

### 5. Open the chatbot

Open your browser and visit:

```text
http://127.0.0.1:5000
```

## 💬 Example Conversation

```text
User: Hello
Bot: Hello! 👋 How can I help you?

User: Good morning
Bot: Good morning! 🌅 Have a wonderful day!

User: What is Python?
Bot: Python is a popular programming language.

User: What is a chatbot?
Bot: A chatbot is a program that communicates with users through messages.

User: xyzabc
Bot: Sorry, I don't understand that. Please try another question.

User: Bye
Bot: Goodbye! 👋 Have a great day!
```

## 🎯 Project Objective

The objective of this project is to understand the basic working of a **rule-based chatbot** and learn how Python backend logic can be connected to a web interface using Flask.

## 🔮 Future Scope

The chatbot can be improved in the future by adding:

* More predefined conversation rules
* Database support
* Chat history
* User authentication
* Natural Language Processing (NLP)
* AI-based responses
* Voice input and output

## 👩‍💻 Author

**Nagma Sorathiya**

### Project

**Rule-Based Chatbot**

### Built With

**Python • Flask • HTML • CSS • JavaScript**
