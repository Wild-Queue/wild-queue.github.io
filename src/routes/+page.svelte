<script lang="ts">
	import About from './About.svelte';
	import HardSkills from './HardSkills.svelte';
	import { Experiences } from './WorkExperience';
	import WorkExperienceItem from './WorkExperienceItem.svelte';
	import SoftSkills from './SoftSkills.svelte';
	import Languages from './Languages.svelte';
	import Education from './Education.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div style="height: max-content;">
		<h1 style="margin: 0 0 10px 10px;">Shalagin Egor</h1>
		<img
			title="Shalagin Egor"
			alt="Shalagin Egor"
			src="https://raw.githubusercontent.com/Wild-Queue/portfolio/main/pictures/face.png"
			width="200"
			style="float:left; margin: 0 10px 0 10px;"
		/>
		<div title="Vertical Line" class="vertical_line" />

		<About />
	</div>

	<h1>Work experience</h1>
	<div title="Line" style="border-top: 1px solid grey; width: 900px; margin: -2% 0 4% 0;" />

	<ul style="height: max-content; margin-top: 2%; margin-left: 0px;">
		{#each Experiences as experience}
			<WorkExperienceItem {experience} />
		{/each}
	</ul>

	<div style="height: max-content; margin-top: 2%; margin-left: 10px;">
		<div title="Line" style="border-top: 1px solid grey; width: 900px; margin: 0 0 0 0;" />

		<div style="display: inline-block;">
			<HardSkills />
			<SoftSkills />
			<Languages />
			<Education />
		</div>
	</div>
</section>

<style>
	section {
		width: 900px;
		margin: auto;
		margin-top: 2%;
		background-color: whitesmoke;
		padding: 1.5%;
		border-radius: 1%;
		border-style: groove;
	}

	h1 {
		width: 100%;
		font-weight: 900;
	}

	.vertical_line {
		float: left;
		border-left: 4px solid black;
		height: 170px;
		margin: 0 7px 0 0;
	}
</style>
