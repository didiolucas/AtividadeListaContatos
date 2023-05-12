import { BsFillTrash3Fill } from "react-icons/bs";
import { IoAdd, IoPencil, IoSearchOutline } from "react-icons/io5";
import { CardContato } from "../Contato/CardContatos";
import { CardPerson } from "../User/CardPerson";
import style from "./Home.module.css";
export function Home() {
  return (
    <div className={style.container}>
      <CardPerson
        cover="https://i.pinimg.com/originals/32/28/88/32288803838c32fc7bdde988638fca76.png"
        avatar="https://avatars.githubusercontent.com/u/96553782?v=4"
        name="Lucas Smaniotto"
        office="Developer Aprendiz"
      />

      <div className={style.contatos}>
        <div className={style.controles}>
          <form>
            <div className={style.headerContatos}>
              <h1 className={style.title}>Lista de Contatos</h1>
              <div className={style.buttons}>
                <button className={style.buttomAdd}>
                  {" "}
                  <IoAdd />{" "}
                </button>
                <button className={style.buttomEdit}>
                  {" "}
                  <IoPencil />{" "}
                </button>
                <button className={style.buttomRemove}>
                  {" "}
                  <BsFillTrash3Fill />{" "}
                </button>
              </div>
            </div>

            <div className={style.pesquisa}>
              <button className={style.buttomPesquisa}>
                {" "}
                <IoSearchOutline />{" "}
              </button>
              <input
                type="text"
                name="pesquisa"
                className={style.inputPesquisa}
              />
            </div>
          </form>
        </div>

        <div className={style.listaContatos}>
          <div className={style.listaCatalogo}>
            <h1 className={style.letraCatalogo}>A</h1>
            <div className={style.contatoCatalogo}>
              <CardContato
                avatar="https://media.licdn.com/dms/image/C4E03AQHMPKqKcTQ4Ow/profile-displayphoto-shrink_800_800/0/1568143812122?e=2147483647&v=beta&t=YvGa56pc-gZx9uhpIv2QnyHnc9tJdorZ96LQ2PwIqjo"
                name="Armelindo Costa"
                numero="(41) 9 5163-1076"
              />
              <CardContato
                avatar="https://pm1.narvii.com/6754/c42f2a66a6b0532b035f4038aacf2bb55693649dv2_hq.jpg"
                name="Anderson Aviário"
                numero="(62) 9 8051-1678"
              />
            </div>
          </div>

          <div className={style.listaCatalogo}>
            <h1 className={style.letraCatalogo}>J</h1>
            <div className={style.contatoCatalogo}>
              <CardContato
                avatar="https://i1.sndcdn.com/artworks-TyiS74JXtNSzvhci-SDskMg-t500x500.jpg"
                name="Juninho"
                numero="(75) 9 9512-8612"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
