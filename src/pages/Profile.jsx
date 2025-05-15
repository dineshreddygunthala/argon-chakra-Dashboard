// src/pages/Profile.jsx
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import PlatformSettingsCard from "../components/PlatformSettingsCard";
import ProfileInfoCard from "../components/ProfileInfoCard";
import ConversationsCard from "../components/ConversationsCard";
import ProjectsSection from "../components/ProjectsSection";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-2 py-3">
      {/* Header */}
      <div className="mb-3">
        <ProfileHeader />
      </div>

      {/* Settings + Info + Conversations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
        <div className="lg:col-span-1">
          <PlatformSettingsCard />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
          <ProfileInfoCard />
          <ConversationsCard />
        </div>
      </div>

      {/* Projects */}
      <div className="mt-3">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Profile;
