<template>
	<div>
		<!-- Modal -->
		<div v-if="!donationOverride && state" class="min-w-[50px] min-h-[50px] fixed top-1/3 left-1/2 bg-black p-4 flex flex-col items-center" style="transform: translate(-50%, 0); border: 6px ridge #bbb; color: yellow;">
			<!-- Close Button -->
			<div class="flex justify-end w-full">
				<button aria-label="close" @click="state = false" class="p-0 m-0">
					<ul class="prohibited p-0 m-0">
						<li class="align-items-start p-0 m-0"></li>
					</ul>
				</button>
			</div>

			<!-- Image and Text -->
			<div class="flex justify-between items-center">
				<img src="images/dollars.gif" alt="dollar" class="mr-4" />
				<slot />
			</div>

			<!-- Donate -->
			<a
				aria-label="Donate to Ranchofest"
				href="https://account.venmo.com/u/Ranchofest"
				target="_blank"
        rel="noopener noreferrer"
				class="btn btn-primary btn-large mt-4 flex"
				@click="donate_close()"
			>
				<div class="flex items-center justify-between">
					<span class="font-bold inline-block hover:text-white">Donate Now!</span>
					<img src="images/arrow.gif" alt="arrow" class="ml-4 lg:flex hidden" />
				</div>
			</a>

			<button aria-label="Terrible Person" class="mt-4 hover:underline text-red-500 font-bold" @click="close()">I'm a bad person who won't be donating. Take me to the site I deserve.</button>

			<a href="#" class="rainbow-button mt-4 hover:text-white" alt="I Already Donated!" area-label="Already Donated" @click="overrideDonation()"></a>
		</div>

		<div v-if="badOverride">
			<!-- Bouncing Donation -->
			<div class="w-full h-screen fixed pointer-events-none">
				<div class="el-wrap x">
					<div class="el y w-[250px] lg:w-[350px] h-[100px]">
						<div class="h-[100px] flex flex-col justify-center items-center text-red-500 lg:text-3xl text-lg font-bold p-4" style="background-color: yellow; border: 6px ridge #bbb;">
							Donate to Ranchofest!
						</div>
					</div>
				</div>
			</div>
			<!-- Background Dog -->
			<div class="dog w-full h-screen fixed pointer-events-none bg-contain bg-no-repeat bg-center opacity-5" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
	open: boolean
}>()

let badOverride = ref(false)

const donationOverride = localStorage.getItem('donationOverride')

const sound = new Audio('sounds/cowbell.wav')

const state = ref(props.open)

const overrideDonation = () => {
	state.value = false
	sound.pause();
	localStorage.setItem('donationOverride', 'true')
}

const close = () => {
	state.value = false
	badOverride.value = true

	sound.loop = true;
	sound.play();
}

const donate_close = () => {
	state.value = false
	sound.pause();
	localStorage.setItem('donationOverride', 'true')
}
</script>
