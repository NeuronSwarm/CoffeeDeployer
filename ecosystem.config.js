module.exports = {
  apps : [
      {
        name: "CoffeeLux",
        script: "./server/index.js",
        watch: false,
        error_file: "err.log",
        out_file: "out.log",
        merge_logs: true,
        log_date_format:"YYYY-MM-DD HH:mm Z",
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
        }
      }
  ]
}

