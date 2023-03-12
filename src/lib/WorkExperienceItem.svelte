<script lang="ts">
  import type { WorkExperience } from "./WorkExperience";

  export let experience: WorkExperience;

  let linkID: string = "";
  let linkClass: string = "";
  if (experience.href.includes("gitlab")) {
    linkID = "gl-link";
    linkClass = "fa fa-gitlab";
  }
  if (experience.href.includes("github")) {
    linkID = "gl-link";
    linkClass = "fa fa-github";
  }
  
</script>

<li>
  <h2>{experience.position}</h2>
  <h3>{experience.place}</h3>
  <p>{experience.description}</p>
  {#if experience.href !== ""}
    <a id={linkID} href={experience.href}> <i class={linkClass} />Wild-Queue</a>
  {/if}
</li>

<style>
  h2 {
    margin: 15px 0 0 0;
  }
  h3 {
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
</style>
