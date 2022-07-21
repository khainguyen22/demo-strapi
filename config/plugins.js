module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_UVYTNqXa4Emet04qFAXo4lZ1GWxp/MNhgWFaAYn",
      apiToken: "WIxqolSAg5Ym1BZc6FcoPhXR",
      appFilter: "khai-demo-strapi",
      teamFilter: "team_pS3G6uVvK4HDjBiqripK5orK",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  "generate-data": {
    enabled: true,
  },
  'editorjs': {
    enabled: true,
    resolve: './src/plugins/strapi-plugin-react-editorjs'
  },
  'preview-button': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::about.about',
          draft: {
            query: {
              slug: 'about',
            },
          },
          published: {
            basePath: 'about',
          },
        },
      ],
    },
  },
  deepl: {
    enabled: false,
    config: {
      apiKey: 'https://api-free.deepl.com/v2/translate',
      freeApi: true,
      translatedFieldTypes: [
        'string',
        'text',
        'richtext',
        'component',
        'dynamiczone',
      ],
      translateRelations: true,
      glossaryId: 'customGlossary',
    },
  },
});