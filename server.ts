import Server from "https:/deno.land/x/lume/core/server.ts";
import expires from "https:/deno.land/x/lume/middlewares/expires.ts";

const srv = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

srv.use(expires());
srv.start();

console.log("Listening on http://localhost:8000");
