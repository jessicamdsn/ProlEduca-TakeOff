import('./dist/prol_educa_app/server/server.mjs').then(module => {
  module.app();
});

export default async function handler(req, res) {
  const { app } = await import('../dist/prol_educa_app/server/server.mjs');
  const server = app();
  return server(req, res);
}