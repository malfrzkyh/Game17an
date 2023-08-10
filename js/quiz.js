const quizData = [
  {
      question: "Apa yang terjadi pada tanggal 17 Agustus 1945 di Indonesia?",
      a: "Proklamasi Kemerdekaan Indonesia",
      b: "Hari Pahlawan Nasional",
      c: "Hari Ulang Tahun Budi",
      d: "Hari Ulang Tahun Dewi",
      correct: "a",
  },
  {
      question: "Siapa yang memproklamasikan kemerdekaan Indonesia pada tanggal 17 ",
      a: "Megawati",
      b: "Sultan Sjahrir",
      c: "Soekarno",
      d: "Muh Hatta",
      correct: "c",
  },
  {
      question: " Dokumen apa yang diumumkan pada tanggal 17 Agustus 1945 yang menyatakan kemerdekaan Indonesia?",
      a: "Renville",
      b: "Piagam Jakarta",
      c: "Traktat Linggajati",
      d: "Piagam Proklamasi",
      correct: "d",
  },
  {
      question: "Tanggal 17 Agustus 1945 adalah hari bersejarah bagi Indonesia karena...",
      a: "Harinya para pahlawan",
      b: "Dinyatakan merdeka dari penjajahan",
      c: "Hari Kelahiran Presiden Pertama",
      d: "Hari Libur",
      correct: "b",
  },
  {
    question: "Pada tanggal 17 Agustus 2023 Indonesia merayakan kemerdekaannya yang ke?",
    a: "78",
    b: "77",
    c: "76",
    d: "75",
    correct: "a",
  },
  {
    question: "Jam berapakah pembacaan teks Proklamasi kemerdekaan Indonesia pada tanggal 17 Agustus 1945?",
    a: "10.00 WIB",
    b: "12.00 WIB",
    c: "11.00 WIB",
    d: "8.00 WIB",
    correct: "a",
  },
  {
    question: "Dimanakah pembacaan teks proklamasi dilakukan?",
    a: "Jl. Pegangsaan Timur No. 56 Jakarta",
    b: "Jl. Pegasus Timur No. 58 Jakarta",
    c: "Jl. Pegagaran Timur No. 52 Jakarta",
    d: "Jl. Pegunungan Timur No. 56 Jakarta",
    correct: "a",
  },
  {
    question: "Dimanakah rencana awal pembacaan teks Proklamasi?",
    a: "Lapangan Maju Makmur",
    b: "Lapangan Gestoda",
    c: "Lapangan Merdeka",
    d: "Lapangan IKADA",
    correct: "d",
  },
  {
    question: "Siapakah penjahit bendera merah putih yang pertama kali dikibarkan?",
    a: "Lasri",
    b: "Nikwati",
    c: "Fatwa Pradana",
    d: "Fatmawati",
    correct: "d",
  },
  {
    question: "Apa makna dibalik warna bendera Indonesia?",
    a: "Merah artinya ganas, putih artinya lembut",
    b: "Merah artinya gass terus, putih artinya pelan pelan",
    c: "Merah artinya berani, putih artinya suci",
    d: "Merah artinya panas, putih artinya lembut",
    correct: "c",
  },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>Kamu Menjawab ${score}/${quizData.length} Jawaban Benar</h2>
        ${
          score === 10
            ? '<a href="sertifikat.html">Dapatkan Sertifikat</a>'
            : '<button onclick="location.reload()">Ulangi</button>'
        }
      `;
    }
  }
});

