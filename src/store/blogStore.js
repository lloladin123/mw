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
    },
    // Add more blog posts here
    {
      id: 4,
      title: 'Sample Blog Post 4',
      image: require('@/assets/Images/blog.png'),
      date: 'January 4, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 5,
      title: 'Sample Blog Post 5',
      image: require('@/assets/Images/blog.png'),
      date: 'January 5, 2021',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 6,
      title: 'Sample Blog Post 6',
      image: require('@/assets/Images/blog.png'),
      date: 'January 6, 2019',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 7,
      title: 'Sample Blog Post 7',
      image: require('@/assets/Images/blog.png'),
      date: 'January 7, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 8,
      title: 'Sample Blog Post 8',
      image: require('@/assets/Images/blog.png'),
      date: 'January 8, 2021',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 9,
      title: 'Sample Blog Post 9',
      image: require('@/assets/Images/blog.png'),
      date: 'January 9, 2019',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 10,
      title: 'Sample Blog Post 10',
      image: require('@/assets/Images/blog.png'),
      date: 'January 10, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 11,
      title: 'Sample Blog Post 11',
      image: require('@/assets/Images/blog.png'),
      date: 'January 11, 2021',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 12,
      title: 'Sample Blog Post 12',
      image: require('@/assets/Images/blog.png'),
      date: 'January 12, 2019',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 13,
      title: 'Sample Blog Post 13',
      image: require('@/assets/Images/blog.png'),
      date: 'January 13, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 14,
      title: 'Sample Blog Post 14',
      image: require('@/assets/Images/blog.png'),
      date: 'January 14, 2021',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...'
    },
    {
      id: 15,
      title: 'Sample Blog Post 15',
      image: require('@/assets/Images/blog.png'),
      date: 'January 15, 2019',
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
  },
    // Action to add a new blog post
    addBlog({ commit }, blog) {
      // Here you can perform any necessary logic before committing the mutation
      // For example, you can validate the blog post data or make an API call to save it
      commit('addBlog', blog);
    },
      // Delete a blog post
  deleteBlog({ commit }, postId) {
    // Perform any necessary logic before committing the mutation
    // For example, you can validate the post ID or make an API call to delete the post
    commit('removeBlog', postId);
  },
  updateBlog({ commit }, { id, updatedBlog }) {
    // Perform any necessary logic before committing the mutation
    // For example, you can validate the post ID or make an API call to update the post
    commit('updateBlog', { id, updatedBlog });
  }
};

const mutations = {
  // Example mutation to set blogs
  setBlogs: (state, blogs) => (state.blogs = blogs),
  // Mutation to set a single blog post by ID
  setBlog: (state, blog) => (state.blog = blog),
  // Mutation to add a singel blog post
  addBlog: (state, blog) => state.blogs.push(blog),
  // Mutation to delete a single blog post by ID
  deleteBlog: (state, postId) => {
    state.blogs = state.blogs.filter(blog => blog.id !== postId);
  },
  // Mutation to Update a single blog post
  updateBlog: (state, { id, updatedBlog }) => {
    const index = state.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      // Replace the old blog post with the updated one
      state.blogs.splice(index, 1, { ...state.blogs[index], ...updatedBlog });
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
