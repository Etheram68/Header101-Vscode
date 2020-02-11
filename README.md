<img
  src="https://raw.githubusercontent.com/AlexisVisco/vscode-101header/master/101.png"
  width=128>

# 101 Header for VSCode

This extension provides the 101 header integration in VS Code.

```bash
# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    test.bash                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: frfrey <frfrey@student.le-101.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2020/02/11 15:13:55 by frfrey            #+#    #+#              #
#    Updated: 2020/02/11 15:13:56 by frfrey           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #
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

Default values for **header** is 101 you can modify in setting to 101header.version: 101 or 42

To override these values, specify these properties in *User Settings* :

```ts
{
  "101header.username": string,
  "101header.email": string,
  "101header.version": string
}
```


## Issues

To report a bug or ask for a feature, please open a [Github issue](https://github.com/Etheram68/Header101-Vscode/issues).


## Release Notes

### 0.2.3
You can choose your header version in Setting extension Version

### 0.2.2
Add new skin for header 42

### 0.2.1
Prepare Add new Header for 42 Add new message

### 0.1.3 / 0.1.4
Add language html, modify header for php

### 0.1.2
Add support for ASM language

### 0.1.1
Add support for language C#

### 0.1.0
Initial release of Header VsCode

## License

MIT

**It's a fork from this repo https://github.com/kube/vscode-42header, real author is kube)**
