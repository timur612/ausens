<template>
    <div class="container">
        <div class="row" >
            <div class="col-sm-1">
                <a v-on:click="back" style="width:6%;height:6%;color:black;cursor: pointer;"> <img src="../assets/back.svg" alt=""> </a>
            </div>
            <div class="col-sm">
                <p class="h2" style="font-weight:600;">Серднечно-сосудистые заболевания</p>
            </div>
        </div>

        <div class="row mt-5">
            <p class="lead">
                Сердечно-сосудистые заболевания (ССЗ) — общее название заболеваний сердца и кровеносных сосудов. В настоящее время именно эти заболевания являются основной причиной смерти и инвалидизации населения во всем мире.
            </p>
        </div>
        <div class="row mt-5">
            <p class="h4">Основные причины:</p>
            <ul style="font-size:1.1rem; margin-left:3%">
                <li>Курение сигарет</li>
                <li>Увлечение спиртным</li>
                <li>несбалансированное питание с повышенным содержанием жиров и соли и исключением из рациона овощей</li>
                <li>отсутствие рациональной физической нагрузки</li>
                <li>стресс</li>
            </ul>
            <p class="lead">
                К причинам сердечно-сосудистых заболеваний также необходимо отнести два распространенных состояния: болезни сердечной системы нередко протекают на фоне повышенного давления и диабета, поэтому таким больным требуется постоянное наблюдение у кардиолога. Но даже внешне здоровым людям рекомендуется проверять сердце, поскольку ряд заболеваний протекает без симптомов и обнаруживается лишь в стадии обострения.
            </p>
        </div>

        <div class="row mt-5">
            <p class="h4">Виды:</p>
            <ul style="font-size:1.1rem; margin-left:3%">
                <li>гипертония (высокое кровяное давление)</li>
                <li>ишемическая болезнь сердца (инфаркт)</li>
                <li>нарушения мозгового кровообращения (инсульт)</li>
                <li>заболевания периферических сосудов</li>
                <li>сердечная недостаточность</li>
                <li>ревматические заболевания сердца</li>
                <li>врожденные пороки сердца</li>
                <li>кардиомиопатии</li>
            </ul>
        </div>

        <div class="row mb-3 mt-3">
            <div class="col-sm"><button v-on:click="goToRec" class="btn backbtn" style="background-color: #11B46F;">Перейти к рекомендациям</button></div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1);
        },
        goToRec(){
            this.$router.push({path:'/recomendation'})
        }
    }
}
</script>

<style scoped>
.backbtn{
    padding-top:0.5%;
    padding-bottom:0.5%;
    padding-left:5%;
    padding-right:5%;
    color:white;
    font-weight: 500;
}
</style>