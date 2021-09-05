
const User = {
    allUsers() {
        return [{
            displayName: "Aravind Sekar",
            userName: "aravind_sekar",
            email: "abc@gmail.com",
            avatar: "avatar.jpg"
        }];
    },
    findOne(userId) {
        return {
            displayName: "Aravind Sekar",
            userName: userId,
            email: "abc@gmail.com",
            avatar: "avatar.jpg"
        };
    }
};

module.exports = User;
