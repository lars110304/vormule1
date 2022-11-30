<template>
    <div>Drivers</div>
    <div class="form-group">
        <label for="exampleSelect1" class="form-label mt-4">Seasons</label>
        <select
            class="form-select"
            id="exampleSelect1"
            @change="getDrivers($event)"
        >
            <option
                v-for="season in this.seasons.slice().reverse()"
                :value="season.season"
            >
                {{ season.season }}
            </option>
        </select>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Number</th>
                <th scope="col">Name</th>
                <th scope="col">Constructor</th>
                <th scope="col">Nationality</th>
                <th scope="col">Points</th>
                <th scope="col">Wins</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="driver in this.drivers">
                <td>{{ driver.Driver.permanentNumber }}</td>

                <td>
                    {{ driver.Driver.givenName }} {{ driver.Driver.familyName }}
                </td>
                <td>{{ driver.Constructors[0].name }}</td>
                <td>{{ driver.Driver.nationality }}</td>
                <td>{{ driver.points }}</td>
                <td>{{ driver.wins }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            test: true,
            seasons: [],
            drivers: [],
        };
    },
    methods: {
        getSeasons: async function () {
            var config = {
                method: "get",
                url: "https://ergast.com/api/f1/seasons.json?limit=100",
                headers: {},
            };
            const response = await axios(config);
            this.seasons = response.data.MRData.SeasonTable.Seasons;
        },
        getDrivers: async function (year) {
            var SelectedYear;
            if (year == null) {
                SelectedYear = "2022";
            } else {
                SelectedYear = year.target.value;
            }
            this.drivers = [];
            var config = {
                method: "get",
                url:
                    "https://ergast.com/api/f1/" +
                    SelectedYear +
                    "/driverStandings.json",
                headers: {},
            };
            const response = await axios(config);
            this.drivers =
                response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        },
    },
    mounted() {
        this.getSeasons();
        this.getDrivers();
    },
};
</script>
