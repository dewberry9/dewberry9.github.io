const buttonShare = document.getElementById('post-share');

buttonShare.addEventListener('click', function(event){
    const copyUrl = window.location.href + '?utm_source=share_link&utm_medium=referral'
    window.navigator.clipboard.writeText(copyUrl).then(() => {
        buttonShare.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="bi bi-check-circle-fill"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>복사 완료!';
        setTimeout(function(){
            buttonShare.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="bi bi-subtract"><path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/></svg>이 글의 공유 링크 복사';
        }, 1000);
    });
});