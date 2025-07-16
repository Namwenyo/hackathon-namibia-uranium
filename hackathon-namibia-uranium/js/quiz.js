document.addEventListener('DOMContentLoaded', function() {
    // Quiz questions database
    const questions = {
        geology: [
            {
                question: "What are the two main types of uranium deposits found in Namibia?",
                options: [
                    "Alaskite-hosted and calcrete paleochannel",
                    "Sandstone-hosted and volcanic",
                    "Breccia pipe and unconformity-related",
                    "Phosphate and black shale"
                ],
                answer: 0,
                difficulty: "Easy",
                hint: "Think about the geological settings of Rössing/Husab vs. Langer Heinrich.",
                explanation: "Namibia's uranium occurs primarily in late-tectonic alaskite intrusions (e.g., Rössing, Husab) and surficial calcrete/paleochannel deposits (e.g., Langer Heinrich, Trekkopje)."
            },
            {
                question: "Which geological region in Namibia hosts the Rössing and Husab uranium deposits?",
                options: [
                    "Damara Belt",
                    "Namaqua Metamorphic Complex",
                    "Kalahari Craton",
                    "Kaoko Belt"
                ],
                answer: 0,
                difficulty: "Medium",
                hint: "This belt formed during the Pan-African orogeny.",
                explanation: "The Damara Belt is a northeast-trending Neoproterozoic orogenic belt that hosts Namibia's most significant alaskite-hosted uranium deposits."
            },
            {
                question: "What is the average uranium grade at Namibia's largest mines?",
                options: [
                    "0.03-0.06% U3O8",
                    "0.1-0.2% U3O8",
                    "0.5-1.0% U3O8",
                    "1.5-2.0% U3O8"
                ],
                answer: 0,
                difficulty: "Hard",
                hint: "Namibia's deposits are large but relatively low-grade compared to some other countries.",
                explanation: "Namibia's uranium deposits typically range from 0.03% to 0.06% U3O8, which is low-grade but offset by large tonnages and favorable mining conditions."
            },
            {
                question: "Which uranium mineral is most common in Namibia's alaskite deposits?",
                options: [
                    "Uraninite",
                    "Carnotite",
                    "Autunite",
                    "Torbernite"
                ],
                answer: 0,
                difficulty: "Medium",
                hint: "This is a primary uranium mineral found in granite-related deposits.",
                explanation: "Uraninite (UO2) is the primary uranium mineral in alaskite-hosted deposits like Rössing and Husab, while carnotite is more common in calcrete deposits."
            },
            {
                question: "What percentage of global uranium production comes from Namibia?",
                options: [
                    "10-11%",
                    "5-6%",
                    "15-20%",
                    "25-30%"
                ],
                answer: 0,
                difficulty: "Easy",
                hint: "Namibia is among the top uranium producers worldwide.",
                explanation: "Namibia typically accounts for about 10-11% of global uranium production, making it one of the world's top uranium producers."
            }
        ],
        mining: [
            {
                question: "Which mining method is used at Rössing and Husab uranium mines?",
                options: [
                    "Open-pit mining",
                    "Underground mining",
                    "In-situ leaching",
                    "Block caving"
                ],
                answer: 0,
                difficulty: "Easy",
                hint: "This method is used when ore bodies are near the surface.",
                explanation: "Both Rössing and Husab use large-scale open-pit mining methods to extract uranium from alaskite-hosted deposits."
            },
            {
                question: "What leaching method is used at Langer Heinrich mine?",
                options: [
                    "Alkaline heap leaching",
                    "Acid heap leaching",
                    "In-situ leaching",
                    "Pressure leaching"
                ],
                answer: 0,
                difficulty: "Medium",
                hint: "This method is suitable for calcrete-hosted uranium.",
                explanation: "Langer Heinrich uses alkaline (sodium carbonate/bicarbonate) heap leaching to extract uranium from calcrete-hosted ore."
            },
            {
                question: "How much uranium does Husab mine produce annually?",
                options: [
                    "~5,500 tU",
                    "~2,000 tU",
                    "~8,000 tU",
                    "~10,000 tU"
                ],
                answer: 0,
                difficulty: "Hard",
                hint: "Husab is one of the largest uranium mines in the world.",
                explanation: "Husab has an annual production capacity of about 5,500 tonnes of uranium (tU), making it one of the world's largest uranium mines."
            },
            {
                question: "What controversial mining method has been proposed for the Stampriet Aquifer?",
                options: [
                    "In-situ leaching",
                    "Deep sea mining",
                    "Mountaintop removal",
                    "Longwall mining"
                ],
                answer: 0,
                difficulty: "Medium",
                hint: "This method involves injecting solutions into the ground.",
                explanation: "In-situ leaching (ISL) has been proposed for sandstone-hosted uranium in the Stampriet Aquifer, but faces opposition due to groundwater concerns."
            },
            {
                question: "What is the main processing method at Rössing mine?",
                options: [
                    "Sulfuric acid leaching",
                    "Alkaline leaching",
                    "Flotation",
                    "Electrowinning"
                ],
                answer: 0,
                difficulty: "Hard",
                hint: "This method is commonly used for alaskite-hosted uranium.",
                explanation: "Rössing uses conventional sulfuric acid leaching to extract uranium from crushed alaskite ore."
            }
        ],
        environment: [
            {
                question: "How much water does Rössing mine use annually?",
                options: [
                    "3 million m³",
                    "1 million m³",
                    "5 million m³",
                    "10 million m³"
                ],
                answer: 0,
                difficulty: "Medium",
                hint: "This is fresh water from a desalination plant.",
                explanation: "Rössing uses approximately 3 million cubic meters of fresh water annually, sourced from a desalination plant at the coast."
            },
            {
                question: "What is Namibia's annual limit for worker radiation exposure?",
                options: [
                    "20 mSv",
                    "50 mSv",
                    "100 mSv",
                    "5 mSv"
                ],
                answer: 0,
                difficulty: "Easy",
                hint: "This is the standard limit recommended by the ICRP.",
                explanation: "Namibia follows international standards with a worker dose limit of 20 mSv per year averaged over 5 years."
            },
            {
                question: "What percentage of process water is recycled at Namibian uranium mines?",
                options: [
                    "75-85%",
                    "50-60%",
                    "90-95%",
                    "30-40%"
                ],
                answer: 0,
                difficulty: "Hard",
                hint: "Water conservation is critical in Namibia's arid climate.",
                explanation: "Modern Namibian uranium mines typically recycle 75-85% of their process water to minimize freshwater consumption."
            },
            {
                question: "What is the main environmental concern about ISL mining in the Stampriet Aquifer?",
                options: [
                    "Groundwater contamination",
                    "Air pollution",
                    "Deforestation",
                    "Noise pollution"
                ],
                answer: 0,
                difficulty: "Medium",
                hint: "This aquifer is shared with neighboring countries.",
                explanation: "The primary concern is potential contamination of the transboundary Stampriet Aquifer, which provides water to Namibia, Botswana and South Africa."
            },
            {
                question: "What covers tailings dams at Namibian uranium mines?",
                options: [
                    "Rock and soil layers",
                    "Plastic liners",
                    "Concrete caps",
                    "Water covers"
                ],
                answer: 0,
                difficulty: "Hard",
                hint: "This is part of the 'dry cover' approach.",
                explanation: "Namibian mines use multi-layer rock and soil covers to minimize water infiltration and radon emissions from tailings."
            }
        ],
        policy: [
            {
                question: "What is the minimum local ownership requirement for uranium mines in Namibia?",
                options: [
                    "15%",
                    "10%",
                    "25%",
                    "5%"
                ],
                answer: 0,
                difficulty: "Easy",
                hint: "This was increased from 10% in recent years.",
                explanation: "Namibia requires at least 15% local ownership in uranium mines through the government's Epangelo Mining Company and other local shareholders."
            },
            {
                question: "Which act regulates radiation protection in Namibia?",
                options: [
                    "Atomic Energy Act",
                    "Minerals Act",
                    "Environmental Management Act",
                    "Radiation Protection Act"
                ],
                answer: 0,
                difficulty: "Medium",
                hint: "This act covers all nuclear-related activities.",
                explanation: "The Atomic Energy Act (2005) regulates all radiation-related activities in Namibia, including uranium mining."
            },
            {
                question: "Which government body oversees uranium mining licenses?",
                options: [
                    "Ministry of Mines and Energy",
                    "Ministry of Environment",
                    "Radiation Protection Authority",
                    "All of the above"
                ],
                answer: 3,
                difficulty: "Hard",
                hint: "Different aspects are regulated by different agencies.",
                explanation: "Uranium mining requires approvals from multiple agencies: MME for mining rights, MET for environmental clearance, and RPA for radiation safety."
            },
            {
                question: "What is the royalty rate for uranium mining in Namibia?",
                options: [
                    "5%",
                    "3%",
                    "7%",
                    "10%"
                ],
                answer: 0,
                difficulty: "Medium",
                hint: "Uranium has a higher rate than some other minerals.",
                explanation: "Namibia applies a 5% royalty rate on uranium sales, higher than the 3% rate for most other minerals."
            },
            {
                question: "Which international agreement affects Namibia's uranium exports?",
                options: [
                    "Nuclear Non-Proliferation Treaty",
                    "Paris Climate Agreement",
                    "Basel Convention",
                    "Kyoto Protocol"
                ],
                answer: 0,
                difficulty: "Hard",
                hint: "This treaty governs peaceful use of nuclear materials.",
                explanation: "As a signatory to the NPT, Namibia must ensure its uranium exports are used for peaceful purposes only, requiring safeguards agreements."
            }
        ]
    };
    
    // Quiz state variables
    let currentCategory = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer = null;
    let timeLeft = 60;
    let selectedOption = null;
    
    // DOM elements
    const quizSelection = document.getElementById('quizSelection');
    const quizInProgress = document.getElementById('quizInProgress');
    const quizResult = document.getElementById('quizResult');
    const quizCategory = document.getElementById('quizCategory');
    const quizDifficulty = document.getElementById('quizDifficulty');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackContainer = document.getElementById('feedbackContainer');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const timerElement = document.getElementById('timer');
    const scoreText = document.getElementById('scoreText');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const resultScore = document.getElementById('resultScore');
    const totalQuestions = document.getElementById('totalQuestions');
    const resultFeedback = document.getElementById('resultFeedback');
    const restartBtn = document.getElementById('restartBtn');
    const hintBtn = document.getElementById('hintBtn');
    const hintText = document.getElementById('hintText');
    
    // Event listeners
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            currentCategory = this.getAttribute('data-category');
            startQuiz();
        });
    });
    
    nextBtn.addEventListener('click', showNextQuestion);
    restartBtn.addEventListener('click', resetQuiz);
    hintBtn.addEventListener('click', showHint);
    
    // Start quiz
    function startQuiz() {
        // Select questions for the chosen category
        currentQuestions = [...questions[currentCategory]];
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 60;
        
        // Update UI
        quizSelection.style.display = 'none';
        quizInProgress.style.display = 'block';
        quizResult.style.display = 'none';
        
        // Set category name
        const categoryNames = {
            geology: 'Geology',
            mining: 'Mining Methods',
            environment: 'Environmental Impact',
            policy: 'Policy & Safety'
        };
        quizCategory.textContent = categoryNames[currentCategory];
        
        // Start timer
        startTimer();
        
        // Show first question
        showQuestion();
    }
    
    // Show current question
    function showQuestion() {
        // Reset selected option
        selectedOption = null;
        
        // Get current question
        const question = currentQuestions[currentQuestionIndex];
        
        // Update question text
        questionText.textContent = question.question;
        quizDifficulty.textContent = question.difficulty;
        
        // Update progress bar
        const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Clear previous options and feedback
        optionsContainer.innerHTML = '';
        feedbackContainer.style.display = 'none';
        feedbackContainer.className = 'feedback-container';
        nextBtn.style.display = 'none';
        hintText.style.display = 'none';
        hintText.textContent = question.hint;
        
        // Create option buttons
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.innerHTML = option;
            optionBtn.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionBtn);
        });
    }
    
    // Select an option
    function selectOption(index) {
        // Ignore if already selected
        if (selectedOption !== null) return;
        
        // Get current question
        const question = currentQuestions[currentQuestionIndex];
        
        // Mark selected option
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons[index].classList.add('selected');
        selectedOption = index;
        
        // Check if correct
        const isCorrect = index === question.answer;
        
        // Update score
        if (isCorrect) {
            score++;
        }
        
        // Show feedback
        showFeedback(isCorrect, question.explanation);
    }
    
    // Show feedback
    function showFeedback(isCorrect, explanation) {
        // Mark correct and incorrect options
        const question = currentQuestions[currentQuestionIndex];
        const optionButtons = document.querySelectorAll('.option-btn');
        
        optionButtons.forEach((btn, index) => {
            if (index === question.answer) {
                btn.classList.add('correct');
            } else if (index === selectedOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Show feedback container
        feedbackContainer.style.display = 'block';
        feedbackContainer.innerHTML = `
            <h5><i class="fas ${isCorrect ? 'fa-check-circle text-success' : 'fa-times-circle text-danger'} me-2"></i> 
            ${isCorrect ? 'Correct!' : 'Incorrect'}</h5>
            <p>${explanation}</p>
        `;
        feedbackContainer.classList.add(isCorrect ? 'feedback-correct' : 'feedback-incorrect');
        
        // Show next button
        nextBtn.style.display = 'block';
        
        // Stop timer for this question
        clearInterval(timer);
    }
    
    // Show next question or results
    function showNextQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < currentQuestions.length) {
            // Reset timer for next question
            timeLeft = 60;
            timerElement.textContent = timeLeft;
            startTimer();
            
            // Show next question
            showQuestion();
        } else {
            // Quiz complete, show results
            showResults();
        }
    }
    
    // Show quiz results
    function showResults() {
        quizInProgress.style.display = 'none';
        quizResult.style.display = 'block';
        
        // Calculate score percentage
        const percentage = Math.round((score / currentQuestions.length) * 100);
        
        // Update result elements
        scoreText.textContent = `${percentage}%`;
        resultScore.textContent = score;
        totalQuestions.textContent = currentQuestions.length;
        
        // Set result message based on score
        if (percentage >= 80) {
            resultTitle.textContent = "Excellent Work!";
            resultMessage.textContent = `You scored ${score} out of ${currentQuestions.length} correctly. You're a uranium expert!`;
        } else if (percentage >= 50) {
            resultTitle.textContent = "Good Job!";
            resultMessage.textContent = `You scored ${score} out of ${currentQuestions.length} correctly. You know quite a bit about Namibia's uranium industry.`;
        } else {
            resultTitle.textContent = "Keep Learning!";
            resultMessage.textContent = `You scored ${score} out of ${currentQuestions.length} correctly. Review the resources to learn more.`;
        }
        
        // Add feedback for incorrect answers
        resultFeedback.innerHTML = '';
        currentQuestions.forEach((question, index) => {
            if (selectedOption !== question.answer) {
                const feedbackItem = document.createElement('div');
                feedbackItem.className = 'mb-3';
                feedbackItem.innerHTML = `
                    <h6>Question ${index + 1}: ${question.question}</h6>
                    <p class="small">Correct answer: ${question.options[question.answer]}</p>
                `;
                resultFeedback.appendChild(feedbackItem);
            }
        });
    }
    
    // Reset quiz
    function resetQuiz() {
        // Clear timer
        clearInterval(timer);
        
        // Reset UI
        quizResult.style.display = 'none';
        quizSelection.style.display = 'block';
    }
    
    // Start timer for current question
    function startTimer() {
        // Clear any existing timer
        clearInterval(timer);
        
        // Update timer display
        timerElement.textContent = timeLeft;
        
        // Start countdown
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            
            // Change color when time is running out
            if (timeLeft <= 10) {
                timerElement.style.color = '#e74c3c';
            }
            
            // Time's up
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerElement.textContent = "0";
                
                // Automatically move to next question if no answer selected
                if (selectedOption === null) {
                    const question = currentQuestions[currentQuestionIndex];
                    showFeedback(false, `Time's up! The correct answer was: ${question.options[question.answer]}`);
                }
            }
        }, 1000);
    }
    
    // Show hint
    function showHint() {
        hintText.style.display = hintText.style.display === 'block' ? 'none' : 'block';
    }
});