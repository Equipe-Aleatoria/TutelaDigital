# 🛡️ Tutela Digital

### Tecnologia para promover autonomia com segurança

O **Tutela Digital** é um protótipo de aplicação web desenvolvido para um hackathon, com o objetivo de demonstrar uma solução de acessibilidade e segurança em transações financeiras digitais.

A proposta é permitir que uma pessoa solicite autorização de um responsável antes de realizar uma transferência via PIX, promovendo maior autonomia, acompanhamento e proteção no ambiente digital.

🔗 **[Acessar o protótipo](https://tutela-digital.vercel.app/login.html)**

## 🎯 O problema

A digitalização dos serviços financeiros trouxe praticidade, mas também desafios de acessibilidade e segurança para pessoas que necessitam de apoio na utilização dessas ferramentas.

O Tutela Digital busca demonstrar como a tecnologia pode facilitar o acompanhamento de decisões financeiras, preservando a participação ativa do usuário.

## 💡 Nossa solução

A aplicação apresenta um fluxo simplificado de autorização de transferências PIX simuladas, envolvendo dois perfis:

- **Solicitante:** registra uma intenção de transferência, informando destinatário, chave PIX, valor e justificativa.
- **Tutor ou responsável:** recebe a solicitação e pode aprová-la ou rejeitá-la.

O resultado fica registrado no histórico do solicitante.

> **Importante:** o Tutela Digital é um protótipo demonstrativo. Não realiza transferências bancárias, não movimenta dinheiro e não possui integração com o sistema PIX.

## ⚙️ Funcionalidades implementadas

- Cadastro e autenticação de usuários por e-mail e senha.
- Criação de solicitações de PIX fictício.
- Associação entre solicitante e responsável por meio do banco de dados.
- Visualização de solicitações pendentes pelo responsável.
- Aprovação ou rejeição de solicitações.
- Consulta ao histórico e ao status dos pedidos.
- Persistência de dados em nuvem.
- Acesso à aplicação por navegador.

## 🔄 Como funciona

1. O solicitante acessa sua conta.
2. Preenche os dados de uma transferência simulada.
3. A solicitação é registrada com o status **Pendente**.
4. O responsável vinculado acessa sua área.
5. O responsável escolhe **Aprovar** ou **Rejeitar**.
6. O solicitante consulta a decisão no histórico.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e interface |
| JavaScript | Interatividade e lógica da aplicação |
| Supabase | Autenticação e banco de dados PostgreSQL |
| Git e GitHub | Versionamento e colaboração |
| Vercel | Hospedagem e publicação |

## 🚀 Demonstração

O protótipo está disponível em:

**https://tutela-digital.vercel.app/login.html**

Para demonstrar o fluxo completo, são utilizadas duas contas previamente cadastradas e vinculadas: uma de solicitante e outra de responsável.

O vínculo entre as contas é configurado manualmente no Supabase nesta versão do MVP.

## 🔐 Segurança e limitações

O projeto utiliza autenticação pelo Supabase e políticas de segurança no banco de dados para restringir o acesso às solicitações conforme o usuário autenticado.

Por se tratar de um MVP desenvolvido para demonstração, a aplicação ainda não foi preparada para uso financeiro real ou implantação em produção com usuários finais.

Nesta versão:

- Os vínculos são cadastrados manualmente no banco de dados.
- As transferências são exclusivamente simuladas.
- Não existe integração com instituições financeiras.
- Não há movimentação de valores.
- São necessários testes adicionais de segurança, acessibilidade e usabilidade antes de qualquer utilização real.

## 🔮 Próximas etapas

Como possibilidades de evolução do projeto, destacam-se:

- Cadastro e confirmação de vínculos diretamente pelo aplicativo.
- Notificações de novas solicitações.
- Melhorias de acessibilidade, incluindo navegação por teclado e compatibilidade com leitores de tela.
- Registro de auditoria das decisões.
- Testes com usuários para aprimoramento da experiência.
- Avaliação de integrações financeiras, considerando
