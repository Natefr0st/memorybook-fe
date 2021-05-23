import * as api from '../api';

/**
 * Get Posts Action Creator
 * @returns {void}
 */
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();

		dispatch({
			type: 'FETCH_ALL',
			payload: data,
		});
	} catch (error) {
		console.log(error.message);
	}
};

/**
 * Create Post Action Creator
 * @param {object} post Body
 * @returns {void}
 */
export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);

		dispatch({
			type: 'CREATE',
			payload: data,
		});
	} catch (error) {
		console.log(error.message);
	}
};
