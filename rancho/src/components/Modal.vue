<template>
	<div>
		<div v-if="!donationOverride && state" class="min-w-[50px] min-h-[50px] fixed top-1/3 left-1/2 bg-black p-4 flex flex-col" style="transform: translate(-50%, 0); border: 6px ridge #bbb; color: yellow;">
			<!-- Close Button -->
			<div class="flex justify-end">
				<button @click="close()" class="p-0 m-0">
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
			<a
				href="https://account.venmo.com/u/Ranchofest"
				class="btn btn-primary btn-large mt-4"
			>
				<span class="blink">Donate</span>
			</a>

			<button class="mt-4 hover:underline" @click="overrideDonation()">I already donated!</button>
		</div>


		<div v-if="!donationOverride && !state" class="w-full h-screen fixed">
			<div class="el-wrap x">
				<div class="el y">
					<div class="h-[100px] flex justify-center items-center text-red-500 text-3xl font-bold p-4" style="background-color: yellow; border: 6px ridge #bbb;">Donate to Ranchofest!</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
	open: boolean
}>()

const donationOverride = localStorage.getItem('donationOverride')

const sound = new Audio('sounds/cowbell.wav')

const state = ref(props.open)

const overrideDonation = () => {
	state.value = false
	localStorage.setItem('donationOverride', 'true')
}

const close = () => {
	state.value = false

	sound.loop = true;
	sound.play();
}
</script>
