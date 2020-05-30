<template>
  <div class="row justify-content-center">
    <div class="card bg-light mb-3">
      <div class="card-header">
        <h4>Add Comment</h4>
      </div>
      <div class="card-body">
        <div class="card-text">
          <form @submit.prevent="createComment">
            <div>
              <div v-if="$v.comment.firstName.$error">
                <label
                  v-if="!$v.comment.firstName.required"
                  for="firstName"
                  class="errorMessage"
                >
                  First Name is required
                </label>
              </div>
              <label v-else for="firstName">First Name</label>
              <input
                id="firstName"
                v-model="comment.firstName"
                @blur="$v.comment.firstName.$touch()"
                :class="{ error: $v.comment.firstName.$error }"
              />
            </div>
            <div>
              <div v-if="$v.comment.lastName.$error">
                <label
                  v-if="!$v.comment.lastName.required"
                  for="lastName"
                  class="errorMessage"
                >
                  Last Name is required
                </label>
              </div>
              <label v-else for="lastName">Last Name</label>
              <input
                id="lastName"
                v-model="comment.lastName"
                @blur="$v.comment.lastName.$touch()"
                :class="{ error: $v.comment.lastName.$error }"
              />
            </div>
            <div>
              <div v-if="$v.comment.content.$error">
                <label
                  v-if="!$v.comment.content.required"
                  for="commentContent"
                  class="errorMessage"
                >
                  Content is required
                </label>
              </div>
              <label v-else for="commentContent">Content</label>
              <textarea
                id="commentContent"
                v-model="comment.content"
                rows="4"
                @blur="$v.comment.content.$touch()"
                :class="{ error: $v.comment.content.$error }"
              ></textarea>
            </div>
            <div>
              <label for="created_at">Date</label>
              <input
                type="datetime"
                id="created_at"
                v-model="comment.created_at"
                disabled
              />
            </div>
            <BaseButton value="submit" type="submit" :disabled="$v.$invalid"
              >Submit</BaseButton
            >
            <p v-if="$v.$anyError" class="errorMessage">
              Please fill out the required field(s)
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  props: ['id'],
  created() {
    this.$store.dispatch('fetchNote', this.id)
  },
  computed: mapState(['note']),
  data() {
    return {
      comment: this.createFreshCommentObject()
    }
  },
  validations: {
    comment: {
      firstName: { required },
      lastName: { required },
      content: { required }
    }
  },
  methods: {
    createComment() {
      this.$store
        .dispatch('createComment', this.comment)
        .then(() => {
          this.$router.push({
            name: 'note-show',
            params: { id: this.note.id }
          })
          this.comment = this.createFreshCommentObject()
        })
        .catch(() => {
          console.log('There was a problem creating your comment.')
        })
    },
    createFreshCommentObject() {
      const id = Number(this.id + Math.floor(Math.random() * 10000))
      const date = new Date().toLocaleString()
      const note_id = this.id
      return {
        id: id,
        firstName: '',
        lastName: '',
        content: '',
        created_at: date,
        note_id: note_id
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  text-transform: capitalize;
}
</style>
