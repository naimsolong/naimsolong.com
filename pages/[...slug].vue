<template>
  <main>
      <ContentDoc :path="$route.path">
        <template v-slot="{ doc }">
          <ContentRenderer :value="doc" />
        </template>
        <template #not-found>
          <h1>Page not found</h1>
        </template>
      </ContentDoc>
  </main>
</template>