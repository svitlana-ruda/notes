<template>
  <div class="row justify-content-center">
    <div class="card bg-light mb-3">
      <div class="card-header">
        <h4>Create Note</h4>
      </div>
      <div class="card-body">
        <div class="card-text">
          <form @submit.prevent="createNote">
            <div>
              <div v-if="$v.note.name.$error">
                <label
                  v-if="!$v.note.name.required"
                  for="name"
                  class="errorMessage"
                >
                  Name is required
                </label>
              </div>
              <label v-else for="name">Name</label>
              <input
                id="name"
                v-model="note.name"
                @blur="$v.note.name.$touch()"
                :class="{ error: $v.note.name.$error }"
              />
            </div>
            <div>
              <div v-if="$v.note.content.$error">
                <label
                  v-if="!$v.note.content.required"
                  for="content"
                  class="errorMessage"
                >
                  Content is required
                </label>
              </div>
              <label v-else for="content">Content</label>
              <textarea
                id="content"
                v-model="note.content"
                rows="8"
                @blur="$v.note.content.$touch()"
                :class="{ error: $v.note.content.$error }"
              ></textarea>
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
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      note: this.createFreshNoteObject()
    }
  },
  validations: {
    note: {
      name: { required },
      content: { required }
    }
  },
  methods: {
    createNote() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
          .dispatch('createNote', this.note)
          .then(() => {
            this.$router.push({
              name: 'note-show',
              params: { id: this.note.id }
            })
            this.note = this.createFreshNoteObject()
          })
          .catch(() => {
            console.log('There was a problem creating your note.')
          })
      }
    },
    createFreshNoteObject() {
      const id = Math.floor(Math.random() * 10000000)
      return {
        id: id,
        name: '',
        content: ''
      }
    }
  }
}
</script>
