# 💻 Software Developer Portfolio

### Java & Android Specialist | Computer Science Student @ UniFAJ

Este repositório contém o código-fonte do meu portfólio profissional, focado em demonstrar competências em engenharia de software, arquitetura de sistemas e integração com hardware. O projeto utiliza uma estética **Cold Tech** para apresentar soluções de alto desempenho e otimização técnica.

## 🛠️ Tecnologias & Ferramentas
* **Linguagens:** Java, C++, SQL.
* **Mobile:** Android Studio & SDK Nativo.
* **Ambiente:** Docker, WSL & Linux para workflows de alta performance.
* **Arquitetura:** Modelagem UML e padrões de design CRUD.

## 🚀 Projetos em Destaque

### [Self-Recyclable Trash Can](https://edsonxavierojr.github.io/projects/self-recyclable-trashcan/)
Uma solução de automação embarcada que utiliza o sensor de cor **TCS230** e **Arduino** para triagem automática de resíduos.
* **Destaque Técnico:** Implementação de lógica de baixa latência e substituição de visão computacional por análise de frequência de luz.
* **Metodologia:** Desenvolvimento de rampa inclinada assistida por gravidade e mapeamento de valores RGB para separação de materiais.

## 📁 Estrutura do Repositório
A organização segue um padrão de **Assets Globais vs. Locais** para garantir escalabilidade e manutenção eficiente.

```text
.
├── assets/             # Recursos globais (CSS compartilhado, imagens do site)
├── projects/           # Estudos de caso individuais
│   └── self-recyclable-trashcan/
│       ├── img/        # Mídia específica do projeto
│       └── index.html  # Case study detalhado
├── index.html          # Landing page principal do portfólio
├── .gitignore          # Filtro de arquivos de IDE e SO
└── .gitattributes      # Normalização de finais de linha (LF/CRLF)
