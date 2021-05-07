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
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Да
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                        Нет
                    </label>
                </div>
            </div>

            <div style="width:100%">
                <button v-on:click="nextQuestion" class="btn backbtn" style="background-color: #11B46F;">Далее</button>
            </div>     
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            currNum:1,
            question:'Cколько вам лет?',
            questions: [{q:'Ваш вес',type:'open'},
                        {q:'Ваш рост',type:'open'},
                        {q:'Есть ли у вас тремор рук?',type:'choose',ans:['да','нет']},
                        {q:'Болят ли Ваши суставы?',type:'choose',ans:['да','нет']},
                        {q:'Пьете алкоголь?',type:'choose',ans:['да','нет']},
                        {q:'Вы курите?',type:'choose',ans:['да','нет']}],
            answer:'',
            curType:'open',
            answers:[],
        }
    },
    methods:{
        nextQuestion(){
            this.currNum+=1;
            this.question = this.questions[this.currNum-1].q;
            this.curType = this.questions[this.currNum-1].type;
            this.answers.push(this.answer);
            this.answer = '';
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