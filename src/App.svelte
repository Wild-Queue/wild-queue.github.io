<script lang="ts">
  import WorkExperienceItem from "./lib/WorkExperienceItem.svelte";
  import { Experiences } from "./lib/WorkExperience";
  import HardSkills from "./lib/HardSkills.svelte";
  import SoftSkills from "./lib/SoftSkills.svelte";
  import Languages from "./lib/Languages.svelte";
  import Education from "./lib/Education.svelte";
  import About from "./lib/About.svelte";
  import Comic from "./lib/Comic.svelte";
</script>

<div style="width: 900px; margin: auto; margin-top: 2%; background-color: whitesmoke; padding: 1.5%; border-radius: 1%;">
  <div style="height: max-content;">
    <h1 style="margin: 0 0 10px 10px;">Shalagin Egor</h1>
    <img
      title="Shalagin Egor"
      alt="Shalagin Egor"
      src="https://raw.githubusercontent.com/Wild-Queue/portfolio/main/pictures/face.png"
      width="200"
      style="float:left; margin: 0 10px 0 10px;"
    />
    <div title="Line" style="float:left; border-left: 4px solid black; height: 170px; margin: 0 7px 0 0;"/>
    
    <About/>
  </div>

  <div>
    <h1>Work experience</h1>
    <div title="Line" style="border-top: 1px solid grey; width: 900px; margin: -2% 0 4% 0;"/>

    <ul style="height: max-content; margin-top: 2%; margin-left: 0px;">
      {#each Experiences as experience}
        <WorkExperienceItem {experience} />
      {/each}
    </ul>
  </div>

  <div style="height: max-content; margin-top: 2%; margin-left: 10px;">
    <div title="Line" style="border-top: 1px solid grey; width: 900px; margin: 0 0 0 0;"/>

    <div style="display: inline-block;">
      <HardSkills />
      <SoftSkills />
      <Languages />
      <Education />
    </div>
  </div>
</div>

<Comic/>