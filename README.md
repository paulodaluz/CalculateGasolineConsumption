# Calculate Gasoline Consumption

Aplicativo acadêmico de Tópicos de Programação Mobile que recebe distância percorrida e litros consumidos, calcula a média em km/l e apresenta uma classificação de consumo em uma segunda tela.

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

## 📋 Table of contents

- [✨ Features](#features)
- [🧪 Technologies](#technologies)
- [🛠️ Environment setup](#environment-setup)
- [🚀 Getting started](#getting-started)
- [🗂️ Project structure](#project-structure)
- [✅ Testing and quality](#testing-and-quality)
- [🔎 Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

<a id="features"></a>

## ✨ Features

- Entrada de quilômetros percorridos e litros consumidos.
- Média calculada por `quilômetros / litros`, formatada com duas casas decimais.
- Navegação para o resultado e retorno ao formulário.

Classificação **implementada** em `src/pages/InputPage.js`:

| Faixa de média em km/l | Classe |
| --- | --- |
| Maior que 12 | A |
| Maior que 10 e até 12 | B |
| Maior que 8 e até 10 | C |
| Maior que 4 e até 8 | D |
| Menor que 4 | E |
| Exatamente 4 | Sem classe, devido a uma lacuna no código |

O formulário verifica apenas se os valores foram preenchidos. Validação de números positivos e tratamento de divisão por zero permanecem pendentes.

<a id="technologies"></a>

## 🧪 Technologies

| Tecnologia | Versão declarada | Finalidade |
| --- | --- | --- |
| [Expo](https://docs.expo.dev/)  | ~37.0.3 | SDK mobile histórico |
| [React](https://react.dev/)  | ~16.9.0 | Componentes |
| [React Native](https://reactnative.dev/) | Arquivo `sdk-37.0.1.tar.gz` do fork Expo | Runtime nativo; não significa React Native 37.0.1 |
| [React Navigation](https://reactnavigation.org/) | ^5.1.5 | Navegação |

As versões/faixas vêm do `package.json`. Node.js não está fixado; a tentativa de reprodução usa Node.js 14.21.3 e npm 6.14.18.

<a id="environment-setup"></a>

## 🛠️ Environment setup

Requer Git, Node.js e npm. O projeto não fixa Node.js em `engines`, `.nvmrc` ou `.node-version`. **Node.js 14.21.3 com npm 6.14.18** foi escolhido para a reprodução da pilha histórica; não é uma versão declarada pelo repositório nem uma atualização de dependências.

```bash
nvm install 14.21.3
nvm use 14.21.3
git clone https://github.com/paulodaluz/CalculateGasolineConsumption.git
cd CalculateGasolineConsumption
npm install
```

Não há lockfile versionado: use `npm install`, não `npm ci`. Este guia adota npm, disponível com o Node.js, sem prometer uma resolução de dependências idêntica entre instalações. Não há Husky, hooks versionados ou script `prepare` para ativar.

O SDK Expo 37 antecede a CLI local dos SDKs atuais. O manifesto não declara `expo-cli`; o executável `expo` fornecido pelo SDK é um wrapper que chama `expo-cli`. É necessário um ambiente legado já preparado com essa CLI. Não presuma que o Expo Go atual abre esse SDK. Instalação global de CLI, SDKs de emulador e atualização do projeto não fazem parte desta entrega.

Não há banco, serviço externo, autenticação nem variáveis de ambiente necessárias ao cálculo. A execução requer um dispositivo ou emulador já configurado e um cliente compatível com o SDK histórico do Expo.

<a id="getting-started"></a>

## 🚀 Getting started

Em um ambiente que já disponha da CLI e do cliente compatíveis com Expo SDK 37:

```bash
npm start
```

O comando chama `expo start`. Os scripts `npm run android`, `npm run ios` e `npm run web` acrescentam, respectivamente, `--android`, `--ios` e `--web`. Android/iOS dependem do dispositivo ou emulador preparado; o script web não comprova compatibilidade das dependências nativas. A URL/porta do servidor de desenvolvimento é apresentada pela CLI, sem porta fixa declarada no projeto.

O script `npm run eject` altera a estrutura nativa; não é necessário para esta documentação e não foi executado.

Validação com Node.js 14.21.3/npm 6.14.18: a instalação de dependências foi concluída. `npm start` chegou ao wrapper `expo`, que informou `This command requires Expo CLI` e ofereceu instalar a CLI globalmente; a resposta foi `n`, respeitando o escopo autorizado. O comando encerrou com código 1. O app não foi iniciado, compilado ou verificado em dispositivo.

<a id="project-structure"></a>

## 🗂️ Project structure

| Caminho | Responsabilidade |
| --- | --- |
| `App.js` | Stack de navegação |
| `src/pages/InputPage.js` | Formulário, cálculo e classificação |
| `src/pages/ResultPage.js` | Resultado e retorno |
| `app.json`, `babel.config.js` | Configuração Expo e Babel |
| `assets/` | Ícone e tela inicial |

<a id="testing-and-quality"></a>

## ✅ Testing and quality

Não há scripts de testes automatizados, lint, formatação ou build de distribuição no manifesto. A instalação de dependências não equivale a compilar o app nem verificar seus fluxos. A execução em dispositivo, a compilação nativa e a captura de tela ficam para revisão posterior. As imagens foram omitidas nesta entrega mobile.

<a id="troubleshooting"></a>

## 🔎 Troubleshooting

- `This command requires Expo CLI`: o wrapper `expo` não encontra `expo-cli` e oferece instalá-lo globalmente. Responda `n` se essa instalação não fizer parte do ambiente autorizado. A CLI não está declarada no manifesto. O bloqueio exige uma decisão posterior sobre o ambiente/atualização; nenhum CLI global foi instalado.
- Sem lockfile, as faixas podem resolver dependências transitivas incompatíveis com o SDK antigo.
- A média exata de `4` km/l não recebe classe; a condição E utiliza `< 4`.
- Zero, valores negativos e formatos numéricos não são validados de forma completa.
- O cálculo e a navegação ainda precisam de verificação funcional em dispositivo compatível.

<a id="contributing"></a>

## 🤝 Contributing

Crie uma branch a partir de `master`, mantenha as instruções compatíveis com os arquivos do projeto e descreva a alteração em um pull request. Execute as verificações aplicáveis descritas acima; registre limitações de serviços externos e ambiente. Não inclua credenciais, dados pessoais, `node_modules` ou arquivos gerados na entrega.

<a id="license"></a>

## 📜 License

Este projeto está sob a licença **MIT**. Consulte [LICENSE](LICENSE); os avisos existentes foram preservados.

---

<p align="center">Made with 💜 by <a href="https://github.com/paulodaluz">Paulo da Luz</a></p>
