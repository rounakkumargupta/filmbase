// debug-build.js
process.on('uncaughtException', (err) => {
  console.error('uncaughtException:', err && err.stack ? err.stack : err);
  process.exit(1);
});
process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection:', err && err.stack ? err.stack : err);
  process.exit(1);
});

process.env.NODE_ENV = 'production';
process.env.CI = 'true';

// run react-scripts build
require('./node_modules/react-scripts/scripts/build');
