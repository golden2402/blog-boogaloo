const API_STUB = "/api"

function useApiRoute(route, process) {
  return app => app.use(`${API_STUB}${route}`, process)
}

module.exports = useApiRoute