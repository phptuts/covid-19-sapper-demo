<script>
  import { onMount } from "svelte";
  import Table from "../components/Table.svelte";
  import Filter from "./../components/Filter.svelte";
  import dataStore from "../data/data-store.js";
  import { filterByName } from "../data/helpers.js";
  import _ from "lodash";
  import { goto } from "@sapper/app";

  const fields = ["Cases", "Deaths", "Recovered", "Active", "Critical"];

  const selectFields = ["Cases", "Deaths", "Recovered", "Active", "Critical"];

  let countries = [];
  let showCountries = [];
  let sortBy = "none";
  let search = "";
  let page = 0;
  let worldStats = { cases: 0, deaths: 0, recovered: 0 };
  $: showCountries = filterByName(countries, search);
  $: if (search.length > 0) {
    page = 0;
  }
  onMount(async () => {
    dataStore.subscribe(info => {
      if (!info) {
        return;
      }
      showCountries = info.dataByCountry.data;
      countries = info.dataByCountry.data;
      worldStats = info.worldStats;
    });
  });

  async function changeLocation(event) {
    await goto("/" + event.detail);
  }
</script>

<style>
  h1 {
    margin: 20px 0;
  }
  .container {
    margin-bottom: 30px;
  }
</style>

<svelte:head>
  <title>Covid-19</title>
</svelte:head>

<div class="ui container">
  <h1>Covid-19 World Stats</h1>
  <div class="ui grid">
    <div class="five wide column">
      <h3>Cases: {worldStats.cases.toLocaleString()}</h3>
    </div>
    <div class="six wide column">
      <h3>Deaths: {worldStats.deaths.toLocaleString()}</h3>
    </div>
    <div class="five wide column">
      <h3>Recovered: {worldStats.recovered.toLocaleString()}</h3>
    </div>
  </div>
</div>
<div class="ui container">
  <h2>Search By Country</h2>
</div>
<Filter {selectFields} bind:sortBy bind:search />
<Table
  on:location={changeLocation}
  {fields}
  {sortBy}
  bind:page
  canNav="true"
  list={showCountries} />

<div style="display: none">
  <!-- This is done so that sapper will export everythign -->
  <a href="/China">China</a>
  <a href="/Italy">Italy</a>
  <a href="/US">US</a>
  <a href="/Spain">Spain</a>
  <a href="/Germany">Germany</a>
  <a href="/Iran">Iran</a>
  <a href="/France">France</a>
  <a href="/S. Korea">S. Korea</a>
  <a href="/Switzerland">Switzerland</a>
  <a href="/UK">UK</a>
  <a href="/Netherlands">Netherlands</a>
  <a href="/Austria">Austria</a>
  <a href="/Belgium">Belgium</a>
  <a href="/Norway">Norway</a>
  <a href="/Sweden">Sweden</a>
  <a href="/Canada">Canada</a>
  <a href="/Denmark">Denmark</a>
  <a href="/Australia">Australia</a>
  <a href="/Portugal">Portugal</a>
  <a href="/Malaysia">Malaysia</a>
  <a href="/Brazil">Brazil</a>
  <a href="/Japan">Japan</a>
  <a href="/Czechia">Czechia</a>
  <a href="/Turkey">Turkey</a>
  <a href="/Israel">Israel</a>
  <a href="/Ireland">Ireland</a>
  <a href="/Luxembourg">Luxembourg</a>
  <a href="/Pakistan">Pakistan</a>
  <a href="/Thailand">Thailand</a>
  <a href="/Chile">Chile</a>
  <a href="/Poland">Poland</a>
  <a href="/Ecuador">Ecuador</a>
  <a href="/Greece">Greece</a>
  <a href="/Finland">Finland</a>
  <a href="/Qatar">Qatar</a>
  <a href="/Iceland">Iceland</a>
  <a href="/Indonesia">Indonesia</a>
  <a href="/Singapore">Singapore</a>
  <a href="/Saudi Arabia">Saudi Arabia</a>
  <a href="/Slovenia">Slovenia</a>
  <a href="/Philippines">Philippines</a>
  <a href="/Romania">Romania</a>
  <a href="/India">India</a>
  <a href="/Peru">Peru</a>
  <a href="/Bahrain">Bahrain</a>
  <a href="/Russia">Russia</a>
  <a href="/Estonia">Estonia</a>
  <a href="/Egypt">Egypt</a>
  <a href="/Mexico">Mexico</a>
  <a href="/Panama">Panama</a>
  <a href="/South Africa">South Africa</a>
  <a href="/Lebanon">Lebanon</a>
  <a href="/Argentina">Argentina</a>
  <a href="/Iraq">Iraq</a>
  <a href="/Colombia">Colombia</a>
  <a href="/Croatia">Croatia</a>
  <a href="/Armenia">Armenia</a>
  <a href="/Slovakia">Slovakia</a>
  <a href="/Kuwait">Kuwait</a>
  <a href="/Serbia">Serbia</a>
  <a href="/Bulgaria">Bulgaria</a>
  <a href="/San Marino">San Marino</a>
  <a href="/Algeria">Algeria</a>
  <a href="/Uruguay">Uruguay</a>
  <a href="/Latvia">Latvia</a>
  <a href="/Costa Rica">Costa Rica</a>
  <a href="/Dominican Republic">Dominican Republic</a>
  <a href="/Lithuania">Lithuania</a>
  <a href="/Hungary">Hungary</a>
  <a href="/Jordan">Jordan</a>
  <a href="/Morocco">Morocco</a>
  <a href="/Vietnam">Vietnam</a>
  <a href="/Bosnia and Herzegovina">Bosnia and Herzegovina</a>
  <a href="/Andorra">Andorra</a>
  <a href="/North Macedonia">North Macedonia</a>
  <a href="/Cyprus">Cyprus</a>
  <a href="/Brunei">Brunei</a>
  <a href="/Moldova">Moldova</a>
  <a href="/Sri Lanka">Sri Lanka</a>
  <a href="/Albania">Albania</a>
  <a href="/Belarus">Belarus</a>
  <a href="/Malta">Malta</a>
  <a href="/Venezuela">Venezuela</a>
  <a href="/New Zealand">New Zealand</a>
  <a href="/Burkina Faso">Burkina Faso</a>
  <a href="/Tunisia">Tunisia</a>
  <a href="/Senegal">Senegal</a>
  <a href="/Georgia">Georgia</a>
  <a href="/Kazakhstan">Kazakhstan</a>
  <a href="/Azerbaijan">Azerbaijan</a>
  <a href="/Cambodia">Cambodia</a>
  <a href="/Oman">Oman</a>
  <a href="/Trinidad and Tobago">Trinidad and Tobago</a>
  <a href="/Ukraine">Ukraine</a>
  <a href="/Uzbekistan">Uzbekistan</a>
  <a href="/Cameroon">Cameroon</a>
  <a href="/Martinique">Martinique</a>
  <a href="/Liechtenstein">Liechtenstein</a>
  <a href="/Honduras">Honduras</a>
  <a href="/Bangladesh">Bangladesh</a>
  <a href="/Afghanistan">Afghanistan</a>
  <a href="/Paraguay">Paraguay</a>
  <a href="/Nigeria">Nigeria</a>
  <a href="/Cuba">Cuba</a>
  <a href="/Ghana">Ghana</a>
  <a href="/Jamaica">Jamaica</a>
  <a href="/Bolivia">Bolivia</a>
  <a href="/Guyana">Guyana</a>
  <a href="/Monaco">Monaco</a>
  <a href="/Guatemala">Guatemala</a>
  <a href="/Rwanda">Rwanda</a>
  <a href="/Montenegro">Montenegro</a>
  <a href="/Togo">Togo</a>
  <a href="/Mauritius">Mauritius</a>
  <a href="/Barbados">Barbados</a>
  <a href="/Kyrgyzstan">Kyrgyzstan</a>
  <a href="/Maldives">Maldives</a>
  <a href="/Mongolia">Mongolia</a>
  <a href="/Ethiopia">Ethiopia</a>
  <a href="/Kenya">Kenya</a>
  <a href="/Seychelles">Seychelles</a>
  <a href="/Equatorial Guinea">Equatorial Guinea</a>
  <a href="/Tanzania">Tanzania</a>
  <a href="/Gabon">Gabon</a>
  <a href="/Suriname">Suriname</a>
  <a href="/Eswatini">Eswatini</a>
  <a href="/Cabo Verde">Cabo Verde</a>
  <a href="/El Salvador">El Salvador</a>
  <a href="/Liberia">Liberia</a>
  <a href="/Madagascar">Madagascar</a>
  <a href="/Namibia">Namibia</a>
  <a href="/Zimbabwe">Zimbabwe</a>
  <a href="/Sudan">Sudan</a>
  <a href="/Angola">Angola</a>
  <a href="/Benin">Benin</a>
  <a href="/Bhutan">Bhutan</a>
  <a href="/Fiji">Fiji</a>
  <a href="/Guinea">Guinea</a>
  <a href="/Haiti">Haiti</a>
  <a href="/Mauritania">Mauritania</a>
  <a href="/Nicaragua">Nicaragua</a>
  <a href="/Saint Lucia">Saint Lucia</a>
  <a href="/Zambia">Zambia</a>
  <a href="/Nepal">Nepal</a>
  <a href="/Antigua and Barbuda">Antigua and Barbuda</a>
  <a href="/Chad">Chad</a>
  <a href="/Djibouti">Djibouti</a>
  <a href="/Eritrea">Eritrea</a>
  <a href="/Niger">Niger</a>
  <a href="/Papua New Guinea">Papua New Guinea</a>
  <a href="/Somalia">Somalia</a>
  <a href="/Uganda">Uganda</a>
</div>
