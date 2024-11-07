import Button from "~/components/Button";
import Logo from "../../public/favicon.png";
import Makanan from "../assets/foodImage.png";
const login = () => {
  return (
    <div className="h-screen  container">
      <main className="w-full h-full  flex">
        <section className="w-1/2 relative  flex justify-center items-center">
          <div className="relative  w-full  mx-auto">
            <img
              src={Makanan}
              alt="Gulai Ayam"
              draggable='false'
              className="w-3/5 mx-auto object-cover relative z-10 rounded-lg"
            />

            <p className="absolute left-1/2 -translate-x-1/2 top-4  text-5xl font-extrabold text-primary">
            SOTO AYAM
            </p>
            <p className="absolute text-stroke left-1/2 -translate-x-1/2 top-4 z-20  text-5xl font-extrabold text-transparent ">
            SOTO AYAM
            </p>
            <p className="text-center max-w-md mx-auto -mt-10">Perpaduan bumbu seperti kunyit, serai, daun jeruk, lengkuas, dan cabai yang menghasilkan perpaduan rasa gurih dan pedas yang khas.</p>
          </div>
          
        </section>
        <section className="w-1/2 flex flex-col items-center space-y-8 justify-center">
          <div className="text-center">
            <img
              src={Logo}
              alt="logo"
              draggable="false"
              className="w-2/5 mx-auto"
            />
            <h1 className="text-4xl font-bold">Selamat Datang!</h1>
            <small>Masuk ke akun anda untuk melanjutkan</small>
          </div>
          <form className="w-full max-w-md space-y-4" action="">
            <div className="w-full flex flex-col ">
              <label htmlFor="" className="text-lg font-bold text-primary">
                Email
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-primary text-sm p-2 border-2 rounded-lg outline-none"
                placeholder="masukkan alamat email anda"
              />
            </div>
            <div className="w-full flex flex-col ">
              <label htmlFor="" className="text-lg font-bold text-primary">
                Password
              </label>
              <input
                type="password"
                name=""
                id=""
                className="border-primary text-sm p-2 border-2 rounded-lg outline-none"
                placeholder="masukkan password anda"
              />
            </div>
            <div className="flex justify-end">
              <p className="">lupa password?</p>
            </div>
            <Button type="submit" variant="default" width="w-full">
              Masuk
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default login;
