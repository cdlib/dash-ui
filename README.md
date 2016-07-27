# Dash UI Library

A Library of static objects, components, and themes for the Stash application.

## Toolkit for the Library

The Dash UI Library uses a Gulp toolkit for front-end web development called [Gulp Template](https://github.com/JoelCDL/gulp_template). Like most build tools, it processes styles and scripts, creates and deploys finished builds, live-reloads file changes, and runs other tasks. 

You are welcome to use any toolkit to do these tasks. However, you are encouraged to use the Gulp Template, since it is already configured to use with this library. Since the Gulp Template touches almost every aspect of the UI workflow, please [read the documentation](https://github.com/JoelCDL/gulp_template) about what it does and how it works in order to get a clear sense of how this library is put together.

## Project Structure

**/app and /dist**: The **app** directory is where development takes place. Builds of finished files are placed within a **dist** directory by the Gulp toolkit. [Please read the Gulp toolkit *Scaffolding* section](https://github.com/JoelCDL/gulp_template#scaffolding) for more information.

**/bower\_components**: The [Bower](https://bower.io) library is not located at the project root, as tyically done, but in **app/bower_components** so that the Gulp toolkit can serve and process the files.

**/fonts**: Font files are located in **app/fonts** and are inlined into the **app** and **dist** CSS files by the Gulp toolkit. [Read the Gulp toolkit *Notes* section](https://github.com/JoelCDL/gulp_template#notes) for how this is done.

**/images**: Image files are located at **app/images** and **dist/images**. Files prepended with **icon_** are typically inlined into the CSS files using the same Gulp toolkit process as the font files mentioned above.

**/includes**: Includes contain the actual UI elements. They are located at **app/includes** and are compiled into the object, component, and theme files within the **dist** directory during the build process. Their organization is described in the *UI Elements* section below.

**/scss**: Styles are written in multiple [Sass](http://sass-lang.com) files in **app/scss** and compiled to **app/css/main.css** during development runtime and a minified **dist/css/ui.css** for builds. The **ui.css** file should not be modified, as it will be overwritten with new code the next time a build is run. For style nomenclature, authoring patterns, and best practices, please see the *Styles* section below.

**/js**: JavaScript files exist in **app/js** and get compiled to **dist/js/ui.js** during the build process. The main JavaScript file at **app/js/main.js** is mostly for basic DOM manipulation of HTML attributes, typically using jQuery. Two other custom JS files, **details-polyfill.js** and **modernizr-custombuild.js** exist within **app/js** and get concatenated into **ui.js** for builds. Like **ui.css** mentioned above, you should not modify **ui.js** in the **dist** directory, as it will be overwritten during each build.

## UI Elements

These are typically organized from the smallest part (Objects) that make up larger structures (Components), which are assembled at the page level (Themes). This hierarchy is similar to the [Atomic Design model](http://bradfrost.com/blog/post/atomic-web-design).

Each UI element has a separate 'display' page so that it can render as a standalone item on a single page. These are prepended with **object\_** for Object pages, **component\_** for Component pages, and **theme\_** for Theme pages.

Each **app/include** file contains the actual element, component, or layout code - this is where you develop the elements. Especially for the theme pages within **app**, multiple *include* files are present in the code to set the layout.

## Styles

The Sass in this UI library follows [this style guide](https://css-tricks.com/sass-style-guide). The Gulp toolkit's Sass linter honors most of these rules and will throw warnings if there are exceptions.

Each Object, Component, and Theme has its own Sass partial, which are all imported into **app/scss/main.scss** and then compiled into the **app** and **dist** CSS files.

The **main.scss** file also imports global Sass variables, mixins, fonts, resets, and a Bower library. Opening these files and glancing at the code can help you see how the styles are organized across the UI library.

CSS selectors in the Sass partials are written using the [BEM naming convention](https://css-tricks.com/bem-101) with a modified form of [namespacing](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces).

The namespaces in this UI library designate if a class is an object, component, theme, or for only binding JavaScript by using the prefixed letter **o-**, **c-**, **t-**, or **js-**. Theme classes are meant to be used sparingly, mostly for just aligning object and component alignment within the Theme pages.

Selector block elements are typically named after the scss filename they belongs to. For example, the Banner Object's styles are located in `_banner.scss` and the selector block elements named **o-banner**.

In the UI element HTML, two or more classes with different namespaces will sometimes be chained together into an HTML's class attribute. For example, `class="t-describe__locations c-locations"`. This is to add *complementary* styles to a DOM object, not to cancel or reset styles between the classes.

## Scripts

The JavaScript authored in this library takes place in one file, **app/js/main.js** and mostly performs basic DOM changes using jQuery. When classes or IDs are used to target the DOM, they are typically prefixed with the **-js** namespace, as mentioned above.

Styles are kept out of these classes prefixed with **-js**, only JavaScript binding is used. This is to honor a separation of concerns and avoid style/script conflicts. When styles and scripts are needed together on a UI element, their classes are chained together in the HTML class attribute, like `class="js-widget c-widget"`.

## Integrating UI Library Code into Dash Application

All UI-based HTML, CSS, and JavaScript for the Dash application is created and modified within this UI library and then integrated into the Dash application as a one-way process. If possible, avoid writing separate HTML, CSS, and JS directly in the Dash application. This will keep the HTML, styles, and scripts in-sync, will provide a stable reference point for the current state of the UI, and will ensure that there are no UI conflicts between the library and application.

Here is the typical authoring and integration process:

1. Create or modify an element within the **app** directory of the UI library while running the Gulp toolkit. Keep your styles organized and coherent by following the Style guidelines mentioned above.

2. Run a build from the Gulp toolkit.

3. Optionally, validate your build HTML via the Gulp toolkit.

4. Post your build to a web server and review the static pages.

5. Copy the compiled stylesheet **dist/css/ui.css** and JavaScript **dist/js/ui.js** (if changed) to the respective asset directories within the Dash application.

6. Integrate the HTML of the elements you created or modified into the same elements in Rails.

7. Run the local Rails server on your machine and verify that the styles and JS functionality you integrated in Rails render exactly as they do from the UI library. If not, use the browser's Inspector tool and double-check that Rails is outputting HTML that matches what's in the UI library.

8. Check accessibility of the Rails output using the [Wave tool on Chrome](http://wave.webaim.org/extension), especially if you are rendering form elements on a page.

9. If all looks good, commit your changes to **ui.css** and/or **ui.js**.
