<template>
	<div class="min-w-[50px] min-h-[50px] fixed top-1/3 left-1/2 bg-black p-4" :class="!donationOverride && state ? 'flex flex-col justify-center' : 'hidden'" style="transform: translate(-50%, 0); border: 6px ridge #bbb; color: yellow;">
		<!-- Close Button -->
		<div class="flex justify-end">
			<button @click="state=false" class="p-0 m-0">
				<ul class="prohibited p-0 m-0">
					<li class="align-items-start p-0 m-0"></li>
				</ul>
			</button>
		</div>

		<!-- Image and Text -->
		<div class="flex justify-between items-center">
			<img src="images/dollars.gif" alt="dollar" />
			<slot />
		</div>

		<!-- Donate -->
		<div class="flex w-full justify-center">
			<a
				href="https://account.venmo.com/u/Ranchofest"
				class="btn btn-primary btn-large mt-4"
			>
				<span class="blink">Donate</span>
			</a>
		</div>

		<button class="mt-4 hover:underline" @click="overrideDonation()">I already donated!</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
	open: boolean
}>()

const donationOverride = localStorage.getItem('donationOverride')

const state = ref(props.open)

const overrideDonation = () => {
	state.value = false
	localStorage.setItem('donationOverride', 'true')
}
</script>
