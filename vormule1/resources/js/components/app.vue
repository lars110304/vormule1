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
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login"
                            >Login</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register"
                            >Register</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/favorite"
                            >Favorite</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view> </router-view>
</template>

<script>
export default {};
</script>
