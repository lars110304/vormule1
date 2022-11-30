<template>
    <div>Constructors</div>
    <div class="form-group">
        <label for="exampleSelect1" class="form-label mt-4">Seasons</label>
        <select
            class="form-select"
            id="exampleSelect1"
            @change="getConstructors($event)"
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
                <th scope="col">Position</th>
                <th scope="col">Name</th>
                <th scope="col">Nationality</th>
                <th scope="col">Points</th>
                <th scope="col">Wins</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="constructor in this.constructors">
                <td>{{ constructor.position }}</td>
                <td>
                    {{ constructor.Constructor.name }}
                </td>
                <td>{{ constructor.Constructor.nationality }}</td>
                <td>{{ constructor.points }}</td>
                <td>{{ constructor.wins }}</td>
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
            constructors: [],
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
        getConstructors: async function (year) {
            var SelectedYear;
            if (year == null) {
                SelectedYear = "2022";
            } else {
                SelectedYear = year.target.value;
                if (SelectedYear < 1958) {
                    alert("Constructor standings didn't exist then");
                    return true;
                }
            }
            this.constructors = [];
            var config = {
                method: "get",
                url:
                    "https://ergast.com/api/f1/" +
                    SelectedYear +
                    "/constructorStandings.json",
                headers: {},
            };
            const response = await axios(config);
            this.constructors =
                response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        },
    },
    mounted() {
        this.getSeasons();
        this.getConstructors();
    },
};
</script>
