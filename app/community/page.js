import Image from "next/image";
import mealIcon from "@/app/assets/icons/meals.png";
import communityIcon from "@/app/assets/icons/community.png";
import eventsIcon from "@/app/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full px-6 py-10 z-30 text-center">
      <header className="text-center px-6 space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-800">
          One shared passion: <span className="text-primary">Food</span>
        </h1>
        <p className="text-lg text-gray-600">
          Join our community and share your favorite recipes!
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Community Perks
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <li className="flex flex-col items-center gap-4">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              width={64}
              height={64}
            />
            <p className="text-gray-700 font-medium">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              width={64}
              height={64}
            />
            <p className="text-gray-700 font-medium">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              width={64}
              height={64}
            />
            <p className="text-gray-700 font-medium">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </main>
  );
}
