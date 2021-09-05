
const Resolvers = {
    Query: {
        allPosts: (_, __, context) => {
            return context.post.allPosts();
        },
        allUsers: (_, __, context) => {
            return context.user.allUsers();
        }
    },
    Post: {
        createdBy: (post, __, context) => {
            return context.user.findOne(post.createdBy);
        }
    }
};

module.exports = Resolvers;
