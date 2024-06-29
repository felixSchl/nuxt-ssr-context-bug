export default defineEventHandler((event) => {
  return {
    message: event.context.message || "broken",
  };
});
