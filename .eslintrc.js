module.exports = {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    env: {
      es6: true,
      browser: true
    },
    plugins:   "plugins": ["import", "svelte3"],
    overrides: [
      {
        files: ['*.svelte'],
        processor: 'svelte3/svelte3'
      }
    ]
  };
