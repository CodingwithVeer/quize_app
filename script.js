  const questions = [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                correct: 0
            },
            {
                question: "Which language is used for styling web pages?",
                options: ["HTML", "JavaScript", "CSS", "Python"],
                correct: 2
            },
            {
                question: "What does CSS stand for?",
                options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
                correct: 1
            },
            {
                question: "Which is a JavaScript framework?",
                options: ["Django", "Laravel", "React", "Flask"],
                correct: 2
            },
            {
                question: "What is the correct syntax for referring to an external script?",
                options: ["<script src='app.js'>", "<script href='app.js'>", "<script name='app.js'>", "<script file='app.js'>"],
                correct: 0
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let answered = false;

        function loadQuestion() {
            const q = questions[currentQuestion];
            document.getElementById('question').textContent = `Question ${currentQuestion + 1}: ${q.question}`;
            const optionsDiv = document.getElementById('options');
            optionsDiv.innerHTML = '';
            q.options.forEach((option, index) => {
                const div = document.createElement('div');
                div.className = 'option';
                div.textContent = option;
                div.onclick = () => selectOption(index);
                optionsDiv.appendChild(div);
            });
            answered = false;
        }

        function selectOption(index) {
            if (answered) return;
            answered = true;
            const options = document.querySelectorAll('.option');
            const correct = questions[currentQuestion].correct;
            
            if (index === correct) {
                options[index].classList.add('correct');
                score++;
            } else {
                options[index].classList.add('wrong');
                options[correct].classList.add('correct');
            }
        }

        function nextQuestion() {
            if (!answered) return alert('Please select an answer!');
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            document.getElementById('quizBox').classList.add('hidden');
            document.getElementById('result').classList.add('active');
            document.getElementById('score').textContent = `${score} / ${questions.length}`;
        }

        function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            document.getElementById('quizBox').classList.remove('hidden');
            document.getElementById('result').classList.remove('active');
            loadQuestion();
        }

        loadQuestion();
