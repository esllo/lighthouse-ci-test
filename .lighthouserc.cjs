module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn preview",
      url: ["http://127.0.0.1:4173"],
      numberOfRuns: 1,
      startServerReadyPattern: "Local",
      settings: {
        preset: "desktop",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
