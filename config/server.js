module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('https://secure-taiga-90797.herokuapp.com/'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
