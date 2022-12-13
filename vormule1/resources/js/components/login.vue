<template>
    <div>Login</div>
    <form>
        <fieldset>
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
                <label for="password" class="form-label mt-4">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
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
