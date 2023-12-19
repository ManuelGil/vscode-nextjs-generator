# React / NextJS / T3 Stack File Generator

[![Latest Release](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-nextjs-generator?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/imgildev.vscode-nextjs-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/vscode-nextjs-generator?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-nextjs-generator)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-nextjs-generator?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-nextjs-generator/blob/main/LICENSE)

This versatile extension enhances your NextJS development experience by offering a comprehensive set of commands tailored for file generation within your project. Seamlessly create various project elements, including pages, components, layouts, classes, interfaces, and more, all designed to align with the T3 Stack paradigm—leveraging NextJS, NextAuth, Prisma, tRPC, and other essential technologies.

![demo](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/demo.gif)

Elevate your productivity with this VSCode extension, empowering you to efficiently generate files for your T3 Stack project. Whether you're shaping individual components or initiating an entirely new project, the extension simplifies the process with intuitive commands. The extension also includes a command to start your NextJS server, allowing you to quickly preview your application.

## Index

- [React / NextJS / T3 Stack File Generator](#react--nextjs--t3-stack-file-generator)
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
      - [React](#react)
      - [Next](#next)
      - [Prisma](#prisma)
  - [Connect with me](#connect-with-me)
  - [Other Extensions](#other-extensions)
  - [Changelog](#changelog)
  - [Authors](#authors)
  - [License](#license)

## Requirements

- VSCode 1.46.0 or later

## Create a New Project

You can create a new project using the Vite / NextJS / T3 Stack CLI. To do so, open the command palette in VSCode:

- `CTRL + SHIFT + P` (Windows)
- `CMD + SHIFT + P` (Mac OS)

Type `Next: Create Project` and press `ENTER`.

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
     "nextjs.server.turbo": true
   }
   ```

4. **Restart VS Code**

Your project is now set up to automatically format code upon saving.

## Features

<details>
<summary>Files</summary>

### Commands to Create Files

| Title                             | Purpose                                              |
| --------------------------------- | ---------------------------------------------------- |
| Next: Generate Class or Interface | Creates a new, generic class or interface definition |
| Next: Generate Component          | Creates a new, generic component                     |
| Next: Generate Layout             | Creates a new, generic layout                        |
| Next: Generate Loading            | Creates a new, generic loading component             |
| Next: Generate Page               | Creates a new, generic page                          |

</details>

<details>
<summary>Commands</summary>

### Terminal Commands

| Title                       | Purpose                                                                      |
| --------------------------- | ---------------------------------------------------------------------------- |
| Next: Create Project        | Creates a new project using the Vite / NextJS / T3 Stack CLI                 |
| Next: Prisma DB Execute     | Execute native commands to your database                                     |
| Next: Prisma DB Pull        | Pull the state from the database to the Prisma schema using introspection    |
| Next: Prisma DB Push        | Push the state from your Prisma schema to your database                      |
| Next: Prisma DB Seed        | Seed your database                                                           |
| Next: Prisma Format         | Format a Prisma schema                                                       |
| Next: Prisma Generate       | Generate artifacts                                                           |
| Next: Prisma Init           | Set up a new Prisma project                                                  |
| Next: Prisma Migrate Deploy | Apply pending migrations to update the database schema in production/staging |
| Next: Prisma Migrate Dev    | Create a migration from changes in Prisma schema                             |
| Next: Prisma Migrate Reset  | Reset your database and apply all migrations, all data will be lost          |
| Next: Prisma Migrate Status | Check the status of your database migrations                                 |
| Next: Prisma Studio         | Browse your data with Prisma Studio                                          |
| Next: Prisma Validate       | Validate a Prisma schema                                                     |
| Next: Start Server          | Builds and serves your application, rebuilding on file changes               |

</details>

<details>
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
| html_details              | \<details>...\</details>                                         |
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
| js_json_parse", "JSON.parse           |
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

#### React

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

#### Next

| Title      | Purpose                                        |
| ---------- | ---------------------------------------------- |
| next_image | \<Image src="..." alt="" width={} height={} /> |
| next_link  | \<Link href="...">\</Link>                     |
| next_page  | export default function Page() {}              |

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
| prisma_orderBy               | orderBy: { ...: ... }                            |
| prisma_where                 | where: { ...: ... }                              |
| prisma_skip_take             | skip: ..., take: ...                             |
| prisma_include               | include: { ...: ... }                            |
| prisma_select                | select: { ...: ... }                             |
| prisma_transaction           | prisma.$transaction([ ... ])                     |
| prisma_queryRaw              | prisma.$queryRaw(...)                            |
| prisma_executeRaw            | prisma.$executeRaw(...)                          |
| prisma_use                   | prisma.$use(...)                                 |
| prisma_on                    | prisma.$on(...)                                  |
| prisma_disconnect            | prisma.$disconnect()                             |
| prisma_connect               | prisma.$connect()                                |
| prisma_queryRawUnsafe        | prisma.$queryRawUnsafe(...)                      |
| prisma_executeRawUnsafe      | prisma.$executeRawUnsafe(...)                    |

</details>

## Connect with me

[![GitHub followers](https://img.shields.io/github/followers/ManuelGil?style=for-the-badge&logo=github)](https://github.com/ManuelGil)
[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/imgildev?style=for-the-badge&logo=x)](https://twitter.com/imgildev)

## Other Extensions

- [NestJS File Generator for VSCode](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator)
- [NestJS Snippets for VSCode Editor](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension)
- [Angular File Generator for VSCode Editor](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator)
- [React / NextJS / T3 Stack File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
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

Next File Generator for VSCode is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.
