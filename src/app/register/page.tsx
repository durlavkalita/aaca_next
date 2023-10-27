import React from "react";
import PlayerRegistration from "@/components/forms/PlayerRegistration";

export default function Register() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="py-8">
          <PlayerRegistration></PlayerRegistration>
        </div>
      </div>
    </div>
  );
}
