var quizdata = [
    {
        question : 'which is not a rogramming language',
        a :'HTMl',
        b :'Cpp',
        c :'python',
        d :'js',
        answer : 'a'
    },
    {
        question : 'which framework is related to javascript?',
        a :'.net',
        b :'Django',
        c :'flask',
        d :'all of the above',
        answer : 'a'
    },
    {
        question : 'what is not a framework',
        a :'Django',
        b :'javascript',
        c :'angular',
        d :'react',
        answer : 'b'
    },
    {
        question : 'CSS stands for',
        a :'cascading style state',
        b :'Cascading style sheet',
        c :'cascading sheet of style',
        d :'none',
        answer : 'b'
    },
    
]
var quiz = document.getElementById('quiz')
var answer =document.getElementById('answer')
var question =document.getElementById('question')
var option_a=docment.getElementById('a')
var option_b=docment.getElementById('b')
var option_c=docment.getElementById('c')
var option_d=docment.getElementById('d')
var submitbtn =document.getElementById('submit')

var currentQuestion = 0
var currentScore = 0
loadquiz()
function loadquiz(){

}