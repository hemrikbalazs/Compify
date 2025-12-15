This is a template project, that contains the compify javascript libary also developed by Balázs Hemrik.

It's purpose is to provide the necessary helper functions and directory structure to create responsive component based web applications,
without the use of javascript frameworks.

Create a copy of this template, and open it with VScode or the IDE of your choice.

Develop the static structure of your pages in the root folder. This template already includes a tailwind.config.js file and an index.html
file. The use of tailwind is encouraged to style your pages and components. Tailwind is already linked to index.html as a CDN.

Create and store html fragments, henceforth refferred to as components, in the subfolders of the components folder. Add a unique 
attribute named "data-query-id" to all nested elements of your components that you whish to alter dynamically.

Use the src/builds folder to create and store javascript code used to build your pages dynamically.

  Use two necessary imports designed to help you:

  Compify from compify/compify.js

  Dirs from compify/dirs.js

  Use the static functions of Compify (example: await Compify.appendComponent(args...)) to build your pages.

  4 functions are there to help you insert your components into your pages. These are: appendComponent(), prependComponent,
  preInsertComponent(), and postInsertComponent(). All of them return a Promise that resolves to the outermost element (HTMLElemnent)
  of the inserted component, and they only differ in where they will insert the component relative to the root element (HTMLElemenmt)
  provided as the first argument.

  All 4 functions take 2 more arguments (3 in total). The second argument has to be the filename (string) of your component. Don't
  include ".html" as the extension in your filename, this is automatically concatenated in the background.

  The third argument is the directory or folder name (string) where your component resides under /components. Use the constants in Dirs
  as the directory argument in Compify's functions to avoid typing directory paths over and over again.

  There is a fifth function called getNestedElement(). Use this function to access the nested elements in your components. It takes
  two arguments the first is the outermost element (HTMLElement) of your component and the second is the unique data-query-id
  attribute (string) you provided when creating the component.

Additionally the compify libary includes one more file called jsonHandler.js from which you can import the objFromJson() function.
You can use this function to fetch and convert json files into javascript objects from the resources folder of the project. The
only argument you need to provide is the filename without the extension, which is again concatenated in the background.

Happy coding!!
