// blogStore.js

const state = {
  blogs: [
    {
      id: 1,
      title: 'Sample Blog Post 1',
      image: require('@/assets/Images/blog.png'),
      date: 'January 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 2,
      title: 'Sample Blog Post 2',
      image: require('@/assets/Images/blog.png'),
      date: 'January 2, 2021',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 3,
      title: 'Sample Blog Post 3',
      image: require('@/assets/Images/blog.png'),
      date: 'January 3, 2019',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    }
  ],
  blog: null // Add a property to store a single blog post
};

const getters = {
  // Example getter to retrieve all blogs
  allBlogs: state => state.blogs,
  // Getter to retrieve a blog post by ID
  getBlogById: state => id => {
    return state.blogs.find(blog => blog.id === id);
  }
};

const actions = {
  // Example action to fetch blogs from an API
  fetchBlogs({ commit }) {
    // Simulate fetching data from an API
    // Replace this with actual API call
    setTimeout(() => {
      commit('setBlogs', [
        {
          id: 4,
          title: 'New Blog Post',
          image: require('@/assets/Images/blog.png'),
          date: 'February 28, 2024',
          content: 'This is a new blog post fetched from an API.'
        }
      ]);
    }, 1000);
  }
};

const mutations = {
  // Example mutation to set blogs
  setBlogs: (state, blogs) => (state.blogs = blogs),
  // Mutation to set a single blog post by ID
  setBlog: (state, blog) => (state.blog = blog)
};

export default {
  state,
  getters,
  actions,
  mutations
};
