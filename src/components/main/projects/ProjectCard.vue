<script>
export default {
  name: "ProjectCard",

  props: {
    project: {
      type: Object,
      required: true,
    },

    isShow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<template>
  <article class="card">
    <img class="card-img-top" :src="project.img_path" :alt="project.img_path" />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{
          isShow
            ? project.description
            : project.description.substr(0, 100) + "..."
        }}
      </p>
      <router-link
        v-if="!isShow"
        :to="{ name: 'project', params: { slug: project.slug } }"
        clroute-linkss="btn btn-primary"
        title="Vedi il post completo"
        >View More</router-link
      >
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
