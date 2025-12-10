module.exports = {
    apps: [
      {
        name: 'fg43support-cms',
        script: 'npm',
        args: 'start',
        interpreter:'node@18.20.5',
        env: {
            NODE_ENV: "production",
          }
      },
    ],
  };
