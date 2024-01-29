const PROXY_CONFIG = [
  {
    context: [
      "/reservation",
    ],
    target: "https://localhost:7093",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
