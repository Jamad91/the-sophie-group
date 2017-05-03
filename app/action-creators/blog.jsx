import {
  RECEIVE_ALL_BLOG_POSTS,
  SELECT_SINGLE_BLOG_POST,
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  UPDATE_BLOG_POST
} from 'APP/app/constants';

import axios from 'axios';

import store from 'APP/app/store';

const receiveAllBlogPosts = allBlogPosts => ({
  type: RECEIVE_ALL_BLOG_POSTS,
  allBlogPosts
})

const selectBlogPost = blogPost => ({
  type: SELECT_SINGLE_BLOG_POST,
  blogPost
})

export const fetchAllBlogPosts = function() {
  return dispatch => {
    axios.get('./api/blog')
    .then(res => {
      dispatch(receiveAllBlogPosts(res.data))
    })
  }
}

export const fetchSingleBlogPost = function(blogPostId) {
  return dispatch => {
    axios.get(`/api/blog/${blogPostId}`)
    .then(res => {
      dispatch(selectedBlogPost(res.data))
    })
  }
}

const addBlogPost = blogPostInfo => ({
  type: ADD_BLOG_POST,
  blogPostInfo
})

export const createBlogPost = function(info) {
  return dispatch => {
    dispatch(addBlogPost(info))
    axios.post('/api/blog', info)
      .catch(err => console.error("Wasn't able to add blog post", err))
    }
}

const deleteBlogPost = blogPostId => ({
  type: DELETE_BLOG_POST,
  blogPostId
})

export const destroyBlogPost = function(id) {
  return dispatch => {
    dispatch(deleteBlogPost(id))
    axios.delete(`/api/blog/${id}`)
      .catch(err => console.error("Wasn't able to delete blog post", err))
  }
}

const editBlogPost = (blogPostId, blogPostInfo) => ({
  type: UPDATE_BLOG_POST,
  blogPostId,
  blogPostInfo
})

export const updateBlogPost = function(id, info) {
  return dispatch => {
    dispatch(editBlogPost(id, info))
    axios.put(`api/forRent/${id}`, info)
      .then(res => res.data)
      .catch(err => console.error("Wasn't able to update blog post", err))
  }
}
