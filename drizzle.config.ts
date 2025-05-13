// import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config({ path: ".env" });

// export default{
//   // dialect: "postgresql",
//   out: "./drizzle", 
//   // driver: "pg",
//   schema: "./src/lib/db/schema.ts",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// } satisfies Config;

import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  dialect: "postgresql",
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  // driver: "pg",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
