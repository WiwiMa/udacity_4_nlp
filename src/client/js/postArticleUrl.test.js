const { postArticleUrl } = require('./postArticleUrl');

describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    test('Sending data to server and receiving response', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: 'cool' }))

        postArticleUrl('/articleUrl', { 'url': 'www.google.com'}).then(res => {
            expect(res.data).toEqual('cool')
        })
    })
})