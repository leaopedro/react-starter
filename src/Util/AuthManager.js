export default {
    isAuthenticated: true,

    authenticate(cb) { // mock
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) { // mock
        this.isAuthenticated = false;
        setTimeout(cb, 100) // fake async
    }
};
