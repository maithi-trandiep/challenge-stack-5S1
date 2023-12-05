import UserReservationsCard from "../components/UserReservationsCard";
import UserInformations from "../components/UserInformations";
import { useState } from "react";

export default function ProfilUser() {
  const [selectedTab, setSelectedTab] = useState('rendez-vous');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="h-screen w-3/4">
      <div className="bg-gray-100 flex w-full justify-between">
        <div className="mt-10 mr-2 w-1/4 block p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Mon compte</h5>
          <ul className="list-none">
            <li
              className={`pt-2 ${selectedTab === 'rendez-vous' ? 'text-zinc-800 font-bold' : 'text-gray-800'}`}
              onClick={() => handleTabClick('rendez-vous')}
            >
              Mes rendez-vous
            </li>
            <li
              className={`pt-2 ${selectedTab === 'mon-compte' ? 'text-gray-800 font-bold' : 'text-gray-800'}`}
              onClick={() => handleTabClick('mon-compte')}
            >
              Mes informations
            </li>
          </ul>
          <hr className="mt-6 mb-6"></hr>
          <p className="font-normal text-red-500">Se déconnecter</p>
        </div>
        {selectedTab === "rendez-vous" && (
          <UserReservationsCard></UserReservationsCard>
        )}
        {selectedTab === "mon-compte" && (
          <UserInformations></UserInformations>
        )}
      </div>
    </div>
  );
}
