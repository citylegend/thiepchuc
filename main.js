var spidol = new Audio('spidol.mp3');
$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        
    
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init(){
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}

function firstQuestion(){
    var audioyenhat = new Audio('Yến Hát.mp3');
    $('.content').hide();
    Swal.fire({
        title: 'Chào Em Bé  Trần Hải Yến! ✌️',
        text: 'Hôm nay là 20/10, Anh có một món quà nhỏ muốn dành tặng cho em ! 🥰<3',
        imageUrl: 'image/avatar.jpg',
        background: '#FFF url("image/background.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: 'Nhận Quà😍!'    
      }).then((result) => {
        if (result.value) {
            var audio = new Audio('tick.mp3');
            spidol.play();
            audio.play();
            Swal.fire({
                title: 'Chúc mừng ngày Quốc tế phụ nữ 20/10!',
                text: 'Hôm nay là ngày đặc biệt, ngày mà tất cả điều tuyệt vời nhất đều dành cho Pu. Chải chúc Pu luôn xinh đẹp, rạng rỡ như ánh nắng ban mai và luôn hạnh phúc😍',
                imageUrl: 'image/Sheet 2.jpg',
                background: '#fff url("iput-bg.jpg")',
                imageAlt: 'Custom image',
                confirmButtonText: 'Cảm ơn Chải nhoa! ♥️'  
              })
      .then((result) => {
        if (result.value) {
            var audio = new Audio('tick.mp3');
            audio.play();
            spidol.pause();
            audioyenhat.play();
            Swal.fire({
                title: 'Chúc Pu mỗi ngày trải qua đều an nhiên và không muộn phiền như trong video🤩',
                imageUrl: 'image/video.gif',
                background: '#fff url("image/background.jpg")',
                imageAlt: 'Custom image',   
                confirmButtonText: 'Bấm từ từ còn nghe Pu hát nữa🤩',
            }).then((result) => {
                if (result.value) {
                    Swal.fire({
                        title: 'Chúc Pu càng ngày càng được nhiều quà💝 và luôn được mọi ngưỜi yêu quý💕',
                        imageUrl: 'image/uni.gif',
                        background: '#fff url("image/background.jpg")',
                        imageAlt: 'Custom image',
                        confirmButtonText: 'Okii, Tiếp đi nè 👉',
                    }).then((result) => {
                        if (result.value) {
                            spidol.pause();
                            Swal.fire({
                                title: 'Chúc Pu lúc nào cũng vui vẻ dễ thương như này😍',
                                imageUrl: 'image/DTH.jpg',
                                background: '#fff url("image/background.jpg")',
                                imageAlt: 'Custom image',
                                confirmButtonText: 'Rồi sao nữa <3',
                            })
                            .then((result) => {
                                if (result.value) {
                                    var audio = new Audio('tick.mp3');
                                    audio.play();
                                    Swal.fire({
                                        title: 'Nhí nhảnh như này nữa nè😚',
                                        imageUrl: 'image/Dth 2.jpg',
                                        background: '#fff url("image/background.jpg")',
                                        imageAlt: 'Custom image',
                                        confirmButtonText: 'Thank you chải 💖',
                                    }).then((result) => {
                                        if (result.value) {
                                            var audio = new Audio('tick.mp3');
                                            audio.play();
                                            Swal.fire({
                                                confirmButtonText: 'Okiiiii lun <3😜😜😜',
                                                background: '#fff url("image/background.jpg")',
                                                title: 'Chải mới tập làm nên chưa được đẹp lắm, nhưng xuất phát từ tấm lòng của Chải nên mong Pu đừng chê nhé. Chải hông có khiếu thẩm mỹ cho lắm😂',
                                                text: 'Lần sau chải sẽ cố gắng làm nó thẩm mỹ hơn 👌',
                                                confirmButtonColor: '#83d0c9',
                                                backdrop: `
                                                    rgba(0,0,123,0.4)
                                                    url("giphy2.gif")
                                                    left top
                                                    no-repeat
                                                    `,
                                                onClose: () => {
                                                    window.location = CONFIG.messLink;
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
        }
    })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9 ;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init()

var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " " + CONFIG.reply;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('tick.mp3');
    audio.play();
    Swal.fire({
        title: CONFIG.question,
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        background: '#fff url("iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("giphy2.gif")
              left top
              no-repeat
            `,
        confirmButtonColor: '#3085d6',
        confirmButtonColor: '#fe8a71',
        confirmButtonText: CONFIG.btnReply
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: CONFIG.btnAccept,
                background: '#fff url("iput-bg.jpg")',
                title: CONFIG.mess,
                text: CONFIG.messDesc,
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = CONFIG.messLink;
                  }
            })
        }
    })
})

