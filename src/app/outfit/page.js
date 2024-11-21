import Inner from "@/app/components/Inner";
import ProbarCheckout from "../components/Ticket/ProbarCheckout";
import OutfitCheckout from "@/app/components/Probar/OutfitCheckout";
import style from "./Outfit.modules.css";


const Outfit = () => {
  return (
    <section >
      <Inner>
        <div className='grid grid-cols-12'>
          <div className="col-span-12 lg:col-span-6">
            <OutfitCheckout />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ProbarCheckout/>
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Outfit;
