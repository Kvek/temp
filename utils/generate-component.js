const fs = require('fs');
const { barrel, component, story } = require('./component_templates.js');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const folderName = name.charAt(0).toUpperCase() + name.slice(1);

const dir = `./src/${folderName}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) {
  throw new Error('A component with that name already exists.');
}

// create the folder
fs.mkdirSync(dir, { recursive: true }, () => {});

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/index.tsx`, component(folderName), writeFileErrorHandler);

// storybook.jsx
fs.writeFile(
  `${dir}/${folderName}.stories.tsx`,
  story(folderName),
  writeFileErrorHandler
);

// test.tsx
// fs.writeFile(
//   `${dir}/${folderName}.test.tsx`,
//   test(folderName),
//   writeFileErrorHandler
// );

// index.tsx
fs.appendFileSync('./src/index.ts', barrel(folderName), writeFileErrorHandler);

/// /////////////
/// Optional ///
/// /////////////

// // insert new component into 'components/index.ts file
// fs.readFile('./src/components/index.ts', 'utf8', function (err, data) {
//   if (err) throw err;

//   // grab all components and combine them with new component
//   const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);
//   const newComponents = [name, ...currentComponents].sort();

//   // create the import and export statements
//   const importStatements = newComponents
//     .map((importName) => `import ${importName} from './${importName}';\n`)
//     .join('');
//   const exportStatements = `export {\n${newComponents
//     .map((component) => `  ${component},\n`)
//     .join('')}};\n`;

//   const fileContent = `${importStatements}\n${exportStatements}`;

//   fs.writeFile(`./src/components/index.ts`, fileContent, writeFileErrorHandler);
// });
