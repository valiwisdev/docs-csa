// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "EduEX",
      plugins: [
        starlightSidebarTopics([
          {
            label: "EDUEX",
            link: "/eduex/",
            items: [
              {
                label: "EDUEX",
                autogenerate: { directory: "eduex" },
              },
            ],
          },
          {
            label: "CSA",
            link: "/csa/",
            items: [{ label: "CSA", autogenerate: { directory: "csa" } }],
          },
        ]),
      ],
    }),
  ],
});
