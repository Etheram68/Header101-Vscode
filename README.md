<img
  src="https://raw.githubusercontent.com/AlexisVisco/vscode-101header/master/101.png"
  width=128>

# 101 Header for VSCode

This extension provides the 101 header integration in VS Code.

```bash
* ************************************************************************** *
*                                                          LE - /            *
*                                                              /             *
*   get_next_line.c                                  .::    .:/ .      .::   *
*                                                 +:+:+   +:    +:  +:+:+    *
*   By: frfrey <frfrey@student.le-101.fr>      +:+   +:    +:    +:+         *
*                                                 #+#   #+    #+    #+#      *
*   Created: 2019/08/19 10:31:13 by frfrey     #+#   ##    ##    #+#         *
*   Updated: 2019/08/19 15:43:25 by frfrey    ###    #+. /#+    ###.fr       *
*                                                         /                  *
*                                                        /                   *
* ************************************************************************** *
```

## Install

Launch Quick Open with <kbd>⌘</kbd>+<kbd>P</kbd> and enter
```
ext install 101header
```


## Usage

### Insert a header
 - **macOS** : <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>H</kbd>
 - **Linux** / **Windows** : <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>H</kbd>.

Header is automatically updated on save.


## Configuration

Default values for **username** and **email** are imported from environment variables.

To override these values, specify these properties in *User Settings* :

```ts
{
  "101header.username": string,
  "101header.email": string
}
```


## Issues

To report a bug or ask for a feature, please open a [Github issue](https://github.com/Etheram68/Header101-Vscode/issues).


## License

MIT

**It's a fork from this repo https://github.com/kube/vscode-42header, real author is kube)**
