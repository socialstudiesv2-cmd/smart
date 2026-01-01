// بيانات اللعبة
const gameData = {
    playerName: "المستكشف الشجاع",
    score: 0,
    currentQuestionIndex: 0,
    totalQuestions: 10,
    correctAnswers: 0,
    pillarsPassed: 0,
    gameStarted: false,
    gameFinished: false,
    startTime: null,
    endTime: null,
    usedHints: 0,
    questions: [
        {
            question: "كم كان عمر توت عنخ آمون عندما أصبح فرعونًا؟",
            category: "التاريخ الفرعوني",
            answers: [
                { text: "٨ سنوات", correct: false },
                { text: "٩ سنوات", correct: true },
                { text: "١٢ سنة", correct: false },
                { text: "١٥ سنة", correct: false }
            ],
            hint: "كان عمره أقل من ١٠ سنوات عندما اعتلى العرش"
        },
        {
            question: "كم سنة حكم توت عنخ آمون مصر؟",
            category: "التاريخ الفرعوني",
            answers: [
                { text: "٥ سنوات", correct: false },
                { text: "١٠ سنوات", correct: true },
                { text: "١٥ سنة", correct: false },
                { text: "٢٠ سنة", correct: false }
            ],
            hint: "حكم لمدة عقد من الزمان"
        },
        {
            question: "كيف توفي توت عنخ آمون؟",
            category: "التاريخ الفرعوني",
            answers: [
                { text: "اغتيل", correct: false },
                { text: "قتل في معركة", correct: false },
                { text: "مات بسبب مرض", correct: true },
                { text: "قتل في حادث صيد", correct: false }
            ],
            hint: "تشير الأدلة إلى أنه توفي بسبب مضاعفات مرضية"
        },
        {
            question: "من الذي اكتشف مقبرة توت عنخ آمون؟",
            category: "اكتشافات أثرية",
            answers: [
                { text: "هاورد كارتر", correct: true },
                { text: "جان فرانسوا شامبوليون", correct: false },
                { text: "أحمد فخري", correct: false },
                { text: "زي نوريس", correct: false }
            ],
            hint: "عالم آثار إنجليزي اكتشف المقبرة في عام 1922"
        },
        {
            question: "في أي عام تم اكتشاف مقبرة توت عنخ آمون؟",
            category: "اكتشافات أثرية",
            answers: [
                { text: "١٩٠٠", correct: false },
                { text: "١٩١٢", correct: false },
                { text: "١٩٢٢", correct: true },
                { text: "١٩٣٠", correct: false }
            ],
            hint: "تم الاكتشاف في العقد الثالث من القرن العشرين"
        },
        {
            question: "أين تقع مقبرة توت عنخ آمون؟",
            category: "الجغرافيا التاريخية",
            answers: [
                { text: "وادي الملوك بالأقصر", correct: true },
                { text: "أهرامات الجيزة", correct: false },
                { text: "معبد الكرنك", correct: false },
                { text: "معبد أبو سمبل", correct: false }
            ],
            hint: "تقع في منطقة الدفن الملكية في جنوب مصر"
        },
        {
            question: "ما هو الاسم الأصلي لتوت عنخ آمون؟",
            category: "التاريخ الفرعوني",
            answers: [
                { text: "توت عنخ آتون", correct: false },
                { text: "توت عنخ آمون", correct: false },
                { text: "توت عنخ خبيرو", correct: false },
                { text: "توت عنخ آتون ثم تغير إلى توت عنخ آمون", correct: true }
            ],
            hint: "غير اسمه بعد تخليه عن ديانة آتون"
        },
        {
            question: "ما هو أكثر قطعة أثرية شهرة في كنوز توت عنخ آمون؟",
            category: "الآثار",
            answers: [
                { text: "العرش الذهبي", correct: false },
                { text: "قناع الموت الذهبي", correct: true },
                { text: "عربة حربية", correct: false },
                { text: "تماثيل الحراس", correct: false }
            ],
            hint: "قطعة ذهبية رائعة كانت تغطي وجه المومياء"
        },
        {
            question: "من الذي خلف توت عنخ آمون في الحكم؟",
            category: "التاريخ الفرعوني",
            answers: [
                { text: "رمسيس الثاني", correct: false },
                { text: "أي", correct: true },
                { text: "حورمحب", correct: false },
                { text: "أمنحتب الثالث", correct: false }
            ],
            hint: "كان كبير الوزراء في عهد توت عنخ آمون"
        },
        {
            question: "ما هي ديانة مصر الرسمية في عهد توت عنخ آمون؟",
            category: "الدين والمعتقدات",
            answers: [
                { text: "ديانة آتون (عبادة قرص الشمس)", correct: false },
                { text: "ديانة آمون (تعدد الآلهة)", correct: true },
                { text: "الديانة المسيحية", correct: false },
                { text: "الديانة اليهودية", correct: false }
            ],
            hint: "تم التخلي عن ديانة آتون التي فرضها أخناتون"
        }
    ]
};

// عناصر DOM
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const gameContainer = document.querySelector('.game-container');
const questionArea = document.getElementById('question-area');
const questionNumber = document.getElementById('question-number');
const questionCategory = document.getElementById('question-category');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const hintBtn = document.getElementById('hint-btn');
const restartBtn = document.getElementById('restart-btn');
const startBtn = document.getElementById('start-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const playerNameInput = document.getElementById('player-name');
const pillarsContainer = document.getElementById('pillars-container');
const treasure = document.getElementById('treasure');

// عناصر المعلومات
const questionsLeft = document.getElementById('questions-left');
const pillarsLeft = document.getElementById('pillars-left');
const scoreElement = document.getElementById('score');
const progress = document.getElementById('progress');
const progressText = document.getElementById('progress-text');

// عناصر النهاية
const endTitle = document.getElementById('end-title');
const endIcon = document.getElementById('end-icon');
const finalPlayerName = document.getElementById('final-player-name');
const finalScore = document.getElementById('final-score');
const correctAnswers = document.getElementById('correct-answers');
const playTime = document.getElementById('play-time');
const endMessage = document.getElementById('end-message');

// تهيئة اللعبة
function initGame() {
    // إنشاء الأعمدة
    createPillars();
    
    // تحديث معلومات اللعبة
    updateGameInfo();
    
    // إخفاء شاشة البداية
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    
    // تعيين وقت البدء
    gameData.startTime = new Date();
    
    // تعيين حالة اللعبة
    gameData.gameStarted = true;
    gameData.gameFinished = false;
    
    // عرض السؤال الأول
    showQuestion();
}

// إنشاء أعمدة المعبد
function createPillars() {
    pillarsContainer.innerHTML = '';
    
    for (let i = 1; i <= gameData.totalQuestions; i++) {
        const pillar = document.createElement('div');
        pillar.className = 'pillar';
        pillar.id = `pillar-${i}`;
        
        const pillarNumber = document.createElement('div');
        pillarNumber.className = 'pillar-number';
        pillarNumber.textContent = i;
        
        pillar.appendChild(pillarNumber);
        pillarsContainer.appendChild(pillar);
    }
    
    // جعل العمود الأول نشطًا
    document.getElementById('pillar-1').classList.add('active');
}

// تحديث معلومات اللعبة
function updateGameInfo() {
    questionsLeft.textContent = gameData.totalQuestions - gameData.currentQuestionIndex;
    pillarsLeft.textContent = gameData.totalQuestions - gameData.pillarsPassed;
    scoreElement.textContent = gameData.score;
    
    const progressPercent = (gameData.pillarsPassed / gameData.totalQuestions) * 100;
    progress.style.width = `${progressPercent}%`;
    progressText.textContent = `${Math.round(progressPercent)}%`;
}

// عرض السؤال الحالي
function showQuestion() {
    if (gameData.currentQuestionIndex >= gameData.questions.length) {
        finishGame();
        return;
    }
    
    const currentQuestion = gameData.questions[gameData.currentQuestionIndex];
    
    // تحديث معلومات السؤال
    questionNumber.textContent = `السؤال ${gameData.currentQuestionIndex + 1}`;
    questionCategory.textContent = currentQuestion.category;
    questionText.textContent = currentQuestion.question;
    
    // مسح الإجابات السابقة
    answersContainer.innerHTML = '';
    
    // إضافة الإجابات
    currentQuestion.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.className = 'answer-btn';
        answerBtn.textContent = answer.text;
        answerBtn.dataset.index = index;
        answerBtn.onclick = () => checkAnswer(index);
        answersContainer.appendChild(answerBtn);
    });
    
    // إعادة تعيين حالة الزر التالي
    nextBtn.disabled = true;
    
    // إخفاء رد الفعل
    feedback.style.display = 'none';
    feedback.className = 'feedback';
    
    // تحديث حالة الأعمدة
    updatePillars();
    
    // تفعيل زر المساعدة
    hintBtn.disabled = false;
}

// التحقق من الإجابة
function checkAnswer(answerIndex) {
    const currentQuestion = gameData.questions[gameData.currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    const selectedButton = answerButtons[answerIndex];
    
    // تعطيل جميع أزرار الإجابة
    answerButtons.forEach(btn => {
        btn.disabled = true;
    });
    
    // التحقق من صحة الإجابة
    if (currentQuestion.answers[answerIndex].correct) {
        // الإجابة صحيحة
        selectedButton.classList.add('correct');
        gameData.score += 10;
        gameData.correctAnswers++;
        gameData.pillarsPassed++;
        
        // عرض رسالة التأكيد
        feedback.textContent = "إجابة صحيحة! لقد تخطيت عمودًا بنجاح.";
        feedback.className = 'feedback correct';
        feedback.style.display = 'block';
        
        // تحديث الأعمدة
        document.getElementById(`pillar-${gameData.pillarsPassed}`).classList.add('passed');
        
        // إذا وصلنا إلى الكنز
        if (gameData.pillarsPassed >= gameData.totalQuestions) {
            treasure.classList.add('reached');
        }
    } else {
        // الإجابة خاطئة
        selectedButton.classList.add('wrong');
        gameData.score -= 5;
        if (gameData.score < 0) gameData.score = 0;
        
        // إظهار الإجابة الصحيحة
        currentQuestion.answers.forEach((answer, index) => {
            if (answer.correct) {
                answerButtons[index].classList.add('correct');
            }
        });
        
        // عرض رسالة الخطأ
        feedback.textContent = "إجابة خاطئة! ستعود خطوة للوراء.";
        feedback.className = 'feedback wrong';
        feedback.style.display = 'block';
        
        // العودة للوراء إذا لم نكن في البداية
        if (gameData.pillarsPassed > 0) {
            gameData.pillarsPassed--;
            document.getElementById(`pillar-${gameData.pillarsPassed + 1}`).classList.remove('passed');
        }
    }
    
    // تحديث معلومات اللعبة
    updateGameInfo();
    
    // تفعيل الزر التالي
    nextBtn.disabled = false;
}

// تحديث حالة الأعمدة
function updatePillars() {
    // إزالة النشاط من جميع الأعمدة
    document.querySelectorAll('.pillar').forEach(pillar => {
        pillar.classList.remove('active');
    });
    
    // تعيين العمود الحالي كنشط
    if (gameData.pillarsPassed < gameData.totalQuestions) {
        document.getElementById(`pillar-${gameData.pillarsPassed + 1}`).classList.add('active');
    }
}

// عرض تلميح
function showHint() {
    const currentQuestion = gameData.questions[gameData.currentQuestionIndex];
    
    // عرض التلميح
    feedback.textContent = `تلميح: ${currentQuestion.hint}`;
    feedback.className = 'feedback';
    feedback.style.display = 'block';
    
    // تعطيل زر التلميح
    hintBtn.disabled = true;
    
    // خصم نقاط للتلميح
    gameData.score -= 2;
    if (gameData.score < 0) gameData.score = 0;
    gameData.usedHints++;
    
    // تحديث النتيجة
    updateGameInfo();
}

// الانتقال إلى السؤال التالي
function nextQuestion() {
    gameData.currentQuestionIndex++;
    
    if (gameData.currentQuestionIndex >= gameData.totalQuestions) {
        finishGame();
    } else {
        showQuestion();
    }
}

// إنهاء اللعبة
function finishGame() {
    gameData.gameFinished = true;
    gameData.endTime = new Date();
    
    // حساب وقت اللعب
    const timeDiff = gameData.endTime - gameData.startTime;
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // تحديث شاشة النهاية
    endTitle.textContent = gameData.pillarsPassed >= gameData.totalQuestions 
        ? "تهانينا! لقد وجدت كنز توت عنخ آمون" 
        : "لعبة رائعة! لم تصل إلى الكنز بعد";
    
    if (gameData.pillarsPassed >= gameData.totalQuestions) {
        endIcon.innerHTML = '<i class="fas fa-trophy"></i>';
        endMessage.textContent = "لقد أظهرت معرفة تاريخية رائعة واستحققت كنز توت عنخ آمون!";
    } else {
        endIcon.innerHTML = '<i class="fas fa-hourglass-half"></i>';
        endMessage.textContent = `أحسنت المحاولة! تمكنت من تخطي ${gameData.pillarsPassed} من أصل ${gameData.totalQuestions} عمود. حاول مرة أخرى!`;
    }
    
    finalPlayerName.textContent = gameData.playerName;
    finalScore.textContent = gameData.score;
    correctAnswers.textContent = `${gameData.correctAnswers} من ${gameData.totalQuestions}`;
    playTime.textContent = timeString;
    
    // إظهار شاشة النهاية
    gameContainer.style.display = 'none';
    endScreen.style.display = 'flex';
}

// إعادة تشغيل اللعبة
function restartGame() {
    // إعادة تعيين بيانات اللعبة
    gameData.score = 0;
    gameData.currentQuestionIndex = 0;
    gameData.correctAnswers = 0;
    gameData.pillarsPassed = 0;
    gameData.usedHints = 0;
    gameData.gameFinished = false;
    
    // إعادة تعيين العناصر المرئية
    treasure.classList.remove('reached');
    
    // إخفاء شاشة النهاية
    endScreen.style.display = 'none';
    
    // إعادة تهيئة اللعبة
    initGame();
}

// مشاركة النتيجة
function shareScore() {
    const shareText = `لقد حصلت على ${gameData.score} نقطة في لعبة 'رحلة إلى كنز توت عنخ آمون'! تمكنت من الإجابة على ${gameData.correctAnswers} من أصل ${gameData.totalQuestions} سؤالًا بشكل صحيح. هل يمكنك تحدي نتائجي؟`;
    
    if (navigator.share) {
        navigator.share({
            title: 'نتيجة لعبة كنز توت عنخ آمون',
            text: shareText,
            url: window.location.href
        });
    } else {
        // نسخ النتيجة إلى الحافظة
        navigator.clipboard.writeText(shareText).then(() => {
            alert("تم نسخ النتيجة إلى الحافظة!");
        });
    }
}

// أحداث المستخدم
startBtn.addEventListener('click', () => {
    gameData.playerName = playerNameInput.value || "المستكشف الشجاع";
    initGame();
});

nextBtn.addEventListener('click', nextQuestion);

hintBtn.addEventListener('click', showHint);

restartBtn.addEventListener('click', () => {
    if (confirm("هل تريد إعادة بدء اللعبة؟ سيتم فقدان تقدمك الحالي.")) {
        restartGame();
    }
});

playAgainBtn.addEventListener('click', restartGame);

document.getElementById('share-btn').addEventListener('click', shareScore);

// تهيئة الصفحة عند التحميل
window.addEventListener('DOMContentLoaded', () => {
    // إخفاء منطقة اللعبة في البداية
    gameContainer.style.display = 'none';
    
    // عرض شاشة البداية
    startScreen.style.display = 'flex';
});

// إضافة تأثيرات إضافية
function addVisualEffects() {
    // تأثيرات للأعمدة
    const pillars = document.querySelectorAll('.pillar');
    pillars.forEach((pillar, index) => {
        pillar.style.height = `${140 + Math.sin(index) * 20}px`;
    });
}

// استدعاء تأثيرات إضافية بعد التحميل
setTimeout(addVisualEffects, 500);
