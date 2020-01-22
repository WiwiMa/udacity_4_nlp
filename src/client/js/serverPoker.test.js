import { pokeServer } from './serverPoker.js';

let fakeURL = "https://www.google.com/";
document.body.innerHTML = `<input id="article" value="${URL}">`

// Define event.preventDefault with a mock-function
const event = {
    preventDefault() {
        jest.fn()
    }
};

// Define Client.postArticleUrl with a mock-function for the test
window.Client = {
    postArticleUrl: jest.fn()
};

test('See if postArticleUrl() was called', () => {
    // pokeServer needs to be called with event-param due to event.preventDefault() it seems...
    pokeServer(event);
    expect(Client.postArticleUrl).toHaveBeenCalled();
});