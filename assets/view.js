const contentView = document.getElementById('content')
const introView = document.getElementById('introduction-page')
const articleView = document.getElementById('article-page')
const introButtons = document.getElementsByClassName('btn-intro')
const articleButtons = document.getElementsByClassName('btn-article')
const navigator = document.getElementById('nav')
const url = window.location.href

function onOffIntroButtons(goOn) {
    if (goOn) {
        for (var i = 0; i < introButtons.length; i++) {
            introButtons[i].classList.add('select')
        }
    } else {
        for (var i = 0; i < introButtons.length; i++) {
            introButtons[i].classList.remove('select')
        }
    }
}

function onOffArticleButtons(goOn) {
    if (goOn) {
        for (var i = 0; i < articleButtons.length; i++) {
            articleButtons[i].classList.add('select')
        }
    } else {
        for (var i = 0; i < articleButtons.length; i++) {
            articleButtons[i].classList.remove('select')
        }
    }
}

for (var i = 0; i < introButtons.length; i++) {
    introButtons[i].addEventListener('click', () => {
        navigator.classList.remove('show')
        articleView.classList.add('hide')
        setTimeout(function() {
            articleView.remove()
            contentView.appendChild(introView)
            onOffIntroButtons(true)
            onOffArticleButtons(false)

            setTimeout(function() {
                introView.classList.remove('hide')
            }, 10)
        }, 300)
    }, false)
}

for (var i = 0; i < articleButtons.length; i++) {
    articleButtons[i].addEventListener('click', () => {
        introView.classList.add('hide')
        setTimeout(function() {
            navigator.classList.add('show')
            introView.remove()
            contentView.appendChild(articleView)
            articleView.classList.remove('hide')
            onOffIntroButtons(false)
            onOffArticleButtons(true)

            setTimeout(function() {
                articleView.classList.remove('hide')
            }, 300)
        }, 300)
    }, false)
}

if (url.indexOf('list') == -1) {
    articleView.remove()
    setTimeout(function() {
        introView.classList.remove('hide')
    }, 300)
} else {
    articleView.classList.remove('hide')
    introView.remove()
    onOffIntroButtons(false)
    onOffArticleButtons(true)
    navigator.classList.add('show')
}
