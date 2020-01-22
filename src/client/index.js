import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

import { pokeServer } from './js/serverPoker'
import { postArticleUrl } from './js/postArticleUrl'

export {
    pokeServer,
    postArticleUrl
}

document.getElementById('submit').addEventListener('click', pokeServer);