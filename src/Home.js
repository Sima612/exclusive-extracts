import Header from "./NavBar";
import logo from "./images/SweetSolventless.png";

export default function Home() {
  return (
    <>
      <main className="container mx-auto w-3/4 h-full flex justify-evenly relative ...">
        <div className="w-full md:w-1/2 lg:w-1/2 -z-10 absolute top-36">
          <img className="rounded-full opacity-30" src={logo} alt="logo" />
        </div>
        <div className="w-full md:w-3/4 lg:w-3/4">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-3xl mt-10 text-cyan-500">
            Welcome to Sweet Solventless informational website!
          </h1>
          <div className="w-full p-6 mx-auto mt-5 text-md md:text-xl lg:text-xl">
            <p>
              This page is solely to inform people on the info regarding each
              strain we release. 7 days leading up to the future drop, each day
              new strains will be added. After one month on the website the
              previous strain selections will disappear allowing space for the
              new ones. This page does not and will not have anything for sale.
              For viewing purposes only, if any additional questions please feel
              free to reach out via Instagram!
            </p>
            <p className="pt-5">Stay Sweet!</p>
          </div>
        </div>
      </main>
    </>
  );
}
