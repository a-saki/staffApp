/* 詳細ページ */
/*==========================

    スキル表

===========================*/
var stats = [
    { label: "情報設計力", value: 100 },
    { label: "調査・	分析能力", value: 100 },
    { label: "アクセス解析ツール<br>の理解・設定", value: 100 },
    { label: "SEOの知識", value: 100 },
    { label: "レポート作成力", value: 100 },
];
var job_engineer = [ '正確性','情報収集能力','マークアップの速さ', 'バックエンド知識', 'JS'];
var job_wmc = [ '情報設計力','・調査、分析能力','アクセス解析ツール<br>の理解・設定', 'SEOの知識', 'レポート作成力'];
var job_wd = [ 'タスク管理','リーダーシップ','企画力', 'マーケティング能力', 'スケジューリング'];
var job_de = [ '情報設計力','最新トレンド情報力','アニメーション', '洞察力', '客観性'];
var job_producer = [ 'リーダーシップ','部下把握能力','問題解決力', '進行管理', '営業力'];
var job_management = [ '正確性','社内管理能力','社員の健康維持', '会社の顔', '経費管理能力'];

Vue.component('show-skill', {
    props: ['stats'],
    template: '#svg-skill',
    beforeCreate: function(){
        //▼各職種によって、項目を変更。
        for(var i=0; i<5; i++) {
            stats[i].value = $('#hidden-svg-data').data('cat' + i);
        }
        var jobcat = $('#hidden-svg-data').data('jobcategory');
        if(jobcat === 'エンジニア') {
            for(var i=0; i<5; i++) {
                stats[i].label = job_engineer[i];
            }
        }else if(jobcat === 'ディレクター'){
            for(var i=0; i<5; i++) {
                stats[i].label = job_wd[i];
            }
        }else if(jobcat === 'デザイナー'){
            for(var i=0; i<5; i++) {
                stats[i].label = job_de[i];
            }
        }else if(jobcat === 'プロデューサー'){
            for(var i=0; i<5; i++) {
                stats[i].label = job_producer[i];
            }
        }else if(jobcat === '管理部'){
            for(var i=0; i<5; i++) {
                stats[i].label = job_management[i];
            }
        }
    },
    computed: {
        points: function () {
            return this.stats.map(function (stat, i) {
                var point = getPoints(stat.value, i);
                return point.x + ',' + point.y;
            }).join(' ');
        }
    },
    components: {
        //▼スキルラベル
        'show-skill-name': {
            props: {
                stat: Object,
                index: Number
            },
            template: '#svg-skill-name',
            computed: {
                point: function () {
                    return getPoints(this.stat.value + 20, this.index);
                }
            }
        },
        //▼スキルレンジ
        'svg-skill-range': {
            props: {
                stat: Object,
                index: Number
            },
            template: "#svg-skill-range",
            computed: {
                point: function () {
                    return getPoints(100 + 5, this.index);
                }
            },
            mounted: function () {
                $('#edit-skill input').each(function () {
                    var x = $(this).data('x') - 200;
                    var y = $(this).data('y') - 3;
                    $(this).css({
                        'left': x,
                        'top': y
                    });
                });
            }
        }
    },
});
function setRangePosition() {
    // #('.range')
}
function getPoints(value, index) {
    var point = 5;
    var total = 360 / 5;
    var x = 0;
    var centerX = 250;
    var centerY = 250;
    var centerR = value * 2;
    var degree = (index * total) - 90; //角度（上を頂点として描画するために90度引く）
    var radian = degree * (Math.PI / 180); //ラジアン変換
    var cos = Math.cos(radian) * centerR + centerX; //x
    var sin = Math.sin(radian) * centerR + centerY; //y
    return {
        x: cos,
        y: sin
    };
}
function firstDrawPolygon() {
    var degree = 72; //角度
    var centerX = 250;
    var centerY = 250;
    var count=0;
    for(var i=0; i<5; i++){
        var centerR = 200 - count;
        var points = [];
    
        for (var j = 0; j < 5; j++) {
            var temparr = [];
            var degree = (j * 72) - 90; //角度（上を頂点として描画するために90度引く）
            var radian = degree * (Math.PI / 180); //ラジアン変換
            var cos = Math.cos(radian) * centerR + centerX; //x
            var sin = Math.sin(radian) * centerR + centerY; //y
            points[j] = { x: cos, y: sin };
        }
        var html = '';
        for (var key in points) {
            html += points[key]['x'] + ',' + points[key]['y'] + ' ';
        }
        $('.base').append('<polygon points="' + html + '">');
        count += 40;
    }
}
$(function () {
    firstDrawPolygon();
    new Vue({
        el: '#vue-skill',
        data: {
            stats: stats
        }
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVELENBQUMsQ0FBQztJQUNELGdCQUFnQixFQUFFLENBQUM7SUFDbkIsSUFBSSxHQUFHLENBQUM7UUFDUCxFQUFFLEVBQUUsWUFBWTtRQUNoQixJQUFJLEVBQUc7WUFDTixLQUFLLEVBQUUsS0FBSztTQUNaO0tBQ0QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoianMvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyog6Kmz57Sw44Oa44O844K4ICovXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHTjgrnjgq3jg6vooahcblxuPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBzdGF0cyA9IFtcblx0e2xhYmVsIDogXCLmg4XloLHoqK3oqIjliptcIiwgdmFsdWUgOiAxMDB9LFxuXHR7bGFiZWwgOiBcIuiqv+afu+ODu1x05YiG5p6Q6IO95YqbXCIsIHZhbHVlIDogMTAwfSxcblx0e2xhYmVsIDogXCLjgqLjgq/jgrvjgrnop6PmnpDjg4Tjg7zjg6s8YnI+44Gu55CG6Kej44O76Kit5a6aXCIsIHZhbHVlIDogMTAwfSxcblx0e2xhYmVsIDogXCJTRU/jga7nn6XorZhcIiwgdmFsdWUgOiAxMDB9LFxuXHR7bGFiZWwgOiBcIuODrOODneODvOODiOS9nOaIkOWKm1wiLCB2YWx1ZSA6IDEwMH0sXG5dXG5cblZ1ZS5jb21wb25lbnQoJ3Nob3ctc2tpbGwnLCB7XG5cdHByb3BzIDogWydzdGF0cyddLFxuXHR0ZW1wbGF0ZTogJyNzdmctc2tpbGwnLFxuXHRjb21wdXRlZDoge1xuXHRcdHBvaW50czogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRzLm1hcChmdW5jdGlvbiAoc3RhdCwgaSkge1xuXHRcdFx0XHR2YXIgcG9pbnQgPSBnZXRQb2ludHMoc3RhdC52YWx1ZSwgaSk7XG5cdFx0XHRcdHJldHVybiBwb2ludC54KyAnLCcgKyBwb2ludC55XG5cdFx0XHR9KS5qb2luKCcgJyk7XG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnRzOiB7XG5cdFx0Ly/ilrzjgrnjgq3jg6vjg6njg5njg6tcblx0XHQnc2hvdy1za2lsbC1uYW1lJzoge1xuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0c3RhdDogT2JqZWN0LFxuXHRcdFx0XHRpbmRleDogTnVtYmVyXG5cdFx0XHR9LFxuXHRcdFx0dGVtcGxhdGU6ICcjc3ZnLXNraWxsLW5hbWUnLFxuXHRcdFx0Y29tcHV0ZWQgOiB7XG5cdFx0XHRcdHBvaW50OiBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHJldHVybiBnZXRQb2ludHModGhpcy5zdGF0LnZhbHVlKzIwLCB0aGlzLmluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/ilrzjgrnjgq3jg6vjg6zjg7Pjgrhcblx0XHQnc3ZnLXNraWxsLXJhbmdlJzoge1xuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0c3RhdDogT2JqZWN0LFxuXHRcdFx0XHRpbmRleDogTnVtYmVyXG5cdFx0XHR9LFxuXHRcdFx0dGVtcGxhdGU6IFwiI3N2Zy1za2lsbC1yYW5nZVwiLFxuXHRcdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdFx0cG9pbnQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cmV0dXJuIGdldFBvaW50cyh0aGlzLnN0YXQudmFsdWUrIDEwLCB0aGlzLmluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG1vdW50ZWQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vICQoZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly8gXHR2YXIgeCA9ICQoJyNlZGl0LXNraWxsIGlucHV0Om50aC1jaGlsZCgxKScpLmRhdGEoJ3gnKTtcblx0XHRcdFx0Ly8gXHR2YXIgeSA9ICQoJyNlZGl0LXNraWxsIGlucHV0Om50aC1jaGlsZCgxKScpLmRhdGEoJ3knKSsxODA7XG5cdFx0XHRcdC8vIFx0JCgnI2VkaXQtc2tpbGwgaW5wdXQ6bnRoLWNoaWxkKDEpJykuY3NzKHtcblx0XHRcdFx0Ly8gXHRcdCdsZWZ0JyA6IHgsXG5cdFx0XHRcdC8vIFx0XHQndG9wJzogeVxuXHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHQvLyB9KCkpO1xuXHRcdFx0XHQvLyAkKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vIFx0dmFyIHggPSAkKCcjZWRpdC1za2lsbCBpbnB1dDpudGgtY2hpbGQoMiknKS5kYXRhKCd4JyktMTkwO1xuXHRcdFx0XHQvLyBcdHZhciB5ID0gJCgnI2VkaXQtc2tpbGwgaW5wdXQ6bnRoLWNoaWxkKDIpJykuZGF0YSgneScpKzUwO1xuXHRcdFx0XHQvLyBcdCQoJyNlZGl0LXNraWxsIGlucHV0Om50aC1jaGlsZCgyKScpLmNzcyh7XG5cdFx0XHRcdC8vIFx0XHQnbGVmdCcgOiB4LFxuXHRcdFx0XHQvLyBcdFx0J3RvcCc6IHlcblx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0Ly8gfSgpKTtcblx0XHRcdFx0Ly8gJChmdW5jdGlvbigpe1xuXHRcdFx0XHQvLyBcdHZhciB4ID0gJCgnI2VkaXQtc2tpbGwgaW5wdXQ6bnRoLWNoaWxkKDMpJykuZGF0YSgneCcpLTE5MDtcblx0XHRcdFx0Ly8gXHR2YXIgeSA9ICQoJyNlZGl0LXNraWxsIGlucHV0Om50aC1jaGlsZCgzKScpLmRhdGEoJ3knKS0xNDA7XG5cdFx0XHRcdC8vIFx0JCgnI2VkaXQtc2tpbGwgaW5wdXQ6bnRoLWNoaWxkKDMpJykuY3NzKHtcblx0XHRcdFx0Ly8gXHRcdCdsZWZ0JyA6IHgsXG5cdFx0XHRcdC8vIFx0XHQndG9wJzogeVxuXHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHQvLyB9KCkpO1xuXHRcdFx0XHQvLyAkKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vIFx0dmFyIHggPSAkKCcjZWRpdC1za2lsbCBpbnB1dDpudGgtY2hpbGQoNCknKS5kYXRhKCd4JykrMTkwO1xuXHRcdFx0XHQvLyBcdHZhciB5ID0gJCgnI2VkaXQtc2tpbGwgaW5wdXQ6bnRoLWNoaWxkKDQpJykuZGF0YSgneScpLTE0MDtcblx0XHRcdFx0Ly8gXHQkKCcjZWRpdC1za2lsbCBpbnB1dDpudGgtY2hpbGQoNCknKS5jc3Moe1xuXHRcdFx0XHQvLyBcdFx0J2xlZnQnIDogeCxcblx0XHRcdFx0Ly8gXHRcdCd0b3AnOiB5XG5cdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdC8vIH0oKSk7XG5cdFx0XHRcdC8vICQoZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly8gXHR2YXIgeCA9ICQoJyNlZGl0LXNraWxsIGlucHV0Om50aC1jaGlsZCg1KScpLmRhdGEoJ3gnKSsxOTA7XG5cdFx0XHRcdC8vIFx0dmFyIHkgPSAkKCcjZWRpdC1za2lsbCBpbnB1dDpudGgtY2hpbGQoNSknKS5kYXRhKCd5Jyk7XG5cdFx0XHRcdC8vIFx0JCgnI2VkaXQtc2tpbGwgaW5wdXQ6bnRoLWNoaWxkKDUpJykuY3NzKHtcblx0XHRcdFx0Ly8gXHRcdCdsZWZ0JyA6IHgsXG5cdFx0XHRcdC8vIFx0XHQndG9wJzogeVxuXHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHQvLyB9KCkpO1xuXHRcdFx0XHQkKCcjZWRpdC1za2lsbCBpbnB1dCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgeCA9ICQodGhpcykuZGF0YSgneCcpLTIwMDtcblx0XHRcdFx0XHR2YXIgeSA9ICQodGhpcykuZGF0YSgneScpLTM7XG5cdFx0XHRcdFx0JCh0aGlzKS5jc3Moe1xuXHRcdFx0XHRcdFx0J2xlZnQnIDogeCxcblx0XHRcdFx0XHRcdCd0b3AnOiB5XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxufSk7XG5cbmZ1bmN0aW9uIHNldFJhbmdlUG9zaXRpb24oKSB7XG5cdC8vICMoJy5yYW5nZScpXG59XG5cblxuZnVuY3Rpb24gZ2V0UG9pbnRzKHZhbHVlLCBpbmRleCkge1xuXHR2YXIgcG9pbnQgPSA1O1xuXHR2YXIgdG90YWwgPSAzNjAvNTtcblx0dmFyIHggPSAwO1xuXHR2YXIgY2VudGVyWCA9IDI1MDtcblx0dmFyIGNlbnRlclkgPSAyNTA7XG5cdHZhciBjZW50ZXJSID0gdmFsdWUqMjtcblx0dmFyIGRlZ3JlZSA9IChpbmRleCAqIHRvdGFsKS0gOTA7Ly/op5LluqbvvIjkuIrjgpLpoILngrnjgajjgZfjgabmj4/nlLvjgZnjgovjgZ/jgoHjgas5MOW6puW8leOBj++8iVxuXHR2YXIgcmFkaWFuID0gZGVncmVlKihNYXRoLlBJIC8gMTgwKTsvL+ODqeOCuOOCouODs+WkieaPm1xuXHR2YXIgY29zID0gTWF0aC5jb3MocmFkaWFuKSpjZW50ZXJSICsgY2VudGVyWDsvL3hcblx0dmFyIHNpbiA9IE1hdGguc2luKHJhZGlhbikqY2VudGVyUiArIGNlbnRlclk7Ly95XG5cdHJldHVybiB7XG5cdFx0eCA6IGNvcyxcblx0XHR5IDogc2luXG5cdH1cbn1cblxuXG5cblxuZnVuY3Rpb24gZGlyc3REcmF3UG9seWdvbigpIHtcblx0dmFyIGRlZ3JlZSA9IDcyOy8v6KeS5bqmXG5cdHZhciBjZW50ZXJYID0gMjUwO1xuXHR2YXIgY2VudGVyWSA9IDI1MDtcblx0dmFyIGNlbnRlclIgPSAyMDA7XG5cdHZhciBwb2ludHMgPSBbXTtcblx0Zm9yKHZhciBpID0gMDsgaTw1OyBpKyspe1xuXHRcdHZhciB0ZW1wYXJyID0gW107XG5cdFx0dmFyIGRlZ3JlZSA9IChpICogNzIpLSA5MDsvL+inkuW6pu+8iOS4iuOCkumggueCueOBqOOBl+OBpuaPj+eUu+OBmeOCi+OBn+OCgeOBqzkw5bqm5byV44GP77yJXG5cdFx0dmFyIHJhZGlhbiA9IGRlZ3JlZSooTWF0aC5QSSAvIDE4MCk7Ly/jg6njgrjjgqLjg7PlpInmj5tcblx0XHR2YXIgY29zID0gTWF0aC5jb3MocmFkaWFuKSpjZW50ZXJSICsgY2VudGVyWDsvL3hcblx0XHR2YXIgc2luID0gTWF0aC5zaW4ocmFkaWFuKSpjZW50ZXJSICsgY2VudGVyWTsvL3lcblx0XHRwb2ludHNbaV0gPSB7eDpjb3MsIHk6c2lufTtcblx0fVxuXHR2YXIgaHRtbCA9ICcnO1xuXHRmb3IodmFyIGtleSBpbiBwb2ludHMpIHtcblx0XHRodG1sICs9IHBvaW50c1trZXldWyd4J10gKyAnLCcgKyAgcG9pbnRzW2tleV1bJ3knXSArICcgJztcblx0fVxuXHQkKCcuYmFzZScpLmh0bWwoJzxwb2x5Z29uIHBvaW50cz1cIicgKyBodG1sICsnXCI+Jyk7XG59XG5cbiQoZnVuY3Rpb24oKXtcblx0ZGlyc3REcmF3UG9seWdvbigpO1xuXHRuZXcgVnVlKHtcblx0XHRlbDogJyN2dWUtc2tpbGwnLFxuXHRcdGRhdGEgOiB7XG5cdFx0XHRzdGF0czogc3RhdHNcblx0XHR9XG5cdH0pO1xufSk7Il19
