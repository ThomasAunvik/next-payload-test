import path from "path";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_DB_URI,
    },
  }),
  editor: slateEditor({}),
  admin: {
    bundler: webpackBundler(),
  },
  collections: [
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
