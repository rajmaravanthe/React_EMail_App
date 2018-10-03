import mockData from '../mockdata/mockdata.json';

export const storeCompose = (state) => {
    let mockData = getMockData();
    let user = getUserData();
    let id = Math.floor(Math.random() * 1000000);
    mockData.user.map((data, index) => {
        if (data.email === state.to) {
            mockData.user[index].inbox.unshift({
                "id": id,
                "from": getUserData().email,
                "username": state.to,
                "email": state.to,
                "subject": state.subject,
                "body": state.message,
                "datetime": new Date(),
                "attachment": "",
                "unread": true
            })
        }
        if (user.email == data.email) {
            mockData.user[index].sentitems.unshift({
                "id": id,
                "from": getUserData().email,
                "username": state.to,
                "email": state.to,
                "subject": state.subject,
                "body": state.message,
                "datetime": new Date(),
                "attachment": "",
                "unread": true
            })
        }
    })
    setMockData(mockData);
}

export const makeRead = (obj) => {
    let mockData = getMockData();
    let user = getUserData();
    let changedInbox;
    let unread = 0;
    mockData.user.map((data, index) => {
        if (user.email === data.email && user.password === data.password) {
            mockData.user[index].inbox.map((inbox, i) => {
                if (inbox.id == obj.id) {
                    mockData.user[index].inbox[i].unread = false;
                    changedInbox = mockData.user[index].inbox;
                }
            })
        }
    })
    setMockData(mockData);
    return { changedInbox: changedInbox, unread: unreadCount() };
}


export const unreadCount = () => {
    let mockData = getMockData();
    let user = getUserData();
    let unread = 0;
    mockData.user.map((data, index) => {
        if (user.email === data.email && user.password === data.password) {
            mockData.user[index].inbox.map((mail, i) => {
                if (mockData.user[index].inbox[i].unread) {
                    unread = unread + 1;
                }
            })
        }
    })
    return unread;
}

export const setLocalStorage = () => {
    if (localStorage.getItem('mockData') == null)
        setMockData(mockData);
}

const getMockData = () => {
    return JSON.parse(localStorage.getItem('mockData'));
}

const setMockData = (mockData) => {
    localStorage.setItem('mockData', JSON.stringify(mockData));
}

const getUserData = () => {
    return JSON.parse(localStorage.getItem('loginData'));
}

export const getInbox = () => {
    let mockData = getMockData();
    let user = getUserData();

    for (let i in mockData.user) {
        if (mockData.user[i].email == user.email) {
            return mockData.user[i].inbox
        }
    }
}

export const getSentItems = () => {
    let mockData = getMockData();
    let user = getUserData();

    for (let i in mockData.user) {
        if (mockData.user[i].email == user.email) {
            return mockData.user[i].sentitems
        }
    }
}

export const deleteInbox = (ids) => {
    let mockData = getMockData();
    let user = getUserData();
    for (let i in mockData.user) {
        if (mockData.user[i].email == user.email) {
            var newObj = mockData.user[i].inbox.filter(function(obj) {
                return ids.indexOf(obj.id) === -1;
            });
            mockData.user[i].inbox = newObj;
            setMockData(mockData);
        }
    }
}

export const getInboxCount = () => {
    let mockData = getMockData();
    let user = getUserData();
    for (let i in mockData.user) {
        if (mockData.user[i].email == user.email) {
            return mockData.user[i].inbox.length;
        }
    }
}