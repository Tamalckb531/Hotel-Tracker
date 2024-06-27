import HotelCard from "@/components/HotelCard";
import Landing from "@/components/Landing";
import WebButton from "@/components/WebButton";

export default function Home() {
  return (
    <main className="w-full min-h-[86vh] flex flex-col items-center justify-center gap-5">
      <h1 className=" text-6xl bg-gradient-to-r from-[#616161] to-[#9bc5c3] text-transparent bg-clip-text">
        We Manage Your Vacation
      </h1>
      <p className="text-[18px] py-4 px-10 font-semibold text-gray-500 leading-relaxed md:leading-loose mt-4 text-center">
        Welcome to TravelOwl! Your ultimate travel companion, TravelOwl helps
        you discover breathtaking destinations, meticulously plan your
        adventures, and effortlessly share your journeys with friends and fellow
        travelers. Our intuitive platform keeps your travel memories alive with
        detailed itineraries, stunning photos, and personalized travel logs.
        Join our community of explorers, get inspired by incredible travel
        stories, and start your next adventure with confidence. With TravelOwl,
        every journey is an unforgettable experience. Let’s make your travel
        dreams a reality!
      </p>

      <div className="card-section flex items-center justify-evenly gap-5">
        <HotelCard
          title="Night Sky"
          description="Glass heaven with night sky"
          imgLink="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
          location="Bandarban"
        />
        <HotelCard
          title="Renaissance"
          description="Feel the power of sea"
          imgLink="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
          location="Cox's Bazar"
        />
        <HotelCard
          title="Appayon"
          description="We no different than family"
          imgLink="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=600"
          location="Rangamati"
        />
      </div>
      <WebButton />
    </main>
  );
}
