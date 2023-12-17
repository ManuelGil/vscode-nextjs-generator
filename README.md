# React / NextJS / T3 Stack File Generator

[![Latest Release](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-nextjs-generator?style=flat&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-nextjs-generator)]()

This versatile extension enhances your NextJS development experience by offering a comprehensive set of commands tailored for file generation within your project. Seamlessly create various project elements, including pages, components, layouts, classes, interfaces, and more, all designed to align with the T3 Stack paradigm—leveraging NextJS, NextAuth, Prisma, tRPC, and other essential technologies.

![demo](https://raw.githubusercontent.com/ManuelGil/vscode-nextjs-generator/main/docs/images/demo.gif)

Elevate your productivity with this VSCode extension, empowering you to efficiently generate files for your T3 Stack project. Whether you're shaping individual components or initiating an entirely new project, the extension simplifies the process with intuitive commands. The extension also includes a command to start your NextJS server, allowing you to quickly preview your application.

## Table of Contents

- [React / NextJS / T3 Stack File Generator](#react--nextjs--t3-stack-file-generator)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Create a New Project](#create-a-new-project)
  - [Project Settings](#project-settings)
  - [Features](#features)
    - [Files](#files)
    - [Commands](#commands)
    - [Snippets](#snippets)
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

### Files

| Title                             | Purpose                                              |
| --------------------------------- | ---------------------------------------------------- |
| Next: Generate Class or Interface | Creates a new, generic class or interface definition |
| Next: Generate Component          | Creates a new, generic component                     |
| Next: Generate Layout             | Creates a new, generic layout                        |
| Next: Generate Loading            | Creates a new, generic loading component             |
| Next: Generate Page               | Creates a new, generic page                          |

### Commands

| Title                | Purpose                                                        |
| -------------------- | -------------------------------------------------------------- |
| Next: Create Project | Creates a new project using the Vite / NextJS / T3 Stack CLI   |
| Next: Start Server   | Builds and serves your application, rebuilding on file changes |

### Snippets

| Title                | Purpose                                                        |
| -------------------- | -------------------------------------------------------------- |
| html_address | address |
| html_article | article |
| html_aside | aside |
| html_audio | audio |
| html_base | base |
| html_blockquote | blockquote |
| html_button_reset | button-reset |
| html_button_submit | button-submit |
| html_button | button |
| html_div | div |
| html_dl_dt_dd | dl-dt-dd |
| html_embed | embed |
| html_figure | figure |
| html_footer | footer |
| html_form | form |
| html_h1 | h1 |
| html_h2 | h2 |
| html_h3 | h3 |
| html_h4 | h4 |
| html_h5 | h5 |
| html_h6 | h6 |
| html_header | header |
| html_hr | hr |
| html_iframe | iframe |
| html_img | img |
| html_input_button | input-button |
| html_input_checkbox | input-checkbox |
| html_input_color | input-color |
| html_input_date | input-date |
| html_input_datetime_local | input-datetime-local |
| html_input_datetime | input-datetime |
| html_input_email | input-email |
| html_input_file | input-file |
| html_input_hidden | input-hidden |
| html_input_image | input-image |
| html_input_month | input-month |
| html_input_number | input-number |
| html_input_password | input-password |
| html_input_radio | input-radio |
| html_input_range | input-range |
| html_input_reset | input-reset |
| html_input_search | input-search |
| html_input_submit | input-submit |
| html_input_tel | input-tel |
| html_input_text | input-text |
| html_input_time | input-time |
| html_input_url | input-url |
| html_input_week | input-week |
| html_input | input |
| html_label | label |
| html_legend | legend |
| html_main | main |
| html_nav | nav |
| html_ol_li | ol-li |
| html_optgroup | optgroup |
| html_option | option |
| html_output | output |
| html_picture | picture |
| html_section | section |
| html_select | select |
| html_source | source |
| html_style | style |
| html_summary | summary |
| html_svg | svg |
| html_table | table |
| html_tbody | tbody |
| html_td | td |
| html_textarea | textarea |
| html_tfoot | tfoot |
| html_th | th |
| html_thead | thead |
| html_title | title |
| html_tr_td | tr-td |
| html_ul_li | ul-li |
| html_video | video |
| html_dd | dd |
| html_dt | dt |
| html_figcaption | figcaption |
| html_li | li |
| html_p | p |
| html_pre | pre |
| html_abbr | abbr |
| html_cite | cite |
| html_code | code |
| html_mark | mark |
| html_small | small |
| html_span | span |
| html_strong | strong |
| html_time | time |
| html_track | track |
| html_del | del |
| html_ins | ins |
| html_caption | caption |
| html_table_colgroup | table-colgroup |
| html_datalist | datalist |
| html_fieldset | fieldset |
| html_legend | legend |
| html_progress | progress |
| html_select_optgroup | select-optgroup |
| html_details | details |
| html_summary | summary |
| react_import_react | import React |
| react_import_react_dom | import ReactDOM |
| react_import_provider | import Provider |
| react_import_styled | import styled |
| react_use_state | useState |
| react_use_effect | useEffect |
| react_use_context | useContext |
| react_use_reducer | useReducer |
| react_use_callback | useCallback |
| react_use_memo | useMemo |
| react_use_ref | useRef |
| react_use_imperativeHandle | useImperativeHandle |
| react_use_layoutEffect | useLayoutEffect |
| react_use_debugValue | useDebugValue |
| react_use_deferredValue | useDeferredValue |
| react_use_transition | useTransition |
| react_use_id | useId |
| react_use_syncExternalStore | useSyncExternalStore |
| react_use_insertionEffect | useInsertionEffect |

## Connect with me

<a href="https://github.com/ManuelGil" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="imgildev" height="30" width="40" /></a>
<a href="https://twitter.com/imgildev" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="imgildev" height="30" width="40" /></a>
<a href="https://linkedin.com/in/imgildev" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="imgildev" height="30" width="40" /></a>
<a href="https://www.youtube.com/c/imgildev" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="imgildev" height="30" width="40" /></a>

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
