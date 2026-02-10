// Функция отправки сообщения
function sendMessage() {
    const inputField = document.getElementById('userInput');
    const chatWindow = document.getElementById('chatWindow');
    const userText = inputField.value.trim();

    if (userText === "") return;

    // 1. Добавляем сообщение пользователя
    addMessage(userText, 'user-msg');
    inputField.value = '';

    // 2. Имитация "думания" ИИ (1.5 секунды)
    const loadingId = addMessage('ИИ ойланып жатыр...', 'bot-msg');

    setTimeout(() => {
        // Удаляем сообщение "думает"
        document.getElementById(loadingId).remove();
        
        // 3. Генерируем "умный" ответ
        const response = generateAIResponse(userText);
        addMessage(response, 'bot-msg');
    }, 1500);
}

// Функция добавления HTML пузырька
function addMessage(text, className) {
    const chatWindow = document.getElementById('chatWindow');
    const msgDiv = document.createElement('div');
    const id = 'msg-' + Date.now();
    msgDiv.id = id;
    msgDiv.className = `message ${className}`;
    msgDiv.innerText = text;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Прокрутка вниз
    return id;
}

// Логика "ИИ" (Эмуляция)
function generateAIResponse(input) {
    const responses = [
        "Бұл аргументке былай қарсы шығуға болады (Rebuttal): 1. Бұл шын емес, себебі статистика басқаны көрсетеді. 2. Бұл маңызды емес, өйткені басқа факторлар басым.",
        "Керемет аргумент! Бірақ оны күшейту үшін 'Impact' (әсерін) қосу керек. Мысалы: Бұл қоғамның қай бөлігіне көбірек зиян тигізеді?",
        "Дебат құрылымы бойынша талдау: Тезис дұрыс, бірақ 'Logos' (логикалық дәлел) жетіспейді. Салыстыру критерийін (Comparative) қолданыңыз.",
        "Бұл тезисті 'Статус кво' арқылы жоққа шығаруға болады. Қазіргі жағдай сіз айтқаннан мүлдем басқаша."
    ];

    // Выбираем случайный ответ
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return randomResponse;
}

// Отправка по Enter
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});