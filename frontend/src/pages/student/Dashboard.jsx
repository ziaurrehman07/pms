import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="flex w-full flex-col h-screen ">
        <Navbar />
        <h1 className="ml-8 mt-8 text-blue-500 font-semibold text-xl ">
          User Dashboard
        </h1>
        <div className=" ml-4 mt-4 h-[600px] bg-white mb-4 w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
          <div className="p-8">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              est, voluptatum, voluptates minus sint mollitia corporis
              blanditiis totam qui officia quos corrupti? Molestiae nemo rerum,
              omnis corporis voluptate asperiores natus recusandae reiciendis
              eveniet, similique repellendus nisi delectus neque? Enim quod fuga
              recusandae, temporibus optio exercitationem inventore eos atque
              veritatis reprehenderit voluptatem itaque culpa beatae, nemo
              voluptas eius veniam eaque delectus error quibusdam repellendus.
              Eius, reprehenderit suscipit. Qui obcaecati ipsum unde consectetur
              accusamus nemo totam, accusantium, esse optio quae iure iste ipsam
              maiores reprehenderit minus fugit dicta placeat? Similique,
              voluptatum laudantium voluptatibus vel mollitia quod at sint
              adipisci, iure sed consectetur esse obcaecati placeat repudiandae
              aliquid. Veritatis similique nostrum ut molestiae maiores ab nam
              aliquid provident labore! Excepturi aspernatur, quo harum atque
              beatae earum delectus dolorum quos quaerat praesentium magni,
              libero cupiditate maiores voluptas nobis aperiam facere? Dolorem
              necessitatibus, explicabo eos beatae quod magni voluptatem
              deserunt eum hic. Quis minus quas enim laboriosam obcaecati,
              repellat impedit ratione, rerum natus harum laborum eveniet sit
              aliquid quisquam. Blanditiis expedita optio soluta modi totam
              inventore obcaecati hic corporis saepe ab quod eius minima
              tempora, repudiandae a asperiores repellendus iure dolorum
              reprehenderit numquam provident voluptatum placeat. Labore fugit
              voluptatem asperiores corrupti laborum. Ipsam quidem quasi cumque
              quia suscipit officia magni officiis incidunt facere excepturi,
              est doloremque, molestiae libero ipsa totam perferendis. Quas
              dolore maiores ratione fugiat corrupti, nulla quia voluptas
              numquam iste repudiandae quae vitae tempora laborum amet tempore
              magnam molestiae eius praesentium! Illo molestias explicabo iure
              nihil reiciendis iusto nostrum! Atque et iusto libero, ipsum saepe
              suscipit distinctio consequuntur unde reiciendis ad debitis modi
              voluptas dignissimos optio ipsam odio voluptatem ex facilis,
              adipisci tempore quia doloribus eaque corrupti exercitationem!
              Laboriosam minus explicabo rerum suscipit temporibus voluptatibus
              iure, ratione libero magni cum laudantium nostrum cupiditate
              aliquid repudiandae? Eum optio, amet maiores mollitia voluptatem
              ducimus illo modi accusamus necessitatibus et fugiat voluptatibus
              atque fugit ut? Quisquam libero esse fuga aperiam ab sint aut
              minus assumenda, labore deleniti necessitatibus accusantium omnis
              nobis enim fugit totam explicabo, animi sunt vel eius! Quas fugiat
              voluptatem exercitationem officiis perspiciatis, ab delectus
              aliquid, rem eveniet velit optio? Odit iste labore reprehenderit
              commodi ratione architecto nemo quia. Fugit et nostrum atque
              consequatur dicta ratione? Nemo architecto quibusdam ut tenetur
              animi. Iure odit tempora temporibus debitis quia adipisci
              excepturi eius, vel nam iusto dolorem commodi, nostrum delectus
              illum distinctio consequatur quo animi reiciendis veritatis qui
              est ab accusantium? Explicabo et consequatur quam. Alias at
              perspiciatis maxime repellendus aperiam accusantium dignissimos
              autem earum ex vitae iure, tempora porro similique tenetur
              distinctio, omnis minima mollitia, officia neque laudantium
              numquam. Deserunt quam iste repellendus magnam, ipsum illo
              obcaecati doloremque libero magni repellat eius dolorum, deleniti,
              dolore omnis optio officia illum suscipit beatae quasi nesciunt
              exercitationem porro consequatur aut voluptas. Ducimus, eos
              repudiandae tempora delectus sunt, harum aspernatur nostrum
              accusamus neque nesciunt voluptatibus ab aperiam nulla omnis
              blanditiis maxime reiciendis numquam, eveniet saepe iste.
              Necessitatibus aliquid, adipisci vero pariatur odio maxime iste
              repellendus inventore deserunt quis fuga consequuntur doloribus
              labore nobis possimus molestias ut. Nobis, voluptate voluptas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
