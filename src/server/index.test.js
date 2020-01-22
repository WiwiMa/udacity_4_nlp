import { processArticle } from './index';

describe('Testing API', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    test('Contacts API and returns data about article', () => {
        fetch.mockResponseOnce(JSON.stringify({ positivity: '10'}))
        let req = {'body': {
            'article': 'www.article.com'
        }}

        processArticle(req).then(res => {
            expect(res.positivity).toEqual('10')
        })
    })
})