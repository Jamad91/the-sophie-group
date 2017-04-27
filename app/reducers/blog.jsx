import {
  RECEIVE_ALL_BLOG_POSTS,
  SELECT_SINGLE_BLOG_POST,
  ADD_BLOG_POST,
  DELETE_BLOG_POST
} from 'APP/app/constants'

const DEFAULT_STATE = {
  allBlogPosts: [],
  selectedBlogPost: {}
}

function blogPostsReducer (state = DEFAULT_STATE, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_BLOG_POSTS:
      newState.allBlogPosts = action.allBlogPosts;
      break;
    case SELECT_SINGLE_BLOG_POST:
      newState.selectedBlogPost = action.blogPost;
      break;
    case ADD_BLOG_POST:
      let dummy = newState.allBlogPosts.slice(0);
      dummy.push(action.blogPostInfo);
      newState.allBlogPosts = dummy;
      break;
    case DELETE_BLOG_POST:
      let d2 = newState.allBlogPosts.slice(0);
      d2 = d2.filter(post => {
        return post.id !== action.blogPostId
      });
      newState.allBlogPosts = d2;
      return newState;
      break;
    default:
      return state
  }
  return newState;
}

export default blogPostsReducer;
