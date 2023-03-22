<script lang="ts">
	import type { WorkExperience } from './WorkExperience';

	export let experience: WorkExperience;
</script>

<li>
	<h2>{experience.position}</h2>
	<h3>{experience.place}</h3>
	<p>{experience.description}</p>
	{#if experience.href !== undefined}
		<a id={experience.linkID} href={experience.href}> <i class={experience.linkClass} />Wild-Queue</a>
	{/if}
</li>

<style>
	h2 {
        font-weight: 900;
        font-size: large;
		margin: 15px 0 0 0;
	}
	h3 {
        font-weight: 300;
        font-size: medium;
        font-style: italic;
		margin: 10px 0 0 20px;
	}
	p {
		margin: 10px 0 0 20px;
	}
	i {
		font-size: 20px;
		color: black;
		margin: 7px 3px 0 20px;
	}
    a {
        color: rgb(30, 30, 211);
    }
</style>
