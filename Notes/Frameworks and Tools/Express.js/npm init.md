npm init creará los archivos de configuración, luego modificamos los scripts para que queden como figura:
```json
"scripts": {

    "dev": "SET DEBUG=app:* & nodemon index",

    "start": "SET NODE_ENV=production & node index"

  },
```

[[eslintrc json]]
[[prettierrc.json]]