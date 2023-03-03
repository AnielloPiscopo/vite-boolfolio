<script>
export default {
  name: "MainProjectCard",

  props: {
    projectDescription: String,
    projectTitle: String,
    projectImgPath: String,
    projectSlug: String,
  },
};
</script>

<template>
  <article class="card col-2 mb-5 mx-3">
    <img class="card-img-top" :src="projectImgPath" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ projectTitle }}</h5>
      <p class="card-text">{{ projectDescription.substr(0, 100) }}...</p>
      <router-link
        :to="{ name: 'project', params: { slug: projectSlug } }"
        clroute-linkss="btn btn-primary"
        >View More</router-link
      >
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
