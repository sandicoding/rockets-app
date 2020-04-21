
<template>
<section>
    <button
    @click="showForm = !showForm"
    class="btn btn-primary mt-5">
    Show Form
    </button>
    <form v-if="showForm">
       <div class="form-group">
          <label for="name">Name</label>
         <!-- eslint-disable-next-line max-len -->
         <input type="text" name="name" class="form-control" id="name" aria-describedby="name">
        </div>
         <div class="form-group">
          <label for="country">Country</label>
         <!-- eslint-disable-next-line max-len -->
         <input type="text" name="country" class="form-control" id="country" aria-describedby="country">
        </div>
        <div class="form-group">
          <label for="description">Description</label>
         <!-- eslint-disable-next-line max-len -->
         <textarea type="text" name="description" class="form-control" id="description" aria-describedby="description"></textarea>
        </div>
        <div class="form-group">
          <label for="image">Image</label>
         <!-- eslint-disable-next-line max-len -->
         <input type="file" name="image" class="form-control" id="image" aria-describedby="image">
        </div>
        <button type="submit" class="btn btn-primary">Add Rocket</button>
    </form>
    </section>
</template>

<script>
export default {
  name: 'NewRocketForm',
  data: () => ({
    showForm: false,
  }),
};
</script>
