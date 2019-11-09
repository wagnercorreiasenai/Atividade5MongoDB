ATIVIDADE 5 – Aplicação Prática do MongoDB

Esta atividade consiste no desenvolvimento de um sistema computacional atendendo aos
requisitos funcionais já estabelecidos. Dentre os requisitos não funcionais o sistema deve
ser obrigatoriamente web-based, acessível via navegadores HTTP, e pode ser implementando
com a linguagem de programação de preferência. Entretanto, como repositório de dados,
deve-se obrigatoriamente adotar o banco de dados MongoDB.

Requisitos funcionais:

1. O sistema deverá registrar o conteúdo de blogs a serem publicados na internet.

2. Um Blog terá unicamente um usuário “proprietário”.

3. Um Blog pode conter uma descrição simples indicando sua finalidade.

4. Um blog pode conter “0-n” postagens (posts).

5. Uma postagem pode conter uma estrutura dinâmica, contendo minimamente o
título da postagem, o conteúdo, e a data e hora de publicação.

6. O conteúdo de uma postagem pode opcionalmente ser fracionado um “seções”,
devendo estas estar ordenadas, e conter um “subtítulo” e seu conteúdo.

7. O conteúdo de uma seção, também pode conter outras “subseções”.

8. O sistema deve suportar que um usuário anônimo crie uma nova conta.

9. O sistema deve suportar que o usuário anônimo, com conta criada, se autentique
(login e senha).

10. A criação de blogs só será possível por usuários autenticados.

11. Todos os blogs serão públicos (acessíveis a partir da tela inicial do sistema mesmo
por usuários não autenticados).

12. A tela inicial do sistema deve apresentar todos os Blogs existentes, em ordem
descendente pela data do último post.

13. Ao acessar um Blog deve ser relacionado todos os posts em ordem decrescente da
data de publicação.

14. O sistema deve apresentar todos os dados de um post, destacando, se houver, o
título de cada seção ou subseção.
