# Projeto Conexão

Projeto Conexão é um projeto em React feito com o intuito de auxiliar pessoas trans a terem acesso a atendimento de saúde mental.

## Descrição

Projeto Conexão pretende criar um banco de dados com profissionais de saúde mental voluntariamente se inscrevendo, e possibilitar a busca destes por pessoas trans. Conhecendo os dados de suicídio de pessoas trans, que superam 40%, e também sabendo das dificuldades que pessoas trans enfrentam para trabalhar, é possível deduzir que a maior parte das pessoas trans são pobres (e negras - é importante frisar, por conhecer o componente racial desta opressão), que não tem acesso a atendimentos por profissionais de saúde mental e acessam a internet pelo celular, método mais acessível.

O Projeto foi feito em React.js, pois foi parte do aprendizado do "Todas em Tech" na área de front-end.

## Desafios

Escolher a programação mobile first por conta do alto uso de celulares sobre PCs permitiu encarar as dificuldades de visualização de uma página funcionando em medidas reduzidas se comparadas ao PC, método de uso que prefiro.

Será necessário buscar toda a legislação em relação ao compartilhamento de dados, já que é algo corretamente restrito pelo governo brasileiro. Para além de legislação, o compartilhamento de dados também se mostrou complexo sem antes a construção de um banco de dados relacionado, sem o qual qualquer busca se torna fútil.

Particularmente busquei usar uma library de menu hamburger (parece a melhor forma de acessar múltiplas áreas no ambiente mobile). Como foi meu primeiro contato, encontrei problemas especialmente para fazer o deploy no Netlify ou Vercel, já que o menu não se comunicava com o BrowserRouter. Esses problemas foram sanados.

Conforme exige o escopo atual do projeto, fui atrás de uma API para consumir e mostrar como futuramente será feito com o banco de dados de profissionais de saúde mental. A busca por uma API acabou se mostrando um pouco complicada, terminando por usar random-data-api.com.

## Colaboração

- Uso o API https://random-data-api.com 
- Uso as libraries : 	react-burger-menu
						react-router-dom
						Axios
- Ferramenta de construção:	Vite

Além disso, participou: Mariana Pires Freitas

Impossível deixar de mencionar todas as professoras do bootcamp e nossa facilitadora Micaela Carvalho, sem as quais não chegaria até aqui. E, evidente, todas as amigas da turma On20 cujo apoio mútuo foi essencial.

Caso tenha o interesse de colaborar com o projeto, principalmente busco solucionar os desafios futuros relacionados a legislação sobre compartilhamento de dados e construção de um banco de dados para absorver as inscrições de profissionais de saúde mental.

## Status do projeto

A princípio, por falta de conhecimento, o projeto não manterá o mesmo ritmo. Mas pretendo continuar, ainda que aos poucos.
