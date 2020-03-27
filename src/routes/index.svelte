<script context="module">
  import {
    getWorldStats,
    getDataForCountries,
    getWorldTimeline
  } from "../data/request.js";

  export async function preload(page) {
    try {
      const countries = await getDataForCountries();
      const worldStats = await getWorldStats();
      const worldTimeline = await getWorldTimeline();
      return { countries, worldStats, worldTimeline };
    } catch (e) {
      console.log(e);
      this.error(
        500,
        "There was an error in calling the api, please try again in 5 minutes."
      );
    }
  }
</script>

<script>
  import Table from "../components/Table.svelte";
  import Filter from "./../components/Filter.svelte";
  import CovidBasicStats from "./../components/CovidBasicStats.svelte";
  import CovidChart from "./../components/CovidChart.svelte";

  import { filterByName } from "../data/helpers.js";
  import _ from "lodash";
  import { goto } from "@sapper/app";

  const fields = ["Cases", "Deaths", "Recovered", "Active", "Critical"];

  const selectFields = ["Cases", "Deaths", "Recovered", "Active", "Critical"];

  export let worldStats = { cases: 0, deaths: 0, recovered: 0 };
  export let countries = [];
  export let worldTimeline = {};
  let showCountries = [];
  let sortBy = "none";
  let search = "";
  let page = 0;
  $: showCountries = filterByName(countries, search);
  $: if (search.length > 0) {
    page = 0;
  }

  async function changeLocation(event) {
    await goto(event.detail);
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
  <title>Covid-19 Tracker</title>
</svelte:head>

<div class="ui container">
  <h1>Covid-19 Tracker</h1>
  <CovidBasicStats
    deaths={worldStats.deaths}
    recovered={worldStats.recovered}
    cases={worldStats.cases} />
</div>
<CovidChart title="Covid-19 For World" historicData={worldTimeline} />

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

<div style="visibility: hidden;">
  <a href="China">China</a>
  <a href="USA">USA</a>
  <a href="Italy">Italy</a>
  <a href="Spain">Spain</a>
  <a href="Germany">Germany</a>
  <a href="Iran">Iran</a>
  <a href="France">France</a>
  <a href="UK">UK</a>
  <a href="Switzerland">Switzerland</a>
  <a href="S. Korea">S. Korea</a>
  <a href="Netherlands">Netherlands</a>
  <a href="Austria">Austria</a>
  <a href="Belgium">Belgium</a>
  <a href="Turkey">Turkey</a>
  <a href="Portugal">Portugal</a>
  <a href="Canada">Canada</a>
  <a href="Norway">Norway</a>
  <a href="Australia">Australia</a>
  <a href="Sweden">Sweden</a>
  <a href="Israel">Israel</a>
  <a href="Brazil">Brazil</a>
  <a href="Malaysia">Malaysia</a>
  <a href="Czechia">Czechia</a>
  <a href="Denmark">Denmark</a>
  <a href="Ireland">Ireland</a>
  <a href="Chile">Chile</a>
  <a href="Luxembourg">Luxembourg</a>
  <a href="Ecuador">Ecuador</a>
  <a href="Japan">Japan</a>
  <a href="Poland">Poland</a>
  <a href="Pakistan">Pakistan</a>
  <a href="Romania">Romania</a>
  <a href="South Africa">South Africa</a>
  <a href="Thailand">Thailand</a>
  <a href="Saudi Arabia">Saudi Arabia</a>
  <a href="Indonesia">Indonesia</a>
  <a href="Finland">Finland</a>
  <a href="Russia">Russia</a>
  <a href="Greece">Greece</a>
  <a href="Iceland">Iceland</a>
  <a href="India">India</a>
  <a href="Philippines">Philippines</a>
  <a href="Singapore">Singapore</a>
  <a href="Diamond Princess">Diamond Princess</a>
  <a href="Panama">Panama</a>
  <a href="Slovenia">Slovenia</a>
  <a href="Argentina">Argentina</a>
  <a href="Croatia">Croatia</a>
  <a href="Mexico">Mexico</a>
  <a href="Dominican Republic">Dominican Republic</a>
  <a href="Peru">Peru</a>
  <a href="Estonia">Estonia</a>
  <a href="Qatar">Qatar</a>
  <a href="Serbia">Serbia</a>
  <a href="Hong Kong">Hong Kong</a>
  <a href="Egypt">Egypt</a>
  <a href="Colombia">Colombia</a>
  <a href="Bahrain">Bahrain</a>
  <a href="Iraq">Iraq</a>
  <a href="Algeria">Algeria</a>
  <a href="Lebanon">Lebanon</a>
  <a href="New Zealand">New Zealand</a>
  <a href="Lithuania">Lithuania</a>
  <a href="UAE">UAE</a>
  <a href="Armenia">Armenia</a>
  <a href="Hungary">Hungary</a>
  <a href="Bulgaria">Bulgaria</a>
  <a href="Latvia">Latvia</a>
  <a href="Morocco">Morocco</a>
  <a href="Slovakia">Slovakia</a>
  <a href="Andorra">Andorra</a>
  <a href="Taiwan">Taiwan</a>
  <a href="Uruguay">Uruguay</a>
  <a href="Bosnia">Bosnia</a>
  <a href="Costa Rica">Costa Rica</a>
  <a href="Tunisia">Tunisia</a>
  <a href="Ukraine">Ukraine</a>
  <a href="Kuwait">Kuwait</a>
  <a href="San Marino">San Marino</a>
  <a href="Macedonia">Macedonia</a>
  <a href="Jordan">Jordan</a>
  <a href="Moldova, Republic of">Moldova, Republic of</a>
  <a href="Albania">Albania</a>
  <a href="Burkina Faso">Burkina Faso</a>
  <a href="Azerbaijan">Azerbaijan</a>
  <a href="Vietnam">Vietnam</a>
  <a href="Cyprus">Cyprus</a>
  <a href="Réunion">Réunion</a>
  <a href="Faroe Islands">Faroe Islands</a>
  <a href="Malta">Malta</a>
  <a href="Kazakhstan">Kazakhstan</a>
  <a href="Ghana">Ghana</a>
  <a href="Oman">Oman</a>
  <a href="Senegal">Senegal</a>
  <a href="Brunei">Brunei</a>
  <a href="Venezuela, Bolivarian Republic of">
    Venezuela, Bolivarian Republic of
  </a>
  <a href="Sri Lanka">Sri Lanka</a>
  <a href="Cambodia">Cambodia</a>
  <a href="Coast D'Ivoire">Coast D'Ivoire</a>
  <a href="Afghanistan">Afghanistan</a>
  <a href="Mauritius">Mauritius</a>
  <a href="Belarus">Belarus</a>
  <a href="Palestinian Territory, Occupied">Palestinian Territory, Occupied</a>
  <a href="Cameroon">Cameroon</a>
  <a href="Uzbekistan">Uzbekistan</a>
  <a href="Martinique">Martinique</a>
  <a href="Georgia">Georgia</a>
  <a href="Cuba">Cuba</a>
  <a href="Channel Islands">Channel Islands</a>
  <a href="Montenegro">Montenegro</a>
  <a href="Guadeloupe">Guadeloupe</a>
  <a href="Honduras">Honduras</a>
  <a href="Trinidad and Tobago">Trinidad and Tobago</a>
  <a href="Nigeria">Nigeria</a>
  <a href="Bolivia">Bolivia</a>
  <a href="Kyrgyzstan">Kyrgyzstan</a>
  <a href="Liechtenstein">Liechtenstein</a>
  <a href="Gibraltar">Gibraltar</a>
  <a href="Paraguay">Paraguay</a>
  <a href="Congo, the Democratic Republic of the">
    Congo, the Democratic Republic of the
  </a>
  <a href="Mayotte">Mayotte</a>
  <a href="Rwanda">Rwanda</a>
  <a href="Bangladesh">Bangladesh</a>
  <a href="Macao">Macao</a>
  <a href="Monaco">Monaco</a>
  <a href="Kenya">Kenya</a>
  <a href="French Polynesia">French Polynesia</a>
  <a href="Isle of Man">Isle of Man</a>
  <a href="Aruba">Aruba</a>
  <a href="French Guiana">French Guiana</a>
  <a href="Jamaica">Jamaica</a>
  <a href="Guatemala">Guatemala</a>
  <a href="Togo">Togo</a>
  <a href="Barbados">Barbados</a>
  <a href="Madagascar">Madagascar</a>
  <a href="Zambia">Zambia</a>
  <a href="Uganda">Uganda</a>
  <a href="Ethiopia">Ethiopia</a>
  <a href="Bermuda">Bermuda</a>
  <a href="New Caledonia">New Caledonia</a>
  <a href="Maldives">Maldives</a>
  <a href="El Salvador">El Salvador</a>
  <a href="Tanzania, United Republic of">Tanzania, United Republic of</a>
  <a href="Djibouti">Djibouti</a>
  <a href="Equatorial Guinea">Equatorial Guinea</a>
  <a href="Dominica">Dominica</a>
  <a href="Mali">Mali</a>
  <a href="Mongolia">Mongolia</a>
  <a href="Saint Martin">Saint Martin</a>
  <a href="Niger">Niger</a>
  <a href="Greenland">Greenland</a>
  <a href="Bahamas">Bahamas</a>
  <a href="Swaziland">Swaziland</a>
  <a href="Cayman Islands">Cayman Islands</a>
  <a href="Guinea">Guinea</a>
  <a href="Haiti">Haiti</a>
  <a href="Namibia">Namibia</a>
  <a href="Suriname">Suriname</a>
  <a href="Curacao">Curacao</a>
  <a href="Gabon">Gabon</a>
  <a href="Antigua and Barbuda">Antigua and Barbuda</a>
  <a href="Grenada">Grenada</a>
  <a href="Mozambique">Mozambique</a>
  <a href="Seychelles">Seychelles</a>
  <a href="Benin">Benin</a>
  <a href="Eritrea">Eritrea</a>
  <a href="Lao People's Democratic Republic">
    Lao People's Democratic Republic
  </a>
  <a href="Cabo Verde">Cabo Verde</a>
  <a href="Guyana">Guyana</a>
  <a href="Zimbabwe">Zimbabwe</a>
  <a href="Fiji">Fiji</a>
  <a href="Montserrat">Montserrat</a>
  <a href="Myanmar">Myanmar</a>
  <a href="St. Barth">St. Barth</a>
  <a href="Syrian Arab Republic">Syrian Arab Republic</a>
  <a href="Nepal">Nepal</a>
  <a href="Angola">Angola</a>
  <a href="Congo">Congo</a>
  <a href="Holy See (Vatican City State)">Holy See (Vatican City State)</a>
  <a href="Gambia">Gambia</a>
  <a href="Sudan">Sudan</a>
  <a href="Bhutan">Bhutan</a>
  <a href="Central African Republic">Central African Republic</a>
  <a href="Chad">Chad</a>
  <a href="Liberia">Liberia</a>
  <a href="Mauritania">Mauritania</a>
  <a href="Saint Lucia">Saint Lucia</a>
  <a href="Sint Maarten">Sint Maarten</a>
  <a href="Somalia">Somalia</a>
  <a href="Nicaragua">Nicaragua</a>
  <a href="Anguilla">Anguilla</a>
  <a href="Belize">Belize</a>
  <a href="British Virgin Islands">British Virgin Islands</a>
  <a href="Guinea-Bissau">Guinea-Bissau</a>
  <a href="Saint Kitts and Nevis">Saint Kitts and Nevis</a>
  <a href="Turks and Caicos Islands">Turks and Caicos Islands</a>
  <a href="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</a>
  <a href="Papua New Guinea">Papua New Guinea</a>
  <a href="Saint Vincent and the Grenadines">
    Saint Vincent and the Grenadines
  </a>
  <a href="Timor-Leste">Timor-Leste</a>
</div>
