'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('posts',[
      {
        titulo_post: "Novidades em Tecnologia",
        descricao_post: "Fique por dentro das últimas inovações em tecnologia.",
        anexo_post: "url_para_o_anexo_1.jpg",
        usuario_post_id:1,
        tag_id: 143,
        img_post: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F419538521552372521%2F&psig=AOvVaw2SC-DYTQK3tMeCrGaniaLH&ust=1710635707308000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPiL2NnE94QDFQAAAAAdAAAAABAE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo_post: "Dicas de Saúde",
        descricao_post: "Melhore sua saúde com dicas práticas.",
        anexo_post: "url_para_o_anexo_2.jpg",
        usuario_post_id:1,
        tag_id: 143,
        img_post: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F419538521552372521%2F&psig=AOvVaw2SC-DYTQK3tMeCrGaniaLH&ust=1710635707308000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPiL2NnE94QDFQAAAAAdAAAAABAE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo_post: "Como Economizar em Viagens",
        descricao_post: "Descubra maneiras de economizar em suas viagens.",
        anexo_post: "url_para_o_anexo_3.jpg",
        usuario_post_id:1,
        tag_id: 143,
        img_post: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F419538521552372521%2F&psig=AOvVaw2SC-DYTQK3tMeCrGaniaLH&ust=1710635707308000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPiL2NnE94QDFQAAAAAdAAAAABAE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo_post: "Os Benefícios da Leitura",
        descricao_post: "Conheça os benefícios da leitura para sua mente.",
        anexo_post: "url_para_o_anexo_4.jpg",
        usuario_post_id:1,
        tag_id: 143,
        img_post: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F419538521552372521%2F&psig=AOvVaw2SC-DYTQK3tMeCrGaniaLH&ust=1710635707308000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPiL2NnE94QDFQAAAAAdAAAAABAE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo_post: "Receitas Fáceis e Rápidas",
        descricao_post: "Confira receitas deliciosas e fáceis de fazer.",
        anexo_post: "url_para_o_anexo_5.jpg",
        usuario_post_id:1,
        tag_id: 143,
        img_post: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F419538521552372521%2F&psig=AOvVaw2SC-DYTQK3tMeCrGaniaLH&ust=1710635707308000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPiL2NnE94QDFQAAAAAdAAAAABAE',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('posts', null, {});
  }
};
