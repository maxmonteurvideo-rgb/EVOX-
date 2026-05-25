"use client";

import { useState } from "react";
import Image from "next/image";
import "./TrustBanner.css";

const clients = [
  {
    name: "ORA 1929",
    role: "Artisan · France",
    image: "/images/clients/pp_ora.png",
    useInitialsFallback: false,
  },
  {
    name: "Ruiz Nutrition",
    role: "Nutritionniste · Coach sportif",
    image: "/images/clients/logo_ruiz.png",
    useInitialsFallback: false,
  },
  {
    name: "ManoBrazil",
    role: "Coach sportif",
    image: "/images/clients/logo_mano.png",
    useInitialsFallback: false,
  },
  {
    name: "CenciChassis",
    role: "Artisan · Belgique",
    image: "/images/clients/pp_cenci.png",
    useInitialsFallback: false,
  },
  {
    name: "Manaelposing",
    role: "Formateur/coach posing",
    image: "/images/clients/logo_manael.png",
    useInitialsFallback: false,
  },
  {
    name: "Omiday",
    role: "Application mobile Française",
    image: "/images/clients/pp_omiday.png",
    useInitialsFallback: false,
  },
  {
    name: "Invest garage",
    role: "Agence immobilière",
    image: "/images/clients/pp_invest_garage.png",
    useInitialsFallback: false,
  },
  {
    name: "papainshape",
    role: "Coach perte de poids",
    image: "/images/clients/pp_papainshape.png",
    useInitialsFallback: false,
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TrustBannerItem({
  name,
  role,
  image,
  useInitialsFallback = true,
}: {
  name: string;
  role: string;
  image: string;
  useInitialsFallback?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="trust-banner-item">
      {imageError && useInitialsFallback ? (
        <div className="trust-banner-avatar-fallback">{getInitials(name)}</div>
      ) : (
        <div
          className="trust-banner-avatar"
          style={{ background: "#FFFFFF", overflow: "hidden" }}
        >
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <p className="trust-banner-name">{name}</p>
      <p className="trust-banner-role">{role}</p>
    </div>
  );
}

export default function TrustBanner() {
  return (
    <section className="trust-banner">
      <h2 className="trust-banner-title">Ils nous font confiance</h2>
      <div className="trust-banner-carousel">
        <div className="trust-banner-track">
          {[0, 1, 2].map((groupIndex) => (
            <div key={groupIndex} className="trust-banner-group">
              {clients.map((client) => (
                <TrustBannerItem
                  key={`${groupIndex}-${client.name}`}
                  name={client.name}
                  role={client.role}
                  image={client.image}
                  useInitialsFallback={
                    "useInitialsFallback" in client
                      ? client.useInitialsFallback
                      : true
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
