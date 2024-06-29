export default defineEventHandler(async (event) => {
  // for this test, we know '/api/test' is only called in SSR context
  // and want to confirm that event.context.message has already been set
  // during the initial request.
  if (event.path === "/api/test") {
    return;
  }

  event.context.message = "working";
});
