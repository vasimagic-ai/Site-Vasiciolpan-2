import React from "react";

interface CheckoutButtonProps {
  productId: string;
  productName: string;
  price: number;
}

export default function CheckoutButton({
  productId,
  productName,
  price,
}: CheckoutButtonProps) {
  const handleClick = async () => {
    // TODO: Implement Stripe Checkout session
    // 1. Call your backend endpoint: POST /api/create-checkout-session
    //    with { productId, productName, price }
    // 2. Backend creates a Stripe Checkout Session and returns { url }
    // 3. Redirect: window.location.href = url
    //
    // Example backend call:
    // const res = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ productId, productName, price }),
    // });
    // const { url } = await res.json();
    // window.location.href = url;

    console.log(`[CheckoutButton] Checkout for: ${productId} — ${productName} — ${price} RON`);
    alert("Redirecționare către plată... (în curând)");
  };

  return (
    <button className="btn-primary" onClick={handleClick} style={{ width: "100%" }}>
      Cumpără acum — {price} RON
    </button>
  );
}
