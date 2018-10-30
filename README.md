
<!-- TOC -->

- [Debug `spawn` child processes in node.js](#debug-spawn-child-processes-in-nodejs)
  - [1 With Command Line](#1-with-command-line)
    - [1.1 First start the program:](#11-first-start-the-program)
    - [1.2 Then open a new terminal and execute in the same directory:](#12-then-open-a-new-terminal-and-execute-in-the-same-directory)
  - [2 With VS Code](#2-with-vs-code)
    - [2.1 Open project in VS Code](#21-open-project-in-vs-code)
    - [2.2 Launch process with integrated VS Code terminal](#22-launch-process-with-integrated-vs-code-terminal)
    - [2.3 Attach to running node.js Process](#23-attach-to-running-nodejs-process)

<!-- /TOC -->

## Debug `spawn` child processes in node.js


### 1 With Command Line

#### 1.1 First start the program:

```bash
node index.js
```

That outputs that the debugger for the `child.js` file is listening on `127.0.0.1:9228`:  

```bash
stderr: Debugger listening on ws://127.0.0.1:9228/ee24da83-fa84-4dab-bc7f-287a47341b1d
For help see https://nodejs.org/en/docs/inspector
```

#### 1.2 Then open a new terminal and execute in the same directory:  

```bash
node inspect 127.0.0.1:9228
```

### 2 With VS Code

For this feature is at least VS Code version `v1.28.2` necessary

#### 2.1 Open project in VS Code

Go to directory `node-debug-childprocess` and write:  

```bash
code .
```

#### 2.2 Launch process with integrated VS Code terminal

Go to `Terminal` > `New Terminal`

Type in the terminal (it is important that the process is started from the __VS Code Terminal__):  

```bash
node index.js
```

#### 2.3 Attach to running node.js Process

Open the VS Code __QuickOpen__ menu with `ctrl+p`, then write a `>` and then `node` and then you already should see the existing node process on port __9228__. Click on it.
