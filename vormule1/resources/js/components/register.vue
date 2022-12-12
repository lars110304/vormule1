<template>
    <div>Register</div>
    <form>
        <fieldset>
            <div class="form-group">
                <label for="username" class="form-label mt-4">Username</label>
                <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter username"
                    required
                />
            </div>
            <div class="form-group">
                <label for="email" class="form-label mt-4">Email address</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                />
            </div>

            <div class="form-group">
                <label for="Password" class="form-label mt-4">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="Password"
                    placeholder="Password"
                    required
                />
            </div>
            <div class="form-group">
                <label for="confirmPassword" class="form-label mt-4"
                    >Confirm Password</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required
                />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
    </form>
</template>

<script>
export default {};
</script>
