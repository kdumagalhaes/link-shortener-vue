import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        resultDisplay: false,
        longUrl: '',
        shortenedUrl: '',
    },
    mutations: {
        SET_SHORTENED_URL(state, shortenedUrl) {
            state.shortenedUrl = shortenedUrl
        },
    },
    actions: {
        fetchBitLyApi({ commit }, value) {
            const data = JSON.stringify({ long_url: value })
            const config = {
                method: 'post',
                url: 'https://api-ssl.bitly.com/v4/shorten',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.VUE_APP_API_KEY,
                },
                data: data,
            }

            axios(config)
                .then(function (response) {
                    const shortenedUrl = encodeURI(response.data.link)
                    commit('SET_SHORTENED_URL', shortenedUrl)
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
    },
    getters: {
        getResultDisplay(state) {
            return state.shortenedUrl !== ''
                ? (state.resultDisplay = true)
                : (state.resultDisplay = false)
        },

        getShortenedUrl(state) {
            return state.shortenedUrl
        },
    },
})
