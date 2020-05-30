import Vue from 'vue'
import Vuex from 'vuex'
import NoteService from '@/services/NoteService.js'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'notes',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    notes: [],
    note: {},
    comments: [],
    comment: {}
  },
  mutations: {
    ADD_NOTE(state, note) {
      state.notes.push(note)
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment)
    },
    SET_NOTES(state, notes) {
      state.notes = notes
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments
    },
    SET_NOTE(state, note) {
      state.note = note
    },
    SET_COMMENT(state, comment) {
      state.comment = comment
    }
  },
  actions: {
    createNote({ commit }, note) {
      return NoteService.postNote(note).then(() => {
        commit('ADD_NOTE', note)
      })
    },
    editNote({ commit }, note) {
      return NoteService.editNote(note).then(() => {
        commit('SET_NOTE', note)
      })
    },
    deleteNote({ commit }, note) {
      return NoteService.deleteNote(note).then(() => {
        commit('SET_NOTE', note)
      })
    },
    createComment({ commit }, comment) {
      return NoteService.postComment(comment).then(() => {
        commit('ADD_COMMENT', comment)
      })
    },
    fetchNotes({ commit }) {
      NoteService.getNotes()
        .then(response => {
          commit('SET_NOTES', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchComments({ commit }) {
      NoteService.getComments()
        .then(response => {
          commit('SET_COMMENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchNote({ commit }, id) {
      NoteService.getNote(id)
        .then(response => {
          commit('SET_NOTE', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchComment({ commit }, id) {
      NoteService.getComment(id)
        .then(response => {
          commit('SET_COMMENT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  getters: {
    getCurrentNoteComments: state => {
      return state.comments.filter(comment => comment.note_id === state.note.id)
    }
  },
  plugins: [vuexPersist.plugin]
})
