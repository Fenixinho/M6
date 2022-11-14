<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@0.3.0/dist/tailwind.min.css" rel="stylesheet">

</head>
<body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1  class="mb-8 text-3xl text-center">Sign up</h1>
                    
                    <input type="text" id="inputUsername" 
                        class="border border-red w-full p-3 rounded mb-4"
                        name="fullname"
                        require
                        placeholder="Full Name" 
                        />
                        <p id="mensaje"></p>

                    <input type="text" id="inputEmail"
                        class="block border border-red-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        />
                        <p id="mensajeEmail"></p>

                    <input 
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        type="password"
                        id="inputPsw"
                        name="password"
                        placeholder="Password" />
                        <p id="largoValido" class="text-red-500">Nombre entre 8 y 15 caracteres</p>
                        <p id="mayusculaValido" class="text-red-500">Una letra mayúscula</p>
                        <p id="minusculaValido" class="text-red-500">Una letra minúscula</p>
                        <p id="numeroValido" class="text-red-500">Un número</p>
                        <p id="especialValido" class="text-red-500">Un carácter especial</p>
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="login.php">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    <script src="script.js"></script>

</body>
</html>