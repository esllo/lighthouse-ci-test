module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn preview --port 3000",
      url: ["http://127.0.0.1:3000"],
      numberOfRuns: 1,
      startServerReadyPattern: "3000",
      settings: {
        preset: "desktop",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
