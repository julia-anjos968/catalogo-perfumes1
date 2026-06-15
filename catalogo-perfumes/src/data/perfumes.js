import sauvage from '../assets/sauvage.png';
import chance from '../assets/chance.png';

const perfumes = [
    {
        id: 1,
        nome: 'Sauvage',
        marca: 'Dior',
        preco: 'R$ 699,90',
        categoria: 'Masculino',
        imagem: sauvage,

        descricao: 'Uma fragrância intensa e sofisticada inspirada nos grandes espaços abertos.',

        notas: 'Bergamota da Calábria, Pimenta Sichuan e Ambroxan',
    },

    {
        id: 2,
        nome: 'Chance',
        marca: 'Chanel',
        preco: 'R$ 749,90',
        categoria: 'Feminino',
        imagem: chance,

        descricao: 'Uma fragrância floral elegante e delicada.',

        notas: 'Jasmim, Rosa e Almíscar Branco',
    },

    {
        id: 3,
        nome: '212 VIP',
        marca: 'Carolina Herrera',
        preco: 'R$ 529,90',
        categoria: 'Masculino',

        imagem: '/212-vip.png',

        descricao: 'Inspirado na vida noturna e nos eventos mais exclusivos.',

        notas: 'Maracujá, Rum e Baunilha',
    },

    {
        id: 4,
        nome: 'La Vie Est Belle',
        marca: 'Lancôme',
        preco: 'R$ 649,90',
        categoria: 'Feminino',

        imagem: '/la-vie-est-belle.jpg',

        descricao: 'Uma fragrância doce e sofisticada que celebra a felicidade.',

        notas: 'Íris, Jasmim e Patchouli',
    },

    {
        id: 5,
        nome: 'Bleu de Chanel',
        marca: 'Chanel',
        preco: 'R$ 899,90',
        categoria: 'Masculino',

        imagem: '/bleu-de-chanel.jpg',

        descricao: 'Uma fragrância aromática amadeirada moderna.',

        notas: 'Limão, Gengibre, Cedro e Sândalo',
    },
];

export default perfumes;
