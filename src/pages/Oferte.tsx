import React from "react";
import { Link } from "react-router-dom";
import {
  heartMappingDatingTrack,
  heartMappingRelatiiTrack,
  individualSessions,
  type Track,
  type Product,
} from "../data/products";
import CheckoutButton from "../components/CheckoutButton";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <h3 className="product-card-name">{product.name}</h3>
        {product.subtitle && (
          <p className="product-card-subtitle">{product.subtitle}</p>
        )}
      </div>

      <div className="product-card-price">
        <span className="product-card-amount">{product.price}</span>
        <span className="product-card-currency">{product.currency}</span>
        {product.originalPrice && (
          <span className="product-card-original">
            {product.originalPrice} {product.currency}
          </span>
        )}
      </div>

      {product.outcomes && product.outcomes.length > 0 && (
        <div className="product-card-outcomes">
          <p className="product-card-outcomes-title">Ce obții</p>
          <ul className="product-card-outcome-list">
            {product.outcomes.map((outcome) => (
              <li key={outcome} className="product-card-outcome">
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(product.duration || product.sessions || product.groupSize || product.format) && (
        <div className="product-card-meta">
          {product.duration && (
            <span className="product-meta-tag">⏱ {product.duration}</span>
          )}
          {product.sessions && (
            <span className="product-meta-tag">📅 {product.sessions}</span>
          )}
          {product.groupSize && (
            <span className="product-meta-tag">👥 {product.groupSize}</span>
          )}
          {product.format && (
            <span className="product-meta-tag">💻 {product.format}</span>
          )}
        </div>
      )}

      <div className="product-card-cta">
        <CheckoutButton
          productId={product.id}
          productName={product.name}
          price={product.price}
        />
        <div style={{ marginTop: "0.5rem" }}>
          <Link
            to={`/contact?program=${product.id}`}
            className="btn-outline"
            style={{ display: "block", textAlign: "center", fontSize: "0.88rem" }}
          >
            Contactează-mă pentru detalii
          </Link>
        </div>
      </div>
    </div>
  );
}

function TrackSection({ track }: { track: Track }) {
  return (
    <section className="oferte-track">
      <div className="oferte-track-header">
        <h2 className="oferte-track-name">{track.name}</h2>
        <p className="oferte-track-desc">{track.description}</p>
      </div>
      <div className="oferte-products-grid">
        {track.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function SessionCard({ session }: { session: Product }) {
  return (
    <div className="session-card">
      <h3 className="session-card-name">{session.name}</h3>
      <div>
        <p className="session-card-price">
          {session.price} <span style={{ fontSize: "0.9rem" }}>{session.currency}</span>
        </p>
        {session.pricePerSession && (
          <p className="session-card-price-per">
            {session.pricePerSession} RON / sesiune
          </p>
        )}
        {session.duration && (
          <p className="session-card-duration">⏱ {session.duration}</p>
        )}
      </div>
      <div className="session-card-cta">
        <CheckoutButton
          productId={session.id}
          productName={session.name}
          price={session.price}
        />
      </div>
    </div>
  );
}

export default function Oferte() {
  const tracks = [heartMappingDatingTrack, heartMappingRelatiiTrack];

  return (
    <main className="oferte-page">
      <div className="oferte-hero">
        <h1 className="oferte-hero-title">Oferte & Programe</h1>
        <p className="oferte-hero-subtitle">
          Alege programul potrivit pentru tine — sesiuni individuale, pachete de
          coaching sau programe HeartMapping™ de grup.
        </p>
      </div>

      {tracks.map((track) => (
        <TrackSection key={track.id} track={track} />
      ))}

      <section className="individual-sessions">
        <h2 className="individual-sessions-title">Sesiuni Individuale</h2>
        <p className="individual-sessions-desc">
          Coaching, hipnoză și tehnici avansate pentru transformare personală.
        </p>
        <div className="sessions-grid">
          {individualSessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </section>
    </main>
  );
}
