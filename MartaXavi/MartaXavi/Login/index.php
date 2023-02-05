<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@0.3.0/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <form action="login.php" method="POST" id="userLogin"> 
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input type="email" id="username" 
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                 name="user"  placeholder="Email">
        
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input type="password" 
                 class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                 name="psw" id="password"  placeholder="******************">
          <p class="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button type ="submit" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a>
    </form>
  </div>
  </div>
</body>
</html>