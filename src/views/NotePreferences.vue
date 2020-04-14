<template>
  <div class="row justify-content-center">
    <div class="card bg-light mb-3">
      <div class="card-header">
        <h4>Choose Preferences</h4>
      </div>
      <div class="card-body">
        <div class="card-text">
          <form @submit.prevent="savePreferences">
            <div>
              <input
                type="radio"
                id="localstorage"
                name="storage"
                value="localstorage"
                checked
              />
              <label for="localstorage">Local storage (default)</label>
            </div>
            <div>
              <input
                type="radio"
                id="firebase"
                name="storage"
                value="firebase"
              />
              <label for="firebase">Firebase</label>
            </div>
            <BaseButton>Save</BaseButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
label {
  display: inline-block;
  margin-left: 5%;
}
input {
  width: auto;
}
.card-body {
  text-align: left;
  .card-text {
    min-width: 300px;
  }
}
</style>
