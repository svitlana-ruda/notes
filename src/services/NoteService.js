import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getNotes() {
    return apiClient.get('/notes')
  },
  getComments() {
    return apiClient.get('/comments')
  },
  getNote(id) {
    return apiClient.get('/notes/' + id)
  },
  getComment(id) {
    return apiClient.get('/comments/' + id)
  },
  postNote(note) {
    return apiClient.post('/notes', note)
  },
  postComment(comment) {
    return apiClient.post('/comments', comment)
  },
  editNote(note) {
    return apiClient.put('/notes/' + note.id, note)
  },
  deleteNote(note) {
    return apiClient.delete('/notes/' + note.id, note)
  }
}
