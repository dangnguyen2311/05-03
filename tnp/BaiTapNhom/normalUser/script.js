const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const timerElement = document.getElementById('timer');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let correctAnswers = 0;
let remainingTime = 600; // 10 minutes in seconds

const questions = [
    {
        "question": "Thủ đô của Việt Nam là gì?",
        "options": [
            "A. Hà Nội",
            "B. Thành phố Hồ Chí Minh",
            "C. Đà Nẵng",
            "D. Huế"
        ],
        "correctAnswer": 0,
        "selectedOption": null
    },
    // Add more questions here
    {
        "question": "Loài hoa nào là quốc hoa của Việt Nam?",
        "options": [
            "A. Sen",
            "B. Hoa mai",
            "C. Hoa đào",
            "D. Hoa huệ"
        ],
        "correctAnswer": 0,
        "selectedOption": null
    },
    {
        "question": "Ai là người Việt Nam đầu tiên bay vào vũ trụ?",
        "options": [
            "A. Phạm Tuân",
            "B. Bùi Thanh Liêm",
            "C. Lê Đức Hùng",
            "D. Phạm Gia Tuyên"
        ],
        "correctAnswer": 0,
        "selectedOption": null
    },
    // ... 20 câu hỏi tiếp theo ...
    {
        "question": "Cuộc chiến tranh nào được xem là 'cuộc chiến tranh chống Pháp'?",
        "options": [
            "A. Kháng chiến chống Mỹ",
            "B. Kháng chiến chống Pháp",
            "C. Kháng chiến chống Nhật",
            "D. Kháng chiến chống quân Thanh"
        ],
        "correctAnswer": 1,
        "selectedOption": null
    },
    {
        "question": "Ai là vị tướng tài ba nhất trong lịch sử Việt Nam?",
        "options": [
            "A. Trần Hưng Đạo",
            "B. Lê Lợi",
            "C. Nguyễn Trãi",
            "D. Quang Trung"
        ],
        "correctAnswer": 3,
        "selectedOption": null
    }

];

// Hiển thị câu hỏi và các phương án trả lời tương ứng
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectOption(index);
        if (currentQuestion.selectedOption === index) {
            button.classList.add('selected');
        }
        optionsElement.appendChild(button);
    });
}

// Chọn phương án
function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestion.selectedOption = selectedIndex; // Lưu trạng thái chọn của câu hỏi
    const buttons = optionsElement.querySelectorAll('button');
    buttons.forEach((button, index) => {
        if (index === selectedIndex) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

// Nộp bài
function submitAnswer() {
    const selectedIndex = questions[currentQuestionIndex].selectedOption;
    if (typeof selectedIndex === 'undefined') {
        alert('Vui lòng chọn một phương án trước khi nộp bài');
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        correctAnswers++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        clearInterval(timerInterval);
        showResult();
    }
}

// Hiển thị kết quả
function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    submitBtn.style.display = 'none';
    
    let resultHTML = '';
    resultHTML += `<h2 style="text-align: center;">Số câu đúng: ${correctAnswers} / ${questions.length}</h2>` + `\n`;
    resultHTML += `<h3 style="text-align: center;">Điểm số: ${Math.round(correctAnswers / questions.length *1000) / 100}</h3>`;
    questions.forEach((question, index) => {
        resultHTML += `<p><strong>Câu hỏi ${index + 1}: </strong>${question.question}</p>`;
        resultHTML += '<ul>';
        question.options.forEach((option, optionIndex) => {
            resultHTML += `<li>${option}`;
            if (optionIndex === question.correctAnswer) {
                resultHTML += ' (Đáp án đúng)';
            }
            if (question.selectedOption !== null && optionIndex === question.selectedOption) {
                if (optionIndex === question.correctAnswer) {
                    resultHTML += ' - Đáp án của bạn';
                } else {
                    resultHTML += ' - Đáp án sai của bạn';
                }
            }
            resultHTML += '</li>';
        });
        resultHTML += '</ul>';
    });

    resultElement.innerHTML = resultHTML;
}


// Cập nhật thời gian
function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `Thời gian còn lại: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    if (remainingTime > 0) {
        remainingTime--;
    } else {
        clearInterval(timerInterval);
        submitAnswer();
    }
}

// Bắt đầu đếm ngược
const timerInterval = setInterval(updateTimer, 1000);

// Khởi động ứng dụng
displayQuestion();