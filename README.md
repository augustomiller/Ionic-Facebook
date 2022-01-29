<div align="center">
  
# Aplicação Mobile 📱
  
  
Objetivo 🎯  &nbsp;&nbsp;Utilizando Ionic, Firebase, Firestono e Login com Facebook, será contruído um aplicativo de gerenciamento de lista de tarefas.
  
</div>
  
 <p align="center">
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Documentação">Documentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Estrutura-do-Proejeto">Estrutura do Proejeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Criando-o-projeto">Criando o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#License">License</a>
</p>

<p align="center">
  <a href="https://mit-license.org/">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=5965E0&labelColor=121214" alt="License">.
  </a>
</p>

<br>

<div align="center">

![appLogin](https://user-images.githubusercontent.com/990877/151666195-fd417bcd-48a9-44f8-9565-b700c6033746.png)

</div>
  
<p align="center">
  <a href="https://ionicframework.com/docs/cli">Ionic</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://ionicframework.com/docs">Doc's</a>&nbsp;&nbsp;&nbsp;
</p>

## Tecnologias

- [Ionic](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [NodeJS](https://nodejs.org/en/)
- [Bash](https://www.gnu.org/software/bash/)
- [Git](https://git-scm.com/)

## Documentação

- [Ionic Docs](https://ionicframework.com/docs)
- [Angular Docs](https://angular.io/docs)
- [NodeJS Docs](https://nodejs.org/en/docs/)
- [Git Docs](https://git-scm.com/)

## Pré requisitos

- NVM
- NodeJS
- Ionic CLI
- Cordova CLI
- VS Code

## Pré requisitos para o VS code

<div align="center">

![vsAngular](https://user-images.githubusercontent.com/990877/151666987-93cbd07b-27cc-4530-a790-e7605f859e67.png)
![vcIonicPreview](https://user-images.githubusercontent.com/990877/151667016-f8814992-5719-4d1f-b764-9eedb53ee80b.png)
![vsIonicSnip](https://user-images.githubusercontent.com/990877/151667022-ca3cf3ee-18c0-47b1-b8c9-b55a6978b887.png)
![vsFirebase](https://user-images.githubusercontent.com/990877/151667002-e9a42763-69a7-4226-93ae-0487cdae0be2.png)

 </div>
 
 ### VS Code settings.json
 ```script
{
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    "workbench.iconTheme": "material-icon-theme",
    "files.autoSave": "afterDelay",
    "editor.fontFamily": "JetBrains Mono ExtraLight",
    "editor.tabSize": 4,
    "editor.fontSize": 16,
    "editor.lineHeight": 24,
    "editor.fontLigatures": true,
    "window.zoomLevel": 1,
    "editor.rulers": [
        80,
        120
    ],
    "editor.suggestSelection": "first",
    "explorer.compactFolders": false,
    "explorer.confirmDelete": false,
    "breadcrumbs.enabled": true,
    "editor.parameterHints.enabled": true,
    "editor.formatOnSave": true,
    "explorer.confirmDragAndDrop": true,

    "editor.renderLineHighlight": "gutter",
    "editor.semanticHighlighting.enabled": false,
    "workbench.editor.labelFormat": "short",
    "extensions.ignoreRecommendations": true,
    "javascript.updateImportsOnFileMove.enabled": "never",
    "typescript.updateImportsOnFileMove.enabled": "never",

    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },

    "files.associations": {
        ".sequelizerc": "javascript",
        ".stylelintrc": "json",
        ".prettierrc": "json",
        "*.tsx": "typescriptreact"
    },

    "javascript.suggest.autoImports": true,
    "typescript.suggest.autoImports": true,
    "workbench.startupEditor": "none",

    "workbench.colorTheme": "Tokyo Night Storm",
    "editor.tokenColorCustomizations": {
        "[Tokyo Night]": {
            "textMateRules": [
                {
                    "scope": [
                        "comment",
                        "meta.var.expr storage.type",
                        "keyword.control.flow",
                        "keyword.control.return",
                        "meta.directive.vue punctuation.separator.key-value.html",
                        "meta.directive.vue entity.other.attribute-name.html",
                        "tag.decorator.js entity.name.tag.js",
                        "tag.decorator.js punctuation.definition.tag.js",
                        "storage.modifier"
                    ],
                    "settings": {
                        "fontStyle": ""
                    }
                }
            ]
        }
    },

    // Angular settings
    "editor.autoIndent": "full",
    "editor.codeLens": false,
    "editor.cursorBlinking": "solid",
    "editor.cursorSmoothCaretAnimation": true,
    "editor.cursorStyle": "line",
    "editor.formatOnPaste": true,
    "editor.formatOnType": false,
    "editor.letterSpacing": 0.5,
    "editor.minimap.enabled": false,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.tabCompletion": "on",
    "editor.wordWrap": "on",

    // File Angular Settings
    "files.autoSaveDelay": 1000,
    "files.hotExit": "onExit",
    "files.defaultLanguage": "",
    "files.trimTrailingWhitespace": true,
    "prettier.printWidth": 120,
    "prettier.bracketSpacing": true,
    "prettier.singleQuote": true,

    "branchwarnings.protectedBranches": [
        "master",
        "main",
        "prerelease",
        "releases/**"
    ],
}
```

## Criando o projeto

### Comando para listas o hellpers do Ionic
```script
ionic
```
### Comando para listas os comandos do Ionic
```script
ionic start -h
```
### Criando um projeto com o template em branco [blank | menu | tabs]
```script
ionic start NomeDoMeuProjeto blank
```
### Subindo o Ionic Serve
```script
ionic serve
```
## Estrutura do Proejeto

![EstruturaDoProjeto](https://user-images.githubusercontent.com/990877/151666526-b1e59f6a-ebee-4676-9b53-b1f70ed0a648.png)

##

## License

<div align="center">
  
<p>This project is licensed under the MIT License. See the
  <a href="https://mit-license.org/">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=5965E0&labelColor=121214" alt="License">
  </a> file for details.</p>
<p>Made with&nbsp;💙 &nbsp;by Maic Miller</p>
  
<div>

