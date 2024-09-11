import ListaPostagens from "../../components/postagens/listapostagem/ListaPostagem";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

interface HomeProps {
    nome: string;
    formacao: string;
    instituicao: string;
}

function Home({ nome, formacao, instituicao }: HomeProps) {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Eu sou {nome}, desenvolvedora full-stack formada pela {formacao} e cursando 
                            análise e desenvolvimento de sistemas na instituição {instituicao}. Aqui você encontrará meus projetos, 
                            terá acesso a minhas redes para nos conectarmos e poderá entrar em contato comigo!
                        </p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="/home/img.png"
                            alt="uma foto da autora do portfólio com uma blusa branca, cabelos pretos compridos sorrindo."
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    );
}

export default Home;
