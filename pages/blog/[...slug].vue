<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentDoc>
      <template #not-found>
        <h1>Документ не найден (404)</h1>
        <p>Этот пост не найден.</p>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-6 md:col-span-4': doc.toc, 'col-span-6': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div class="hidden md:col-span-2 md:block not-prose" v-if="doc.toc">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Разделы</div>
              <nav>
                <TocLinks :links="doc.body.toc.links" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>

</script>