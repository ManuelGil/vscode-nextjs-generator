# T3 Stack / NextJS / ReactJS File Generator

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-nextjs-generator?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/imgildev.vscode-nextjs-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/imgildev.vscode-nextjs-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/vscode-nextjs-generator?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-nextjs-generator)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-nextjs-generator?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-nextjs-generator/blob/main/LICENSE)

<p align="center">
<a href="https://www.producthunt.com/posts/t3-stack-next-and-react-file-generator?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-t3&#0045;stack&#0045;next&#0045;and&#0045;react&#0045;file&#0045;generator" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge?post_id=431311&theme=light&period=daily" alt="T3&#0032;Stack&#0044;&#0032;Next&#0032;and&#0032;React&#0032;File&#0032;Generator - Effortless&#0032;file&#0032;generation | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</p>

Elevate your development workflow with our cutting-edge extension tailored for NextJS 14 (compatibility for version 13). Designed as the quintessential development companion, this toolset redefines file generation, optimizing every phase of your project's lifecycle. Seamlessly create pages, components, layouts, and more—all meticulously crafted to align with the esteemed T3 Stack paradigm. Leverage the capabilities of advanced technologies like NextJS, ReactJS, Prisma, TailwindCSS, i18next, and numerous other essential frameworks.

![demo](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/demo.gif)

Ready to transcend your development experience?

Boost your efficiency with this VSCode extension, designed to streamline file generation for your T3 Stack project. Whether crafting individual components or kickstarting a new venture, the extension simplifies tasks through intuitive commands. Additionally, initiate your NextJS server effortlessly, enabling swift previews of your application.

## Index

- [T3 Stack / NextJS / ReactJS File Generator](#t3-stack--nextjs--reactjs-file-generator)
  - [Index](#index)
  - [Requirements](#requirements)
  - [Create a New Project](#create-a-new-project)
  - [Project Settings](#project-settings)
  - [Features](#features)
    - [Commands to Create Files](#commands-to-create-files)
    - [Terminal Commands](#terminal-commands)
    - [Snippets](#snippets)
      - [HTML](#html)
      - [JavaScript](#javascript)
      - [ReactJS](#reactjs)
      - [NextJS](#nextjs)
      - [NextAuth](#nextauth)
      - [Prisma](#prisma)
      - [Tailwind](#tailwind)
      - [tRPC](#trpc)
      - [i18next](#i18next)
      - [zod](#zod)
  - [Connect with me](#connect-with-me)
  - [Other Extensions](#other-extensions)
  - [Changelog](#changelog)
  - [Authors](#authors)
  - [License](#license)

## Requirements

- VSCode 1.46.0 or later

## Create a New Project

You can create a new project using the T3 Stack / NextJS / Vite CLI. To do so, open the command palette in VSCode:

- `CTRL + SHIFT + P` (Windows)
- `CMD + SHIFT + P` (Mac OS)

Type `T3: Create Project` and press `ENTER`.

![create-project](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/create-project.gif)

## Project Settings

Configure your project by creating or updating a settings.json file at the project's root. If you already have a `.vscode/settings.json` file, skip the first two steps.

1. Open the command palette in VSCode:

   - `CTRL + SHIFT + P` (Windows)
   - `CMD + SHIFT + P` (Mac OS)

2. Type `Preferences: Open Workspace Settings (JSON)`.

3. In the `.vscode/settings.json` file, copy and paste the following settings:

   ```jsonc
   {
     "nextjs.files.extension": "tsx",
     "nextjs.files.showType": true,
     "nextjs.server.turbo": true
   }
   ```

4. **Restart VS Code**

Your project is now set up to automatically format code upon saving.

## Features

<details open>
<summary>Files</summary>

### Commands to Create Files

| Title                           | Purpose                                              |
| ------------------------------- | ---------------------------------------------------- |
| T3: Generate Class or Interface | Creates a new, generic class or interface definition |
| T3: Generate Component          | Creates a new, generic component                     |
| T3: Generate Layout             | Creates a new, generic layout                        |
| T3: Generate Loading            | Creates a new, generic loading component             |
| T3: Generate Page               | Creates a new, generic page                          |
| T3: Add NextAuth file           | Adds a new file called [...nextauth].js              |
| T3: Generate tRPC Router        | Creates a new, generic tRPC router                   |
| T3: Generate tRPC Controller    | Creates a new, generic tRPC controller               |

</details>

<details open>
<summary>Commands</summary>

### Terminal Commands

| Title                     | Purpose                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- |
| T3: Create Project        | Creates a new project using the T3 Stack / NextJS / Vite CLI                 |
| T3: Prisma DB Execute     | Execute native commands to your database                                     |
| T3: Prisma DB Pull        | Pull the state from the database to the Prisma schema using introspection    |
| T3: Prisma DB Push        | Push the state from your Prisma schema to your database                      |
| T3: Prisma DB Seed        | Seed your database                                                           |
| T3: Prisma Format         | Format a Prisma schema                                                       |
| T3: Prisma Generate       | Generate artifacts                                                           |
| T3: Prisma Init           | Set up a new Prisma project                                                  |
| T3: Prisma Migrate Deploy | Apply pending migrations to update the database schema in production/staging |
| T3: Prisma Migrate Dev    | Create a migration from changes in Prisma schema                             |
| T3: Prisma Migrate Reset  | Reset your database and apply all migrations, all data will be lost          |
| T3: Prisma Migrate Status | Check the status of your database migrations                                 |
| T3: Prisma Studio         | Browse your data with Prisma Studio                                          |
| T3: Prisma Validate       | Validate a Prisma schema                                                     |
| T3: Start Server          | Builds and serves your application, rebuilding on file changes               |

</details>

<details open>
<summary>Snippets</summary>

### Snippets

#### HTML

| Title                     | Purpose                                                          |
| ------------------------- | ---------------------------------------------------------------- |
| html_address              | \<address>...\</address>                                         |
| html_article              | \<article>...\</article>                                         |
| html_aside                | \<aside>...\</aside>                                             |
| html_audio                | \<audio src="..." controls>...\</audio>                          |
| html_base                 | \<base href="...">                                               |
| html_blockquote           | \<blockquote>...\</blockquote>                                   |
| html_button_reset         | \<button type="reset">...\</button>                              |
| html_button_submit        | \<button type="submit">...\</button>                             |
| html_button               | \<button type="...">...\</button>                                |
| html_div                  | \<div>...\</div>                                                 |
| html_dl_dt_dd             | \<dl>\<dt>...\</dt>\<dd>\</dd>, \</dl>                           |
| html_embed                | \<embed src="..." type="...">                                    |
| html_figure               | \<figure class="...">                                            |
| html_footer               | \<footer>...\</footer>                                           |
| html_form                 | \<form action="..." method="...">...\</form>                     |
| html_h1                   | \<h1>...\</h1>                                                   |
| html_h2                   | \<h2>...\</h2>                                                   |
| html_h3                   | \<h3>...\</h3>                                                   |
| html_h4                   | \<h4>...\</h4>                                                   |
| html_h5                   | \<h5>...\</h5>                                                   |
| html_h6                   | \<h6>...\</h6>                                                   |
| html_header               | \<header>...\</header>                                           |
| html_hr                   | \<hr>...\</hr>                                                   |
| html_iframe               | \<iframe src="..." frameborder="0" allowfullscreen>...\</iframe> |
| html_img                  | \<img src="..." alt="...">                                       |
| html_input_button         | \<input type="button" name="..." id="..." value="...">           |
| html_input_checkbox       | \<input type="checkbox" name="..." id="..." value="...">         |
| html_input_color          | \<input type="color" name="..." id="..." value="...">            |
| html_input_date           | \<input type="date" name="..." id="..." value="...">             |
| html_input_datetime_local | \<input type="datetime-local" name="..." id="..." value="...">   |
| html_input_datetime       | \<input type="datetime" name="..." id="..." value="...">         |
| html_input_email          | \<input type="email" name="..." id="..." value="...">            |
| html_input_file           | \<input type="file" name="..." id="..." value="...">             |
| html_input_hidden         | \<input type="hidden" name="..." id="..." value="...">           |
| html_input_image          | \<input type="image" name="..." id="..." value="...">            |
| html_input_month          | \<input type="month" name="..." id="..." value="...">            |
| html_input_number         | \<input type="number" name="..." id="..." value="...">           |
| html_input_password       | \<input type="password" name="..." id="..." value="...">         |
| html_input_radio          | \<input type="radio" name="..." id="..." value="...">            |
| html_input_range          | \<input type="range" name="..." id="..." value="...">            |
| html_input_reset          | \<input type="reset" name="..." id="..." value="...">            |
| html_input_search         | \<input type="search" name="..." id="..." value="...">           |
| html_input_submit         | \<input type="submit" name="..." id="..." value="...">           |
| html_input_tel            | \<input type="tel" name="..." id="..." value="...">              |
| html_input_text           | \<input type="text" name="..." id="..." value="...">             |
| html_input_time           | \<input type="time" name="..." id="..." value="...">             |
| html_input_url            | \<input type="url" name="..." id="..." value="...">              |
| html_input_week           | \<input type="week" name="..." id="..." value="...">             |
| html_input                | \<input type="..." name="..." id="..." value="...">              |
| html_label                | \<label for="...">...\</label>                                   |
| html_legend               | \<legend>...\</legend>                                           |
| html_main                 | \<main>...\</main>                                               |
| html_nav                  | \<nav>...\</nav>                                                 |
| html_ol_li                | \<ol>\<li>...\</li>, \</ol>                                      |
| html_optgroup             | \<optgroup label="...">...\</optgroup>                           |
| html_option               | \<option value="...">...\</option>                               |
| html_output               | \<output for="...">...\</output>                                 |
| html_picture              | \<picture>                                                       |
| html_section              | \<section>...\</section>                                         |
| html_select               | \<select name="...">...\</select>                                |
| html_source               | \<source srcset="..." media="...">                               |
| html_summary              | \<summary>...\</summary>                                         |
| html_table                | \<table>...\</table>                                             |
| html_tbody                | \<tbody>...\</tbody>                                             |
| html_td                   | \<td>...\</td>                                                   |
| html_textarea             | \<textarea name="..." cols="..." rows="...">...\</textarea>      |
| html_tfoot                | \<tfoot>...\</tfoot>                                             |
| html_th                   | \<th>...\</th>                                                   |
| html_thead                | \<thead>...\</thead>                                             |
| html_title                | \<title>...\</title>                                             |
| html_tr_td                | \<tr>\<td>...\</td>, \</tr>                                      |
| html_ul_li                | \<ul>\<li>...\</li>, \</ul>                                      |
| html_video                | \<video src="..." controls>...\</video>                          |
| html_dd                   | \<dd>...\</dd>                                                   |
| html_dt                   | \<dt>...\</dt>                                                   |
| html_figcaption           | \<figcaption>...\</figcaption>                                   |
| html_li                   | \<li>...\</li>                                                   |
| html_p                    | \<p>...\</p>                                                     |
| html_pre                  | \<pre>...\</pre>                                                 |
| html_abbr                 | \<abbr title="...">...\</abbr>                                   |
| html_cite                 | \<cite>...\</cite>                                               |
| html_code                 | \<code>...\</code>                                               |
| html_mark                 | \<mark>...\</mark>                                               |
| html_small                | \<small>...\</small>                                             |
| html_span                 | \<span>...\</span>                                               |
| html_strong               | \<strong>...\</strong>                                           |
| html_time                 | \<time datetime="...">...\</time>                                |
| html_track                | \<track src="..." kind="..." srclang="..." label="...">          |
| html_del                  | \<del>...\</del>                                                 |
| html_ins                  | \<ins>...\</ins>                                                 |
| html_caption              | \<caption>...\</caption>                                         |
| html_table_colgroup       | \<table>                                                         |
| html_datalist             | \<datalist id="...">...\</datalist>                              |
| html_fieldset             | \<fieldset>...\</fieldset>                                       |
| html_legend               | \<legend>...\</legend>                                           |
| html_progress             | \<progress value="..." max="...">...\</progress>                 |
| html_select_optgroup      | \<select>                                                        |
| html_details              | \<details open>...\</details>                                         |
| html_summary              | \<summary>...\</summary>                                         |

#### JavaScript

| Title                                 | Purpose                         |
| ------------------------------------- | ------------------------------- |
| js_set_timeout                        | setTimeout                      |
| js_set_interval                       | setInterval                     |
| js_set_immediate                      | setImmediate                    |
| js_promise_all                        | Promise.all                     |
| js_env                                | process.env                     |
| js_resolve                            | Promise.resolve                 |
| js_reject                             | Promise.reject                  |
| js_promise                            | Promise                         |
| js_then                               | Promise.then                    |
| js_catch                              | Promise.catch                   |
| js_it                                 | it                              |
| js_it_todo                            | it.todo                         |
| js_before                             | before                          |
| js_before_all                         | beforeAll                       |
| js_before_each                        | beforeEach                      |
| js_after                              | after                           |
| js_after_each                         | afterEach                       |
| js_member                             | exports.member                  |
| js_exports                            | module.exports                  |
| js_handler                            | handler                         |
| js_add_event_listener                 | addEventListener                |
| js_remove_event_listener              | removeEventListener             |
| js_get_element_by_id                  | getElementById                  |
| js_get_elements_by_class_name         | getElementsByClassName          |
| js_get_elements_by_tag_name           | getElementsByTagName            |
| js_query_selector                     | querySelector                   |
| js_query_selector_all                 | querySelectorAll                |
| js_create_dDocument_fragment          | createDocumentFragment          |
| js_create_element                     | createElement                   |
| js_add                                | classList.add                   |
| js_remove                             | classList.remove                |
| js_toggle                             | classList.toggle                |
| js_get_attribute                      | getAttribute                    |
| js_remove_attribute                   | removeAttribute                 |
| js_set_attribute                      | setAttribute                    |
| js_append_child                       | appendChild                     |
| js_remove_child                       | removeChild                     |
| js_loop                               | loop                            |
| js_map                                | map                             |
| js_reduce                             | reduce                          |
| js_filter                             | filter                          |
| js_find                               | find                            |
| js_every                              | every                           |
| js_some                               | some                            |
| js_class                              | class                           |
| js_extends                            | extends                         |
| js_typeof                             | typeof                          |
| js_instanceof                         | instanceof                      |
| js_is_array                           | Array.isArray                   |
| js_array_from                         | Array.from                      |
| js_try                                | try                             |
| js_console_log                        | console.log                     |
| js_console_table                      | console.table                   |
| js_console_trace                      | console.trace                   |
| js_console_time                       | console.time                    |
| js_console_time_end                   | console.timeEnd                 |
| js_console_group                      | console.group                   |
| js_console_group_end                  | console.groupEnd                |
| js_console_group_collapsed            | console.groupCollapsed          |
| js_console_count                      | console.count                   |
| js_console_assert                     | console.assert                  |
| js_console_clear                      | console.clear                   |
| js_console_info                       | console.info                    |
| js_console_error                      | console.error                   |
| js_console_warn                       | console.warn                    |
| js_console_dir                        | console.dir                     |
| js_json_stringify                     | JSON.stringify                  |
| js_json_parse                         | JSON.parse                      |
| js_prototype                          | prototype                       |
| js_object_assign                      | Object.assign                   |
| js_object_create                      | Object.create                   |
| js_object_get_own_property_descriptor | Object.getOwnPropertyDescriptor |
| js_ternary                            | ternary                         |
| js_object_define_property             | Object.defineProperty           |
| js_object_keys                        | Object.keys                     |
| js_object_values                      | Object.values                   |
| js_object_entries                     | Object.entries                  |
| js_object_freeze                      | Object.freeze                   |
| js_object_seal                        | Object.seal                     |
| js_object_is_frozen                   | Object.isFrozen                 |
| js_object_is_sealed                   | Object.isSealed                 |
| js_object_is_extensible               | Object.isExtensible             |
| js_object_prevent_extensions          | Object.preventExtensions        |
| js_object_get_prototype_of            | Object.getPrototypeOf           |
| js_object_set_prototype_of            | Object.setPrototypeOf           |
| js_object_is                          | Object.is                       |
| js_object_assign                      | Object.assign                   |
| js_object_get_own_property_names      | Object.getOwnPropertyNames      |
| js_object_get_own_property_symbols    | Object.getOwnPropertySymbols    |
| js_object_get_own_properties          | Object.getOwnProperties         |
| js_object_get_own_descriptors         | Object.getOwnDescriptors        |
| js_object_get_own_property_descriptor | Object.getOwnPropertyDescriptor |
| js_object_define_property             | Object.defineProperty           |
| js_object_define_properties           | Object.defineProperties         |
| js_object_define                      | Object.define                   |

#### ReactJS

| Title                                        | Purpose                                                                  |
| -------------------------------------------- | ------------------------------------------------------------------------ |
| react_arrow_function                         | (...) => { ... };                                                        |
| react_bind                                   | this.... = this.....bind(this);                                          |
| react_component_did_mount                    | componentDidMount = () => { ... };                                       |
| react_component_did_update                   | componentDidUpdate = (prevProps, prevState) => { ... };                  |
| react_component_will_unmount                 | componentWillUnmount = () => { ... };                                    |
| react_const_function                         | const ... = (...) => { ... };                                            |
| react_constructor                            | constructor(props)                                                       |
| react_context                                | const ... = React.createContext();                                       |
| react_destructuring_array                    | const [ ... ] = ...;                                                     |
| react_destructuring_props                    | const { ... } = this.props;                                              |
| react_destructuring_state                    | const { ... } = this.state;                                              |
| react_destructuring                          | const { ... } = ...;                                                     |
| react_export_alias_name                      | export { ... as ... } from '...';                                        |
| react_export_const_function                  | export const ... = (...) => { ... };                                     |
| react_export_default_function                | export default (...) => { ... };                                         |
| react_export_default_module_name             | export default ...;                                                      |
| react_export_destructured_module             | export { ... } from '...';                                               |
| react_for_in                                 | for(let ... in ... { ... });                                             |
| react_for_of                                 | for(let ... of ... { ... });                                             |
| react_array_for_each                         | ....forEach(... => { ... });                                             |
| react_get_snapshot_before_update             | getSnapshotBeforeUpdate = (prevProps, prevState) => { ... };             |
| react_import_module                          | import '...';                                                            |
| react_import_browser_router                  | import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; |
| react_import_connect                         | import { connect } from 'react-redux';                                   |
| react_import_module_name                     | import ... from '...';                                                   |
| react_import_prop_types                      | import PropTypes from 'prop-types';                                      |
| react_import_provider                        | import { Provider } from 'react-redux';                                  |
| react_import_react_component_prop_types      | import React, { Component } from 'react';                                |
| react_import_react_component                 | import React, { Component } from 'react';                                |
| react_import_react_memo_prop_types           | import React, { memo } from 'react';                                     |
| react_import_react_memo                      | import React, { memo } from 'react';                                     |
| react_import_react_pure_component_prop_types | import React, { PureComponent } from 'react';                            |
| react_import_react_pure_component            | import React, { PureComponent } from 'react';                            |
| react_import_react_react_dom                 | import React from 'react'; import ReactDOM from 'react-dom';             |
| react_import_react                           | import React from 'react';                                               |
| react_import_react_dom                       | import ReactDOM from 'react-dom';                                        |
| react_import_styled                          | import styled from 'styled-components';                                  |
| react_method_name                            | ... = (...) => { ... };                                                  |
| react_promise                                | return new Promise((resolve, reject) => { ... });                        |
| react_prop_types_any                         | PropTypes.any                                                            |
| react_prop_types_array_is_required           | PropTypes.array.isRequired                                               |
| react_prop_types_array                       | PropTypes.array                                                          |
| react_prop_types_array_of_is_required        | PropTypes.arrayOf(...).isRequired                                        |
| react_prop_types_array_of                    | PropTypes.arrayOf(...)                                                   |
| react_prop_types_bool_is_required            | PropTypes.bool.isRequired                                                |
| react_prop_types_bool                        | PropTypes.bool                                                           |
| react_prop_types_element_is_required         | PropTypes.element.isRequired                                             |
| react_prop_types_element                     | PropTypes.element                                                        |
| react_prop_types_func_is_required            | PropTypes.func.isRequired                                                |
| react_prop_types_func                        | PropTypes.func                                                           |
| react_prop_types_instance_of_is_required     | PropTypes.instanceOf(...).isRequired                                     |
| react_prop_types_instance_of                 | PropTypes.instanceOf(...)                                                |
| react_prop_types_node_is_required            | PropTypes.node.isRequired                                                |
| react_prop_types_node                        | PropTypes.node                                                           |
| react_prop_types_number_is_required          | PropTypes.number.isRequired                                              |
| react_prop_types_number                      | PropTypes.number                                                         |
| react_prop_types_object_is_required          | PropTypes.object.isRequired                                              |
| react_prop_types_object                      | PropTypes.object                                                         |
| react_prop_types_object_of_is_required       | PropTypes.objectOf(...).isRequired                                       |
| react_prop_types_object_of                   | PropTypes.objectOf(...)                                                  |
| react_prop_types_one_of_is_required          | PropTypes.oneOf([ ... ]).isRequired                                      |
| react_prop_types_one_of                      | PropTypes.oneOf([ ... ])                                                 |
| react_prop_types_one_of_type_is_required     | PropTypes.oneOfType([ ... ]).isRequired                                  |
| react_prop_types_one_of_type                 | PropTypes.oneOfType([ ... ])                                             |
| react_prop_types_shape_is_required           | PropTypes.shape({ ... }).isRequired                                      |
| react_prop_types_shape                       | PropTypes.shape({ ... })                                                 |
| react_prop_types_string_is_required          | PropTypes.string.isRequired                                              |
| react_prop_types_string                      | PropTypes.string                                                         |
| react_redux_action_template                  | export function ...(...)                                                 |
| react_redux_reducer_template                 | const initialState                                                       |
| react_redux_selector_template                | export const ... = state => state........                                |
| react_ref                                    | const ... = React.createRef();                                           |
| react_render                                 | render() { return( ... ) }                                               |
| react_set_interval                           | setInterval(() => { ... }, ...);                                         |
| react_set_timeout                            | setTimeout(() => { ... }, ...);                                          |
| react_should_component_update                | shouldComponentUpdate = (nextProps, nextState) => { ... };               |
| react_static_get_derived_state_from_props    | static getDerivedStateFromProps(nextProps, prevState) { ... }            |
| react_static_prop_types                      | static propTypes = { ... }                                               |
| react_this_props_prop_name                   | this.props....                                                           |
| react_this_props                             | this.props....                                                           |
| react_this_set_state                         | this.setState({ ... });                                                  |
| react_this_state_state_name                  | this.state....                                                           |
| react_this_state                             | this.state = { ... };                                                    |
| react_use_callback                           | const ... = useCallback(..., [ ... ]);                                   |
| react_use_context                            | const ... = useContext(...);                                             |
| react_use_debugValue                         | const ... = useDebugValue(...);                                          |
| react_use_deferredValue                      | const ... = useDeferredValue(...);                                       |
| react_use_effect                             | useEffect(() => { ... }, [ ... ]);                                       |
| react_use_id                                 | const ... = useId(...);                                                  |
| react_use_imperativeHandle                   | const ... = useImperativeHandle(..., [ ... ]);                           |
| react_use_insertionEffect                    | const ... = useInsertionEffect(...);                                     |
| react_use_layoutEffect                       | const ... = useLayoutEffect(..., [ ... ]);                               |
| react_use_memo                               | const ... = useMemo(..., [ ... ]);                                       |
| react_use_reducer                            | const [..., set...] = useReducer(...);                                   |
| react_use_ref                                | const ... = useRef(...);                                                 |
| react_use_state                              | const [..., set...] = useState(...);                                     |
| react_use_syncExternalStore                  | const ... = useSyncExternalStore(...);                                   |
| react_use_transition                         | const ... = useTransition(...);                                          |
| react_describe                               | describe('...', () => { ... });                                          |
| react_test                                   | test('should ...', () => { ... });                                       |
| react_it                                     | it('should ...', () => { ... });                                         |

#### NextJS

| Title                               | Purpose                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------- |
| next_image                          | \<Image src="..." alt="..." width={...} height={...} />                               |
| next_link                           | \<Link href="...">...\</Link>                                                         |
| next_page_props_params              | export default function Page({ params} : Props) { ... }                               |
| next_page_props                     | export default function Page({ ... }: PageProps) { ... }                              |
| next_page                           | export default function Page() { ... }                                                |
| next_server_action_function         | async function ...() { 'use server'; ... }                                            |
| next_client_component               | export default function ...() { ... }                                                 |
| next_error_component                | export default function Error( ... ) { ... }                                          |
| next_generate_metadata              | export async function generateMetadata( ... ): Promise\<Metadata> { ... }             |
| next_generate_static_params_dynamic | export async function generateStaticParams() { ... }                                  |
| next_loading_function               | export default function Loading() { ... }                                             |
| next_route_handler_api_delete       | export async function DELETE(req: Request) { ... }                                    |
| next_route_handler_api_get_search   | export async function GET(request: Request) { ... }                                   |
| next_route_handler_api_get_dynamic  | export async function GET(request: Request, context: { params: { ... } }) { ... }     |
| next_route_handler_api_get          | export async function GET() { ... }                                                   |
| next_route_handler_api_post         | export async function POST(req: Request) { ... }                                      |
| next_route_handler_api_update       | export async function PUT(req: Request) { ... }                                       |
| next_generated_metadata             | export function generateMetadata({ params }: GenerateMetadataProps): Metadata { ... } |
| next_global_error_component         | export default function GlobalError({ error, reset }: GlobalErrorProps) { ... }       |
| next_layout_component               | export default function Layout({ children }: LayoutProps) { ... }                     |
| next_layout_root                    | export default function Layout({ children}: { children: React.ReactNode;}) { ... }    |
| next_loading_component              | export default function Loading() { ... }                                             |
| next_middleware                     | export function middleware(request: NextRequest) { ... }                              |
| next_not_found_component            | export default function NotFound() { ... }                                            |

#### NextAuth

| Title                              | Purpose                                                    |
| ---------------------------------- | ---------------------------------------------------------- |
| nextauth_auth_options              | export const authOptions = { providers: [ ... ] };         |
| nextauth_session_provider          | \<SessionProvider session={session}>...\</SessionProvider> |
| nextauth_use_session               | const { data: sessionData } = useSession();                |
| nextauth_forty_two_provider        | FortyTwoProvider                                           |
| nextauth_apple_provider            | AppleProvider                                              |
| nextauth_atlassian_provider        | AtlassianProvider                                          |
| nextauth_auth0_provider            | Auth0Provider                                              |
| nextauth_authentik_provider        | AuthentikProvider                                          |
| nextauth_azure_ad_b2c_provider     | AzureADB2CProvider                                         |
| nextauth_azure_ad_provider         | AzureADProvider                                            |
| nextauth_battle_net_provider       | BattleNetProvider                                          |
| nextauth_box_provider              | BoxProvider                                                |
| nextauth_boxy_hq_saml_provider     | BoxyHQSAMLProvider                                         |
| nextauth_bungie_provider           | BungieProvider                                             |
| nextauth_cognito_provider          | CognitoProvider                                            |
| nextauth_coinbase_provider         | CoinbaseProvider                                           |
| nextauth_discord_provider          | DiscordProvider                                            |
| nextauth_dropbox_provider          | DropboxProvider                                            |
| nextauth_duende_ids6_provider      | DuendeIDS6Provider                                         |
| nextauth_eve_online_provider       | EVEOnlineProvider                                          |
| nextauth_facebook_provider         | FacebookProvider                                           |
| nextauth_face_it_provider          | FaceItProvider                                             |
| nextauth_four_square_provider      | FourSquareProvider                                         |
| nextauth_freshbooks_provider       | FreshbooksProvider                                         |
| nextauth_fusion_auth_provider      | FusionAuthProvider                                         |
| nextauth_git_hub_provider          | GitHubProvider                                             |
| nextauth_gitlab_provider           | GitlabProvider                                             |
| nextauth_google_provider           | GoogleProvider                                             |
| nextauth_hubspot_provider          | HubspotProvider                                            |
| nextauth_identity_server4_provider | IdentityServer4Provider                                    |
| nextauth_instagram_provider        | InstagramProvider                                          |
| nextauth_kakao_provider            | KakaoProvider                                              |
| nextauth_keycloak_provider         | KeycloakProvider                                           |
| nextauth_line_provider             | LineProvider                                               |
| nextauth_linked_in_provider        | LinkedInProvider                                           |
| nextauth_mailchimp_provider        | MailchimpProvider                                          |
| nextauth_mail_ru_provider          | MailRuProvider                                             |
| nextauth_medium_provider           | MediumProvider                                             |
| nextauth_naver_provider            | NaverProvider                                              |
| nextauth_netlify_provider          | NetlifyProvider                                            |
| nextauth_okta_provider             | OktaProvider                                               |
| nextauth_one_login_provider        | OneLoginProvider                                           |
| nextauth_osso_provider             | OssoProvider                                               |
| nextauth_osu_provider              | OsuProvider                                                |
| nextauth_patreon_provider          | PatreonProvider                                            |
| nextauth_pinterest_provider        | PinterestProvider                                          |
| nextauth_pipedrive_provider        | PipedriveProvider                                          |
| nextauth_reddit_provider           | RedditProvider                                             |
| nextauth_salesforce_provider       | SalesforceProvider                                         |
| nextauth_slack_provider            | SlackProvider                                              |
| nextauth_spotify_provider          | SpotifyProvider                                            |
| nextauth_strava_provider           | StravaProvider                                             |
| nextauth_todoist_provider          | TodoistProvider                                            |
| nextauth_trakt_provider            | TraktProvider                                              |
| nextauth_twitch_provider           | TwitchProvider                                             |
| nextauth_twitter_provider          | TwitterProvider                                            |
| nextauth_united_effects_provider   | UnitedEffectsProvider                                      |
| nextauth_vk_provider               | VkProvider                                                 |
| nextauth_wikimedia_provider        | WikimediaProvider                                          |
| nextauth_wordpress_provider        | WordpressProvider                                          |
| nextauth_work_os_provider          | WorkOSProvider                                             |
| nextauth_yandex_provider           | YandexProvider                                             |
| nextauth_zitadel_provider          | ZitadelProvider                                            |
| nextauth_zoho_provider             | ZohoProvider                                               |
| nextauth_zoom_provider             | ZoomProvider                                               |

#### Prisma

| Title                        | Purpose                                          |
| ---------------------------- | ------------------------------------------------ |
| prisma_export_default_prisma | export default const prisma = new PrismaClient() |
| prisma_id                    | id Int @id @default(autoincrement())             |
| prisma_updatedAt             | updatedAt DateTime @updatedAt                    |
| prisma_default_now           | createdAt DateTime @default(now())               |
| prisma_default_dbgenerated   | createdAt DateTime @default(dbgenerated())       |
| prisma_default_cuid          | id String @id @default(cuid())                   |
| prisma_default_uuid          | id String @id @default(uuid())                   |
| prisma_default_sequential    | id Int @id @default(sequential())                |
| prisma_default_random        | id Int @id @default(random())                    |
| prisma_default_anonymous     | id Int @id @default(anonymous())                 |
| prisma_relation              | @relation(fields: [ ...Id ], references: [ id ]) |
| prisma_unique                | @@unique([ ... ])                                |
| prisma_map                   | @@map(...)                                       |
| prisma_schema                | @@schema(...)                                    |
| prisma_create                | await prisma.....create({ data: { ... } })       |
| prisma_findMany              | await prisma.....findMany({ ... })               |
| prisma_findUnique            | await prisma.....findUnique({ ... })             |
| prisma_update                | await prisma.....update({ ... })                 |
| prisma_delete                | await prisma.....delete({ ... })                 |
| prisma_deleteMany            | await prisma.....deleteMany({ ... })             |
| prisma_upsert                | await prisma.....upsert({ ... })                 |
| prisma_aggregate             | await prisma.....aggregate({ ... })              |
| prisma_count                 | await prisma.....count({ ... })                  |
| prisma_groupBy               | await prisma.....groupBy({ ... })                |
| prisma_findFirst             | await prisma.....findFirst({ ... })              |
| prisma_orderBy               | orderBy: { ... }                                 |
| prisma_where                 | where: { ... }                                   |
| prisma_skip_take             | skip: ..., take: ...                             |
| prisma_include               | include: { ... }                                 |
| prisma_select                | select: { ... }                                  |
| prisma_transaction           | prisma.$transaction([ ... ])                     |
| prisma_queryRaw              | prisma.$queryRaw(...)                            |
| prisma_executeRaw            | prisma.$executeRaw(...)                          |
| prisma_use                   | prisma.$use(...)                                 |
| prisma_on                    | prisma.$on(...)                                  |
| prisma_disconnect            | prisma.$disconnect()                             |
| prisma_connect               | prisma.$connect()                                |
| prisma_queryRawUnsafe        | prisma.$queryRawUnsafe(...)                      |
| prisma_executeRawUnsafe      | prisma.$executeRawUnsafe(...)                    |

#### Tailwind

| Title                       | Purpose                     |
| --------------------------- | --------------------------- |
| tailwind_five_stars         | 5 stars                     |
| tailwind_button_combination | Button combination          |
| tailwind_button_ghost       | Button ghost                |
| tailwind_button_loading     | Button loading              |
| tailwind_button_outline     | Button outline              |
| tailwind_button_rounded     | Button rounded              |
| tailwind_button_icon        | Button with icon            |
| tailwind_button             | Button                      |
| tailwind_checkbox           | Checkbox                    |
| tailwind_featured_list      | Featured list               |
| tailwind_form_group         | Form group                  |
| tailwind_grid_scroll_snap   | Grid snap scroll horizontal |
| tailwind_password_toggle    | Input password toggle       |
| tailwind_input_search_clear | Input search clear          |
| tailwind_input_search       | Input search                |
| tailwind_input_icon         | Input with icon             |
| tailwind_input              | Input                       |
| tailwind_grid               | Layout grid equals          |
| tailwind_link_image         | Link wrap image             |
| tailwind_loading            | Loading circle              |
| tailwind_modal_close        | Modal close                 |
| tailwind_modal              | Modal                       |
| tailwind_multi_avatar       | Multi avatar                |
| tailwind_notification       | Notification                |
| tailwind_overlay            | Overlay                     |
| tailwind_progress           | Progress bar                |
| tailwind_radio              | Radio                       |
| tailwind_rounded_icon       | Rounded icon                |
| tailwind_signup_form        | Signup form                 |
| tailwind_counter            | Simple counter              |
| tailwind_textarea           | Textarea                    |
| tailwind_toggle             | Toggle                      |
| tailwind_upload             | Upload file                 |

#### tRPC

| Title                   | Purpose                                          |
| ----------------------- | ------------------------------------------------ |
| trpc_server_standalone  | const server = createHTTPServer({ ... })         |
| trpc_init               | const t = initTRPC.create();                     |
| trpc_create_trpc_router | export const Router = createTRPCRouter({ ... }); |
| trpc_public_query       | publicProcedure.input(...).query(...)            |
| trpc_public_mutation    | publicProcedure.input(...).mutation(...)         |
| trpc_protected_query    | protectedProcedure.input(...).query(...)         |
| trpc_protected_mutation | protectedProcedure.input(...).mutation(...)      |

#### i18next

| Title                     | Purpose                                                                    |
| ------------------------- | -------------------------------------------------------------------------- |
| i18next_trans             | \<Trans i18nKey="..." values={{...}}>...\</Trans>                          |
| i18next_use_translation   | const { t } = useTranslation();                                            |
| i18next_language_detector | i18next.use(LanguageDetector).init({ ... })                                |
| i18next_middleware        | i18next.use(i18nextMiddleware.LanguageDetector).use(Backend).init({ ... }) |

#### zod

| Title                   | Purpose                              |
| ----------------------- | ------------------------------------ |
| zod_array_nonempty      | z.array(z.string()).nonempty()       |
| zod_bigint_positive     | z.bigint().positive()                |
| zod_date_max            | z.date().max(new Date())             |
| zod_deep_partial        | const ... = ....deepPartial();       |
| zod_enum                | z.enum([...])                        |
| zod_schema_keyof        | const ... = ....keyof();             |
| zod_string_nullable     | z.nullable(z.string())               |
| zod_number_int_positive | z.number().int().positive()          |
| zod_string_optional     | z.optional(z.string())               |
| zod_schema_partial      | const ... = ....partial();           |
| zod_schema_passthrough  | ....passthrough().parse()            |
| zod_schema_strip        | ....strip().parse()                  |
| zod_schema_strict       | ....strict().parse()                 |
| zod_promise             | z.promise(z.string())                |
| zod_function_parameters | ....parameters()                     |
| zod_function_returnType | ....returnType()                     |
| zod_string_max          | z.string().max(...)                  |
| zod_string_min          | z.string().min(...)                  |
| zod_string_length       | z.string().length(...)               |
| zod_string_email        | z.string().email()                   |
| zod_string_url          | z.string().url().nullish()           |
| zod_string_emoji        | z.string().emoji()                   |
| zod_string_uuid         | z.string().uuid()                    |
| zod_string_cuid         | z.string().cuid()                    |
| zod_string_cuid2        | z.string().cuid2()                   |
| zod_string_ulid         | z.string().ulid()                    |
| zod_string_regex        | z.string().regex(...)                |
| zod_string_includes     | z.string().includes(...)             |
| zod_string_startsWith   | z.string().startsWith(...)           |
| zod_string_endsWith     | z.string().endsWith(...)             |
| zod_string_datetime     | z.string().datetime()                |
| zod_string_ip           | z.string().ip({ version: 'v4' })     |
| zod_string_trim         | z.string().trim()                    |
| zod_string_toLowerCase  | z.string().toLowerCase()             |
| zod_string_toUpperCase  | z.string().toUpperCase()             |

</details>

## Connect with me

[![GitHub followers](https://img.shields.io/github/followers/ManuelGil?style=for-the-badge&logo=github)](https://github.com/ManuelGil)
[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/imgildev?style=for-the-badge&logo=x)](https://twitter.com/imgildev)

## Other Extensions

- [NestJS File Generator for VSCode](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator)
- [NestJS Snippets for VSCode Editor](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension)
- [Angular File Generator for VSCode Editor](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator)
- [Nx / Angular / Nest / Next Essential Extension Pack](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nx-pack)
- [CodeIgniter 4 Snippets for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-snippets)
- [CodeIgniter 4 Spark for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-spark)
- [CodeIgniter 4 Essential Extension Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-pack)
- [Moodle Pack](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets)
- [Mustache Template Engine - Snippets & Autocomplete](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Authors

- **Manuel Gil** - _Owner_ - [ManuelGil](https://github.com/ManuelGil)

See also the list of [contributors](https://github.com/ManuelGil/vscode-nextjs-generator/contributors) who participated in this project.

## License

T3 Stack / NextJS / ReactJS File Generator for VSCode is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.
