function check() {
    // alert('check함수실행')
    $('.result').html(``);

    let result;

    if ($('input:radio[name=q1]').is(':checked') && $('input:radio[name=q2]').is(':checked') && $('input:radio[name=q3]').is(':checked') && $('input:radio[name=q4]').is(':checked') && $('input:radio[name=q5]').is(':checked') && $('input:radio[name=q6]').is(':checked') && $('input:radio[name=q7]').is(':checked') && $('input:radio[name=q8]').is(':checked') && $('input:radio[name=q9]').is(':checked')) {
        // alert('checked')
        result = 0;
        if ($('input:radio[id=question1-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question1-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question1-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question1-4]').is(':checked'))
            result += 3;
        if ($('input:radio[id=question2-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question2-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question2-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question2-4]').is(':checked'))
            result += 3;
        if ($('input:radio[id=question3-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question3-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question3-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question3-4]').is(':checked'))
            result += 3;
        if ($('input:radio[id=question4-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question4-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question4-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question4-4]').is(':checked'))
            result += 3;
        if ($('input:radio[id=question5-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question5-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question5-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question5-4]').is(':checked'))
            result += 3;
        if ($('input:radio[id=question6-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question6-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question6-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question6-4]').is(':checked'))
            result += 3;
        if ($('input:radio[id=question7-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question7-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question7-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question7-4]').is(':checked'))
            result += 3;
        if ($('input:radio[id=question8-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question8-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question8-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question8-4]').is(':checked'))
            result += 3;
        if ($('input:radio[id=question9-1]').is(':checked'))
            result += 0;
        if ($('input:radio[id=question9-2]').is(':checked'))
            result += 1;
        if ($('input:radio[id=question9-3]').is(':checked'))
            result += 2;
        if ($('input:radio[id=question9-4]').is(':checked'))
            result += 3;

        console.log(result);
        if(result<2){
            $(".result").append(`<h2>${result}점 문제가 없습니다!</h2>`)
        } else if(result>=2&&result<6){
            $(".result").append(`<h2>${result}점 위험수준입니다. 문제수준으로 올라가기전에 상담이 필요합니다.</h2>`)
        } else if(result>=6){
            $(".result").append(`<h2>${result}점 문제수준입니다. 1336이나 도박상담 넷라인을 통해 상담을 받으시길 바랍니다.</h2>`)
        }
    } else {
        alert('모든 문항에 답하셔야 제출할 수 있습니다.')
    }
}

$("#submit").click(function () {
    // alert('버튼 클릭됨')
    check();
});