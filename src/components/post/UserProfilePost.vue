<template>
  <div class="w-full bg-gray-100 my-2 rounded-[12px] overflow-hidden">
    <div class="flex pt-6 px-4">
      <div class="w-full flex flex-row justify-between">
        <div class="text-gray-500 flex items-center">
          <span>发布于：{{ formatTime(postData.createdAt) }}</span>
          <IconView class="w-4 h-4 inline-block ml-2 mr-1" />
          <span>{{ postData.viewCount }}</span>
        </div>
        <div v-if="editMode">
          <RouterLink class="mr-1" :to="'/post/edit/' + postData.pid">
            <NormalButton>编辑</NormalButton>
          </RouterLink>
          <NormalButton @click="emits('delete', postData.pid)">删除</NormalButton>
        </div>
      </div>
    </div>
    <RouterLink :to="'/post/' + postData.pid">
      <div class="pl-4 pr-8">
        <p class="text-2xl leading-[60px]">{{ postData.title }}</p>
        <p class="">{{ postData.text }}</p>
      </div>
    </RouterLink>
    <div class="flex h-10 mt-4">
      <RouterLink class="flex-1" :to="{ path: '/post/' + postData.pid, query: { navigate: 'comments' } }">
        <div class="h-full flex items-center justify-center hover:bg-gray-500/10 transition-colors">
          <IconComment class="w-5 h-5 inline-block mr-1" />
          <span>{{ postData._count.comments }}</span>
        </div>
      </RouterLink>
      <div class="flex-1 flex items-center justify-center hover:bg-gray-500/10 transition-colors">
        <IconLikeO class="w-5 h-5 inline-block mr-1" />
        <span>{{ postData.like }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostData } from '@/core/types';
import { formatTime } from '@/utils';
import IconLikeO from '@cp/icon/IconLikeO.vue';
import IconComment from '@cp/icon/IconComment.vue';
import NormalButton from '../common/NormalButton.vue';
import IconView from '../icon/IconView.vue';

defineProps<{
  postData: PostData,
  editMode: boolean
}>()

const emits = defineEmits(['delete'])

</script>