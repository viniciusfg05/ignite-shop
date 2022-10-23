* Ultilizaremos o https://stitches.dev/ - pata as estilizações do projeto melhor para o next
* Ferramenta que deixa desfocado as Imagem enquanto elas não são carregadas: https://www.blur-hash.com/#/

* Ao usamos o stitches precisamos fazer um configuración para funcionar 
    - Pelo lado do back-end ele vai verificar dos o css que tem na pagina e manda já para o html.
    - A vantagem é que o servidor renderiza bem mais rapido do que o client
    - site Docs: https://stitches.dev/docs/server-side-rendering
    - O getCssTextlhe dará todo o CSS necessário para renderizá-lo no lado do servidor.

* Todas as imagens são otimizadas automaticamente pelo next para um carregamento rapido, isso quer dizer que 
    se uma imagem tem 1800px e só vamos ultilizar e 450px, ele vai carregar um imagem de 450px
        - Para termo acesso a essa fetures, basta ultilizar o proprio Component do Next - "Image"
        - Para não destoscer a imagem e caber no container ```objectFit: 'cover',
        - Para lista imagem no Next de fora - precisamos especificar no next-config, quais dominios ele deve fazer a otimização.
    ~~~ts
        const nextConfig = {
          images: {
            domains: [
              'files.stripe.com',
            ]
          },
        }
    ~~~

        
* Pré-Carregamento de links - 
    - O component Image do Next, por padrao pré carrega os links automaticamento, de um lado pode ser maravilhos para o usuario
        por outro, pode ser muito custoso para o backend
    - Para desativar basta passarmos a propriedade "prefetch={false}" para o ```<Image prefetch={false}/>


* Ferramenta para Sliders
    - https://keen-slider.io/
    - Refs - Fazer uma referencia de uma elemento na DOM


* Stripe
    - Stripe alguma informação retornada da api não retornam diretament, pois é vinculanda ao ID price de cada produto,
        dessa forma temos que EXPANDABLE
        url: https://stripe.com/docs/api/products/object

    - Devido ao default-price retorna diretamento um string, que seria o ID do price, pricisamos força a tipagem para Stripe.Price.
        E retonar o Price de ```price.unit_amount.
        ~~~ts
            const products = response.data.map(product => {
              const price = product.default_price as Stripe.Price

              return {
                price: price.unit_amount
              }

            })
        ~~~
