<template>
    <div>Login</div>
    <form>
        <fieldset>
            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4"
                    >Email address</label
                >
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                    required
                />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4"
                    >Password</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
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
