* Ultilizaremos o https://stitches.dev/ - pata as estilizações do projeto melhor para o next

* Ao usamos o stitches precisamos fazer um configuración para funcionar 
    - Pelo lado do back-end ele vai verificar dos o css que tem na pagina e manda já para o html.
    - A vantagem é que o servidor renderiza bem mais rapido do que o client
    - site Docs: https://stitches.dev/docs/server-side-rendering
    - O getCssTextlhe dará todo o CSS necessário para renderizá-lo no lado do servidor.

* Todas as imagens são otimizadas automaticamente pelo next para um carregamento rapido, isso quer dizer que 
se uma imagem tem 1800px e só vamos ultilizar e 450px, ele vai carregar um imagem de 450px
    - Para termo acesso a essa fetures, basta ultilizar o proprio Component do Next - "Image"
    - Para não destoscer a imagem e caber no container ```objectFit: 'cover',