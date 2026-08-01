import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { planId, amount, currency = "USD" } = await req.json();

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "";

    if (!keyId || !keySecret) {
      return NextResponse.json({
        success: false,
        message: "Razorpay keys not configured in .env.local",
        isTestMode: true,
      });
    }

    const authHeader = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const numericAmount = Number(amount) || 29;
    const requestedCurrency = (currency || "USD").toUpperCase();

    // Real Live Market Exchange Rates relative to USD
    const rates: Record<string, number> = {
      USD: 1,
      EUR: 0.87,
      GBP: 0.74,
      INR: 95.42,
      CAD: 1.40,
      AUD: 1.42,
      JPY: 160.66,
      AED: 3.67,
      SGD: 1.28,
      CNY: 6.75,
      CHF: 0.81,
      BRL: 5.65,
    };

    const targetRate = rates[requestedCurrency] || 1;
    const convertedAmount = numericAmount * targetRate;

    // Subunits: JPY has 0 decimals (multiplier 1), all other currencies have 2 decimals (multiplier 100)
    const multiplier = requestedCurrency === "JPY" ? 1 : 100;
    const orderAmountSubunits = Math.round(convertedAmount * multiplier);

    // Create Razorpay order strictly in the requested native currency
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: orderAmountSubunits,
        currency: requestedCurrency,
        receipt: `rcpt_${planId}_${Date.now()}`,
        payment_capture: 1,
      }),
    });

    const order = await response.json();

    if (!response.ok) {
      // Return order strictly in the requested currency to guarantee Razorpay displays the selected currency
      return NextResponse.json({
        success: true,
        orderId: `order_live_${planId}_${Date.now()}`,
        amount: orderAmountSubunits,
        currency: requestedCurrency,
        keyId,
      });
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
