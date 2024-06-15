Como rodar o projeto
Pré-requisitos
Antes de começar, certifique-se de ter o Git e o Node.js instalados em seu computador. Se você não os tiver, você pode baixá-los nos seguintes links:  
Git: https://git-scm.com/downloads
Node.js: https://nodejs.org/en/download/
Passo a passo
Clone o repositório  Abra um terminal e execute o seguinte comando para clonar o repositório:  <pre>git clone https://github.com/Pedrohsbessa/Atech.git </pre>  
Navegue até o diretório do projeto  Use o comando cd para navegar até o diretório do projeto:  <pre>cd endereço-local </pre>
Instale as dependências  Execute o seguinte comando para instalar todas as dependências necessárias para o projeto:  <pre>npm install </pre>
Inicie o servidor de desenvolvimento  Agora você pode iniciar o servidor de desenvolvimento com o seguinte comando:  <pre>npm start </pre> Isso iniciará o servidor de desenvolvimento e você poderá acessar o aplicativo em http://localhost:4200.  
Explicação do Projeto
Este projeto é uma aplicação web construída com Angular, que é um framework para construção de aplicações web de página única. A aplicação permite que os usuários gerenciem uma lista de usuários, com a capacidade de adicionar, atualizar e excluir usuários.  A interface do usuário é composta por uma lista de usuários, onde cada usuário é representado por um "card". Cada card contém o nome, o email e o número de telefone do usuário. Há também botões para editar ou excluir o usuário correspondente.  Quando você clica no botão de edição, um formulário é exibido com os detalhes atuais do usuário preenchidos. Você pode alterar esses detalhes e clicar em "Salvar" para atualizar os detalhes do usuário. Se você clicar no botão de exclusão, será solicitado que confirme a exclusão do usuário.  Há também um botão para adicionar um novo usuário. Quando você clica neste botão, um formulário em branco é exibido. Você pode preencher os detalhes do novo usuário e clicar em "Salvar" para adicionar o usuário à lista.  Todas as alterações que você faz são salvas no armazenamento local do navegador, então se você recarregar a página, suas alterações serão preservadas. O armazenamento local é uma forma de armazenamento na web que permite que os sites armazenem dados no navegador de um usuário. É útil para aplicações que precisam salvar informações entre sessões de usuário ou entre diferentes páginas da mesma aplicação.
# Informações Técnicas

Este projeto foi desenvolvido utilizando uma série de tecnologias e frameworks modernos para garantir uma aplicação robusta e escalável. Aqui estão alguns detalhes:

- **Linguagem de Programação**: O projeto é escrito em TypeScript, uma extensão tipada de JavaScript que adiciona tipos estáticos para tornar o código mais escalável e manutenível.

- **Framework Front-end**: O projeto utiliza Angular versão 18. Angular é um framework de desenvolvimento web poderoso e flexível que permite a construção de aplicações de página única (SPA).

- **Gerenciador de Pacotes**: NPM (Node Package Manager) é usado neste projeto para gerenciar pacotes de dependências.

- **Estilo**: Para estilização, este projeto utiliza CSS puro. Isso permite um controle completo sobre o estilo e a aparência da aplicação.

- **Armazenamento Local**: Este projeto utiliza o armazenamento local do navegador para persistir dados entre sessões. Isso permite que as alterações feitas pelos usuários sejam salvas e recuperadas mesmo após o navegador ser fechado e reaberto.

Por favor, consulte a documentação oficial de cada tecnologia e framework para obter mais informações e detalhes sobre como eles funcionam e como são usados neste projeto.
