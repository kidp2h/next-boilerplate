module.exports = {
  '*': ['biome format ./src --fix', 'biome lint --write --unsafe ./src'],
  '**/*.ts?(x)': () => 'npm run check-types',
}
