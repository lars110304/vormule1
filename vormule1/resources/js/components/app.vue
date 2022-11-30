<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/news">Vormule 1</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/news"
                            >News</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/drivers"
                            >Drivers</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/constructors"
                            >Constructors</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/seasons"
                            >Seasons</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/schedule"
                            >Schedule</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view class="p-3 bg-dark text-white background-color"> </router-view>
</template>

<script>
export default {};
</script>
