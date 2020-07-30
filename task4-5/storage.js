const CrossOriginLocalStorage = function(currentWindow, iframe, onMessage) {

    let childWindow;

    childWindow = iframe.contentWindow;

    currentWindow.onmessage = (event) => {
        onMessage(JSON.parse(event.data), event);
    };

    this.getData = (key) => {
        const messageData = {
            key: key,
            method: 'get',
        }
        this.postMessage(messageData);
    }
    
    this.deleteData = () => {
        const messageData = {
            method: 'remove',
        }
        this.postMessage(messageData);
    }

    this.setData = (key, data) => {
        const messageData = {
            key: key,
            method: 'set',
            data: data,
        }
        this.postMessage(messageData);
    }

    this.postMessage = (messageData) => {
        childWindow.postMessage(JSON.stringify(messageData), '*');
    }
};