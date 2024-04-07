## Project 7 - Club Portal




<!-- 
npm init -y ✅

npm install -D tailwindcss ✅
npm install -D tailwindcss vite

npx tailwindcss init ✅
npx tailwindcss init -p
here -p for generating css codes only what is used (postCSS).


tailwind.config.js
@type {import('tailwindcss').Config}
✅
module.exports = {
  content: ["./index.html", "*",],
  theme: {
    extend: {},
  },
  plugins: [],
}


src/input.css
✅
@tailwind base;
@tailwind components;
@tailwind utilities;

npx tailwindcss -i ./input.css -o ./output.css --watch ✅


npm run dev ✅

 -->

**Install Tailwind CSS**

Install tailwindcss via npm, and create your tailwind.config.js file.

Terminal
```
npm install -D tailwindcss
npx tailwindcss init
```


Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

==> tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


**Add the Tailwind directives to your CSS**

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

==> src/input.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


**Start the Tailwind CLI build process**
Run the CLI tool to scan your template files for classes and build your CSS.

Terminal
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

**Start using Tailwind in your HTML**

Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

==> src/index.html

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
  <!-- add this link  -->
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```