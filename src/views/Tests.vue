<template>
    <div class="container">
        <div style="margin-left:30%">
            <span class="text-muted">Вопрос {{currNum}} из 18</span>
            <p class="h2">{{question}}</p>
            
            <div class="mb-3" style="width:55%" v-if="curType==='open'">
                <input v-model="answer" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>

            <div v-if="curType==='choose'" style="font-size:1.3rem">
                <div class="form-check">
                <input :checked="selected" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="answer" value="да">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Да
                    </label>
                    </div>
                    <div class="form-check">
                    <input :checked="selected" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="answer" value="нет">
                    <label class="form-check-label" for="flexRadioDefault2">
                        Нет
                    </label>
                </div>
            </div>

            <div style="width:100%">
                <button v-on:click="nextQuestion" class="btn backbtn" style="background-color: #11B46F;"> {{btnText}} </button>
            </div>     
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            currNum:1,
            btnText: 'Далее',
            question:'Cколько вам лет?',
            selected: true,
            questions: [{q:'Ваш вес',type:'open'},
                        {q:'Ваш рост',type:'open'},
                        {q:'Есть ли у вас тремор рук?',type:'choose',ans:['да','нет']},
                        {q:'Болят ли Ваши суставы?',type:'choose',ans:['да','нет']},
                        {q:'Пьете алкоголь?',type:'choose',ans:['да','нет']},
                        {q:'Вы курите?',type:'choose',ans:['да','нет']},
                        {q:'Есть ли у вас скованность движений утром после сна?',type:'choose',ans:['да','нет']},
                        {q:'Бывает ли у Вас неестественный хруст суставов при движении?',type:'choose',ans:['да','нет']},
                        {q:'Есть ли у вас сниженная кратковременная память?',type:'choose',ans:['да','нет']},
                        {q:'Есть ли у вас затруднения в речи: невнятное произношение, трудности с подбором слов?',type:'choose',ans:['да','нет']},
                        {q:'затруднение восприятия новой информации, обучения новым навыкам (например, работе с компьютером или смартфоном)?',type:'choose',ans:['да','нет']},
                        {q:'Следите ли вы за здоровым питание?',type:'choose',ans:['да','нет']},
                        {q:'Ведете ли вы активный образ жизни?',type:'choose',ans:['да','нет']},
                        {q:'Есть ли у вас Чрезмерная жажда?',type:'choose',ans:['да','нет']},
                        {q:'Есть ли у вас чрезмерный голод?',type:'choose',ans:['да','нет']},
                        {q:'Есть ли у вас чрезмерное мочеиспускание?',type:'choose',ans:['да','нет']},
                        {q:'Какие у вас были болезни?',type:'open'}],
                        
            answer:'',
            curType:'open',
            answers:[],
        }
    },
    methods:{
        nextQuestion(){
            if(this.currNum<18){
                this.currNum+=1;
                this.question = this.questions[this.currNum-2].q;
                this.curType = this.questions[this.currNum-2].type;
                this.answers.push(this.answer);
                this.answer = '';

                this.selected = false;
                if(this.currNum==18){
                    this.btnText = 'Завершить'
                }
            }else{
                this.answers.shift();
                // this.answers.pop();
                // this.answers.push('нет');
                console.log(this.answers)
                this.saveTo();
            }
        },
        saveTo(){
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            axios
                .post('https://goddesu.pythonanywhere.com/results',
                JSON.stringify({
                    answers: this.answers
                }),
                {headers: {"Content-Type": "application/json"  }})
                .then(res=>{
                    axios
                        .patch('https://ausensai.herokuapp.com/users/'+localStorage.getItem('token'),
                            JSON.stringify({
                                testResult: res.data[0]
                            }),
                            {headers: {"Content-Type": "application/json"  }})
                        .then(res=>{
                            this.$router.push({path:'/'});
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                })
                .catch(e=>{
                    console.log(e);
                })
        }
    }
}
</script>

<style scoped>
.backbtn{
    padding-top:0.5%;
    padding-bottom:0.5%;
    padding-left:3%;
    padding-right:3%;
    color:white;
    font-weight: 500;
}
</style>