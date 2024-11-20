import express from 'express';

const posts = [
        {
            id: 1,
            descricao: 'uma foto teste',
            imagem: 'https://placecats.com/millie/300/150',
        },
        {
            id: 2,
            descricao: 'Gato brincando com um novelo de lã',
            imagem: 'https://placekitten.com/400/200',
        },
        {
            id: 3,
            descricao: 'Um gatinho dormindo em uma caixa',
            imagem: 'https://placekitten.com/300/300',
        },
        {
            id: 4,
            descricao: 'Gato olhando pela janela',
            imagem: 'https://placekitten.com/200/300',
        },
        {
            id: 5,
            descricao: 'Gato curioso cheirando uma planta',
            imagem: 'https://placekitten.com/500/300',
        },
        {
            id: 6,
            descricao: 'Gato ronronando no colo',
            imagem: 'https://placekitten.com/400/400',
        },
        {
            id: 7,
            descricao: 'Gato se espreguiçando no sol',
            imagem: 'https://placecats.com/felix/300/200',
        },
    ];


const app = express();
app.use(express.json());

app.listen(3000, ()=> {
    console.log('servidor escutando...');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get('/posts/:id', (req, res) => {
    const index = buscarPostID(req.params.id);
    res.status(200).json(posts[index]);
});