
const Post = {
    allPosts: () => {
        return [{
            createdOn: "09-01-2021 23:45",
            createdBy: "aravind_sekar",
            intro: "Intro Post",
            coverImage: "sampleimage.jpg",
            keywords: ["intro"],
            theme: "DEFAULT",
            body: "This is sample post with body content",
            format: "MD"
        }];
    }
};

module.exports = Post;
