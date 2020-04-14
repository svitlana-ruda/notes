import Vue from 'vue'
import VueRouter from 'vue-router'
import NotePreferences from '../views/NotePreferences.vue'
import NoteList from '../views/NoteList.vue'
import NoteCreate from '../views/NoteCreate.vue'
import NoteEdit from '../views/NoteEdit.vue'
import NoteShow from '../views/NoteShow.vue'
import CommentCreate from '../views/CommentCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'note-list',
    component: NoteList
  },
  {
    path: '/preferences',
    name: 'note-preferences',
    component: NotePreferences
  },
  {
    path: '/create',
    name: 'note-create',
    component: NoteCreate
  },
  {
    path: '/note/:id',
    name: 'note-show',
    component: NoteShow,
    props: true
  },
  {
    path: '/note/comment/:id',
    name: 'comment-create',
    component: CommentCreate,
    props: true
  },
  {
    path: '/note/edit/:id',
    name: 'note-edit',
    component: NoteEdit,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
